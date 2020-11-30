<template>
  <form class="rd-form" @submit.prevent="submit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  data() {
    return {
      test: 'test',
      json: {
        test: 'json test'
      },
    }
  },
  methods: {
    submit() {
      this.$dispatch('on-submit', this.json);
      console.log('submit in parent called');
      fetch(this.$attrs['action'], {
        method: this.$attrs['method'],
        body: this.test,
      })
      .then(result => result.text())
      .catch(error => console.error(error));
    },
    onInputChange: function(isValid, inputToJson) {
      if(isValid) {
        this.json[inputToJson.name] = inputToJson.value;
      }
    }
  },
  computed: {
    
  }
}
</script>