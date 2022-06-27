<!--
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-27 17:11:44
 * @Description: 
-->
<template>
  <div>
    <button class="aza-btn">{{ text }}</button>
  </div>
</template>
<script>
export default {
  name: "azq-button",
};
</script>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
<style lang="less" scoped>
.aza-btn {
  padding: 10px;
  background: rgb(26, 115, 232);
  color: #fff;
  font-size: 14px;
  border: 1px solid rgb(26, 115, 232);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: rgba(26, 115, 232, 0.9);
  }
}
</style>
