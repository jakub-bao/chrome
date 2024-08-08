window.addEventListener('keydown', ({key}) => {
    if (key!=='i') return
    console.log('hi')

    const input:HTMLInputElement = document.getElementById(`entry-9047-2024-08-01`) as HTMLInputElement
    input.focus()
    input.value = '8'

    // const event = new MouseEvent("click", {
    //     view: window,
    //     bubbles: true,
    //     cancelable: true,
    // });
    // const cb = document.getElementById("checkbox");
    // const cancelled = !cb.dispatchEvent(event);

    // input.value = 8
})