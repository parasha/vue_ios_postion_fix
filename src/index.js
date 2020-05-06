import Vue from 'vue'

// 页面
import app from './app.vue'

// 插件、组件
// 这种方式其实不怎么好用，不如直接写一个全局的事件监听
// import pos_fix from 'vue_ios_fixed_postion_bug_fix'
// Vue.use(pos_fix)
import './plugins/inputPositionFix';


new Vue({
    render: h => h(app),
}).$mount('#app')