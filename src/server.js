import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import articleRouter from "./routers/articleRouter";

const PORT = "4000";

const app = express();
const logger = morgan("dev");

app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/articles", articleRouter);

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
