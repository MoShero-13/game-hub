import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b323a3f9b5024a8a87f73370bf3d6ba0",
  },
});
