const sidebar = document.querySelector('.sidebar');
const modalUser = document.querySelector('.modal--user');

let contentWidth = sidebar.querySelector('.sidebar__nav').clientWidth;
const options = sidebar.querySelectorAll('.option--js');
const optionSvg = sidebar.querySelectorAll('.option__svg');
const optionSvgWidth = optionSvg[0].clientWidth;
const imgLogoWidth = sidebar.querySelector('.logo__img').clientWidth;
const imgAvatarWidth = sidebar.querySelector('.user__img').clientWidth;
const sidebarWrapperLogo = sidebar.querySelector('header .sidebar__wrapper');
const sidebarWrapperUser = sidebar.querySelector('.sidebar__wrapper--user');
let sidebarWrapperUserWidth = sidebarWrapperUser.clientWidth;

const adjustmentWidth = function (logo, user, svg) {

    sidebarWrapperLogo.style.width = logo + 'px';
    sidebarWrapperUser.style.width = user + 'px';

    Array.from(options).forEach((option) => {
        option.style.width = svg + 'px';
    });
}

if (sidebar !== null) {
    sidebar.classList.add('sidebar--closed');
    adjustmentWidth(imgLogoWidth, imgAvatarWidth, optionSvgWidth);

    sidebar.querySelector('.sidebar__btn').addEventListener('click', () => {

        if (sidebar.classList.contains('sidebar--closed')) {
            sidebar.classList.remove('sidebar--closed');
            sidebar.classList.add('sidebar--open');

            if (sidebarWrapperUserWidth > contentWidth) contentWidth = sidebarWrapperUserWidth;
            adjustmentWidth(contentWidth, contentWidth, contentWidth);
        } else {
            sidebar.classList.add('sidebar--closed');
            sidebar.classList.remove('sidebar--open');
            adjustmentWidth(imgLogoWidth, imgAvatarWidth, optionSvgWidth);
        }
    });

    sidebar.querySelector('.sidebar__user').addEventListener('click', () => {
        if (modalUser !== null) {
            modalUser.classList.toggle('modal--open');
            if (!modalUser.classList.contains('modal--open')) {

                modalUser.style.maxHeight = 0 + 'px';
                sidebar.querySelector('.sidebar__user').style.backgroundColor = 'white';
            } else {
                sidebar.querySelector('.sidebar__user').style.backgroundColor = 'rgb(241 238 238)';
                modalUser.style.maxHeight = modalUser.scrollHeight + "px";
            }
        }
    });
}