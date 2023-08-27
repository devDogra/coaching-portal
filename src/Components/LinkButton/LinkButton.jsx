import { Link } from "react-router-dom";
import { Text } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";
import { Icon } from "@blueprintjs/core";

export default function LinkButton({to, children, icon, className}) {

    return (
        <Link 
            to={to} 
        >
            <Button icon={icon} className={className}>
                {children}
            </Button>
        </Link>
    );
}