const { Router } = require('express');
const Post = require('../db/models/postModel');

module.exports = function () {
    const app = Router();

    app.get('/', async (req, res) => {
        const posts = await Post.find( {} );
        console.log (posts);
        res.render('index', {
            posts
        });


    })
    app.get('/post', function (req, res) {
        res.render('show')

        
    })

    return app;

    
}