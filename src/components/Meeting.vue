<template>
  <router-link class="meeting-link" :to="{ name: 'MeetingDetails', params: { id: meeting.id } }">
    <div class="meeting-card">
      <span>@ {{ meeting.date }}</span>
      <h3>{{ meeting.title }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Meeting",
  props: {
    meeting: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.meeting-card {
  border: solid;
  width: 300px;
  margin-bottom: 30px;
}
.meeting-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.meeting-link {
  text-decoration: none;
  color: black;
}
</style>
