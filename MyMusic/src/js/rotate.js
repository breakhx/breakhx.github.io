let deg = 0;
let timer = null;
(function ($, root) {
    function Orotate (flag) {
        clearInterval(timer);
        timer = setInterval(function () {
            deg ++;
            if (flag) {
                $(".img-wrapper").css({
                    transform: `rotateZ(${deg}deg)`,
                    transition: "none"
                })
            } else {
                $(".img-wrapper").css({
                    transform: `rotateZ(${deg}deg)`,
                    transition: "all 1s ease-out"
                })
            }
            
        }, 100);
    }
    root.rotate = Orotate;
})(window.Zepto, window.player || (window.player = {}))