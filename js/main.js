//scroll section

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 768) {
        new fullpage('#fullpage', {
            anchors: ['ve-chung-toi', 'truc-tiep-bong-da', 'ty-so-bong-da', 'hoat-dong-xa-hoi', 'tai-tro-&-lien-he'],
            navigation: true,
            onLeave: function (origin, destination, direction) {
                // chạy animation ở đây
            }
        });
    }
});

const menu = document.querySelector('.menu');
const bgMenu = document.querySelector('.bg-menu');
const headerBt = document.querySelector('.header-bt-mb');
const close = document.querySelector('.close');
const listMenuItems = document.querySelectorAll('.list-menu > ul > li > a');

menu.addEventListener('click', () => {
bgMenu.style.display = 'block';
headerBt.classList.add('active');
});

bgMenu.addEventListener('click', () => {
bgMenu.style.display = 'none';
headerBt.classList.remove('active');
});

close.addEventListener('click', () => {
bgMenu.style.display = 'none';
headerBt.classList.remove('active');
});

listMenuItems.forEach(item => {
item.addEventListener('click', () => {
    bgMenu.style.display = 'none';
    headerBt.classList.remove('active');
});
});