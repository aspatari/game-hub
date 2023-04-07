import axios from "axios"


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "bf075a8fdce541ae9e4a5bffbad80375"
    }
})