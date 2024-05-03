const path= require('path');
function getPost(req, res) {
    console.log('들어옴')
    // res.send('<div><h1>Post Title</h1><p>This is a post</p></div>')
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'forest.jpg'))
    res.render('posts',{
        termplateName:"post"
    })
}

module.exports= {
    getPost
}