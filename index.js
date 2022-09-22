const express = require("express");
const cors = require('cors');
const swaggerUi = require('swagger-ui-express'),swaggerDocument = require('./swagger.json');

const books = require("./books");
const app = express();
const port = 9000;

app.use(cors({
  origin: '*'
}));

app.get("/", (req, res) => {
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
        currentPage: pagina,
        totalElements: books.length,
        totalPages: totalPages,
        content: booksFilter,
      });
    }
  } catch (err) {
    res.status(500);
  }
});

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
