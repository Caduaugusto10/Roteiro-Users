const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/posts", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);
router.post("/posts", postController.addPost);
router.delete("/posts/:id", postController.deletePost);
router.put("/posts/:id", postController.updatePost);

module.exports = router;