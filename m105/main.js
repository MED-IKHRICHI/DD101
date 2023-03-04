function getTime() {
    const currentDate = new Date();

    // time 1
    const second = (currentDate.getSeconds() <= 9) ? "0" + currentDate.getSeconds() : currentDate.getSeconds()

    document.getElementById('time').innerHTML = "<h1>" + currentDate.getHours() + "-" + currentDate.getMinutes() + "-" + second + "</h1>"


    // time 2

    document.getElementById('hours').style.transform = 'rotate(' + (currentDate.getHours()%12) * 30 + 'deg)'

    document.getElementById('minute').style.transform = 'rotate(' + currentDate.getMinutes() *6+'deg)'

    document.getElementById('second').style.transform = 'rotate(' + currentDate.getSeconds() * 6 + 'deg)'
}

getTime()

setInterval(getTime, 1000)

/*setInterval(() => {
    document.getElementById('inc').innerText = parseInt(document.getElementById('inc').innerText)+1
}, 1000);*/

setTimeout(() => {
    document.getElementById('inc').innerText = parseInt(document.getElementById('inc').innerText) + 1
}, 5000);



