import Itarefa from "./Itarefa.interface";

export default interface IPropsItem extends Itarefa{
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}