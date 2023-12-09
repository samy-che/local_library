const Book = require("../models/book");
const Author = require("../models/author");
const { body, validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [numBooks, numAuthors] = await Promise.all([
    Book.countDocuments({}).exec(),
    Author.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Local Library Home",
    book_count: numBooks,
    author_count: numAuthors,
  });
});

exports.book_list = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  res.render("book_list", { title: "Book List", book_list: allBooks });
});

exports.book_detail = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id).populate("author").exec();

  if (book === null) {
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  res.render("book_detail", {
    title: book.title,
    book: book,
  });
});

exports.book_create_get = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();

  res.render("book_form", {
    title: "Create Book",
    authors: allAuthors,
  });
});

exports.book_create_post = [
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
    });

    if (!errors.isEmpty()) {
      const allAuthors = await Promise.all([
        Author.find().sort({ family_name: 1 }).exec(),
      ]);

      res.render("book_form", {
        title: "Create Book",
        authors: allAuthors,
        book: book,
        errors: errors.array(),
      });
    } else {
      await book.save();
      res.redirect(book.url);
    }
  }),
];

exports.book_delete_get = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id).populate("author").exec();

  if (book === null) {
    res.redirect("/catalog/books");
  }

  res.render("book_delete", {
    title: "Delete Book",
    book: book,
  });
});

exports.book_delete_post = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id).populate("author").exec();

  if (book === null) {
    res.redirect("/catalog/books");
  }
  await Book.findByIdAndDelete(req.body.id);
  res.redirect("/catalog/books");
});

exports.book_update_get = asyncHandler(async (req, res, next) => {
  const [book, allAuthors] = await Promise.all([
    Book.findById(req.params.id).populate("author").exec(),
    Author.find().sort({ family_name: 1 }).exec(),
  ]);

  if (book === null) {
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  res.render("book_form", {
    title: "Update Book",
    authors: allAuthors,
    book: book,
  });
});

exports.book_update_post = [
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      const allAuthors = await Promise.all([
        Author.find().sort({ family_name: 1 }).exec(),
      ]);

      res.render("book_form", {
        title: "Update Book",
        authors: allAuthors,
        book: book,
        errors: errors.array(),
      });
      return;
    } else {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, book, {});

      res.redirect(updatedBook.url);
    }
  }),
];
