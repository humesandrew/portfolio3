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

  projectCard.appendChild(projectCardEl);

  var projectCardApiEl = document.createElement("card");
  projectCardApiEl.setAttribute("id", "projectCardApiEl");
  projectCardApiEl.setAttribute("class", "card col-10");
  projectCardApiEl.textContent = "";
  projectCardApiEl.style.backgroundColor = "transparent";
  projectCardApiEl.style.display = "flex";
  projectCardApiEl.style.flexDirection = "column"
  projectCardApiEl.style.justifyContent = "space-around"
  projectCardApiEl.setAttribute("style", "height: 100vh");
  projectCardApiEl.setAttribute("style", "overflow-y: scroll");
  projectCard.appendChild(projectCardApiEl);


  var createProjectButton = document.createElement("button");
  projectCardApiEl.appendChild(createProjectButton);
  createProjectButton.textContent = "Belly-Buster";
  createProjectButton.setAttribute(
    "class",
    "btn btn-secondary btn-lg btn-light"
  );
  createProjectButton.setAttribute("id", "projectButton");
  createProjectButton.setAttribute("style", "margin-top: 20px");
  createProjectButton.setAttribute("style", "display: flex");
  createProjectButton.setAttribute("style", "flex-direction: column");
  createProjectButton.setAttribute("style", "background-image: url('bellybusterthumb.png')", "background-size: cover");
  createProjectButton.style.fontWeight = "bold";
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
  projectCardApiEl.style.display = "flex";
  projectCardApiEl.style.flexDirection = "column"
  projectCardApiEl.style.justifyContent = "space-around"
  projectCardApiEl.setAttribute("style", "height: 100vh");
  projectCardApiEl.setAttribute("style", "overflow-y: scroll");

  projectCardApiEl.appendChild(createApiCard);
  
  function getRepos() {
    var apiUrl = "https://api.github.com/users/humesandrew/repos?per_page=7";
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

              var createGhApiLink = document.createElement("button");
              createGhApiLink.setAttribute(
                "class",
                "btn btn-outline-secondary btn-sm btn-light col-12"
              );
              createGhApiLink.setAttribute("id", "GhApiLink");
              createGhApiLink.textContent = "Github Repository";

                createGhApiLink.onclick = function() {
            
                  window.open(data[i].url)
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
  
            
  
              projectCardApiEl.appendChild(repoEl).appendChild(addRepoSectionButton);
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




