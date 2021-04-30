/* chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);
    console.log("What a v");
}); */ 


function openNewTab(origTab, opts = {
    active: true
}) {
    if (origTab) {
        opts.index = origTab.index + 1;
        opts.openerTabId = origTab.id;
    }
    chrome.tabs.create(opts);
} 
chrome.commands.onCommand.addListener(function (command) {
    if (command === 'left-tab-1' || command === 'duplicate-tab-background') {
        for (var i = 0; i < 6; i++) {
            for (var i = 0; i < 3; i++) {
                chrome.tabs.create({
                    url: chrome.runtime.getURL("https://google.com"),
                    type: "popup"

                });
            }

            /*
            chrome.tabs.query({
                active: true,
                //currentWindow: true,
            }, function (tabs) {
                openNewTab(tabs[0], {
                    active: command === 'left-tab-1',
                });
            }); */
            chrome.windows.create({
                url: chrome.runtime.getURL("https://google.com"),
                type: "popup"

                });
            }
            
        } 
       // chrome.tabs.create({
       //  });
    //}; 
});
chrome.browserAction.onClicked.addListener(openNewTab);

