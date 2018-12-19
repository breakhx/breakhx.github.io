(function ($, root) {

function renderimg (src) {
    let img = new Image();
    img.onload = function () {
        root.blurImg(img, $("body"));
        $('.img-wrapper img').attr("src", src);
    }
    img.src = src;
}

function renderInfo (data) {
    let content = `<div class="song-name">${data.song}</div>
    <div class="songer-name">${data.singer}</div>
    <div class="album">${data.album}</div>`
    $(".song-info").html(content);
    if (data.isLike) {
        $(".like").addClass("liking");
    }else {
        $(".like").removeClass("liking");
    }
}

root.render = function (data) {
    renderimg(data.image);
    renderInfo(data);
};

})(window.Zepto, window.player || (window.player = {}))