import express from "express";

const globalRouter = express.Router();

globalRouter.route("/").get(home);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(home).post(postLogin);

export default globalRouter;
