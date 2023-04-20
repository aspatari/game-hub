import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoadding, setIsLoadding] = useState(true);

    useEffect(
        () => {
            const controller = new AbortController();
            apiClient
                .get<FetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then(({ data }) => {
                    setData(data.results);
                    setIsLoadding(false);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setIsLoadding(false);
                });

            return () => controller.abort();
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoadding };
};

export default useData;
