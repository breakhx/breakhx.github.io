let status = "stop";
(function ($, root) {
    function bindEvent (data) {
        let Naudio = root.audio(nowdata[nowIndex]);
        $(".like").on("click", function () {
            $(this).toggleClass("liking");
        });
        $(".prev").on("click", function (e) {
            e.stopPropagation();
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
            root.rotate(true);
            Naudio.pause();
            Naudio = root.audio(nowdata[nowIndex]);
            Naudio.play();
            root.render( nowdata[nowIndex] );
        });
        $(".next").on("click", function (e) {
            e.stopPropagation();
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
            root.rotate(true);
            Naudio.pause();
            Naudio = root.audio(nowdata[nowIndex]);
            Naudio.play();
            root.render( nowdata[nowIndex] );
        })
        $(".play").on("click", function (e) {
            e.stopPropagation();
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
        $(".list").on("click", function (e) {
            e.stopPropagation();
            $(this).toggleClass("playlist");
            $(".song-list").toggleClass("item-temp")
        })
        $(".wrapper").on("click", function (e) {
            $(".song-list").removeClass("item-temp");
            $(".list").removeClass("playlist");
        })
    }
    
    root.bind = bindEvent;
})(window.Zepto, window.player || (window.player = {}))