Vue.component('vuereadfooter', {
    template: 
    `<footer>
        <div class="rowfooter">
            <div class="footer-navigation">
                <h3><a href="#">ehadzah</a></h3>
                <p class="links"><a href="#">Web-Dev</a><strong> · </strong><a href="#">App-Dev</a><strong> ·
                    </strong><a href="#">Data-Hawk</a><strong>
                        ·
                    </strong><a href="">AI-Architech</a></p>
                <p class="company-name">ehadzah © 2020 </p>
            </div>
            <div class="footer-contacts">
                <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                    <p> Accra, Ghana</p>
                </div>
                <div><i class="fa fa-phone footer-contacts-icon"></i>
                    <p class="footer-center-info email text-left">
                        <a href="tel: +233 50 545 8317 ">+233 50 545 8317</a> | <a href="tel:+233 54 989 2349">+233 54
                            989 2349</a>
                    </p>
                </div>
                <div><i class="fa fa-envelope footer-contacts-icon"></i>
                    <p> <a href="mailto: ehadzah@gmail.com" target="_blank">ehadzah@gmail.com</a></p>
                </div>
            </div>
            
            <div class="footer-about">
                <h4>About ehadzah:</h4>
                <p> Writer(poems & codes) | Web & App developer | Data analysis | AI engineeer </p>
                <div class="social-links social-icons"><a href="https://twitter.com/Yawfestive"><i
                            class="fa fa-twitter"></i></a>

                    <a href="https://linkedin.com/in/hadzah-emmanuel-351843116" rel="nofollow"><i
                            class="fa fa-linkedin"></i></a>
                    <a href="https://github.com/yawmanuel" rel="nofollow"><i class="fa fa-github"></i></a></div>

            </div>
        </div>
    </footer>`
    
});

new Vue({
    el:'#vuefooter'
});