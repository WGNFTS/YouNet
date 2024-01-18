// videoModel.js - Modelo MongoDB para vídeos

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    title: String,
    channelName: String,
    views: Number,
    timeAgo: String,
    channelImage: String,
    url: String,
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
