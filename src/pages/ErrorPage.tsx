import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Ops...</Heading>
                <Text>{isRouteErrorResponse(error) ? "This page dose not exist" : " An unexpected error occured"}</Text>
            </Box>
        </>
    );
}

export default ErrorPage;
