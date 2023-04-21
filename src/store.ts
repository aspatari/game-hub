import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}
interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setPlatfornId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
    setSearchText: (searchText: string) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
    gameQuery: {},

    setGenreId: (genreId: number) => set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
    setPlatfornId: (platformId: number) => set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
    setSortOrder: (sortOrder: string) => set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
    setSearchText: (searchText: string) => set((store) => ({ gameQuery: { searchText } })),
}));

export default useGameQuery;
