"use strict";var nowdata,len,Naudio,nowIndex=0;!function(n,o){n.ajax({type:"GET",url:"/MyMusic/dist/mock/data.json",success:function(n){len=(nowdata=n).length,Naudio=player.audio(nowdata[nowIndex]),o.render(n[nowIndex]),o.bind(n[nowIndex]),o.renderList(n),o.touchEvent()},error:function(){}})}(window.Zepto,window.player||(window.player={}));