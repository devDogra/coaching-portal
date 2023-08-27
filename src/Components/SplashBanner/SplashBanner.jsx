import MainCenteredHeading from "../MainCenteredHeading/MainCenteredHeading";
import classes from "./SplashBanner.module.css";
import { Colors } from "@blueprintjs/core";

export default function SplashBanner({title, subtitle, className, color}) {

    return (
        <div className={className} 
        style={ {backgroundColor: Colors.DARK_GRAY3} }
        >
            <MainCenteredHeading color={color}>{title}</MainCenteredHeading>
            <h2 style={{color: color}}className={"bp5-heading" + " " + classes.subtitle}>{subtitle}</h2>
        </div>
    );
}