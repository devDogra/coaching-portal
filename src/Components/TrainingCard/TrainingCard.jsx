import { Button, Card, Elevation } from "@blueprintjs/core";


export default function TrainingCard(props) {
    return (
        <Card className={props.className}interactive={true} elevation={Elevation.TWO}>
            <h5><a href="#">Maggi Making</a></h5>
            <p>In this training you will learn how to make maggi</p>
            <Button>Start</Button>
        </Card>
    );
}