import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("you can delete");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("you can delete all account");
});

//update user
router.put("/:id", verifyUser, updateUser);
//delete user
router.delete("/:id", verifyUser, deleteUser);
//get user
router.get("/:id", verifyUser, getUser);
//get users
router.get("/", verifyAdmin, getUsers);
export default router;
