<template>
  <form class="rd-form" @submit.prevent="submit">
    <fieldset class="rd-form__fieldset">
      <legend class="rd-form__legend">Contact Form</legend>
      <slot :onInputChange="onInputChange" :submitAbort="submitAbort"></slot>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      json: {},
      allInputsValid: false,
      submitAbort: false
    }
  },
  methods: {
    submit: function() {
      this.submitAbort = false;
      this.$emit('onSubmit', this.json); // emit event as interface to manipulate data
      if(this.allInputsValid) {
        console.log("all inputs are valid");
        console.log(JSON.stringify(this.json, null, 1));
        console.log(JSON.stringify(this.json));
        fetch(this.$attrs['action'], {
          headers: {"Content-Type": "application/json"},
          method: this.$attrs['method'],
          body: JSON.stringify(this.json),
        })
        .then(result => result.json())
        .then(result => this.$emit('onResponse', result))
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
      // check of all inputs are valid at this point
      console.log('check if all inputs are valid');
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
  }

  &__legend {
    background-color: white;
    padding: 0;
  }
}
</style>