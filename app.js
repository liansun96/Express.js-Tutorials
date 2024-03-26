const express = require("express");
const app = express();
const { products } = require("./data");

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1><a href='./data'>Products</a>");
// });

app.get("/data", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/data/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(404).send("Page Not Found");
  }
  return res.json(singleProduct);
});

app.get("/api/v1/product/:productId/reviews/:reviewId", (req, res) => {
  res.send("Hello Testing");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedPorducts = [...products];

  if (search) {
    sortedPorducts = sortedPorducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedPorducts = sortedPorducts.slice(0, Number(limit));
  }

  if (sortedPorducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedPorducts);
});

app.listen(5000, () => {
  console.log("user hit the server");
});
