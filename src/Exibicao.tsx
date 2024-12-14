import "./Exibicao.css";
import { ReactNode } from "react";
import { botaoPesquisa } from "./duoPesquisa.tsx";

interface ExibicaoProps{
    children?: ReactNode;
}



export default function Exibicao({children:duoBencaos}:ExibicaoProps)
{

    return(
        <div className="exibicao">
            

            <div className="exibeBotoes">

                <select name="D1" id="btnD1">Selecione os deuses

                    <option value="1">Ares</option>
                    <option value="2">Demeter</option>
                    <option value="3">Dionisio</option>

                </select>

                <button id="btnSearch" onClick={botaoPesquisa}>Isto é o botão pesquisa</button>
                
                <select name="D1" id="btnD2">Selecione os deuses

                    <option value="1">Ares</option>
                    <option value="2">Demeter</option>
                    <option value="3">Dionisio</option>

                </select>

            </div>
            <div className="bencao">{duoBencaos}</div>

        </div>
    )
}