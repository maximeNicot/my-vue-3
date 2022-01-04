<template>
  <div v-if="meeting">
    <h1>{{ meeting.title }}</h1>
    <p>@ {{ meeting.date }}</p>
    <p>{{ meeting.description }}</p>
  </div>
</template>

<script>
import MettingService from "../services/MettingService";

export default {
  props: ["id"],
  data() {
    return {
      meeting: null,
    };
  },
  created() {
    MettingService.getMeeting(this.id).then((response) => {
      this.meeting = response.data;
    });
  },
};
</script>
