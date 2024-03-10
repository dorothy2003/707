<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-app-bar
      round
      image="https://pic.rmb.bdstatic.com/bf06460dea447e65c0536ef7ec366f9a.jpeg"
      image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    一带一路
    <template #left>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="menu" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-icon name="translate" size="24" />
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="map-marker-radius" :size="24" />
      </var-button>
      <var-icon name="account-circle" size="24" @click="login()"/>  <br>
    </template>

    <template #content>
      <var-tabs
          style="margin-top: 100px"
          color="transparent"
          active-color="#fff"
          inactive-color="#ddd"
          v-model:active="active"
      >
        <var-tab>1</var-tab>
        <var-tab>2</var-tab>
        <var-tab>3</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>
<style scoped>

</style>