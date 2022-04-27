import Item from "./Item";
import style from './Lista.module.scss'
import IPropsLista from "../../interfaces/IPropsLista.interface";

function Lista({tarefas, selecionaTarefa}: IPropsLista){

    return(
        <aside className={style["listaTarefas"]}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    tarefas.map(item=> (
                        <Item 
                            selecionaTarefa={selecionaTarefa}
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default Lista;