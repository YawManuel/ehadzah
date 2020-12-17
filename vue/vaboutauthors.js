Vue.component('vaboutauthors', {
    template:
      `<div>
        <hr style="margin-top: 7%";>
            <img class="author-bio" src="../assets/img/img-read/AuthorBioPic.jpg" alt="">
            <h4 style="font-family: 'Franklin Gothic Medium'; display: inline; display: inline;">About Author</h4>
            <p style="line-height: 1.5; font-family: 'Lucida Sans'; font-size: 80%; margin-bottom: 2%"> Am Hadzah, Emmanuel
                #Writer(Poems&Codes). Studied Biotechnology; Software architect; Data Analyst, using the Python
                snake
                in telling stories with data. Lets have a cup of coffee together as we talk
                about AI/ML, biotech, blockchain, general sci-tech, tech-business models and maybe
                the love beyond our darkmatter 😊
            </p>
            <span style="font-family: 'Franklin';">lets engage on:</span>
            <a style="padding-left: 2%; font-size: 150%;" href="https://twitter.com/ehadzah_" rel="nofollow"><i
                    class="fa fa-twitter"></i></a>
            <a style="padding-left: 2%; font-size: 150%;" href="https://linkedin.com/in/hadzah-emmanuel-351843116"
                rel="nofollow"><i class="fa fa-linkedin"></i></a>
            <a style="padding-left: 2%; font-size: 150%;" href="https://github.com/yawmanuel" rel="nofollow"><i
                    class="fa fa-github"></i></a>
           <hr></hr>         
        </div>`
});

new Vue({
    el:'#aboutauthor'
});