import { Icon } from "@blueprintjs/core";
import { InputGroup } from "@blueprintjs/core";
import { FormGroup } from "@blueprintjs/core";
import MainCenteredHeading from "../../Components/MainCenteredHeading/MainCenteredHeading";

export default function Register() {

    return (
        <>
            <MainCenteredHeading>Register</MainCenteredHeading>

            <FormGroup label="Name" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
            <FormGroup label="Phone Number" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
            <FormGroup label="Qualification" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
            <FormGroup label="State" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
            <FormGroup label="District" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
            <FormGroup label="Village" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
            <FormGroup label="Training Type" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
            <FormGroup label="Land" labelInfo="(required)">
                <InputGroup large={true} />
            </FormGroup>
        </>
    );
}