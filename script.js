let isDark = false;
let isLight = false;

// Check localStorage for the theme and default to light if not set
if (localStorage.getItem('theme') === 'dark') {
    activateDarkMode();
} else if (localStorage.getItem('theme') === 'light') {
    activateLightMode();
} else {
    // If neither dark nor light is set in localStorage, default to light mode
    activateLightMode();
}

function activateDarkMode() {
    document.body.style.backgroundImage = "linear-gradient(225deg, #784BA0 0%,  #FF3CAC 50%, #2B86C5 100%)";
    isDark = true;
    isLight = false;
    document.querySelector('.light img').src = "/assets/icons/sun-unactive.svg";
    document.querySelector('.dark img').src = "/assets/icons/moon-active.svg";
    document.querySelector('.light-2 img').src = "/assets/icons/sun-unactive.svg";
    document.querySelector('.dark-2 img').src = "/assets/icons/moon-active.svg";
    // Add class to the active button (dark mode)
    document.querySelector('.br.dark-2').classList.add('active-button');
    // Remove class from the other button
    document.querySelector('.br.light-2').classList.remove('active-button');
    localStorage.setItem('theme', 'dark'); // Store the theme in localStorage
}

function activateLightMode() {
    document.body.style.backgroundImage = "linear-gradient( 135deg,  #43CBFF 10%, #9708CC 100%)";
    isDark = false;
    isLight = true;
    document.querySelector('.dark img').src = "/assets/icons/moon-unactive.svg";
    document.querySelector('.light img').src = "/assets/icons/sun-active.svg";
    document.querySelector('.dark-2 img').src = "/assets/icons/moon-unactive.svg";
    document.querySelector('.light-2 img').src = "/assets/icons/sun-active.svg";
    // Add class to the active button (light mode)
    document.querySelector('.br.light-2').classList.add('active-button');
    // Remove class from the other button
    document.querySelector('.br.dark-2').classList.remove('active-button');
    localStorage.setItem('theme', 'light'); // Store the theme in localStorage
}

function toggleDark() {
    if (isDark === false) {
        // Switch to dark mode
        activateDarkMode();
    }
}

function toggleLight() {
    if (isLight === false) {
        // Switch to light mode
        activateLightMode();
    }
}
