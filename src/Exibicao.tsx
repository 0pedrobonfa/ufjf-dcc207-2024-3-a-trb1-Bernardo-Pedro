import "./Exibicao.css";
import { ReactNode } from "react";
//import { botaoPesquisa } from "./App.tsx";

interface ExibicaoProps{
    children?: ReactNode;
}

export default function Exibicao({children:duoBencaos}:ExibicaoProps)
{

    return(
        <div className="exibicao">
            

            <div className="exibeBotoes">

                <select name="D1" id="btnD1">Selecione os deuses

                    <option value="Afrodite">Afrodite</option>
                    <option value="Ares">Ares</option>
                    <option value="Artemis">Artemis</option>
                    <option value="Atena">Atena</option>
                    <option value="Demeter">Demeter</option>
                    <option value="Dionisio">Dionisio</option>
                    <option value="Poseidon">Poseidon</option>
                    <option value="Zeus">Zeus</option>
                    

                </select>
                
                <select name="D1" id="btnD2">Selecione os deuses

                    <option value="Afrodite">Afrodite</option>
                    <option value="Ares">Ares</option>
                    <option value="Artemis">Artemis</option>
                    <option value="Atena">Atena</option>
                    <option value="Demeter">Demeter</option>
                    <option value="Dionisio">Dionisio</option>
                    <option value="Poseidon">Poseidon</option>
                    <option value="Zeus">Zeus</option>
                    

                </select>

            </div>
            <div className="bencao">{duoBencaos}</div>

        </div>
    )
}