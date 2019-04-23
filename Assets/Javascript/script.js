// Array of project objects to build cards from.  This will allow me to easily add/remove stuff without restyling each card.

let projectsArr = [
    {
        name: "In or Out?",
        imageSrc: "Assets/Images/inOrOut.png",
        link: "https://nkanderson86.github.io/Project1/",
        git: "https://github.com/nkanderson86/Project1",
        description: "First team project, focused on solving the problem of what to eat and where to eat it.  Our team used two different APIs (Edamam & Yelp) to retreive and display results based on user's input"
    }, 
    {
        name: "Elevate",
        imageSrc: "Assets/Images/Elevated.png",
        link: "https://elevated-shadow.herokuapp.com/",
        git: "https://github.com/nkanderson86/elevated",
        description: "Second team project, focused on helping people find a drink or strain to their liking.  Our team built a full stack project with a backend that stores and authenticates users visitng the site."
    },
    {
        name: "Hangman CLI Style",
        imageSrc: "Assets/Images/Hangman_CLI.png",
        link:"https://www.youtube.com/watch?v=di5omJ8HaxE",
        git: "https://github.com/nkanderson86/Hangman-CLI", 
        description:" The classic game Hangman brought to you as a command line interface!"
    },
    {
        name: "Trivia Game",
        imageSrc: "Assets/Images/trivia.jpeg",
        link: "https://nkanderson86.github.io/Trivia-Game/",
        git: "https://github.com/nkanderson86/Trivia-Game",
        description: "Test your knowledge with this hip hop trivia game.  Where will you stack up?  Are you an OG or a pretender?  "
    }, {
        name: "GIF-tastic",
        imageSrc: "Assets/Images/jiggy.gif",
        link: "https://nkanderson86.github.io/GIF-tastic/",
        git: "https://github.com/nkanderson86/GIF-tastic",
        description: "Have fun hitting the GIPHY API to search for anything you can think of!"
    }]

// function to dynamically build cards for the page based off what is in the array above

function buildCards() {
    $(".cards").empty();
    for (let i = 0; i < projectsArr.length; i++) {
        let cardBlock = $("<div>").addClass("card-block")
        let projectName = $("<h4>").text(projectsArr[i].name).addClass("card-title p-2");
        let imageDiv = $("<div>").addClass("card m-2 p-1 col-md-3").attr("style", "background-color:  #3CC47C;")
        let projectImg = $("<img>").attr("src", projectsArr[i].imageSrc).attr("style", 'width:100%;height:auto;overflow:auto;').addClass("card-top-img");
        let description = $("<p>").addClass("description").text(projectsArr[i].description)
        let repoLink = $("<a>").attr("href", projectsArr[i].git).attr("target", "_blank").text("Check out the code!")
        let liveLink = $("<a>").attr("href", projectsArr[i].link).attr("target", "_blank").text("Check out the website!")

        imageDiv.append(projectImg).append(cardBlock).append(projectName).append(description).append(repoLink).append(liveLink);

        $(".cards").append(imageDiv).hide();

        console.log("working");
    }
}

// set up about button to show my profile picture and about me section 
$("#about").on("click", function () {
    $(".cards").hide();
    $(".profile").show();
    $(".about-me").show();
});

// set up my portfolio button to create cards for the project objects I will store in my projectArr variable.  This will also need to hide the about me div
$("#portfolio").on("click", function () {
    $(".profile").hide(250);
    $(".about-me").hide(250);
    buildCards();
    $(".cards").show(500);

});

// set up contact button to bring up a modal with my information and links in it to LinkedIn, GitHub, resume PDF

$("#contact").on("click", function () {
    $(".modal").modal("show")
})

