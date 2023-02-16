import axios from "axios"

const blogFetch = axios.create({
    baseURL: "https://restaurantebiel.onrender.com/",
    headers: {
        "Content-Type":"application/json",
    },
});

export default blogFetch