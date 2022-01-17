import { createStore } from "vuex";
import { useToast } from "vue-toastification";
import MettingService from "../services/MettingService";

const toast = useToast()
export default createStore({
  state: {
    user: "Gome Jabar",
    meetings: [],
  },
  mutations: {
    ADD_EVENT(state, meeting) {
      state.meetings.push(meeting);
    },
  },
  actions: {
    createMeeting({ commit }, meeting) {
      MettingService.postMeeting(meeting)
        .then(() => {
          commit("ADD_EVENT", meeting);
          toast.success("incremented!")
        })
        .catch((error) => {
          throw(error);
        });
    },
  },
  modules: {},
});
