"use strict";!function(o,n){(window.player||(window.play={})).renderList=function(n){var c="";n.forEach(function(n,o){c+='<li class="item">\n                        <img src="'.concat(n.image,'">\n                        <p class="song-name">').concat(n.song,'</p>\n                        <p class="songer-name">').concat(n.singer,"</p>\n                    </li>")}),o(".root").html(c)}}(window.Zepto);