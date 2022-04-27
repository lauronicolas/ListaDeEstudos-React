import Itarefa from "./Itarefa.interface";

export default interface IPropsCronometro{
    selecionado: Itarefa | undefined;
    finalizarTarefa: () => void
}