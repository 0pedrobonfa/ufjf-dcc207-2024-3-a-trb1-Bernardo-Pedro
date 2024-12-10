import "./DuoBencaos.css";
import Ares from "./assets/Deuses/Ares.png";

interface DuoBencaosProps {
    imagemDuoBencao: string;
    imagemD1: string;
    imagemD2: string;
    nomeDuoBencao: string;
    descricao: string;
    nomeD1: string;
    nomeD2: string;
}

export default function DuoBencaos ({imagemDuoBencao, imagemD1, imagemD2, nomeDuoBencao, descricao, nomeD1, nomeD2}:DuoBencaosProps)
{
    function insereImagem(imagemD1:String){
    
        if(imagemD1 == "Ares"){
    
            return <img src={Ares}/>
        }
    
    }
    return (
        <div className="duoBencaos">
 
            <div className="nomeD1">{nomeD1}</div>
            <div className="imagemD1">{insereImagem(imagemD1)}
            </div>
            <div className="nomeD2">{nomeD2}</div>
            <div className="imagemD2">{imagemD2}</div>

            <div className="nomeDuoBencao">{nomeDuoBencao}</div>
            <div className="imagemDuoBencao">{imagemDuoBencao}</div>
            <div className="descricao">{descricao}</div>

        </div>
    );
}