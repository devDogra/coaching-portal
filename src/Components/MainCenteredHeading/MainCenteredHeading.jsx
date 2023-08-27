import classes from "./MainCenteredHeading.module.css";

export default function MainCenteredHeading(props) {
    return (
        <h1 className={classes.mainCenteredHeading + " bp5-heading"} > 
            {
                props.children
            }
        </h1>
    ); 
}