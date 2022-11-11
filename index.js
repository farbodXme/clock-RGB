setInterval(() => {
    let date = new Date()
    let clock = document.getElementById('time')
    clock.innerHTML =
    date.getHours()+":"+
    date.getMinutes()+":"+
    date.getSeconds()+" farbodxme"
 }, 1000);
