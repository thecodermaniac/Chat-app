const express = require("express");
const {
  accessChat,
  fetchChat,
  createGroupChat
} = require("../controllers/chatsControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route('/').post(protect,accessChat)
router.route('/').get(protect,fetchChat)
router.route('/grpchat').post(protect,createGroupChat)

module.exports = router;