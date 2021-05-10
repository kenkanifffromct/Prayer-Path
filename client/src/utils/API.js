import axios from "axios";

export default {
  // Gets all prayers
  getPrayers: function() {
    return axios.get("/api/prayers");
  },
  // Gets the prayer with the given id
  getPrayer: function(id) {
    return axios.get("/api/prayers/" + id);
  },
  // Deletes the prayer with the given id
  deletePrayer: function(id) {
    return axios.delete("/api/prayer/" + id);
  },
  // Saves a prayer to the database
  savePrayer: function(prayerData) {
    return axios.post("/api/prayers", prayerData);
  }
};
