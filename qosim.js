(function(){
  var MAX=4900,world=document.getElementById('world'),objs=[].slice.call(document.querySelectorAll('.obj')),
      pb=document.getElementById('pb'),mt=document.getElementById('m'),hint=document.getElementById('hint');
  var vm=Math.min(innerWidth,innerHeight)/100,cam=0,target=0,mx=0,my=0,tx=0,ty=0;
  var stops=['#2b2cff','#7a1fff','#e8365d','#14124a'];
  function hx(h){return[1,3,5].map(function(i){return parseInt(h.substr(i,2),16)})}
  function mix(p){var s=p*(stops.length-1),i=Math.min(Math.floor(s),stops.length-2),f=s-i,a=hx(stops[i]),b=hx(stops[i+1]);
    return'rgb('+a.map(function(v,k){return Math.round(v+(b[k]-v)*f)}).join(',')+')'}
  function op(r){if(r<-1800)return 0;if(r<-900)return(r+1800)/900;if(r<150)return 1;if(r<650)return 1-(r-150)/500;return 0}

  objs.forEach(function(o){
    o.dataset.pos='translate('+(-50)+'%,'+(-50)+'%) translate3d('+(+o.dataset.x*vm)+'px,'+(+o.dataset.y*vm)+'px,'+(-o.dataset.z)+'px)';
    o.style.transform=o.dataset.pos;
  });

  function read(){var h=document.documentElement.scrollHeight-innerHeight;target=(h>0?scrollY/h:0)*MAX}
  addEventListener('scroll',read,{passive:true});read();
  addEventListener('resize',function(){vm=Math.min(innerWidth,innerHeight)/100;objs.forEach(function(o){
    o.dataset.pos='translate(-50%,-50%) translate3d('+(+o.dataset.x*vm)+'px,'+(+o.dataset.y*vm)+'px,'+(-o.dataset.z)+'px)';o.style.transform=o.dataset.pos})});
  addEventListener('pointermove',function(e){tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2});
  document.getElementById('back').onclick=function(){scrollTo({top:0,behavior:'smooth'})};

  function frame(){
    cam+=(target-cam)*.08; mx+=(tx-mx)*.06; my+=(ty-my)*.06;
    world.style.transform='translateZ('+cam+'px) rotateY('+(-mx*4)+'deg) rotateX('+(my*3)+'deg)';
    for(var i=0;i<objs.length;i++){
      var o=objs[i],r=cam-o.dataset.z,a=op(r);
      o.style.opacity=a;o.style.visibility=a<.01?'hidden':'visible';o.style.pointerEvents=a>.7?'auto':'none';
    }
    var p=Math.min(Math.max(cam/MAX,0),1);
    document.body.style.background=mix(p);
    pb.style.width=(p*100)+'%';mt.textContent=Math.round(cam)+' m';
    hint.style.opacity=cam>120?0:1;
    requestAnimationFrame(frame);
  }
  frame();
})();