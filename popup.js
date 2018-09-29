let userAgents = {
	'Android': [
		{ name: 'Android 5 / Google Nexus 6 / Chrome', value: 'Mozilla/5.0 (Linux; Android 5.0; Nexus 6 Build/LRX21D) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36' },
		{ name: 'Android 5 / Amazon Silk', value: 'Mozilla/5.0 (Linux; Android 5.1.1; KFAUWI Build/LVY48F) AppleWebKit/537.36 (KHTML, like Gecko) Silk/68.2.6 like Chrome/68.0.3440.85 Safari/537.36' },
		{ name: 'Android 6 / Google Nexus 6P / Chrome', value: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 6P Build/MDB08L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.69 Mobile Safari/537.36' },
		{ name: 'Android 7 / Samsung Galaxy Tab / Chrome', value: 'Mozilla/5.0 (Linux; Android 7.0; SM-T715 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Safari/537.36' },
		{ name: 'Android 8 / Google Pixel / Chrome', value: 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel Build/OPR3.170623.007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.98 Mobile Safari/537.36' },
		{ name: 'Android 8 / Samsung Galaxy S7 Edge / Chrome', value: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G935F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36' },
		{ name: 'Android 9 / Google Pixel 2 XL / Chrome 68', value: 'Mozilla/5.0 (Linux; Android 9; Pixel 2 XL Build/PPR1.180610.009) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36' },
		{ name: 'Android 9 / Google Pixel 2 XL / Firefox 61', value: 'Mozilla/5.0 (Android 9; Tablet; rv:61.0) Gecko/61.0 Firefox/61.0' },
	],
	'iPhone': [
		{ name: 'iOS 11 / Safari', value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1' },
		{ name: 'iOS 10 / Safari', value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1' },
		{ name: 'iOS 9 / Safari',  value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1' },
		{ name: 'iOS 8 / Safari',  value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4' },
		{ name: 'iOS 7 / Safari',  value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/546.10 (KHTML, like Gecko) Version/6.0 Mobile/7E18WD Safari/8536.25' },
		{ name: 'iOS 6 / Safari',  value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25' },
		{ name: 'iOS 5 / Safari',  value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3' }
	],
	'iPad': [
		{ name: 'iOS 9 / Safari', value: 'Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.17 (KHTML, like Gecko) Version/8.0 Mobile/13A175 Safari/600.1.4' },
		{ name: 'iOS 8 / Safari', value: 'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4' },
		{ name: 'iOS 7 / Safari', value: 'Mozilla/5.0 (iPad; CPU OS 7_0_2 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11A501' },
		{ name: 'iOS 6 / Safari', value: 'Mozilla/5.0 (iPad; CPU OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25' },
		{ name: 'iOS 5 / Safari', value: 'Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3' }
	],
	'Windows': [
		{ name: 'Edge', value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134' },
		{ name: 'IE 11', value: 'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko' },
		{ name: 'IE 10', value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; MDDCJS)' },
		{ name: 'IE 9', value: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0;  Trident/5.0)' },
		{ name: 'IE 8', value: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)' },
		{ name: 'IE 7', value: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)' },
		{ name: 'IE 6', value: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)' },
		{ name: 'Firefox 62', value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0.2' },
		{ name: 'Chrome 69', value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.102 Safari/537.36' },
		{ name: 'Opera 52', value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 OPR/52.0.2871.64' }
	],
	'Mac': [
		{ name: 'OS X / Safari 11', value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15' },
		{ name: 'OS X / Safari 10', value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8' },
		{ name: 'OS X / Chrome', value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3198.0 Safari/537.36' },
		{ name: 'OS X / Firefox', value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:58.0) Gecko/20100101 Firefox/58.0' }
	]
};

function setUA(ua) {
    chrome.runtime.sendMessage({
        type: 'setUA',
        ua: ua
    });
    window.close();
}

function resetUA() {
    chrome.runtime.sendMessage({
        type: 'resetUA'
    });
    window.close();
}

function bindButtons() {
	document.getElementById('submit-ua-predefined').onclick = function() {
	    setUA(document.getElementById('ua-predefined').value);
	}

	document.getElementById('submit-ua-custom').onclick = function() {
	    setUA(document.getElementById('ua-custom').value);
	}

	document.getElementById('submit-ua-reset').onclick = resetUA;
}

function init() {
	bindButtons();
	populatePopupContent();
}

function populatePopupContent() {
	chrome.runtime.sendMessage({
	    type: 'getUA'
	}, ua => {
		populateUserAgentSelect(ua);
			populateCurrentUA(ua);
	});
}

function populateCurrentUA(ua) {
    document.getElementById('current-ua').innerText = ua;
}

function populateUserAgentSelect(ua) {
	let selectBox = document.getElementById('ua-predefined');
	let keys = Object.keys(userAgents).sort();
	for(key of keys) {
		// Create <optgroup> for these user agents
		let optGroup = document.createElement('optgroup');
		optGroup.label = key;

		// Add all user agents into this optgroup
		let uaGroup = userAgents[key];
		for(let i = 0; i < uaGroup.length; i++) {
			let agent = uaGroup[i];
			let option = document.createElement('option');
			option.text = agent.name;
			option.value = agent.value;

			// If this value matches our current UA,
			// select this value in the dropdown
			if(option.value === ua) {
				option.selected = true;
			}
			optGroup.appendChild(option);
		}

		selectBox.appendChild(optGroup);
	};
}

init();
