<template>
  <h1>Oops... something went wrong</h1>
  <div>Erreur: {{ error }}</div>
</template>

<script>
export default {
  name: "DisplayError",
  props: ["error"],
};
</script>

<style scoped></style>
