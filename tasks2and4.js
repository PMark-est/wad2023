/*
Task 2: Try to find an online free website for validating the correctness of the JSON file you have
just created, and use it to validate the JSON objects. (1 point)

My proposition: https://jsoneditoronline.org/
*/

/* ------------------------------------------------------------------------------------------------ */

/*
Task 4: Write a code that can retrieve/fetch the posts information from the endpoint (URI) you
created at task 3, and use such information to dynamically create the webpage shown in
Figure 1. (2 points)
*/

//fetch('URI')
fetch('res/posts.json')
.then((response) => response.json())
.then((posts) => {

    // Create a parent div to store all posts
    let allArticles = document.createElement("ul")

    for (let i = 0; i < posts.length; i++) {
        // Create a list element containing all elements of a post
        let postList = document.createElement("li")

        // Create an article element for each post with the corresponding id
        let postArticle = document.createElement("article")
        postArticle.id = posts[i].articleId

        // Create the a header element for each post
        let postHeader = document.createElement("header")

        // Create the component elements of the header
        // User image
        let headerUserImg = document.createElement("img")
        headerUserImg.innerText = posts[i].headerUserImg
        headerUserImg.className = "pfp"
        //Date
        let headerDate = document.createElement("p")
        headerDate.innerText = posts[i].headerDate

        // Append the header components (image and date) to the post header
        postHeader.append(headerUserImg, headerDate)
        // Append the header to the post article element
        postArticle.appendChild(postHeader)


        // Create the components of the post body
        // Post Image
        let postImg = document.createElement("img")
        postImg.innerHTML = posts[i].postImg
        postImg.id = posts[i].postImgId
        // Text of the post
        let postText = document.createElement("p")
        postText.innerText = posts[i].text
        // Like button
        let postLike = document.createElement("img")
        postLike.innerText = posts[i].likeImg
        postLike.className = "like"

        // Append the post body elements to the post article element
        postArticle.append(postImg, postText, postLike)
        // Append the post article element to the post list element
        postList.append(postArticle)
        // Append the post article element to the articles list element
        allArticles.append(postArticle)
    }

    // Append the article list element containing all posts to the body of the html document
    document.body.appendChild(allArticles)

});
