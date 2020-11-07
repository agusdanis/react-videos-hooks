import Axios from "axios";

//const APIKEY = "AIzaSyArIAN-7oqx8bcfwr7p_bmMydNDPTu-Dvo";
// const APIKEY = "AIzaSyBqeLZdGx5QXiCmFbokMOCGs9g8k7F7qDw";
const APIKEY = "AIzaSyAHJhura0QdKnYV3DylbSstZz - xJyb8ZYE";

//const APIKEY = "AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc"; // => udemy

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: APIKEY,
  },
});

// apikey : AIzaSyAwlWye4fQ6ImeztkMqDa3O2uUAzCXkuDs;  // agusdani@google.com Video Browser
