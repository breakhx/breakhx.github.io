(function ($, root) {
    function OAudio (data) {
        if (data.audio) {
            let audio = new Audio(data.audio);
            $(audio).on("ended", function (e) {
                console.log ("播放完了")
                $(".next").trigger("click");
            })
            return audio;
        }
        
    }
    root.audio = OAudio;
})(window.Zepto, window.player || (window.player = {}))