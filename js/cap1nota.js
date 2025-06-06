setInterval (() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours ();
    let minutes = date.getMinutes ();
    time.textContent = hours + ":" + minutes
});