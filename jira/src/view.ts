const button = document.createElement('button')
button.textContent = 'Copy'
button.onclick = function copyTicket(){
    const ticketCode:string = document.getElementById('key-val')!.textContent!
    const ticketName:string = document.getElementById('summary-val')!.textContent!
    copyToClipboard(ticketCode, ticketName)
}

document.querySelector('.aui-nav-breadcrumbs')!.append(button)

