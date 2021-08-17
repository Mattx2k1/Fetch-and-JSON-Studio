// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        return response.json();

    })
        .then(function (astronauts){
            let container = document.getElementById("container");
            container.innerHTML+= `
            <h2>Number of Astronaunts on Mission: ${astronauts.length}</h2>\
            `
            for (let i=0; i<astronauts.length; i++) {
            container.innerHTML+= `
            <div class="astronaut">
            <div class="bio">
                <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                        <li>Active: ${astronauts[i].active}</li>
                        <li>Skills: ${astronauts[i].skills}</li>
                    </ul>
            </div>
            <img class="avatar" src="${astronauts[i].picture}">
            </div>
        
            `   }

        })
})

// <div class="astronaut">
/* <div class="bio">
<h3>Mae Jemison</h3>
<ul>
   <li>Hours in space: 190</li>
   <li>Active: false</li>
   <li>Skills: Physician, Chemical Engineer</li>
</ul>
</div>
<img class="avatar" src="images/mae-jemison.jpg">
</div> */