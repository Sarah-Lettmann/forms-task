<template>
  <div id="app">
    <real-digital-form action="http://httpbin.org/post" method="POST">
      <real-digital-textfield name="name" validation="[a-z]+"></real-digital-textfield>
      <real-digital-textfield name="phone" validation="[0-9]+"></real-digital-textfield>
      <real-digital-textfield name="subject"></real-digital-textfield>
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
