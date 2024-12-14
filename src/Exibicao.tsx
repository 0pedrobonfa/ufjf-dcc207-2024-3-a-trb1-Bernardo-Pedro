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
                    

                </select>

                <button id="btnSearch" >Isto é o botão pesquisa</button>
                
                <select name="D1" id="btnD2">Selecione os deuses

                    <option value="Afrodite">Afrodite</option>
                    <option value="Ares">Ares</option>
                    

                </select>

            </div>
            <div className="bencao">{duoBencaos}</div>

        </div>
    )
}