let DEFAULT_UA = navigator.userAgent;
let CUSTOM_UA = DEFAULT_UA;
function init() {
    bindOnBeforeSendHeaders();
    bindOnMessage();
}

function onBeforeSendHeadersCallback(details) {
    if (CUSTOM_UA === DEFAULT_UA) {
        return;
    }

    for (let i = 0; i < details.requestHeaders.length; i++) {
        if (details.requestHeaders[i].name !== 'User-Agent') {
            continue;
        }
        details.requestHeaders[i].value = CUSTOM_UA;
        break;
    }

    return {
        requestHeaders: details.requestHeaders
    };
}

function bindOnBeforeSendHeaders() {
    chrome.webRequest.onBeforeSendHeaders.addListener(
        onBeforeSendHeadersCallback,
        { urls: ["<all_urls>"] },
        ["blocking", "requestHeaders"]
    );
}

function bindOnMessage() {
    chrome.runtime.onMessage.addListener(function(msg, sender, callback) {
        if (msg.type === 'getUA') {
            callback(CUSTOM_UA);
        } else if (msg.type === 'setUA') {
            gotMessageSetUA(msg.ua);
        } else if (msg.type === 'resetUA') {
            gotMessageResetUA();
        }
    });
}

function gotMessageSetUA(ua) {
    if (ua === '') {
        CUSTOM_UA = DEFAULT_UA;
    } else if(isValidUA(ua)) {
        CUSTOM_UA = ua;
    } else {
        throw "Invalid UA";
    }
}

function gotMessageResetUA() {
    CUSTOM_UA = DEFAULT_UA;
}

function isValidUA(ua) {
    // Pretty much any string is considered valid.
    // Invalid if not a string, or has new line characters.
    return isString(ua) && !ua.match("[\n\r]") ? true : false;
}

function isString(input) {
    return input !== undefined && input !== null && typeof(input) === 'string';
}

init();