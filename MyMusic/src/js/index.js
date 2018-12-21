
let nowdata;
let nowIndex = 0;
let len, 
    Naudio;
(function ($, root) {
$.ajax({
    type: "GET",
    url: "/MyMusic/dist/mock/data.json",
    success (data) {
        nowdata = data;
        len = data.length;
        Naudio = player.audio(nowdata[nowIndex]);
        root.render(data[nowIndex]);
        root.bind(data[nowIndex]);
        root.renderList(data);
        root.touchEvent();
    },
    error () {
    }
})


})(window.Zepto, window.player || (window.player = {}))