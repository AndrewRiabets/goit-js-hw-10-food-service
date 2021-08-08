import menuTpl from './templates/menu.hbs';
import menuList from './menu.json'

const refs = {
    themeSwitch: document.querySelector('#theme-switch-toggle'),
    bodyTheme: document.querySelector('body'),
    menuContainer: document.querySelector('.js-menu')
}

// смена темы
refs.themeSwitch.addEventListener('change', onSwitchTheme);

function onSwitchTheme() {
    if (!refs.bodyTheme.classList.contains('dark-theme')) {
        refs.bodyTheme.classList.add('dark-theme');
        refs.bodyTheme.classList.remove('light-theme');
    } else {
        refs.bodyTheme.classList.remove('dark-theme');
        refs.bodyTheme.classList.add('light-theme');
    };
};
//

// Сохранение темы в localstorage и запуск темной темы
refs.themeSwitch.addEventListener('change', onDarkTheme);
loadDarkTheme();

function onDarkTheme () {
    refs.themeSwitch.checked ?
        localStorage.setItem('darkTheme', refs.themeSwitch.checked) :
        localStorage.removeItem('darkTheme', refs.themeSwitch.checked);
};

function loadDarkTheme() {
    const sevedTheme = JSON.parse(localStorage.getItem('darkTheme'));
    if (sevedTheme) {
        refs.themeSwitch.checked = true;
        refs.bodyTheme.classList.add('dark-theme');
    }
}
// 

// Создание разметки
const menuMarkup = createMenuMarkap(menuList);
refs.menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkap(menuList) {
    return menuList.map(menuTpl).join('');
}
// 






