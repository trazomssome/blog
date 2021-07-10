import express from "express";

const PORT = "4000";

const app = express();

app.get("/", () => (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
