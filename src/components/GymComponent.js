import React from "react";
import "../styles/components/GymComponent.css";

export const GymComponent = (props) => {

    console.log(props.gymData);
    let trainerButtonArray = [];
    const generateTrainerButtons = (trainerButtons) => {
        let i = 0;
        while(i < trainerButtons.length) {
            trainerButtonArray.push(<button>{trainerButtons[i].name}</button>);
            i++;
        } 
        return trainerButtonArray;
    }

    return(
        <div id="gymComponent">
            <div id="gymTrainers">
                {generateTrainerButtons(props.gymData.trainers)}
            </div>
            <div id="gymActiveWindow" style={{"outline": "2px solid black"}}>
                <div id="gymInformation" style={{"outline": "2px solid black"}}>
                    Trainers Beat/Trainers Total + Badge[Have?]
                </div>
                <div id="gymTrainerDataWindow">
                    Trainers data window + battle confirm button
                </div>
            </div>
        </div>
    )
}