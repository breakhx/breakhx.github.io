"use strict";!function(o,l){l.render=function(n){var i,a,s,e;i=n.image,(a=new Image).onload=function(){l.blurImg(a,o("body")),o(".img-wrapper img").attr("src",i)},a.src=i,e='<div class="song-name">'.concat((s=n).song,'</div>\n    <div class="songer-name">').concat(s.singer,'</div>\n    <div class="album">').concat(s.album,"</div>"),o(".song-info").html(e),s.isLike?o(".like").addClass("liking"):o(".like").removeClass("liking")}}(window.Zepto,window.player||(window.player={}));