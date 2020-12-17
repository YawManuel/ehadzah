Vue.component('vuereadhead', {
    template:
        `<header class="ynavig">
        <div class="dnav">
            <span class="yehadzah"><a href="../index.html">ehadzah</a></span>
            <div class="ynavitems">
                <ul class="ynavitems">
                    <li class="ynavlist">
                        <a href="../Dev.html" class="menu-nav__link">
                            Dev
                        </a>
                    </li>
                    <li class="ynavlist"> <a href="../Data.html" class="menu-nav__link">
                            Data
                        </a>
                    </li>
                    <li class="ynavlist">
                        <a href="../AI.html" class="menu-nav__link">
                            AI
                        </a>
                    </li>
                    <li class="ynavlist">
                        <a href="../read/Articles.html" class="menu-nav__link">
                            <span style="color: red">More</span> Read
                        </a>
                    </li>
                </ul>
            </div>
            <a href="tel: +233 54 989 2349" class="phonecall"><i class="fa fa-phone"></i></a>
            <div class="menu-btn">
                <span class="menu-btn__burger"></span>
            </div>
        </div>

        <nav class="nav">
            <ul class="menu-nav">
                <li class="menu-nav__item">
                    <a href="../Dev.html" class="menu-nav__link">
                        Dev
                    </a>
                </li>
                <li class="menu-nav__item navspace">
                    <a href="../Data.html" class="menu-nav__link">
                        Data
                    </a>
                </li>
                <li class="menu-nav__item active navspace">
                    <a href="../AI.html" class="menu-nav__link">
                        AI
                    </a>
                </li>
                <li class="menu-nav__item navspace">
                    <a href="../read/The-Future-of-Reality-AR-and-VR.html" class="menu-nav__link">
                        Read
                    </a>
                </li>
                <li class="menu-nav__item callbutton">
                    <a href="tel: +233 54 989 2349" class="menu-nav__link">
                        <i class="fa fa-phone"></i>
                    </a>
                </li> 
            </ul>
        </nav>
    </header>`,

    methods: { function () {
           const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

    }
    }
     
});

new Vue({
    el: '#vueheader',
    
});