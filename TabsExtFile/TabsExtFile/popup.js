
/*****************
 * Right Side Open
 *****************/

function duplicateTabR1(origiT, second = {
    active: true
}) {
        second.index = origiT.index + 1;
        chrome.tabs.create(second);
}

function duplicateTabR2(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 2;
    chrome.tabs.create(second);
}

function duplicateTabR3(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 3;
    chrome.tabs.create(second);
}

function duplicateTabR4(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 4;
    chrome.tabs.create(second);
}
function duplicateTabR5(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 5;
    chrome.tabs.create(second);
}
function duplicateTabR6(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 6;
    chrome.tabs.create(second);
}
function duplicateTabR7(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 7;
    chrome.tabs.create(second);
}
function duplicateTabR8(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 8;
    chrome.tabs.create(second);
}
function duplicateTabR9(origiT, second = {
    active: true
}) {
    second.index = origiT.index + 9;
    chrome.tabs.create(second);
}

/*****************
 * Left Side Open
 *****************/

function duplicateTabL1(origiT, second = {
    active: true
}) {
    second.index = origiT.index;
    chrome.tabs.create(second);
}
function duplicateTabL2(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 1;
    chrome.tabs.create(second);
}
function duplicateTabL3(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 2;
    chrome.tabs.create(second);
}
function duplicateTabL4(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 3;
    chrome.tabs.create(second);
}
function duplicateTabL5(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 4;
    chrome.tabs.create(second);
}
function duplicateTabL6(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 5;
    chrome.tabs.create(second);
}
function duplicateTabL7(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 6;
    chrome.tabs.create(second);
}
function duplicateTabL8(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 7;
    chrome.tabs.create(second);
}
function duplicateTabL9(origiT, second = {
    active: true
}) {
    second.index = origiT.index - 8;
    chrome.tabs.create(second);
}

// Checks commands

chrome.commands.onCommand.addListener(function (command) {
    if (command === 'right-tab-1') {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, function (tabs) {
            duplicateTabR1(tabs[0], {
            });
        });
    } else if (command === 'right-tab-2') {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, function (tabs) {
            duplicateTabR2(tabs[0], {
            });
        });
    }  else if (command === 'right-tab-3') {
        chrome.tabs.query({
            active: true,
            currentWindow: true,
        }, function (tabs) {
            duplicateTabR3(tabs[0], {
            });
        });
    }  else if (command === 'right-tab-4') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabR4(tabs[0], {
                });
            });
    }  else if (command === 'right-tab-5') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabR5(tabs[0], {
                });
            });
    } else if (command === 'right-tab-6') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabR6(tabs[0], {
                });
            });
    } else if (command === 'right-tab-7') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabR7(tabs[0], {
                });
            });
    } else if (command === 'right-tab-8') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabR8(tabs[0], {
                });
            });
    } else if (command === 'right-tab-9') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabR9(tabs[0], {
                });
            });
    } else if (command === 'left-tab-1') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL1(tabs[0], {
                });
            });
    } else if (command === 'left-tab-2') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL2(tabs[0], {
                });
            });
    } else if (command === 'left-tab-3') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL3(tabs[0], {
                });
            });
    } else if (command === 'left-tab-4') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL4(tabs[0], {
                });
            });
    } else if (command === 'left-tab-5') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL5(tabs[0], {
                });
            });
    } else if (command === 'left-tab-6') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL6(tabs[0], {
                });
            });
    } else if (command === 'left-tab-7') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL7(tabs[0], {
                });
            });
    } else if (command === 'left-tab-8') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL8(tabs[0], {
                });
            });
    } else if (command === 'left-tab-9') {
            chrome.tabs.query({
                active: true,
                currentWindow: true,
            }, function (tabs) {
                duplicateTabL9(tabs[0], {
                });
            });
        }

});

