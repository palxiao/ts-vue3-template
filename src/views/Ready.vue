<template>
  <router-view />
</template>

<script type="ts">
import { onMounted, nextTick, getCurrentInstance, defineComponent } from "vue";
export default defineComponent({
  setup() {
    onMounted(() => {
      const { proxy } = getCurrentInstance();
      // console.log(internalInstance.appContext.config.globalProperties);
      console.log('is ios ? :', proxy.$utils.isIOS());
    });
  },
  async created() {
    await nextTick();
    console.log('Vue3 Setup 写法', this);
  },
});
</script>

<style>
</style>
