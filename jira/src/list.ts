document.querySelectorAll<Element>('.issuerow').forEach((row:Element)=>{
    const button = document.createElement('button')
    button.textContent = 'C'
    button.onclick = function copyTicket(){
        const ticketCode = row.getAttribute('data-issuekey')!
        const ticketName = row.querySelector('.summary')!.textContent!.trim()
        copyToClipboard(ticketCode, ticketName)
    }
    button.className = 'list-copy'

    const cell = document.createElement('td')
    cell.append(button)
    row!.prepend(cell)
})