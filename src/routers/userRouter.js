import express from "express";

const userRouter = express.Router();

userRouter.route("/user").get(getJoin).post(postJoin);
userRouter.

export default userRouter;
