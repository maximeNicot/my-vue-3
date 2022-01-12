import { createStore } from "vuex";
import MettingService from "../services/MettingService";

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
        })
        .catch((error) => {
          console.log('error thrown')
          throw(error);
        });
    },
  },
  modules: {},
});
