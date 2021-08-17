// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        return response.json();

    })
        .then(function (astronauts){
            let container = document.getElementById("container");
            container.innerHTML+= `
            <div class="astronaut">
            <div class="bio">
                <h3>${astronauts[0].firstName} ${astronauts[0].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronauts[0].hoursInSpace}</li>
                        <li>Active: ${astronauts[0].active}</li>
                        <li>Skills: ${astronauts[0].skills}</li>
                    </ul>
            </div>
            <img class="avatar" src="${astronauts[0].picture}">
            </div>
            `

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