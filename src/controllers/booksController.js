const books = require("../dados");

exports.get = (req, res) => {
  try {

    const pagina = +req.query.page || 1;
    const limite = +req.query.limit || 50;

    const totalPages = Math.ceil(books.length / limite);

    if (pagina <= totalPages) {

      const booksFilter = books.slice(
        pagina * limite - limite,
        pagina * limite
      );

      res.status(200).json({
        currentPage: 0,
        totalElements: books.length,
        totalPages: totalPages,
        content: booksFilter,
      });
    }
  } catch (err) {
    res.status(500);
  }
};

exports.getById = (req, res) => {
  books;
  res.status(200).json();
};

exports.post = (req, res, next) => {
  res.status(201).send("Requisição recebida com sucesso!");
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
