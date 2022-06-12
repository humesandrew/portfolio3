// creating the biocard on click //////////////////////////////////

// const bioCard = document.getElementById("card1");
// bioCard.onclick = function displayBioCard() {
//   //   bioCard.style.backgroundImage = "none";
//   bioCard.style.color = "white";
//   bioCard.style.fontSize = "30px";
//   bioCard.textContent =
//     "I am an aspiring coder. On this page, you will see some examples of my work, my resume, and contact info. I am also part of the leadership for the Colorado chapter of the Foundation Fighting Blindness.";
//   bioCard.setAttribute("data-state", "clicked");
//   bioCard.style.textAlign = "center";
//   var section = document.createElement("hr");
//   bioCard.appendChild(section);

//   var para = document.createElement("p");
//   var node = document.createTextNode(
//     "If you are looking to connect with the Foundation, please see my contact section."
//   );
//   para.appendChild(node);
//   bioCard.appendChild(para);
// };

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

  projectCardEl.setAttribute("style", "margin: auto");

  projectCard.appendChild(projectCardEl);

  var projectCardApiEl = document.createElement("card");
  projectCardApiEl.setAttribute("id", "projectCardApiEl");
  projectCardApiEl.setAttribute("class", "card col-10");
  projectCardApiEl.setAttribute("style", "width: 100%");
  

  projectCardApiEl.textContent = "";

  projectCardApiEl.style.display = "flex";
  projectCardApiEl.style.flexDirection = "column"
  projectCardApiEl.style.justifyContent = "space-between"

  projectCard.appendChild(projectCardApiEl);


  var createProjectButton3 = document.createElement("button");
  projectCardApiEl.appendChild(createProjectButton3);
  createProjectButton3.textContent = "Java4Javascripters";
  createProjectButton3.setAttribute(
    "class",
    "btn btn-secondary btn-lg btn-light"
  );
  createProjectButton3.setAttribute("id", "projectButton3");
  createProjectButton3.setAttribute("style", "margin-top: 30px");
  createProjectButton3.setAttribute("style", "display: flex");
  createProjectButton3.setAttribute("style", "flex-direction: column");
  createProjectButton3.setAttribute("style", "background-image: url('j4j.png')", "background-size: contain");
  createProjectButton3.style.fontWeight = "bold";
  createProjectButton3.style.fontSize = "25px";
  createProjectButton3.style.color = "white";
  
  createProjectButton3.style.marginBottom = "10px";

  var createGhLink3 = document.createElement("button");
  createGhLink3.setAttribute(
    "class",
    "btn btn-outline-secondary btn-sm btn-light col-12"
  );
  createGhLink3.setAttribute("id", "GhLink3");
  createGhLink3.textContent = "Github Repository";
  createProjectButton3.appendChild(createProjectBreak);
  createProjectButton3.appendChild(createGhLink3);
  var clickGhLink3Button = document.getElementById("GhLink3");
  clickGhLink3Button.onclick = function () {
    window.open("https://github.com/stuartwood2010/chartMd_app");
  };




  var createProjectButton = document.createElement("button");
  projectCardApiEl.appendChild(createProjectButton);
  projectCard.style.backgroundColor = "transparent";
  createProjectButton.textContent = "Belly-Buster";
  createProjectButton.setAttribute(
    "class",
    "btn btn-secondary btn-lg btn-light"
  );
  createProjectButton.setAttribute("id", "projectButton");
  createProjectButton.setAttribute("style", "margin-top: 20px");
  createProjectButton.setAttribute("style", "display: flex");
  createProjectButton.setAttribute("style", "flex-direction: column");
  createProjectButton.setAttribute("style", "background-image: url('bellybusterthumb.png')", "background-size: cover", "background-repeat: no-repeat");
  createProjectButton.style.fontWeight = "bold";
  createProjectButton.style.fontSize = "25px";
  createProjectButton.style.marginBottom = "10px";
  
  // createProjectButton.setAttribute("style", "z-index: 1");
  var createGhLink1 = document.createElement("button");
  createGhLink1.setAttribute(
    "class",
    "btn btn-outline-secondary btn-sm btn-light col-12"
  );
  createGhLink1.setAttribute("id", "GhLink1");
  createGhLink1.textContent = "Github Repository";

  createProjectButton.appendChild(createProjectBreak);
  createProjectButton.appendChild(createGhLink1);
  var clickGhLink1Button = document.getElementById("GhLink1");
  clickGhLink1Button.onclick = function () {
    window.open("https://github.com/humesandrew/Belly-Buster");
  };

  var createProjectButton2 = document.createElement("button");
  projectCardApiEl.appendChild(createProjectButton2);
  createProjectButton2.textContent = "ChartMD";
  createProjectButton2.setAttribute(
    "class",
    "btn btn-secondary btn-lg btn-light"
  );
  createProjectButton2.setAttribute("id", "projectButton2");
  createProjectButton2.setAttribute("style", "margin-top: 20px");
  createProjectButton2.setAttribute("style", "display: flex");
  createProjectButton2.setAttribute("style", "flex-direction: column");
  createProjectButton2.setAttribute("style", "background-image: url('chartmd.png')", "background-size: contain");
  createProjectButton2.style.fontWeight = "bold";
  createProjectButton2.style.fontSize = "25px";
  createProjectButton2.style.marginBottom = "10px";

  var createGhLink2 = document.createElement("button");
  createGhLink2.setAttribute(
    "class",
    "btn btn-outline-secondary btn-sm btn-light col-12"
  );
  createGhLink2.setAttribute("id", "GhLink2");
  createGhLink2.textContent = "Github Repository";
  createProjectButton2.appendChild(createProjectBreak);
  createProjectButton2.appendChild(createGhLink2);
  var clickGhLink2Button = document.getElementById("GhLink2");
  clickGhLink2Button.onclick = function () {
    window.open("https://github.com/stuartwood2010/chartMd_app");
  };
  // createProjectButton.setAttribute("style", "background-size: cover");

  

  var createApiCard = document.createElement("div");

  createApiCard.setAttribute("id", "apiCard");
  createApiCard.setAttribute("style", "margin-top: 30px;");
  createApiCard.setAttribute("style", "height: 100vh");
  createApiCard.setAttribute("style", "background-color: transparent");
  createApiCard.setAttribute("style", "overflow-y: scroll");

  projectCardApiEl.style.display = "flex";
  projectCardApiEl.style.flexDirection = "column"
  projectCardApiEl.style.justifyContent = "space-around"
  projectCardApiEl.setAttribute("style", "height: 75vh");
  // projectCardApiEl.setAttribute("style", "overflow-y: scroll");

  projectCardApiEl.appendChild(createApiCard);

  function getRepos() {
    var apiUrl = "https://api.github.com/users/humesandrew/repos";
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
              var repoName = data[i].name;
              var deployedUrl = "https://humesandrew.github.io/" + data[i].name;

              var addRepoSectionButton = document.createElement("button");
              addRepoSectionButton.setAttribute(
                "class",
                "btn btn-secondary btn-lg btn-light"
              );
              addRepoSectionButton.setAttribute("style", "display: flex");
              addRepoSectionButton.setAttribute("style", "flex-direction: column");

              addRepoSectionButton.onclick = function () {

                window.open(deployedUrl)
              }

              var createGhApiLink = document.createElement("button");
              createGhApiLink.setAttribute(
                "class",
                "btn btn-outline-secondary btn-sm btn-light col-12"
              );
              createGhApiLink.setAttribute("id", "GhApiLink");
              createGhApiLink.textContent = "Github Repository";
                const githubUrl = "https://github.com/humesandrew/" + data[i].name;
              createGhApiLink.onclick = function () {

                window.open(githubUrl)
              }


              addRepoSectionButton.appendChild(createProjectBreak);
              addRepoSectionButton.appendChild(createGhApiLink);




              var repoEl = document.createElement("a");
              repoEl.textContent = repoName;
              repoEl.setAttribute("id", repoName);

              repoEl.setAttribute("class", "btn btn-small btn-secondary btn-block");
              repoEl.setAttribute("href", deployedUrl);
              repoEl.setAttribute("style", "display: flex");
              repoEl.setAttribute("style", "justify-content: space-between");
              repoEl.setAttribute("style", "align-items: column");
              repoEl.setAttribute("style", "background-image: url('githubthumb.png')");
              repoEl.style.color = 'black';
              repoEl.style.fontWeight = 'bold';



              projectCardApiEl.appendChild(createApiCard).appendChild(repoEl).appendChild(addRepoSectionButton);
            }


          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function (error) {
        alert("Unable to connect to GitHub");
      });
  }

  getRepos();




  var clickProjectButton = document.getElementById("projectButton");
  clickProjectButton.onclick = function () {
    window.open("https://humesandrew.github.io/Belly-Buster/");
  };

  var clickProjectButton2 = document.getElementById("projectButton2");
  clickProjectButton2.onclick = function () {
    window.open("https://chartmd.herokuapp.com/");
  };


};