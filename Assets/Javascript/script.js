let projectsArr = [
    {
        name: "In or Out?",
        imageSrc: "Assets/Images/inOrOut.png",
        link: "https://willcoe.github.io/Project1/",
        git: "https://github.com/WillCoe/Project1",
        description: ""
    }, {
        name: "Trivia Game",
        imageSrc: "Assets/Images/trivia.jpeg",
        link: "https://nkanderson86.github.io/Trivia-Game/",
        git: "https://github.com/nkanderson86/Trivia-Game",
        description: ""
    }, {
        name: "GIF-tastic",
        imageSrc: "Assets/Images/jiggy.gif",
        link: "https://nkanderson86.github.io/GIF-tastic/",
        git: "https://github.com/nkanderson86/GIF-tastic",
        description: "",
    }]

function buildCards() {
    $(".cards").empty();
    for (let i = 0; i < projectsArr.length; i++) {
        let cardBlock = $("<div>").addClass("card-block")
        let projectName = $("<h4>").text(projectsArr[i].name).addClass("card-title p-2");
        let imageDiv = $("<div>").addClass("card m-2 p-1 col-md-3")
        let projectImg = $("<img>").attr("src", projectsArr[i].imageSrc).attr("style", 'width:100%;height:auto;overflow:auto;').addClass("card-top-img");

        imageDiv.append(projectImg).append(cardBlock).append(projectName)

        $(".cards").append(imageDiv);

        console.log("working");
    }

}

// set up about button to show my profile picture and about me section 
$("#about").on("click", function () {
    $(".cards").hide(1000);
    $(".profile").show();
    $(".about-me").show();
});

// set up my portfolio button to create cards for the project objects I will store in my projectArr variable.  This will also need to hide the about me div
$("#portfolio").on("click", function () {
    $(".profile").hide(1000);
    $(".about-me").hide(1000);
    buildCards();
    $(".cards").show(1500);

});

// set up contact button to bring up a modal with my information and links in it to LinkedIn, GitHub, resume PDF

