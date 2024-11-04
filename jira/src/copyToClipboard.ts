function copyToClipboard(ticketCode: string, ticketName: string):void {
    navigator.clipboard.write([
        new ClipboardItem({
            'text/plain': new Blob([`[${ticketCode}] ${ticketName}`],{type: 'text/plain'}),
            'text/html': new Blob([`<a href="https://jira.pepfar.net/browse/${ticketCode}">[${ticketCode}]</a> ${ticketName}`],{type: 'text/html'}),
        }),
    ]);
}