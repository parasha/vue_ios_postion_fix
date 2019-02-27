import Vue from 'vue'

// 页面
import app from './app.vue'

// 插件、组件
import pos_fix from './plugins/postion_fix'

Vue.use(pos_fix)


new Vue({
    render: h => h(app),
}).$mount('#app')