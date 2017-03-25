function getURL(){
	browser.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	var url = tabs[0].url;
	console.log(url);
	sendtotelegram(url);
	});
}

browser.browserAction.onClicked.addListener( getURL );


function sendtotelegram(url){
	var xhr = new XMLHttpRequest();
	TELEGRAM_TOKEN = "330039403:AAHX6l_PBmiXzVYuw-dXG3IQPdbMFNmPymk";
	url_tg = "https://api.telegram.org/bot" + TELEGRAM_TOKEN + "/SendMessage?chat_id=31923577&text=" + encodeURIComponent(url) ;
	console.log(url_tg);
	xhr.open('GET', url_tg, true);
	xhr.send();
}


  