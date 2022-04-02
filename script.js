// creating the biocard on click //////////////////////////////////

const bioCard = document.getElementById("card1");
bioCard.onclick = function displayBioCard() {
  //   bioCard.style.backgroundImage = "none";
  bioCard.style.color = "white";
  bioCard.style.fontSize = "30px";
  bioCard.textContent =
    "I am an aspiring coder. On this page, you will see some examples of my work, my resume, and contact info. I am also part of the leadership for the Colorado chapter of the Foundation Fighting Blindness.";
  bioCard.setAttribute("data-state", "clicked");
  bioCard.style.textAlign = "center";
  var section = document.createElement("hr");
  bioCard.appendChild(section);

  var para = document.createElement("p");
  var node = document.createTextNode(
    "If you are looking to connect with the Foundation, please see my contact section."
  );
  para.appendChild(node);
  bioCard.appendChild(para);
};

/// creating the portfolio card on click///

const projectCard = document.getElementById("card2");
const createProjectBreak = document.createElement("hr");

projectCard.onclick = function displayProjectCard() {
  projectCard.textContent = "";
  var projectCardEl = document.createElement("card");
  projectCardEl.setAttribute("id", "projectCardEl");

  projectCardEl.setAttribute("class", "card-header");
  var projectText = document.getElementById("projectCardEl");
  projectCardEl.textContent = "Projects";

  projectCard.appendChild(projectCardEl);

  var projectCardApiEl = document.createElement("card");
  projectCardApiEl.setAttribute("id", "projectCardApiEl");
  projectCardApiEl.setAttribute("class", "card col-10");
  projectCardApiEl.textContent = "";
  projectCardApiEl.style.backgroundColor = "white";
  projectCardApiEl.style.display = "flex";
  projectCardApiEl.style.flexDirection = "column"
  projectCardApiEl.style.justifyContent = "space-around"
  projectCard.appendChild(projectCardApiEl);
  

  var createProjectButton = document.createElement("button");
  projectCardApiEl.appendChild(createProjectButton);
  createProjectButton.textContent = "BellyBuster: the App";
  createProjectButton.setAttribute(
    "class",
    "btn btn-secondary btn-lg btn-light"
  );
  createProjectButton.setAttribute("id", "projectButton");
  createProjectButton.setAttribute("style", "margin-top: 20px");
  createProjectButton.setAttribute("style", "background-image: url('bellybusterthumb.png')", "background-size: auto");
  createProjectButton.style.fontWeight = "bold";




  var createProjectButton2 = document.createElement("button");
  projectCardApiEl.appendChild(createProjectButton2);
  createProjectButton2.textContent = "ChartMD";
  createProjectButton2.setAttribute(
    "class",
    "btn btn-secondary btn-lg btn-light"
  );
  createProjectButton2.setAttribute("id", "projectButton2");
  createProjectButton2.setAttribute("style", "margin-top: 20px");
  createProjectButton2.setAttribute("style", "background-image: url('bellybusterthumb.png')", "background-size: auto");
  createProjectButton2.style.fontWeight = "bold";
  // createProjectButton.setAttribute("style", "background-size: cover");
  
  var createProjectButtonLinks = document.createElement("div");
  createProjectButtonLinks.textContent = "GitHub Url: " + "https://github.com/humesandrew/Belly-Buster";
              createProjectButtonLinks.setAttribute("style", "font-size: 10px");


  createProjectButton.appendChild(createProjectBreak).appendChild(createProjectButtonLinks);
  var clickProjectButton = document.getElementById("projectButton");
  clickProjectButton.onclick = function () {
    window.open("https://humesandrew.github.io/Belly-Buster/");
  };



};

///creating the contact card on click////////

const contactCard = document.getElementById("card3");
const contacts = ["Email", "Resume", "LinkedIn"];

contactCard.onclick = function displayContactCard() {
  contactCard.textContent = "";
  var createList = document.createElement("ul");
  for (var i = 0; i < contacts.length; i++) {
    var createListItem = document.createElement("button");
    createListItem.textContent = contacts[i];
    createListItem.setAttribute("class", "btn btn-secondary btn-lg btn-light");
    contactCard.appendChild(createListItem);
    contactCard.style.justifyContent = "space-around";
    createListItem.setAttribute("id", contacts[i]);
  }

  var clickEmail = document.getElementById("Email");
  clickEmail.onclick = function () {
    window.location.href = "mailto:humes.andrew@gmail.com";
  };

  var clickResume = document.getElementById("Resume");
  clickResume.onclick = function () {
    window.open("Andy_Humes_Resume.pdf");
  };

  var clickLinkedIn = document.getElementById("LinkedIn");
  clickLinkedIn.onclick = function () {
    window.open("https://www.linkedin.com/in/andrew-humes-72075559/");
  };
};
