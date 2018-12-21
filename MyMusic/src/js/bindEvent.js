let status = "stop";
(function ($, root) {
    function bindEvent (data) {
        $(".like").on("click", function (e) {
            e.stopPropagation();
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
            root.rotate(false);
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
            root.rotate(false);
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
                root.rotate(false);
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
        $(".song-list").on("click", ".item",function (e) {
            e.stopPropagation();
            $(".item").removeClass("item-bac")
            $(this).addClass("item-bac");
            let index = $(this).index();
            Naudio.pause();
            Naudio = root.audio(nowdata[index]);
            root.render( nowdata[index] );
            Naudio.play();
            root.rotate(false);
            $(".play").addClass("pause");
        })

    }
    
    root.bind = bindEvent;
})(window.Zepto, window.player || (window.player = {}))