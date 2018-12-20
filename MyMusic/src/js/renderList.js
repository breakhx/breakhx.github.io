(function ($, root) {
    function renderList (data) {
        let str = '';
        data.forEach((item, index)=> {
            str += `<li class="item">
                        <img src="${item.image}">
                        <p class="song-name">${item.song}</p>
                        <p class="songer-name">${item.singer}</p>
                    </li>`
        });
        $(".root").html(str)
    }

    root.renderList = renderList;

})(window.Zepto, window.player || (window.play={}))