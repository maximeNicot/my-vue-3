<template>
  <div v-if="meeting">
    <h1>{{ meeting.title }}</h1>
    <p>@ {{ meeting.date }}</p>
    <p>{{ meeting.description }}</p>
    <button v-on:click="deleteMeeting" type="button">Delete</button>
  </div>

</template>

<script>
import MettingService from "../services/MettingService";
import { useToast } from 'vue-toastification'
import About from "../views/About";
const toast = useToast();
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
  methods: {
    deleteMeeting(){
      MettingService.deleteMeeting(this.id).then(() => {
        this.$router.push({ name: "MeetingList" });

        toast.error(About);
      });
    }
  }
};
</script>
