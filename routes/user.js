const express = require('express');

const usercontroller = require('../controller/user');
const router = express.Router();

router
  .post("/", usercontroller.createUser)
  .get("/", usercontroller.getAllUser)
  .get("/:id", usercontroller.getUser)
  .put("/:id", usercontroller.replaceUser)
  .patch("/:id", usercontroller.updateUser)
  .delete("/:id", usercontroller.deleteUser);

exports.router = router;