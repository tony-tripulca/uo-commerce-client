import axios from "axios";

const url = "http://nadescrib.com:8010";

export default {
  payNow: (payload) => {
    return axios({
      method: "POST",
      baseURL: url,
      url: `/checkout`,
      data: payload,
    });
  },
};
