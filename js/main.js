//CONSTANTS
var ItemsLimit = 100;
var offset = 0;

//URL
var urlChannelsMoreViewers = 'https://api.twitch.tv/kraken/streams?limit=' + ItemsLimit + '&offset=' + offset;


/**
 * 
 */
function getChannelsWithMoreViewers() {
	console.log("getChannelsWithMoreViewers()");
	try {
		var xmlHttp = new XMLHttpRequest();
		
		xmlHttp.ontimeout = function()
		{
			console.log("onTimeOut");
		};

		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState === 4) { 
				if (xmlHttp.status === 200) {
					try {
						console.log("success: " + xmlHttp.responseText);
						//document.getElementById("divText").innerHTML = xmlHttp.responseText;
					}
					catch (err) {
						console.log("error: " + err + " - response:" + xmlHttp.responseText);
					}
				} else {
					console.log("error: " + xmlHttp.readyState + " - status: " + xmlHttp.status);
				}
			} else {
				console.log("52 + readyState - " + xmlHttp.readyState);
			}
		};
		
	    xmlHttp.open("GET", urlChannelsMoreViewers, true);
		xmlHttp.timeout = 500;
	    xmlHttp.send(null);
	    
	} catch (error) {
		console.log("error:: " + error);
	}
}


//Initialize function
var init = function () {
    console.log("init() called");
    getChannelsWithMoreViewers();
    
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        	//getChannelsWithMoreViewers();
        }
    });
 
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 40: //DOWN arrow
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
    		break;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;
    	}
    });
};


//MAIN
//window.onload can work without <body onload="">
console.log("Init script");
window.onload = init;