<template>
  <div class="container">
    <p>自定义样式布局</p>
    <NuxtLink to="/">/home</NuxtLink>
    <slot name="title"></slot>
    <slot name="content"></slot>
    <slot></slot>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {},
  setup (props) { }
};
</script>

<style lang="less"></style>
