/** Responsible: Arkadi
 *
 * Task 1:
 * Create a JSON file that contains at least 10 objects that describe different posts. Pay special
 * attention to the literals (create time, author name, etc.) that you’ll include in your objects.
 * (1 point)
 *
 * Answer: See "posts.json"
 */

/** Responsible: Raya
 *
 * Task 2: Try to find an online free website for validating the correctness of the JSON file you have
 * just created, and use it to validate the JSON objects. (1 point)
 *
 * Answer: https://jsoneditoronline.org/
 */

/** Responsible: Marko
 *
 * Task 3: Try to find an online free website (endpoint) that allows you to store your JSON file online
 * (endpoint). Many websites can host your JSON file and provide you with a Uniform Resource
 * Identifier (URI), which you can use to retrieve such information relying on Fetch API. (1
 * point)
 *
 * Answer: https://www.npoint.io/
 */

/** Responsible: Raya
 * Task 4: Write a code that can retrieve/fetch the posts information from the endpoint (URI) you
 * created at task 3, and use such information to dynamically create the webpage shown in
 * Figure 1. (2 points)
 */

/** Responsible: Arkadi
 *
 * Task 5: Integrate the JSON file into your project, and modify the Fetch code to retrieve/fetch the
 * JSON objects information from it. (1 point)
 * Note: do not delete the code related to fetching the data from the online source (task 4),
 * just comment it out.
 *
 * Answer: Logic stayed the same, just replaced the url
 */

/** Responsible: Arkadi
 * Task 6: You know that you can store only “text” in JSON files, try to find a solution for any photo
 * that your posts include. (1 point)
 *
 * Answer: There is an array that holds the image file names
 */

window.onload = function () {
  //fetch("https://api.npoint.io/d75698a8a2ad6d0939a9")
  fetch("../posts.json")
    .then((response) => response.json())
    .then((posts) => {
      // Create a variable for the unordered list that stores all posts
      let articlesList = document.querySelector(".articles");

      for (let i = 0; i < posts.length; i++) {
        // Create a list element containing all components of a post
        let postList = document.createElement("li");

        // Create an article element for each post with the corresponding article id
        let postArticle = document.createElement("article");
        postArticle.id = posts[i].articleId;

        // Create a header element for each post
        let postHeader = document.createElement("header");

        // Create the component elements of the header
        // User image
        let headerUserImg = document.createElement("img");
        headerUserImg.src = posts[i].headerUserImg;
        headerUserImg.className = "pfp";
        //Date
        let headerDate = document.createElement("p");
        headerDate.innerText = posts[i].headerDate;

        // Append the header components (image and date) to the post header
        postHeader.append(headerUserImg, headerDate);
        // Append the header to the post article element
        postArticle.appendChild(postHeader);

        // Create the components of the post body
        // Post Image
        for (let j = 0; j < posts[i].photo_urls.length; j++) {
          let postImg = document.createElement("img");
          postImg.src = posts[i].photo_urls[j];
          postArticle.appendChild(postImg);
        }

        // Text of the post
        for (let j = 0; j < posts[i].content.length; j++) {
          let postText = document.createElement("p");
          postText.innerText = posts[i].content[j];
          postArticle.appendChild(postText);
        }

        // Like button
        let postLike = document.createElement("img");
        postLike.src = "../images/like.png";
        postLike.className = "like";

        // Append the post body elements to the post article element
        postArticle.appendChild(postLike);

        // Append the post article element to the post list element
        postList.appendChild(postArticle);
        // // Append the post article element to the articles list element
        // allArticles.append(postArticle)

        // Append the post list element to the html file
        articlesList.appendChild(postList);
      }
    });
};
