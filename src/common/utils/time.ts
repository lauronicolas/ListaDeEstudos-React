export function tempoParaSegundos(tempo: string){
    const [hora = "00", minutos = "00", segundos="00"] = tempo.split(":")
    return Number(hora)*3600 + Number(minutos)*60 + Number(segundos);
}