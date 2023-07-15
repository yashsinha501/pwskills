let hour = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

const time = () => {
   let currentTime = new Date();
   let h = currentTime.getHours();
   let m = currentTime.getMinutes()
   let s = currentTime.getSeconds()

    // Convert to 12-hour format
    h = h % 12 || 12;

    // Add leading zeros
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

   hour.textContent =  h;
   min.innerText = m;
   sec.innerText = s
}

setInterval(time, 1000);