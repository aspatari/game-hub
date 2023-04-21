import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
}

function ExpandableText({ children }: Props) {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    const summary = children.substring(0, limit);

    if (!children) return null;
    if (children.length <= limit) return <Text>{children}</Text>;
    return (
        <Text>
            {expanded ? summary + "..." : children}
            <Button
                size={"xs"}
                fontWeight={"bold"}
                colorScheme={"yellow"}
                onClick={() => setExpanded(!expanded)}
                marginLeft={1}
            >
                {expanded ? "Show Less" : "Show More"}
            </Button>
        </Text>
    );
}

export default ExpandableText;
