setTimeout(() => {
    $(document).ready(function () {
        console.log("Image changer ready");

        var img1 = document.createElement('img'); 
        var img2 = document.createElement('img'); 
        var img3 = document.createElement('img'); 
        var img4 = document.createElement('img'); 
        var img5 = document.createElement('img'); 
        img1.src = 'tokyo.png';
        img2.src = 'paris.png';
        img3.src = 'bangkok.png'; 
        img4.src = 'tokyo2.png';
        img5.src = 'venice.png';

        var backgrounds = new Array(
            'tokyo.png'
            , 'paris.png'
            , 'bangkok.png'
            , 'tokyo2.png'
            , 'venice.png'
        );

        var current = 3;

        function nextBackground() {
            //t100 80%
            $("#background").css('opacity', .8);
            //t200 60%
            setTimeout(() => { $("#background").css('opacity', .6); }, 100);
            //t300 40%
            setTimeout(() => { $("#background").css('opacity', .4); }, 200);
            //t400 20%%
            setTimeout(() => { $("#background").css('opacity', .2); }, 300);
            //t500 switch
            setTimeout(() => {
                console.log("Changing background image.");
                current++;
                current = current % backgrounds.length;
                $("#background").attr("src", backgrounds[current]);
            }, 400);
            //t600 40%
            setTimeout(() => { $("#background").css('opacity', .4); }, 500);
            //t700 60%
            setTimeout(() => { $("#background").css('opacity', .6); }, 600);
            //t800 80%
            setTimeout(() => { $("#background").css('opacity', .8); }, 700);
            //t900 100%
            setTimeout(() => { $("#background").css('opacity', 1); }, 800);
        }

        nextBackground();
        setInterval(nextBackground, 6300);

        $("#background1").attr("src", backgrounds[2]);
    });
}, 6300);