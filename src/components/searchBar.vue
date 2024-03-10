
<script setup>
import { ref } from 'vue'

const date = ref(['2021-04-08', '2021-04-20'])
let isPickDate=ref(false)
let isPickDestination=ref(false)
let isNumberPick=ref(false)
</script>

<template>
  <var-space :size="[10, 10]">

    <var-button-group size="large" type="primary" color="linear-gradient(to bottom right, #6750A4, #D0BCFF)">
      <var-button @touchstart="isPickDate=true">时间段</var-button>
      <var-button @touchstart="isNumberPick=true">同行人</var-button>
      <var-button @touchstart="isPickDestination=true">目的地</var-button>

    </var-button-group>
  </var-space>


  <teleport to="body">
    <var-date-picker v-show="isPickDate" type="date" v-model="date" range/>
  </teleport>

  <teleport to="body" v-show="isnumberpick">
    <var-radio-group
        :rules="[v => !!v || '必须选择一个旅客']"
        v-model="formData.gender"
    ><var-counter
        :rules="[v => v > 10 || '必须大于1']"
        v-model="formData.count"
    />
      <var-radio :checked-value="1">成人</var-radio>
      <var-radio :checked-value="2">儿童</var-radio>
      <var-radio :checked-value="3">婴儿</var-radio>

    </var-radio-group>
    <var-checkbox-group @click=""></var-checkbox-group>
  </teleport>

  <var-button>确认</var-button>

</template>
<style scoped>

</style>