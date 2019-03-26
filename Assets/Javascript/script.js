let projectsArr = [
    {
        name: "In or Out?",
        imageSrc: "Assets/Images/inOrOut.png",
        link: "https://willcoe.github.io/Project1/",
        git: "https://github.com/WillCoe/Project1",
        description: "First team project, focused on solving the problem of what to eat and where to eat it.  Our team used two different APIs (Edamam & Yelp) to retreive and display results based on user's input"
    }, {
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

function buildCards() {
    $(".cards").empty();
    for (let i = 0; i < projectsArr.length; i++) {
        let cardBlock = $("<div>").addClass("card-block")
        let projectName = $("<h4>").text(projectsArr[i].name).addClass("card-title p-2");
        let imageDiv = $("<div>").addClass("card m-2 p-1 col-md-3")
        let projectImg = $("<img>").attr("src", projectsArr[i].imageSrc).attr("style", 'width:100%;height:auto;overflow:auto;').addClass("card-top-img");
        let description = $("<p>").addClass("description").text(projectsArr[i].description)
        let repoLink = $("<a>").attr("href", projectsArr[i].git).text("Check out the code!")
        let liveLink = $("<a>").attr("href", projectsArr[i].link).text("Check out the website!")

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
    $(".profile").hide(1000);
    $(".about-me").hide(1000);
    buildCards();
    $(".cards").show(2000);

});

// set up contact button to bring up a modal with my information and links in it to LinkedIn, GitHub, resume PDF

$("#contact").on("click", function () {
    $(".modal").modal("show")
})

