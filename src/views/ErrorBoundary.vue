<template>
    <div v-if="error">
      <!-- Render an error message or fallback UI -->
      <p>An error occurred in the shopping cart component. Please try again later.</p>
    </div>
    <div v-else>
      <!-- Render the regular content -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        error: null
      };
    },
    errorCaptured(error, vm, info) {
      // Log the error for debugging
      console.error('Error boundary caught an error:', error, vm, info);
      // Set the error state to trigger the fallback UI
      this.error = error;
      // Return false to prevent the error from propagating further
      return false;
    }
  };
  </script>
  