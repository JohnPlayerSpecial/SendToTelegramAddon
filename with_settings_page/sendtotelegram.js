var url;
console.log("po");
function onError(error) { 
//	
};

browser.browserAction.onClicked.addListener( getURL );

function getURL(){
	//console.log(item);
	browser.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	window.url = tabs[0].url; 
	console.log(url);
	var xhr = new XMLHttpRequest();
	var ls = window.content.localStorage;
	var color = ls.getItem("color");
	console.log("color metodo alt " + color);
	var color1 = ls.getItem("color1");
	console.log("color1 metodo alt " + color1);
	var xhr = new XMLHttpRequest();
    url_tg = "https://api.telegram.org/bot" + color + "/SendMessage?chat_id="+ color1 +"&text=" + encodeURIComponent(url) ;
	console.log(url_tg);
	xhr.open('GET', url_tg, true);
	xhr.send();
	
	
	var getting = browser.storage.local.get("color");
	getting.then(onGot, onError);
	});
}
var color;
function onGot(item) {
  window.color = "";
  if (item.color)
    window.color = item.color;
    console.log("found token " + color);
    var getting1 = browser.storage.local.get("color1");
	getting1.then(onGot1, onError);
	}
	
function onGot1(item) {
	var color1 = "";
  if (item.color1)
    color1 = item.color1;
	var xhr = new XMLHttpRequest();
	url_tg = "https://api.telegram.org/bot" + window.color + "/SendMessage?chat_id="+ color1.toString() +"&text=" + encodeURIComponent(url) ;
	console.log(url_tg);
	xhr.open('GET', url_tg, true);
	xhr.send();
}