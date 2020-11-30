<template>
  <div class="rd-textfield">
    <label class="rd-textfield__label" :for="this.id">
      {{ $attrs['name'] }}:
    </label>
    <input class="rd-textfield__input" :id="this.id" type="textfield" v-model="userInput" v-bind="$attrs" @change="$emit('input-change', isValid, inputToJson)" />
  </div>
</template>

<script>
import idMixin from '../mixins/idMixin.js'

export default {
  inheritAttrs: false,
  mixins: [idMixin], // used to generate id to map label to unput
  data() {
    return {
      userInput: ''
    }
  },
  mounted: function() {
    this.createId(); // creates an id for this type of component, uses idMixin
  },
  computed: {
    // checks if input is valid based on regexp
    isValid: function() {
      let regExp = new RegExp(this.$attrs['validation']);
      if(regExp.test(this.userInput)) {
        return true;
      } else {
        return false;
      }
    },
    // constructs an object from the name attribute and the input value
    inputToJson: function() {
      return {
        name: this.$attrs['name'],
        value: this.userInput
      }
    }
  }
}
</script>