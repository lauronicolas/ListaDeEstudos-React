import style from './Botao.module.scss'
import IPropsBotao from '../../interfaces/IPropsBotao.interface'

export default function Botao({type = "button", onClick, value}: IPropsBotao){
    return (
        <button  onClick={onClick}  type={type} className={style.botao}>
            {value}
        </button>
    )
}

