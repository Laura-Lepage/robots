let gallery = document.querySelector(".gallery")
let buttonMen = document.querySelector(".men")
let buttonWomen = document.querySelector(".women")
let divRobot = document.querySelector(".robot")
let p = document.querySelector(".p")
let countMen = 0
let countWomen = 0

fetch(`scripts/robots.json`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    function displayRobots(){
      data.robots.forEach(function(singleRobot){
        gallery.innerHTML += `
        <div class="robot ${singleRobot.gender}">
        <h3>${singleRobot.first_name} ${singleRobot.last_name}</h3>
        <img class="user-img" src="${singleRobot.portrait}">
        <div>${singleRobot.description}
        </div>
      
        `
        if(gallery.querySelector(".Men")){
          console.log("test")
          countMen ++
          p.innerHTML = `Il y a ${countMen} hommes`
    
        }
      })
     
    }
      // buttonMen.addEventListener('click', function(){
      //   divRobot.classList.contains("Female").style.display = none
      // })

    displayRobots()
   
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})