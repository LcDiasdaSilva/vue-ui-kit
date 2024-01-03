<template>
  <div>
    <div>Documentação em desenvolvimento \0/</div>
    <div>
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
    </div>
  </div>
</template>
<script setup lang="ts">
import SimpleButton from "../components/SimpleButton/SimpleButton.vue";
</script>
