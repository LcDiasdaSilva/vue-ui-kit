<template>
  <SimpleButton
    id="button"
    label="Enviar"
    maxWidth="300px"
    minWidth="250px"
    :primary="true"
    size="large"
    :rounded="true"
    color=""
    backgroundColor=""
    borderColor=""
    :disabled="false"
  />
</template>
<script setup lang="ts">
import SimpleButton from "../components/SimpleButton/SimpleButton.vue";
</script>
