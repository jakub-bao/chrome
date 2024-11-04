import {copyToClipboard} from "./copyToClipboard";

document.querySelectorAll<Element>('.issuerow').forEach((row:Element)=>{
    const button = document.createElement('button')
    button.textContent = 'Copy'
    button.onclick = function copyTicket(){
        const ticketName = ''
        const ticketCode = row.getAttribute('data-issuekey')
        copyToClipboard(`[${ticketCode}] ${ticketName}`)
    }

    row!.append(button)
})