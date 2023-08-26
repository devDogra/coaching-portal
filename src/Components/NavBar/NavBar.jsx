import { Navbar } from "@blueprintjs/core";
import { Alignment } from "@blueprintjs/core";
import { Button } from "@blueprintjs/core";

export default function NavBar() {

    return (
        <Navbar className="bp5-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Coaching Portal</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp5-minimal" icon="home" text="Dashboard" />
                <Button className="bp5-minimal" icon="book" text="Trainings" />
                
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Button className="bp5-minimal" icon="person"/>
            </Navbar.Group>
        </Navbar>

    );
}