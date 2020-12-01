<template>
  <form class="rd-form" @submit.prevent="submit"><!-- prevent reload of page on submission -->
    <fieldset class="rd-form__fieldset">
      <legend class="rd-form__legend">Contact Data</legend>
      <slot :onInputChange="onInputChange" :submitAbort="submitAbort"></slot>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      json: {}, // generated json from the form data
      allInputsValid: false, // true if all inputs have valid input
      submitAbort: false // true if submission is aborted due to errors
    }
  },
  methods: {
    submit: function() {
      this.submitAbort = false;
      this.$emit('onSubmit', this.json); // emit event as interface to manipulate data
      if(this.allInputsValid) {
        fetch(this.$attrs['action'], {
          headers: {"Content-Type": "application/json"},
          method: this.$attrs['method'],
          body: JSON.stringify(this.json),
        })
        .then(result => result.json())
        .then(result => this.$emit('onResponse', result)) // emit onResponse event to react to result data
        .catch(error => console.error(error));
      } else {
        this.submitAbort = true;
      }
    },
    onInputChange: function(isValid, inputToJson) {
      // set json data according to input data
      if(isValid) {
        this.json[inputToJson.name] = inputToJson.value;
      } else {
        this.json[inputToJson.name] = null;
      }
      // check if all inputs are valid at this point
      this.allInputsValid = true;
      Object.values(this.json).forEach(value => {
        console.log(value);
        if(value == null) {
          this.allInputsValid = this.allInputsValid && false;
        } else {
          this.allInputsValid = this.allInputsValid && true;
        }
      });
    }
  }
}
</script>

<style lang="scss">
.rd-form {
  display: inline-block;
  margin: auto;

  &__fieldset {
    border: none;
    box-shadow: 2px 2px 7px 0px lightgrey;
    padding: 1rem;
  }

  &__legend {
    background-color: white;
    padding: 0;
  }
}
</style>