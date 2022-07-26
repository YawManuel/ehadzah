Vue.component('headtag', {

    template:
        `<section>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171994249-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-171994249-1');
    </script>

    <script type="text/javascript"
        src="https://platform-api.sharethis.com/js/sharethis.js#property=5f6c14cf86d2b30012e1765a&product=sticky-share-buttons"
        async="async"></script>


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <link rel="canonical" href="https://ehadzah.com/read">
    <link rel="icon" type="image/png" href="../assets/ehadzahFavicon.png">
    <link rel="stylesheet" href="../css/css-read/pg-Read.css">
    <link rel="stylesheet" href="../assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="../css/de-General-Styles.css">
</section>`,

mounted()  {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'UA-171994249-1');
        }
    
});

new Vue({
    el: '#headtag'
});