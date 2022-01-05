<template>
  <div class="create">
    <h1>Create Meeting</h1>
    <BaseInput v-model="meeting.description" label="Description" type="text" />
    <BaseInput v-model="meeting.title" label="Title" type="text" />
  </div>
</template>
<script>
import BaseInput from "../components/BaseInput";
export default {
  components: { BaseInput },
  data() {
    return {
      meeting: {
        description: "",
        title: "",
        date: "",
        id: "",
      },
    };
  },
};
</script>
<style>
.create {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
