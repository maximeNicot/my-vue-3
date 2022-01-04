<template>
  <div class="meetings">
    <Meeting v-for="meeting in meetings" :key="meeting.id" :meeting="meeting" />
  </div>
</template>

<script>
// @ is an alias to /src a
import Meeting from "@/components/Meeting.vue";
import MettingService from "../services/MettingService";

export default {
  name: "MeetingList",
  components: {
    Meeting,
  },
  data() {
    return {
      meetings: null,
    };
  },
  created() {
    MettingService.getMeetings().then((response) => {
      this.meetings = response.data;
    });
  },
};
</script>

<style scoped>
.meetings {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
