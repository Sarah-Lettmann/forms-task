<template>
  <div class="rd-textfield">
    <label class="rd-textfield__label" :for="this.id">
      {{ $attrs['name'] }}
    </label>
    <input type="textfield"
          class="rd-textfield__input"
          :class="{'rd-textfield__input--error': this.hasError}"
          :id="this.id"
          v-model="userInput"
          v-bind="$attrs" />
    <p class="rd-textfield__error" :class="{'hidden': !this.hasError}">Error! Please check the field above.</p>
  </div>
</template>

<script>
import idMixin from '../mixins/idMixin.js'

export default {
  inheritAttrs: false, // don't inherit attributes from parent tag automatically to outer tag
  mixins: [idMixin], // used to generate id to map label to input
  data() {
    return {
      userInput: '' // user input of text field
    }
  },
  mounted: function() {
    this.createId(); // creates an id for this type of component, uses idMixin
    this.$emit('input-change', this.isValid, this.inputToJson);
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
    },
    // checks if textfield has error when submission was aborted
    hasError: function() {
      if(this.$attrs['submitAbort'] && !this.isValid) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    // watch input and emit event for form
    userInput: function() {
      this.$emit('input-change', this.isValid, this.inputToJson);
    }
  }
}
</script>

<style lang="scss">
.rd-textfield {
  margin-bottom: 0.5rem;

  &__label {
    display: block;
    text-transform: capitalize;

    &::after {
      content: ':';
      margin-left: -3px;
    }
  }

  &__input {
    border: 1px solid gray;
    border-radius: 0.25rem;
    padding: 0.25rem;
    margin-bottom: 0.25rem;

    &:focus {
      outline-color: dimgray;
    }

    &--error {
      border-color: red;

      &:focus {
        outline-color: red;
      }
    }
  }

  &__error {
    color: red;
    font-size: 0.75rem;
    margin: 0;
  }
}
</style>