Vue.component('vuetopread', {
    template:
    `<article class="yartrend">
    <div class="spanhr">TOP READ</div> 
    <hr>
<a href="../read/The-Future-of-Reality-AR-and-VR.html">
    <figure>
        <Img src="../assets/img/img-read/realitypic.jpg"/>
        <h2>The Future of Reality: AR and VR</h2>
    </figure>
</a>
<a href="../read/The-New-Internet-Starlink-Connecting-the-Stars.html">
    <figure>
        <Img src="../assets/img/img-read/starlinkmainpic.jpg"/>
        <h2>The New Internet: Starlink, connecting the stars</h2>
    </figure>
</a>
</article>`
});

new Vue({
    el:'#topread'
});
