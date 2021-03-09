const themeSwitcher = document.querySelector('#themeswitcher');

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
});

const defaultTheme = localStorage.getItem('theme') || 'theme-light';
setTheme(defaultTheme);

themeSwitcher.addEventListener('change', (e) => {
    setTheme(e.target.value);
})


function setTheme(theme) {
    theme = theme || 'theme-light';

    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
    themeSwitcher.value = theme;
}