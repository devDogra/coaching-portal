import { MenuItem, Navbar } from "@blueprintjs/core";
import { Alignment } from "@blueprintjs/core";
import { Classes } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";
import { Link } from "@blueprintjs/icons";
import LinkButton from "../LinkButton/LinkButton";
import Trainings from "../../Pages/Trainings/Trainings";
import { Icon } from "@blueprintjs/core";
import StudyMaterials from "../../Pages/StudyMaterials/StudyMaterials";

export default function NavBar() {

    return (
        <Navbar className="bp5-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Coaching Portal</Navbar.Heading>
                <Navbar.Divider />

                <LinkButton 
                    to="/" 
                    icon="home" 
                    className="bp5-minimal"
                >
                    Dashboard
                </LinkButton>

                <LinkButton 
                    to="/training" 
                    icon="book" 
                    className="bp5-minimal"
                >
                    Trainings
                </LinkButton>
            </Navbar.Group>

            <Navbar.Group align={Alignment.RIGHT}>
                <LinkButton 
                    to="/register" 
                    icon="new-person" 
                    className="bp5-minimal"
                >
                    Register
                </LinkButton>

                <Button className="bp5-minimal" icon="person"/>
            </Navbar.Group>
        </Navbar>

    );
}