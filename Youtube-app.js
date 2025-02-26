document.addEventListener('DOMContentLoaded', function () {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubePlayer', {
            events: {
                'onReady': function (event) {
                    event.target.pauseVideo(); // Ensure it doesn’t autoplay
                }
            }
        });
    }

    document.querySelector('.video-container').addEventListener('click', function () {
        if (player) {
            player.playVideo();
        }
    });

    document.querySelector('.video-container').addEventListener('dblclick', function () {
        var iframe = document.getElementById('youtubePlayer');
    
        if (!document.fullscreenElement) {
            // Enter fullscreen
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) { // Safari
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE/Edge
                iframe.msRequestFullscreen();
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { // Safari
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    });

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
});




// Listner For the Theme changer

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        // Save preference
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});

