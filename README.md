### 安装

npm i vue_ios_fixed_postion_bug_fix

或者直接使用 src/plugins/postion_fix.js

### 使用
~~~js
// 引入
import pos_fix from 'vue_ios_fixed_postion_bug_fix'
Vue.use(pos_fix)

// input 标签添加 “v-pos_fix”
<template>
    <input type="text" v-pos_fix>
</template>
~~~