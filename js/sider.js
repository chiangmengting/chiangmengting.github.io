// 漢堡菜單動畫
const element = document.getElementById('data-menu-toggle');
const myPhoneMenu = document.getElementById('myPhoneMenu');

element.onclick = function () {
    this.classList.toggle('active');
    myPhoneMenu.classList.toggle('myPhoneMenuShow');
}

