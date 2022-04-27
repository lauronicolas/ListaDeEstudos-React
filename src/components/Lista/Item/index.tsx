import IPropsItem from "../../../interfaces/IPropsItem.interface"
import style from "./Item.module.scss"
export default function Item (
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: IPropsItem) {
    return (
        <li 
            className={`${style["item"]} ${selecionado === true ? style.itemSelecionado : ''} ${completado === true ? style.itemCompletado: ''}`} 
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa, 
                    tempo, 
                    selecionado, 
                    completado, 
                    id
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}