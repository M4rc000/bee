function play(){
    var audio = new Audio();
    audio.src = './A Thousand Years.mp3';
    audio.play();  // Set autoplay to true
    $('.button').css('display', 'none');
    $('.birthdayCard').css('display', 'block');
    const body = document.querySelector("body");

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "fas fa-heart";
    
        // Randomly select color class
        const colors = ["white", "seaBlue", "rgb-60-0-60"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.classList.add(randomColor);
    
        heart.style.left = (Math.random() * 100)+"vw";
        heart.style.animationDuration = (Math.random()*3)+2+"s";
        body.appendChild(heart);
    }
    
    setInterval(createHeart,100);
    
    setInterval(function name(params) {
        var heartArr = document.querySelectorAll(".fa-heart")
        if (heartArr.length > 500) {
           heartArr[0].remove()
        }
    },100);   

    var imageSources = [
        "./images/1.jpg", 
        "./images/2.jpg",
        "./images/3.jpg"
    ]; // Add more image URLs as needed
    var currentIndex = 0;

    function changeImage() {
        $("#looping-image").fadeOut(500, function() {
            $(this).attr("src", imageSources[currentIndex]).fadeIn(500);
            currentIndex = (currentIndex + 1) % imageSources.length;
        });
    }

    changeImage();
    setInterval(changeImage, 3000);
}