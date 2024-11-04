import {copyToClipboard} from "./copyToClipboard";

const button = document.createElement('button')
button.textContent = 'Copy'
button.onclick = function copyTicket(){
    const ticketName = document.getElementById('summary-val')!.textContent!
    const ticketCode = document.getElementById('key-val')!.textContent!
    copyToClipboard(`[${ticketCode}] ${ticketName}`)
}

document.querySelector('.aui-nav-breadcrumbs')!.append(button)

