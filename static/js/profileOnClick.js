/** Responsible: Marko
 * Task 7: Extend the webpage by creating a dropdown menu that shows a user name, email, and
 * logout (Figure 2 and Figure 3). This list opens and then closes by clicking on the personal
 * photo. (2 points)
 */

var userProfile = document.getElementsByClassName("userpfp")[0];
var dropDownContent = document.createElement("div");

var userNameText = document.createTextNode("John Doe");
var userEmailText = document.createTextNode("john.doe@ut.ee");
var logoutText = document.createTextNode("logout");

var userName = document.createElement("p");
var userEmail = document.createElement("p");
var logout = document.createElement("p");

userName.appendChild(userNameText);
userEmail.appendChild(userEmailText);
logout.appendChild(logoutText);

dropDownContent.appendChild(userName);
dropDownContent.appendChild(userEmail);
dropDownContent.appendChild(logout);
dropDownContent.style.cssText =
  "background-color: lightgray;" +
  "display: none;" +
  "flex-direction:column;" +
  "gap: 5px;" +
  "position:absolute;" +
  "right:0;" +
  "margin: 21vh 0.5vw 0 0;" +
  "font-size: 20px;" +
  "width: 200px;" +
  "border-radius: 5px;" +
  "padding: 15px";
document.getElementById("mainHeader").appendChild(dropDownContent);

console.log(userProfile);

document.addEventListener("click", (evt) => {
  let targetEl = evt.target;
  if (targetEl === userProfile) {
    if (dropDownContent.style.display == "flex")
      dropDownContent.style.display = "none";
    else dropDownContent.style.display = "flex";
  } else dropDownContent.style.display = "none";
});
