<template>
  <div class="create">
    <h1>Create Meeting</h1>
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="meeting.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === meeting.category"
        >
          {{ option }}
        </option>
      </select>
      <BaseInput
        v-model="meeting.description"
        label="Description"
        type="text"
      />
      <BaseInput v-model="meeting.title" label="Title" type="text" />
      <BaseInput v-model="meeting.date" label="Date" type="text" />
      <button type="submit">Submit</button>
    </form>
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
        category: "",
        id: "",
        date: "",
        organizer: "", //sync to vuex state
      },
      categories: ["Nature", "Space", "Fantastic", "Sport"],
    };
  },
  methods: {
    onSubmit() {
      this.meeting.organizer = this.$store.state.user;
      this.$store
        .dispatch("createMeeting", this.meeting)
        .then(() => {
          this.$router.push({ name: "MeetingList" });
        })
        .catch((error) => {
          console.log("error depuis le component")
          this.$router.push({ name: "DisplayError", params: { error: error } });
        });
    },
  },
};
</script>
<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
