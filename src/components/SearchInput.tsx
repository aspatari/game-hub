import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQuery from "../store";

function SearchInput() {
    const navigate = useNavigate();
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQuery((s) => s.setSearchText);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) {
                    setSearchText(ref.current.value);
                    navigate("/");
                }
            }}
        >
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
            </InputGroup>
        </form>
    );
}

export default SearchInput;
