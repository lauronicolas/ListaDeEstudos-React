export default interface IPropsBotao{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    value: string
}