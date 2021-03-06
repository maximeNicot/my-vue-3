import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3004",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getMeetings() {
    return apiClient.get("/meetings");
  },
  getMeeting(id) {
    return apiClient.get("/meetings/" + id);
  },
  postMeeting(meeting) {
    return apiClient.post("/meetings", meeting);
  },
  deleteMeeting(id) {
    return apiClient.delete("/meetings/" + id);
  }
};
