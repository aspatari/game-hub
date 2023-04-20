import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "bf075a8fdce541ae9e4a5bffbad80375",
    },
});

// class ApiClient<T> {
//     endpoint: string;

//     constructor(endpoint: string) {
//         this.endpoint = endpoint;
//     }

//     getAll = () => {
//         return axioxInstance.get<T[]>(this.endpoint).then((res) => res.data);
//     };

//     post = (data: T) => {
//         return axioxInstance.post<T>(this.endpoint, data).then((res) => res.data);
//     };
// }

// export default ApiClient;
