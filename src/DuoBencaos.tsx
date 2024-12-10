import "./DuoBencaos.css";

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
    return (
        <div className="duoBencaos">
            <div className="imagemDuoBencao">{imagemDuoBencao}</div>
            <div className="imagemD1">{imagemD1}</div>
            <div className="imagemD2">{imagemD2}</div>
            <div className="nomeDuoBencao">{nomeDuoBencao}</div>
            <div className="descricao">{descricao}</div>
            <div className="nomeD1">{nomeD1}</div>
            <div className="nomeD2">{nomeD2}</div>
        </div>
    );
}