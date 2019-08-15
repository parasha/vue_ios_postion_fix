<template>
  <div id='page'>
    <p>1，
      <input type="text" v-pos_fix>
    </p>
    <p>2，
      <input type="text" v-pos_fix>
    </p>
    <p>3，
      <input type="text" v-pos_fix>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {
    
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#page{
    margin: 550px 10px;
}
input{
  border: 1px solid #999999;
}
</style>
