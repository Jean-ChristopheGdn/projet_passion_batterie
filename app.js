const html = document.getElementsByTagName('html')[0];
const themeSwitch = document.getElementById('btn-dark-mode');

themeSwitch.addEventListener('click', () => {
    html.classList.toggle('nuit');
    if(html.classList.contains('nuit')){
        themeSwitch.innerHTML ='&#128526';
    } else {
        themeSwitch.innerHTML ='&#9789';
    }
})
