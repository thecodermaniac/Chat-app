const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserChat" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "latestMessage",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "UserChat" },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;