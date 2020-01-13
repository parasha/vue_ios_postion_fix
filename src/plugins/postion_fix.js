const pos_fix = {};

pos_fix.install = function(Vue,options){
    let pos_fix_time_handle = null;

    Vue.directive('pos_fix',{
        bind:function(el){
           el.addEventListener('blur',function(){
                pos_fix_time_handle = setTimeout(function(){
                  scroll();
                },200)
            });
            el.addEventListener('focus',function(){
              clearTimeout(pos_fix_time_handle)
          });
        }
    })
}

function scroll(){
  if(document.activeElement == document.body){
    const h = document.body.scrollTop || document.documentElement.scrollTop;
    window.scrollTo(0, h+1);
}
}

export default pos_fix