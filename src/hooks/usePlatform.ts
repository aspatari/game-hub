import usePlatoforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { data } = usePlatoforms();

    const platform = data?.results.find((p) => p.id === id);
    return platform;
};

export default usePlatform;
