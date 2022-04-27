import React from "react";
import Itarefa from "./Itarefa.interface";

export default interface IPropsFormulario {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}