let status = "stop";
(function ($, root) {
    function bindEvent (data) {
        let Naudio = root.audio(nowdata[nowIndex]);
        $(".like").on("click", function () {
            $(this).toggleClass("liking");
        });
        $(".prev").on("click", function () {
            if (nowIndex === 0) {
                nowIndex = len - 1
            } else {
                nowIndex --;
            };
            if (status === "stop") {
                $(".play").addClass("pause");
                status = "play";
            }
            clearInterval(timer);
            deg = 0;
            console.log("click", deg)
            root.rotate(true);
            Naudio.pause();
            Naudio = root.audio(nowdata[nowIndex]);
            Naudio.play();
            root.render( nowdata[nowIndex] );
        });
        $(".next").on("click", function () {
            if (nowIndex === len - 1) {
                nowIndex = 0;
            } else {
                nowIndex ++;
            };
            if (status === "stop") {
                $(".play").addClass("pause");
                status = "play";
            }
            clearInterval(timer);
            deg = 0;
            console.log("click", deg)
            root.rotate(true);
            Naudio.pause();
            Naudio = root.audio(nowdata[nowIndex]);
            Naudio.play();
            root.render( nowdata[nowIndex] );
        })
        $(".play").on("click", function () {
            if (status === "stop") {
                Naudio.play();
                status = "play";
                root.rotate();
            } else if (status === "play") {
                Naudio.pause();
                status = "stop";
                clearInterval(timer);
            }
            $(this).toggleClass("pause");
        })
    }
    
    root.bind = bindEvent;
})(window.Zepto, window.player || (window.player = {}))