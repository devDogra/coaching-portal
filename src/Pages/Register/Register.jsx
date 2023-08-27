import { Colors, Icon } from "@blueprintjs/core";
import { InputGroup } from "@blueprintjs/core";
import { FormGroup } from "@blueprintjs/core";
import MainCenteredHeading from "../../Components/MainCenteredHeading/MainCenteredHeading";
import classes from "./Register.module.css"; 
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import SplashBanner from "../../Components/SplashBanner/SplashBanner";

export default function Register() {

    return (
        <div className={classes.container}>
            <SplashBanner 
                title="Coaching Portal" 
                subtitle="Welcome to coaching portal"
                color={Colors.WHITE}
                className={classes.splashBanner}
            />
            <RegisterForm className={classes.registerForm}/>
  
        </div>
    );
}