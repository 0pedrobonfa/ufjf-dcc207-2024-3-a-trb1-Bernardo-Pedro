import "./App.css";
import DuoBencaos from "./DuoBencaos";
import Exibicao from "./Exibicao";
import React, { useState } from "react";

 function App() {

   const [bencao, exibeBencao] = useState<React.ReactNode[]>([]);
   
   function verificaBencao() {
    const botaod1 = document.querySelector<HTMLSelectElement>("#btnD1");
    const botaod2 = document.querySelector<HTMLSelectElement>("#btnD2");
    if (botaod1 && botaod2){
      const d1 = botaod1.value;
      const d2 = botaod2.value;

      if ( d1 === d2 )
      {
        exibeBencao(() => [
          <DuoBencaos 
            key={0}
            imagemD1=""
            nomeD1=""
            imagemD2=""
            nomeD2=""
            imagemDuoBencao=""
            nomeDuoBencao=""
            descricao=""
          />,
        ]);
      }
      if ( (d1 === "Afrodite" && d2 === "Ares") || (d1 === "Ares" && d2 === "Afrodite") )
      {
       exibeBencao(() => [
         <DuoBencaos 
           key={0}
           imagemD1="Afrodite"
           nomeD1="Afrodite"
           imagemD2="Ares"
           nomeD2="Ares"
           imagemDuoBencao="dbAfroditeAres"
           nomeDuoBencao="Maldição da Saudade"
           descricao="Seu efeito de Maldição continuamente inflige FRAQUEZA aos inimigos. Dano de Acerto Consecutivo: 50%"
         />,
       ]);
      }

      else if ( (d1 === "Afrodite" && d2 === "Artemis") || (d1 === "Artemis" && d2 === "Afrodite") )
      {
        exibeBencao(() => [
          <DuoBencaos 
            key={0}
            imagemD1="Afrodite"
            nomeD1="Afrodite"
            imagemD2="Artemis"
            nomeD2="Artemis"
            imagemDuoBencao="dbAfroditeArtemis"
            nomeDuoBencao="Coração Dilacerado"
            descricao="Seus acertos CRÍTICOS causam mais danos aos inimigos com FRAQUEZA"
          />,
        ]);
      }
      else if ( (d1 === "Afrodite" && d2 === "Atena") || (d1 === "Atena" && d2 === "Afrodite") )
        {
          exibeBencao(() => [
            <DuoBencaos 
              key={0}
              imagemD1="Afrodite"
              nomeD1="Afrodite"
              imagemD2="Atena"
              nomeD2="Atena"
              imagemDuoBencao="dbAfroditeAtena"
              nomeDuoBencao="Coração Dilacerado"
              descricao="Seus acertos CRÍTICOS causam mais danos aos inimigos com FRAQUEZA"
            />,
          ]);
        }
        else if ( (d1 === "Afrodite" && d2 === "Demeter") || (d1 === "Demeter" && d2 === "Afrodite") )
          {
            exibeBencao(() => [
              <DuoBencaos 
                key={0}
                imagemD1="Afrodite"
                nomeD1="Afrodite"
                imagemD2="Demeter"
                nomeD2="Demeter"
                imagemDuoBencao="dbAfroditeDemeter"
                nomeDuoBencao="Coração Dilacerado"
                descricao="Seus acertos CRÍTICOS causam mais danos aos inimigos com FRAQUEZA"
              />,
            ]);
          }
          else if ( (d1 === "Afrodite" && d2 === "Dionisio") || (d1 === "Dionisio" && d2 === "Afrodite") )
            {
              exibeBencao(() => [
                <DuoBencaos 
                  key={0}
                  imagemD1="Afrodite"
                  nomeD1="Afrodite"
                  imagemD2="Dionisio"
                  nomeD2="Dionisio"
                  imagemDuoBencao="dbAfroditeDionisio"
                  nomeDuoBencao="Coração Dilacerado"
                  descricao="Seus acertos CRÍTICOS causam mais danos aos inimigos com FRAQUEZA"
                />,
              ]);
            }
            else if ( (d1 === "Afrodite" && d2 === "Poseidon") || (d1 === "Poseidon" && d2 === "Afrodite") )
              {
                exibeBencao(() => [
                  <DuoBencaos 
                    key={0}
                    imagemD1="Afrodite"
                    nomeD1="Afrodite"
                    imagemD2="Poseidon"
                    nomeD2="Poseidon"
                    imagemDuoBencao="dbAfroditePoseidon"
                    nomeDuoBencao="Coração Dilacerado"
                    descricao="Seus acertos CRÍTICOS causam mais danos aos inimigos com FRAQUEZA"
                  />,
                ]);
              }
              else if ( (d1 === "Afrodite" && d2 === "Zeus") || (d1 === "Zeus" && d2 === "Afrodite") )
                {
                  exibeBencao(() => [
                    <DuoBencaos 
                      key={0}
                      imagemD1="Afrodite"
                      nomeD1="Afrodite"
                      imagemD2="Zeus"
                      nomeD2="Zeus"
                      imagemDuoBencao="dbAfroditeZeus"
                      nomeDuoBencao="Coração Dilacerado"
                      descricao="Seus acertos CRÍTICOS causam mais danos aos inimigos com FRAQUEZA"
                    />,
                  ]);
                }


     }
    }

  

  return (
    <div>
      <button id="btnSearch" onClick={verificaBencao} >DUO!</button>
      <Exibicao
        >{bencao}
      </Exibicao>
    </div>
  );
}

export default App;