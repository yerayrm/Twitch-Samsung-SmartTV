////CONSTANTS
//var ItemsLimit = 100;
//var offset = 0;
//
////URL
//var urlChannelsMoreViewers = 'https://api.twitch.tv/kraken/games/top?limit=' + ItemsLimit + '&offset=' + offset;
//
//console.log("Initial");
//
//var url = "https://api.twitch.tv/kraken/games/top?limit=100&offset=0";
//
//var html = "";
//
//var client = new XMLHttpRequest();
//
///* Event handlers */
//client.onloadstart = onloadstarthandler;
//client.onprogress = onprogresshandler;
//client.onabort = onaborthandler;
//client.onerror = onerrorhandler;
//client.onload = onloadhandler;
//client.ontimeout = ontimeouthandler;
//client.onloadend = onloadendhandler;
//client.onreadystatechange = onreadystatechangehandler;
//
///* Assign request type and server path */ 
//client.open("GET", url);
//
//function requestURL(){
//
//   client.send();
//	
//	
//}
//
//
//function getChannelsWithMoreViewers() {
//	console.log("Gi");
//	try {
//		console.log("1");
//		var xmlHttp = new XMLHttpRequest();
//		console.log("2");
//		xmlHttp.ontimeout = function()
//		{
//			console.log("3");
//		};
//		console.log("4");
//		xmlHttp.onreadystatechange = function() {
//			console.log("5");
//			if (xmlHttp.readyState === 4) { 
//				console.log("51");
//				if (xmlHttp.status === 200) {
//					console.log("53");
//					try {
//						console.log("55");
//						console.log("success: " + responseText);
//						//SceneSceneBrowser.loadDataSuccess(xmlHttp.responseText);
//					}
//					catch (err) {
//						console.log("56");
//						console.log("error: " + err + " - response:" + responseText);
//						//SceneSceneBrowser.showDialog("loadDataSuccess() exception: " + err.name + ' ' + err.message);
//					}
//				} else {
//					console.log("54");
//					console.log("error: " + xmlHttp.readyState);
//					//SceneSceneBrowser.loadDataError();
//				}
//			} else {
//				console.log("52 + readyState" + xmlHttp.readyState);
//				
//			}
//		};
//		console.log("6 + " + urlChannelsMoreViewers);
//	    xmlHttp.open("GET", urlChannelsMoreViewers, true);
//	    console.log("7");
//		xmlHttp.timeout = 500;
//	    xmlHttp.send(null);	
//	    console.log("8");
//	} catch (error) {
//		console.log("error:: " + error);
//	}
//}
//
//
//
////Initialize function
//var init = function () {
//    console.log("init() called");
//    
//    document.addEventListener('visibilitychange', function() {
//        if(document.hidden){
//            // Something you want to do when hide or exit.
//        } else {
//            // Something you want to do when resume.
//        	//getChannelsWithMoreViewers();
//        }
//    });
// 
//    // add eventListener for keydown
//    document.addEventListener('keydown', function(e) {
//    	switch(e.keyCode){
//    	case 37: //LEFT arrow
//    		break;
//    	case 38: //UP arrow
//    		break;
//    	case 39: //RIGHT arrow
//    		break;
//    	case 40: //DOWN arrow
//    		break;
//    	case 13: //OK button
//    		break;
//    	case 10009: //RETURN button
//    		break;
//    	default:
//    		console.log("Key code : " + e.keyCode);
//    		break;
//    	}
//    });
//};
//
//
////MAIN
////window.onload can work without <body onload="">
//window.onload = init;
//
//
//
//
//
//
///* When the request begins */
//function onloadstarthandler(e) 
//{
//   html += "onloadstart<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//
///* When the request is in progress */ 
//function onprogresshandler(e) 
//{
//   html += "onprogress<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//
///* When the client cancels the request */ 
//function onaborthandler(e) 
//{
//   html += "onabort<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//
///* When server exception occurs */
//function onerrorhandler(e) 
//{
//   html += "onerror<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//
///* When the request is successfully terminated */ 
//function onloadhandler(e) 
//{
//   html += "onload<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//
///* When a timeout occurs */
//function ontimeouthandler(e) 
//{
//   html += "ontimeout<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//
// /* When request is terminated regardless of success or failure */
//function onloadendhandler(e) 
//{
//   html += "onloadend<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//
///* Checks current progress based on a random repetition period */
//function onreadystatechangehandler(e) 
//{
//   html += "onreadystate<br/>";
//   document.getElementById("divText").innerHTML = html;
//}
//

function getXmlHttp() {
	var xmlhttp;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function sync(url) {
	var xhr = getXmlHttp();
	try {
		console.log("0");
		xhr.open('POST', url, false);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		console.log("1");
		
		console.log("2");
		xhr.send(null);
		console.log("3");
		if (xhr.status == 200) {
			console.log("4");
			console.log(xhr.responseText);
		} else {
			console.log("5");
			console.log("xhr.status:" + xhr.status);
		}
	} catch (ex) {
		console.log("Exception:" + ex);
	}

}

function async(url) {
	console.log("async");
	var xhr = getXmlHttp();
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.open('POST', url, true);
	xhr.onreadystatechange = function() {
		console.log("xhr.readyState:" + xhr.readyState);
		console.log("xhr.status:" + xhr.status);
		console.log("xhr.responseText:" + xhr.responseText);
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				console.log("200;" + xhr.responseText);
			}
		}
	};
	xhr.send(null);
}

function sync_jquery(url, async, data) {
	$.ajax({
		type : "POST",
		url : url,
		contentType : "application/json; charset=utf-8",
		data : JSON.stringify(data),
		cache : false,
		async : async,
		success : function(data) {
			alert("success:" + data);
		},
		error : function(e) {
			alert("error:" + JSON.stringify(e));
		}
	});
}