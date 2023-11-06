/*
Task 2: Try to find an online free website for validating the correctness of the JSON file you have
just created, and use it to validate the JSON objects. (1 point)

My proposition: https://jsoneditoronline.org/
*/

/* ------------------------------------------------------------------------------------------------ */

window.onload = function () {
    //fetch('URI')
    fetch('/res/posts.json')
        .then((response) => response.json())
        .then((posts) => {

            console.log(posts)

            // Create a variable for the unordered list that stores all posts
            let articlesList = document.querySelector(".articles");


            for (let i = 0; i < posts.length; i++) {
                // Create a list element containing all components of a post
                let postList = document.createElement("li")

                // Create an article element for each post with the corresponding article id
                let postArticle = document.createElement("article")
                postArticle.id = posts[i].articleId

                // Create a header element for each post
                let postHeader = document.createElement("header")

                // Create the component elements of the header
                // User image
                let headerUserImg = document.createElement("img")
                headerUserImg.src = posts[i].headerUserImg
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
                for (let j = 0; j < posts[i].photo_urls.length; j++){
                    let postImg = document.createElement("img")
                    postImg.src = posts[i].photo_urls[j]
                    postArticle.appendChild(postImg)
                }

                // Text of the post
                for (let j = 0; j < posts[i].content.length; j++){
                    let postText = document.createElement("p")
                    postText.innerText = posts[i].content[j]
                    postArticle.appendChild(postText)
                }

                // Like button
                let postLike = document.createElement("img")
                postLike.src = "../images/like.png"
                postLike.className = "like"

                // Append the post body elements to the post article element
                postArticle.appendChild(postLike)

                // Append the post article element to the post list element
                postList.appendChild(postArticle)
                // // Append the post article element to the articles list element
                // allArticles.append(postArticle)

                // Append the post list element to the html file
                articlesList.appendChild(postList)
            }
        });

}

