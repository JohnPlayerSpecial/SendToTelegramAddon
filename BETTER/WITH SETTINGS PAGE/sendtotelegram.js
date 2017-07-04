function getURL(){
	browser.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	var url = tabs[0].url;
	sendtotelegram(url);
	});
}

browser.browserAction.onClicked.addListener( getURL );


function sendtotelegram(url){
	var color = "";
	var color1 = "";
	function onGot(item) {
		//console.log(item);
		color = item.color
		let gettingItem1 = browser.storage.local.get("color1");
		gettingItem1.then(onGot1, onError);
		}
	function onError(error) {console.log(`Error: ${error}`);}
	
	let gettingItem = browser.storage.local.get("color");
	gettingItem.then(onGot, onError);
	
	function onGot1(item) {
		//console.log("ciao");
		//console.log(item);
		color1 = item.color1
		console.log(color1);
		console.log(color);
		var xhr = new XMLHttpRequest();
		if (  url.endsWith(".pdf")  ){
			url_tg = "https://api.telegram.org/bot" + color + "/SendDocument?chat_id=" + color1 + "&document=" + encodeURIComponent(url) + "&caption=url: " + encodeURIComponent(url);;
			console.log( url_tg );
			xhr.open('GET', url_tg, true);
			xhr.send();
		}
		else if ( url.endsWith(".svg") ||  url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith(".jpeg")  ){
			url_tg = "https://api.telegram.org/bot" + color + "/SendPhoto?chat_id=" + color1 + "&photo=" + encodeURIComponent(url) + "&caption=url: " + encodeURIComponent(url);
			console.log( url_tg );
			xhr.open('GET', url_tg, true);
			xhr.send();
		}
		else {
		url_tg = "https://api.telegram.org/bot" + color + "/SendMessage?chat_id=" + color1 + "&text=" + encodeURIComponent(url) ;
		console.log( url_tg );
		xhr.open('GET', url_tg, true);
		xhr.send();
		}
	}
	
}