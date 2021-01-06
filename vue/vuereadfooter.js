Vue.component('vuereadfooter', {
    template: 
    `<footer>
        <div class="rowfooter">
            
            <div class="footer-contacts">
                 <h3><a href="#">Contact Us</a></h3>
                <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                    <p> Accra, Ghana</p>
                </div>
                <div><i class="fa fa-phone footer-contacts-icon"></i>
                    <p class="footer-center-info email text-left">
                       <a href="tel:+233 54 989 2349">+233 54 989 2349</a>
                    </p>
                </div>
                <div><i class="fa fa-envelope footer-contacts-icon"></i>
                    <p> <a href="mailto: ehadzah@gmail.com" target="_blank">ehadzah@gmail.com</a></p>
                </div>
            </div>
            
            <div class="footer-about">
                <div class="social-links social-icons">
                <a href="https://twitter.com/Yawfestive"><i class="fa fa-twitter"></i></a>
                <a href="https://linkedin.com/in/hadzah-emmanuel-351843116" rel="nofollow"><i
                            class="fa fa-linkedin"></i></a>

            </div>
             <p class="company-name">ehadzah © 2020-2021 </p>
        </div>
    </footer>`
    
});

new Vue({
    el:'#vuefooter'
});