const lodash = require('lodash');


const dummy = (blogs) => {
    return 1 ;
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum , blog) => sum + blog.likes, 0);
}

const favoriteBlog = (blogs) => {
    const max = blogs.reduce((acc, curr) => {
    return curr.likes > acc.likes ? curr : acc;
   });
    return {
        title: max.title,
        author: max.author,
        likes: max.likes
    };
}

const mostBlogs = (blogs) =>{
    // النتيجة: { "Dijkstra": [blog1, blog2], "Uncle Bob": [blog3] }
    const authorBlogs = lodash.groupBy(blogs , 'author');


    // now shold count the blogs for each author
    const authorBlogCounts = lodash.mapValues(authorBlogs, (blogs) => blogs.length);
    //result { "Dijkstra": 3, "Robert": 1 }

    const largCount = lodash.map(authorBlogCounts , (count , author)=>{
        return {
            author: author,
            blogs : count
        }
    })

    // find the author with the most blogs
    const maxAuthor = lodash.maxBy(largCount , 'blogs');
    return maxAuthor;
}


const mostLikes = (blogs) => {
    // filter the blogs by author
    const authorBlogs = lodash.groupBy(blogs , 'author');

    // count the total likes for each author
    const authorLikeCounts = lodash.mapValues(authorBlogs,(blogArray) => {
        return lodash.sumBy(blogArray, 'likes');
    } );

    // convert the authorLikeCounts object into an array of objects with author and likes properties
    const largLikes = lodash.map(authorLikeCounts , (count , author)=>{
        return {
            author: author,
            likes : count
        }
    })

    //find the author with the most likes
    return lodash.maxBy(largLikes , 'likes');
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}

