import "./App.css";
import DuoBencaos from "./DuoBencaos";
import Exibicao from "./Exibicao";
import { useEffect } from "react";

function App() {
  //Afrodite e Ares
  
  useEffect(() => {
    const botaoBusca = document.querySelector("#btnSearch");
  
    if (botaoBusca) {
      botaoBusca.addEventListener("click", () => {
        console.log("Let's gooo");
      });
    }
  
  });
  
  const bencao1= [
    <DuoBencaos
      key={0}
      imagemD1="Afrodite"
      nomeD1="Afrodite"
      imagemD2="Ares"
      nomeD2="Ares"
      imagemDuoBencao="dbAfroditeAres"
      nomeDuoBencao="Maldição da Saudade"
      descricao="Seu efeito de Maldição continuamente inflige fraqueza aos inimigos. Dano de Acerto Consecutivo: 50%">
    </DuoBencaos>
  ];
  
  return (
    <div>

      <Exibicao
      >{bencao1}

      </Exibicao>

    </div>
  );
}

export default App;


//     const botaoDeus1 = document.querySelector<HTMLSelectElement>("#btnD1");
//     const botaoDeus2 = document.querySelector<HTMLSelectElement>("#btnD2");

//     if(botaoDeus1 && botaoDeus2)
//     {
//         const valorSelecionadoD1 = botaoDeus1.value;
//         const valorSelecionadoD2 = botaoDeus2.value;

//         if(valorSelecionadoD1 === "Afrodite" && valorSelecionadoD2 == "Ares")
//         {
//           return(

//           )
//         }
//       }
    
// }