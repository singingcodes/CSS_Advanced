// JS Exercises
// EX11) Write a function to add a new link into the navbar
// EX12) Write a function to change the color of the main title
// EX13) Write a function to change the background of the jumbotron
// EX14) Write a function to remove all the links under "Elsewhere"
// EX15) Write a function to change the column size for heading in jumbotron
// EX16) Write a function to remove the "Search" magnifying glass icon
// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

function addLinkToNav() {
  let navNode = document.querySelector("nav");
  let navLink = document.createElement("a");
  navLink.innerText = "Food";
  navNode.appendChild(navLink);
}
addLinkToNav();

function changeMainTitleColor() {
  let titleNode = document.querySelector("h1");
  titleNode.style.color = "Pink";
}
changeMainTitleColor();

function changeBgColor() {
  let jumbotronNode = document.querySelector(".jumbotron");
  jumbotronNode.classList.add("changeBg");
}
changeBgColor();

function removeList() {
  let listNode = document.getElementsByClassName("list-unstyled")[1];
  listNode.classList.add("hidden");
}
removeList();
