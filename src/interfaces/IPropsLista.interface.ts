import Itarefa from './Itarefa.interface'

export default interface IPropsLista{
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}