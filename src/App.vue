<template>
  <div id="app" class="page">
    <real-digital-form action="http://httpbin.org/post" method="POST" v-slot="slotProps">
      <real-digital-textfield name="name" validation="[a-z]+" @input-change="slotProps.onInputChange" :submitAbort="slotProps.submitAbort"></real-digital-textfield>
      <real-digital-textfield name="phone" validation="[0-9]+" @input-change="slotProps.onInputChange" :submitAbort="slotProps.submitAbort"></real-digital-textfield>
      <real-digital-textfield name="subject" @input-change="slotProps.onInputChange"></real-digital-textfield>
      <real-digital-button>
        Send
      </real-digital-button>
    </real-digital-form>
  </div>
</template>

<script>
import RealDigitalForm from './components/RealDigitalForm.vue'
import RealDigitalTextfield from './components/RealDigitalTextfield.vue'
import RealDigitalButton from './components/RealDigitalButton.vue'

export default {
  name: 'App',
  components: {
    'real-digital-form': RealDigitalForm,
    'real-digital-textfield': RealDigitalTextfield,
    'real-digital-button': RealDigitalButton
  }
}
</script>

<style lang="scss">
* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}

.page {
  display: flex;
  height: 500px;
}

.hidden {
  display: none;
}
</style>