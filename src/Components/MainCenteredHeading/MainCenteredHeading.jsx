import classes from "./MainCenteredHeading.module.css";

export default function MainCenteredHeading(props) {
    return (
        <h1 
        style={{color: props.color}}
        className={classes.mainCenteredHeading + " " + "bp5-heading"} > 
            {
                props.children
            }
        </h1>
    ); 
}