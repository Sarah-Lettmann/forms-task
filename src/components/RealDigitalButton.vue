<template>
  <button class="rd-button" type="submit">
    <slot>Submit</slot> <!-- insert button text, 'Submit' is fallback -->
  </button>
</template>

<style lang="scss">
.rd-button {
  padding: 0.25rem 0.5rem;
  width: 100%;
}
</style>