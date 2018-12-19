(function ($, root) {
    function OAudio (data) {
        let audio = new Audio(data.audio);
        return audio;
    }
    root.audio = OAudio;
})(window.Zepto, window.player || (window.player = {}))