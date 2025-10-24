import React from "react";
import { useAppDispatch, useAppSelector } from "../../stores/Configure";
import { onSetLoading } from "../../stores/reducers/Loading.reducer";


export default function useLoading(){

    const { loading} = useAppSelector(state => state.loading);
    const dispatch = useAppDispatch();

    const onShow = () => {
        dispatch(onSetLoading({ loading: true, title: "Espera un momento ...."}));
    };

    const onHide = () => {
        dispatch(onSetLoading({ loading: false, title: ""}));
    };

    return {
        loading,
        onShow,
        onHide,
    };
}
