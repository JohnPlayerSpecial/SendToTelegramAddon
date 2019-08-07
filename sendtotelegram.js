function getURL(){
	browser.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	var url = tabs[0].url;
	sendtotelegram(url);
	});
}

browser.browserAction.onClicked.addListener( getURL );

function sendtotelegram(url){
	var xhr = new XMLHttpRequest();
	TELEGRAM_TOKEN = document.cookie.match(/tg_token.*/i);
	url_tg = "https://api.telegram.org/bot" + TELEGRAM_TOKEN + "/SendMessage?chat_id=31923577&text=" + encodeURIComponent(url) ;
	xhr.open('GET', url_tg, true);
	xhr.send();
}


  
