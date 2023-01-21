import axios from "axios";

export const API_CLIENT = {
  async get(URL) {
    const response = await axios.get(URL);
    return response;
  },
};
