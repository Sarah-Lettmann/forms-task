<template>
  <button class="rd-button" type="submit" @click="$emit('submit')">
    <slot></slot> <!-- insert button text -->
  </button>
</template>