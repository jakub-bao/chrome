"use strict";
async function switchTab(direction) {
    const allTabs = await chrome.tabs.query({ currentWindow: true });
    const tabIds = allTabs.map(({ id, index, active }) => ({ id, index, active }));
    const currentTab = tabIds.find(({ active }) => active);
    if (!currentTab)
        return;
    let newTabIndex;
    switch (direction) {
        case 'previous':
            newTabIndex = currentTab.index - 1;
            break;
        case 'next':
            newTabIndex = currentTab.index + 1;
            break;
        default: return;
    }
    chrome.tabs.update(tabIds[newTabIndex].id, { active: true });
}
chrome.commands.onCommand.addListener(function (command) {
    if (!['next', 'previous'].includes(command))
        return;
    switchTab(command);
});
