let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body')
themeSwitch.onclick = function () {
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
}
let menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menutoggle.onclick = function () {
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}