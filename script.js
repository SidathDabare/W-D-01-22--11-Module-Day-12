/* EXERCISE 1
       Write a function for changing the title of the document in 
       something else.
      */

const changeTitle = function (newTitle) {
  document.querySelector(".myHeading").innerText = newTitle;
  return newTitle;
};
changeTitle("Something Else");

/* EXERCISE 2
       Write a function for changing the class of the title of the 
       page in "myHeading".
      */

const addClassToTitle = function () {
  let oldClass = document.querySelector(".myHeading");
  oldClass.classList.remove("myHeading");
  oldClass.classList.add("newClass");
};
addClassToTitle();

/* EXERCISE 3
       Write a function for changing the text of only the p which 
       are children of a div.
      */

const changePcontent = function (text) {
  let pTags = document.querySelectorAll("p");
  for (let i = 0; i < pTags.length; i++) {
    pTags[i].innerText = text;
    console.log(pTags);
  }
};
changePcontent("this is new P tags");
/* EXERCISE 4
       Write a function for changing the href property of every 
       link to https://www.google.com
      */

const changeUrls = function () {
  let newLink = document.querySelectorAll("a");
  for (let i = 0; i < newLink.length; i++) {
    newLink[i].href = "https://www.google.com";
  }
  console.log(newLink);
};
changeUrls();

/* EXERCISE 5
       Write a function for adding a new list item in the second 
       unordered list.
      */

const addToTheSecond = function (content) {
  let liNode = document.createElement("li");
  let olNode = document.querySelector("#secondList ");
  olNode.appendChild(liNode, olNode.lastElementChild).innerText = content;
  return content;
};
addToTheSecond("New item of the ordered list");
/* EXERCISE 6
       Write a function for adding a second paragraph to the first 
       div.
      */

const addParagraph = function (content) {
  let newParagrph = document.createElement("p");
  let firstDiv = document.getElementsByTagName("div");
  for (let i = 0; i < firstDiv.length; i++) {
    firstDiv[0].appendChild(newParagrph).innerHTML = content;
  }
};
addParagraph(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,"
);

/* EXERCISE 7
       Write a function for making the first unordered list 
       disappear.
      */

const firstUlDisappear = function () {
  let olList = document.getElementsByTagName("ul");
  for (let i = 0; i < olList.length; i++) {
    olList[0].classList.add("hidden");
  }
};
//firstUlDisappear();

/* EXERCISE 8
       Write a function for making the background of every unordered
        list green.
      */

const paintItGreen = function () {
  let olList = document.getElementsByTagName("ul");
  for (let i = 0; i < olList.length; i++) {
    olList[i].classList.add("background-green");
  }
};
paintItGreen();
/* EXERCISE 9
       Make the heading of the page change color every time the user 
       clicks on it.
      */

const makeItClickable = function (heading) {
  let colorRandom =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  heading = document.getElementsByTagName("h1");

  for (let i = 0; i < heading.length; i++) {
    heading[i].style.color = `${colorRandom}`;
  }
};
//console.log(makeItClickable());
/* EXERCISE 10
       Change the footer text with something else when the user clicks 
       on it.
      */

const changeFooterText = function () {
  //
};

/* EXERCISE 11
       Attach an event listener to the input field in the page for
        console logging its value just after any keystroke.
      */

const inputField = document.getElementById("input-field");
// ...

/* EXERCISE 12
       Create a welcome alert message when the page successfully 
       loads.
      */

window.onload = function () {
  //
};

/* EXERCISE 13
       Use HTML5 tags to properly provide semantic meaning to the 
       different portions of the page.
      */
