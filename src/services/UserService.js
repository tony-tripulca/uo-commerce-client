import axios from "axios";

const url = "http://nadescrib.com:8010";

export default {
  create: (payload) => {
    return axios({
      method: "POST",
      baseURL: url,
      url: `/users`,
      data: payload,
    });
  },
};
