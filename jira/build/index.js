"use strict";
const button = document.createElement('button');
button.textContent = 'Copy';
button.onclick = function copyTicket() {
    const ticketName = document.getElementById('summary-val').textContent;
    const ticketCode = document.getElementById('key-val').textContent;
    copyToClipboard(`[${ticketCode}] ${ticketName}`);
};
document.querySelector('.aui-nav-breadcrumbs').append(button);
function copyToClipboard(content) {
    const el = document.createElement('textarea');
    el.value = content;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
