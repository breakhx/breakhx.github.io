var btn = document.getElementsByClassName('shange')[0];
var ul = document.getElementsByClassName('last')[0];
var demo = document.getElementsByClassName('demo')[0];
var lock;
var lastHeight = ul.offsetHeight;
function move ( obj,target) {
    var ispeed = 12;
    var icur,timer = null;
    obj.timer = setInterval(function(){
        clearInterval(timer);
        if(lock){
            obj.style.height = obj.offsetHeight + ispeed + 'px';
        }else {
            obj.style.height = obj.offsetHeight - ispeed + 'px';
        }
        if(Math.abs(target - obj.offsetHeight) < ispeed) {
            obj.style.height = target + 'px';
        }
        if (obj.offsetHeight - 1 == target){
            console.log('stop');
            clearInterval(obj.timer);
        }
    },12)
}
btn.addEventListener('click',function(){
    if (ul.offsetHeight === 1) {
        console.log('1');
        lock = true;
        move(ul,302);
    } else {
        console.log('2');
        lock = false;
        move(ul,0);
    }
},false)
window.onscroll = function() {
    if(window.pageYOffset > 318){
        demo.style.display = 'block';
    }else {
        demo.style.display = 'none';
    }
}

