Vue.component('vuereadhead', {
    template:
        `<header class="ynavig">
        <div class="dnav">
            <span class="yehadzah"><a href="../index.html">ehadzah</a></span>
            <div class="ynavitems">
                <ul class="ynavitems">
                    <li class="ynavlist">
                        <a href="../App-&-Website.html" class="menu-nav__link">
                            App-Website
                        </a>
                    </li>
                    <li class="ynavlist"> <a href="../Data.html" class="menu-nav__link">
                            Data
                        </a>
                    </li>
                    <li class="ynavlist">
                        <a href="../Cloud.html" class="menu-nav__link">
                            Cloud
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
                    <a href="../App-&-Website.html" class="menu-nav__link">
                        App & Website
                    </a>
                </li>
                <li class="menu-nav__item navspace">
                    <a href="../Data.html" class="menu-nav__link">
                        Data
                    </a>
                </li>
                <li class="menu-nav__item active navspace">
                    <a href="../Cloud.html" class="menu-nav__link">
                        Cloud
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

    methods: {
        toggle: function () {
            const menuBtn = this.$refs.menu-btn;
            const hamburger = this.$refs.menu-btn__burger;
            const nav = this.$refs.nav;
            const menuNav = this.$refs.menu-nav;
            const navItems = thsi.$refs.menu-nav__item;

            let showMenu = false;

            menuBtn.addEventListener('click', toggleMenu);

            function toggleMenu() {
                if (!showMenu) {
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