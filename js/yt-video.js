var player;

var $ = function(id) { return document.getElementById(id); };
var $$ = function(tagname) { return document.getElementsByTagName(tagname); };
var $$$ = function(classname) { return document.getElementsByClassName(classname); };

function onYouTubeIframeAPIReady() {
    var videos = $$$('kmg-video'), // the iframes elements
        players = [], // an array where we stock each videos youtube instances class
        playingID = null; // stock the current playing video

    for (var i = 0; i < videos.length; i++) // for each iframes
    {
        var currentIframeID = videos[i].id; // we get the iframe ID
        players[currentIframeID] = new YT.Player(currentIframeID); // we stock in the array the instance
        // note, the key of each array element will be the iframe ID

        videos[i].addEventListener('mouseover', function(e) { // assigning a callback for this event
            var currentHoveredElement = e.target;
            if (playingID) // if a video is currently played
            {
                players[playingID].pauseVideo();
            }
            players[currentHoveredElement.id].playVideo();
            playingID = currentHoveredElement.id;
        });

        videos[i].addEventListener('mouseout', function(e) { // assigning a callback for this event
            var currentHoveredElement = e.target;
            if (playingID) // if a video is currently played
            {
                players[playingID].pauseVideo();
            }
            players[currentHoveredElement.id].stopVideo();
            playingID = currentHoveredElement.id;
        });
    }

}
onYouTubeIframeAPIReady();