<link rel="stylesheet" href="/styles/header.css">
<script defer src="/scripts/header.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">



<div class="header">
    <span class="logo">IRVIN</span>
    <nav class="nav">
        <span><a href="#home">Home</a></span>
        <span><a href="#about">About</a></span>
        <span><a href="#skills">Skills</a></span>
        <span><a href="">Contact</a></span>
        <span><button><img src="/assets/icons/sun-unactive.svg" alt="Light mode"></button></span>
        <span><button><img src="/assets/icons/moon-unactive.svg" alt="Dark mode"></button></span>
    </nav>
    <nav class="nav-p">
        <span><button><img src="/assets/icons/menu.svg" alt="Light mode" onclick="openPop()"></button></span>
    </nav>
</div>

<!-- Mobile menu -->
<div class="menu">     
        <div class="popup-content">
          <div class="close" onclick="closePop()">
            <img src="/assets/icons/close.svg" alt="close">
          </div>
          <div class="nav-menu" >
            <br>
            <span class="br" onclick="closePop()">
              <img src="/assets/icons/home.svg" alt=""><a href="#home">Home</a>
            </span>
            <br>
            <span class="br" onclick="closePop()">
              <img src="/assets/icons/detail.svg" alt=""><a href="#about">About</a>
            </span>
            <br>
            <span class="br" onclick="closePop()">
              <img src="/assets/icons/skills.svg" alt=""><a href="#skills">Skills</a>
            </span>
            <br>
            <span class="br" onclick="closePop()">
              <img src="/assets/icons/contact.svg" alt=""><a href="">Contact</a>
            </span>
            <br>
            <span>
              <button class="br js-light-mode"><img src="/assets/icons/sun-unactive.svg" alt="Light mode">Light Mode</button>
            </span>
            <br>
            <span><button class="br js-dark-mode"><img src="/assets/icons/moon-unactive.svg" alt="Dark mode">Dark Mode</button></span>
          </div>
        </div>                   
</div>