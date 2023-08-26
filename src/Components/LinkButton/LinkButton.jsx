import { Link } from "react-router-dom";
import { Text } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";
import { Icon } from "@blueprintjs/core";

export default function LinkButton({to, element, children, icon, className}) {

    return (
        <Link 
            to={to} 
            element={element}
        >
            <Button icon={icon} className={className}>
                {children}
            </Button>
        </Link>
    );
}