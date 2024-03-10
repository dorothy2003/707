<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  username: '',
  password: '',
  department: '',
  gender: undefined,
  license: false,
  range: 10,
  count: 0,
  group: [],
  score: 0,
  like: [],
  files: []
})

const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)
</script>

<template>
  <var-form
      ref="form"
      :disabled="disabled"
      :readonly="readonly"
      scroll-to-error="start"
  >
    <var-space direction="column" :size="[14, 0]">
      <var-input
          placeholder="Please input username"
          :rules="[v => !!v || 'The username cannot be empty']"
          v-model="formData.username"
      />
      <var-input
          type="password"
          placeholder="Please input password"
          :rules="[v => !!v || 'The password cannot be empty']"
          v-model="formData.password"
      />
      <var-select
          placeholder="Please select department"
          :rules="[v => !!v || 'The select cannot be empty']"
          v-model="formData.department"
      >
        <var-option label="Eat department"  />
        <var-option label="Sleep department"  />
        <var-option label="Play game department" />
      </var-select>
      <var-select
          multiple
          placeholder="Please select group"
          :rules="[v => v.length >= 1 || 'The select cannot be empty']"
          v-model="formData.group"
      >
        <var-option label="Eat group"  />
        <var-option label="Sleep group"  />
        <var-option label="Play game group" />
      </var-select>
      <var-radio-group
          :rules="[v => !!v || 'The gender cannot be empty']"
          v-model="formData.gender"
      >
        <var-radio :checked-value="1">Male</var-radio>
        <var-radio :checked-value="2">Female</var-radio>
      </var-radio-group>
      <var-checkbox-group
          :rules="[v => v.length > 0 || 'The select cannot be empty']"
          v-model="formData.like"
      >
        <var-checkbox :checked-value="1">Eat</var-checkbox>
        <var-checkbox :checked-value="2">Sleep</var-checkbox>
        <var-checkbox :checked-value="3">Play game</var-checkbox>
      </var-checkbox-group>
      <var-rate
          :rules="[v => v >= 3 || 'It has to be greater than 2']"
          v-model="formData.score"
      />
      <var-switch
          :rules="[v => !!v || 'You must turn on']"
          v-model="formData.license"
      />
      <var-counter
          :rules="[v => v > 10 || 'It has to be greater than 10']"
          v-model="formData.count"
      />
      <var-slider
          :rules="[v => v > 10 || 'It has to be greater than 10']"
          v-model="formData.range"
      />
      <var-uploader
          :rules="[v => v.length >= 1 || 'Upload at least one picture']"
          v-model="formData.files"
      />

      <var-space direction="column" :size="[14, 0]">
        <var-button block type="danger" @click="form.reset()">
          Empty form
        </var-button>
        <var-button block type="warning" @click="form.resetValidation()">
          Empty the validation
        </var-button>
        <var-button block type="success" @click="form.validate()">
          Trigger validation
        </var-button>
        <var-button block type="info" @click="disabled = !disabled">
          Form disabled
        </var-button>
        <var-button block type="primary" @click="readonly = !readonly">
          Form readonly
        </var-button>
      </var-space>
    </var-space>
  </var-form>
</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
