
let nowdata;
let nowIndex = 0;
let len;
(function ($, root) {
$.ajax({
    type: "GET",
    url: "../mock/data.json",
    success (data) {
        nowdata = data;
        len = data.length;
        root.render(data[nowIndex]);
        root.bind(data[nowIndex]);
    },
    error () {
    }
})


})(window.Zepto, window.player || (window.player = {}))