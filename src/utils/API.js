import axios from "axios";

const API = {
  randomEmployee: () => {
    return axios.get("https://randomuser.me/api/")
  }
}

export default API