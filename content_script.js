chrome.runtime.sendMessage({type: 'getUA'}, function(response) {
	var code = "if(navigator.__defineGetter__){navigator.__defineGetter__('userAgent',function(){return "+JSON.stringify(response)+";});}";
	var textNode = document.createTextNode(code);

	var script = document.createElement('script');
	//eval(code);
	script.appendChild(textNode);
	script.remove();
	var parentNode = document.head||document.documentElement;
	parentNode.appendChild(script);
	parentNode.removeChild(script);
});
