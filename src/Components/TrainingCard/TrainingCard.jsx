import { Button, Card, Elevation, ProgressBar } from "@blueprintjs/core";
import { Intent } from "@blueprintjs/core";
import classes from "./TrainingCard.module.css";


export default function TrainingCard(props) {
    return (
        <Card className={props.className} interactive={true} elevation={Elevation.TWO}>
            <h3><a href="#">Maggi Making</a></h3>
            <p>In this training you will learn how to make maggi</p>

            <div className={classes.progressContainer}>
                <p>Progress: <span>8/20</span></p>
                <ProgressBar intent={Intent.PRIMARY} animate={false} stripes={false} value={0.4} className={classes.progressBar}/>
                <Button className={classes.trainingResumeBtn} intent={Intent.SUCCESS}>Resume</Button>
            </div>
        </Card>
    );
}