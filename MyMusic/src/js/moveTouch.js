(function ($, root) {
    function touchEvent () {
        let startX, startY, endX, endY;
        $(".wrapper").on("touchstart", function (e) {
            startX = (parseInt(e.changedTouches[0].pageX));
            startY = (parseInt(e.changedTouches[0].pageY));
        }).on("touchend", function (e) {
            endX = (parseInt(e.changedTouches[0].pageX));
            endY = (parseInt(e.changedTouches[0].pageY));
            if (startX - endX >= 120) {
                if (nowIndex === len - 1) {
                    nowIndex = 0;
                } else {
                    nowIndex ++;
                };
                Naudio.pause();
                Naudio = root.audio(nowdata[nowIndex]);
                Naudio.play();
                deg = 0;
                root.rotate(true);
                root.render( nowdata[nowIndex] )
                if (status === "stop") {
                    $(".play").addClass("pause");
                    status = "play";
                }
            } else if (startX - endX <= -120){
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
            }
        })
    }
    root.touchEvent = touchEvent;
})(window.Zepto, window.player || (window.player = {}))