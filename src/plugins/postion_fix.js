const pos_fix = {};

pos_fix.install = function(Vue,options){
    let pos_fix_time_handle = null;

    document.body.addEventListener('focus',function(e){
        const n = e.target.nodeName.toLowerCase()
        if( n == 'input' || n == 'textarea'){
            clearTimeout(pos_fix_time_handle)
        }
    },true)

    Vue.directive('pos_fix',{
        bind:function(el){
           el.addEventListener('blur',function(){
                pos_fix_time_handle = setTimeout(function(){
                    if(document.activeElement == document.body){
                        const h = document.body.scrollTop || document.documentElement.scrollTop;
                        window.scrollTo(0, h+1);
                    }
                },200)
            })
        }
    })
    
}

export default pos_fix