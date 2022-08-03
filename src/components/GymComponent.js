import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/components/GymComponent.css";
import { GymTrainerInformationComponent } from "./GymTrainerInformationComponent";

export const GymComponent = (props) => {

    const playerInfo = useSelector((state)=> state.player);
    let [currentTrainerFocus, setCurrentTrainerFocus] = useState(0);
    const playerHasBadge = playerInfo.badges[props.gymData.badge]? "Yes": "No";
    const changeTrainerFocus = (newFocus) => {
        setCurrentTrainerFocus(newFocus);
    }
    let trainerButtonArray = [];
    const generateTrainerButtons = (trainerButtons) => {
        let i = 0;
        if(currentTrainerFocus > trainerButtons.length - 1) {
            setCurrentTrainerFocus(0);
        }
        while(i < trainerButtons.length) {
            // eslint-disable-next-line no-loop-func
            const currentNumber = i;
            trainerButtonArray.push(<button key={trainerButtons[i].name} onClick={()=>{changeTrainerFocus(currentNumber)}} style={{"width": "100%"}}>{trainerButtons[i].name}</button>);
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
                    <div>Trainers: {props.gymData.trainers.length}</div>
                    <div>Badge Name: {props.gymData.badge}</div>
                    <div>Obtained: {playerHasBadge}</div>
                </div>
                <div id="gymTrainerDataWindow">
                    <GymTrainerInformationComponent trainer={props.gymData.trainers[currentTrainerFocus]} />
                </div>
            </div>
        </div>
    )
}