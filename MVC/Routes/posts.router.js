const express= require('express');
const postsRouter= express.Router();
// controller server.js에서 가져오기
const postsController= require('../Controllers/posts.controller');
// 포스트 컨트롤러에서 가져오기
postsRouter.get('/', postsController.getPost);

module.exports= postsRouter;
