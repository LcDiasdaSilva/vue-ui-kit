<template>
  <div>
    <h3>Documentação em desenvolvimento</h3>
    <div>
      <SimpleButton
        id="button"
        label="Button"
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
    </div>
  </div>
</template>
<script setup lang="ts">
import SimpleButton from "../components/SimpleButton/SimpleButton.vue";
</script>
