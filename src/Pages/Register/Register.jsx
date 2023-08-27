import { Icon } from "@blueprintjs/core";
import { InputGroup } from "@blueprintjs/core";
import { FormGroup } from "@blueprintjs/core";

export default function Register() {

    return (
        <>
            <h1 className="bp5-heading">Sign Up</h1>

            <InputGroup
                large={true}
                leftElement={<Icon icon="person" />}
                placeholder="Name"
            />
        </>
    );
}