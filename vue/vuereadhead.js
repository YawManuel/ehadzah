// Vue.component('vuereadhead', {


// });

new Vue({
    el: '#vueheader',

//     methods: {
//      togglemenu() {
//     const menuBtn = document.querySelector('.menu-btn');
//     const hamburger = document.querySelector('.menu-btn__burger');
//     const nav = document.querySelector('.nav');
//     const menuNav = document.querySelector('.menu-nav');
//     const navItems = document.querySelectorAll('.menu-nav__item');

//     let showMenu = false;

//     if(!showMenu) {
//         hamburger.classList.add('open');
//         nav.classList.add('open');
//         menuNav.classList.add('open');
//         navItems.forEach(item => item.classList.add('open'));

//         showMenu = true;
//     } else {
//         hamburger.classList.remove('open');
//         nav.classList.remove('open');
//         menuNav.classList.remove('open');
//         navItems.forEach(item => item.classList.remove('open'));

//         showMenu = false;
//     }
// }

//     },

    template:
    `<header class="ynavig">
        <div class="dnav">
            <span class="yehadzah"><a href="../index.html">ehadzah</a></span>
            <div class="ynavitems">
                <ul class="ynavitems">
                    <div class="droppdown  anchorlistyle3">

                        <a href="" class=" ynavlist menu-nav__link anchorstyle2">Insights <i class="fa fa-caret-down"
                                aria-hidden="true"></i></a>
                        <div class="droppdown-content">
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
                        </div>

                    </div>
                    <li class="ynavlist">
                        <a href="../read/Blog.html" class="menu-nav__link">
                            <span style="color: red">More</span> Read
                        </a>
                    </li>
                </ul>
            </div>

            <div @click="togglemenu" class="menu-btn">
                <span class="menu-btn__burger"></span>
            </div>
        </div>

        <nav class="nav">
            <ul class="menu-nav">
                <a href="" class="insights">
                    Insights:
                </a>
                <li class="menu-nav__item shift">
                    <a href="../Dev.html" class="menu-nav__link">
                        Dev
                    </a>
                </li>
                <li class="menu-nav__item shift navspace">
                    <a href="../Data.html" class="menu-nav__link">
                        Data
                    </a>
                </li>
                <li class="menu-nav__item shift active navspace">
                    <a href="../AI.html" class="menu-nav__link">
                        AI
                    </a>
                </li>
                <li class="menu-nav__item navspace">
                    <a href="../read/Blog.html" class="menu-nav__link">
                        <span style="color: red">More</span> Read
                    </a>
                </li>
            </ul>
        </nav>
    </header>`

});