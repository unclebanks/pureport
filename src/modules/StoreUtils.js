import React from "react";
import { useDispatch } from "react-redux";
import { addCoins } from "../slices/PlayerSlice";

export const StoreUtils = (props) => {

    let type = props.type;
    let value = props.value;
    const dispatch = useDispatch()
    dispatch(addCoins({"type":props.type, "value": props.value}));


}