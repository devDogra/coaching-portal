
import classes from "./RegisterForm.module.css";
import MainCenteredHeading from "../MainCenteredHeading/MainCenteredHeading";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import LinkButton from "../LinkButton/LinkButton";

export default function RegisterForm(props) {

    return (
        <div className={classes.registerForm + " " + props.className}>
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

            <LinkButton to="/">Sign Up</LinkButton>
        </div>
    );
}