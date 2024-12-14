import "./App.css";
import DuoBencaos from "./DuoBencaos";
import Exibicao from "./Exibicao";
import React, { useState } from "react";

function App() {
  const [bencao, exibeBencao] = useState<React.ReactNode[]>([]);

  function verificaBencao() {
    const botaod1 = document.querySelector<HTMLSelectElement>("#btnD1");
    const botaod2 = document.querySelector<HTMLSelectElement>("#btnD2");
    if (botaod1 && botaod2) {
      const d1 = botaod1.value;
      const d2 = botaod2.value;

      if (d1 === d2) {
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
      //AFRODITE
      if (
        (d1 === "Afrodite" && d2 === "Ares") ||
        (d1 === "Ares" && d2 === "Afrodite")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Afrodite"
            nomeD1="Afrodite"
            imagemD2="Ares"
            nomeD2="Ares"
            imagemDuoBencao="dbAfroditeAres"
            nomeDuoBencao="Maldição da Saudade"
            descricao="eus acertos críticos causam mais dano a inimigos fracos. Dano Crítico Bônus: +150%%"
          />,
        ]);
      } else if (
        (d1 === "Afrodite" && d2 === "Artemis") ||
        (d1 === "Artemis" && d2 === "Afrodite")
      ) {
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
      } else if (
        (d1 === "Afrodite" && d2 === "Atena") ||
        (d1 === "Atena" && d2 === "Afrodite")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Afrodite"
            nomeD1="Afrodite"
            imagemD2="Atena"
            nomeD2="Atena"
            imagemDuoBencao="dbAfroditeAtena"
            nomeDuoBencao="Tiro de Despedida"
            descricao="Seu Elenco ganha todos os bônus que você tem por atingir inimigos por trás. Bônus de dano por facada nas costas: +35%"
          />,
        ]);
      } else if (
        (d1 === "Afrodite" && d2 === "Demeter") ||
        (d1 === "Demeter" && d2 === "Afrodite")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Afrodite"
            nomeD1="Afrodite"
            imagemD2="Demeter"
            nomeD2="Demeter"
            imagemDuoBencao="dbAfroditeDemeter"
            nomeDuoBencao="Abraço Frio"
            descricao="Seu cristal conjurado dispara seu raio diretamente em você por +4s. Dano de lançamento bônus : +30%"
          />,
        ]);
      } else if (
        (d1 === "Afrodite" && d2 === "Dionisio") ||
        (d1 === "Dionisio" && d2 === "Afrodite")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Afrodite"
            nomeD1="Afrodite"
            imagemD2="Dionisio"
            nomeD2="Dionisio"
            imagemDuoBencao="dbAfroditeDionisio"
            nomeDuoBencao="Baixa Tolerância"
            descricao="Seus efeitos de Ressaca podem acumular ainda mais vezes contra inimigos Fracos. Pilhas máximas vs Fracas: +3"
          />,
        ]);
      } else if (
        (d1 === "Afrodite" && d2 === "Poseidon") ||
        (d1 === "Poseidon" && d2 === "Afrodite")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Afrodite"
            nomeD1="Afrodite"
            imagemD2="Poseidon"
            nomeD2="Poseidon"
            imagemDuoBencao="dbAfroditePoseidon"
            nomeDuoBencao="Néctar Doce"
            descricao="Qualquer Poms de Poder que você encontrar será mais eficaz. Nível de bônus de Poms: +1"
          />,
        ]);
      } else if (
        (d1 === "Afrodite" && d2 === "Zeus") ||
        (d1 === "Zeus" && d2 === "Afrodite")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Afrodite"
            nomeD1="Afrodite"
            imagemD2="Zeus"
            nomeD2="Zeus"
            imagemDuoBencao="dbAfroditeZeus"
            nomeDuoBencao="Ar fumegante"
            descricao="SSeu Medidor de Deus carrega automaticamente, mas tem um limite de 25%. Ganho do medidor automático: 1% (a cada 0,2 seg.)"
          />,
        ]);
      }

      //ARES
      else if (
        (d1 === "Ares" && d2 === "Artemis") ||
        (d1 === "Artemis" && d2 === "Ares")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Ares"
            nomeD1="Ares"
            imagemD2="Artemis"
            nomeD2="Artemis"
            imagemDuoBencao="dbAresArtemis"
            nomeDuoBencao="Lâminas de caça"
            descricao="Seu Conjuração é uma Fenda de Lâmina mais rápida que busca o inimigo mais próximo. Duração da busca: 3,3 seg."
          />,
        ]);
      } else if (
        (d1 === "Ares" && d2 === "Atena") ||
        (d1 === "Atena" && d2 === "Ares")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Ares"
            nomeD1="Ares"
            imagemD2="Atena"
            nomeD2="Atena"
            imagemDuoBencao="dbAresAtena"
            nomeDuoBencao="Fim Misericordioso"
            descricao="Seus ataques que podem Defletir ativam imediatamente efeitos de Perdição. Dano do Combo Doom: 40"
          />,
        ]);
      } else if (
        (d1 === "Ares" && d2 === "Demeter") ||
        (d1 === "Demeter" && d2 === "Ares")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Ares"
            nomeD1="Ares"
            imagemD2="Demeter"
            nomeD2="Demeter"
            imagemDuoBencao="dbAresDemeter"
            nomeDuoBencao="Vórtice Congelante"
            descricao="Seu feitiço causa Frio , mas é menor e se move mais lentamente. Tamanho da fenda da lâmina : -15%"
          />,
        ]);
      } else if (
        (d1 === "Ares" && d2 === "Dionisio") ||
        (d1 === "Dionisio" && d2 === "Ares")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Ares"
            nomeD1="Ares"
            imagemD2="Dionisio"
            nomeD2="Dionisio"
            imagemDuoBencao="dbAresDionisio"
            nomeDuoBencao="Maldição da Náusea"
            descricao="Os efeitos da Ressaca causam dano mais rápido. Taxa de dano de ressaca: 0,5 ➜ 0,35 seg."
          />,
        ]);
      } else if (
        (d1 === "Ares" && d2 === "Poseidon") ||
        (d1 === "Poseidon" && d2 === "Ares")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Ares"
            nomeD1="Ares"
            imagemD2="Poseidon"
            nomeD2="Poseidon"
            imagemDuoBencao="dbAresPoseidon"
            nomeDuoBencao="Maldição do Afogamento"
            descricao="Seu Conjuração é um pulso que causa dano aos inimigos ao seu redor. Pulsos por conjuração: 3"
          />,
        ]);
      } else if (
        (d1 === "Ares" && d2 === "Zeus") ||
        (d1 === "Zeus" && d2 === "Ares")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Ares"
            nomeD1="Ares"
            imagemD2="Zeus"
            nomeD2="Zeus"
            imagemDuoBencao="dbAresZeus"
            nomeDuoBencao="Humor Vingativo"
            descricao="Às vezes, seus efeitos de Vingança ocorrem sem que você sofra dano. Taxa de vingança automática: 3 s."
          />,
        ]);
      }

      //ARTEMIS
      else if (
        (d1 === "Artemis" && d2 === "Atena") ||
        (d1 === "Atena" && d2 === "Artemis")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Artemis"
            nomeD1="Artemis"
            imagemD2="Atena"
            nomeD2="Atena"
            imagemDuoBencao="dbArtemisAtena"
            nomeDuoBencao="Reversão Mortal"
            descricao="Após Defletir , você ganha brevemente +20% de chance de causar dano Crítico. Duração crítica: 2 seg."
          />,
        ]);
      } else if (
        (d1 === "Artemis" && d2 === "Demeter") ||
        (d1 === "Demeter" && d2 === "Artemis")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Artemis"
            nomeD1="Artemis"
            imagemD2="Demeter"
            nomeD2="Demeter"
            imagemDuoBencao="dbArtemisDemeter"
            nomeDuoBencao="Clareza Cristalina"
            descricao="Seu elenco é mais forte e rastreia os inimigos com mais eficiência. Dano do Feixe: +10%"
          />,
        ]);
      } else if (
        (d1 === "Artemis" && d2 === "Dionisio") ||
        (d1 === "Dionisio" && d2 === "Artemis")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Artemis"
            nomeD1="Artemis"
            imagemD2="Dionisio"
            nomeD2="Dionisio"
            imagemDuoBencao="dbArtemisDionisio"
            nomeDuoBencao="Dor de cabeça rachada"
            descricao="Inimigos afetados pela Ressaca têm mais chances de sofrer dano crítico. Chance crítica bônus por pilha de ressaca: +1,5%"
          />,
        ]);
      } else if (
        (d1 === "Artemis" && d2 === "Poseidon") ||
        (d1 === "Poseidon" && d2 === "Artemis")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Artemis"
            nomeD1="Artemis"
            imagemD2="Poseidon"
            nomeD2="Poseidon"
            imagemDuoBencao="dbArtemisPoseidon"
            nomeDuoBencao="Miragem de Tiro"
            descricao="Seu Conjurador dispara um segundo projétil, embora tenha dano reduzido. Dano do tiro secundário: 30%"
          />,
        ]);
      } else if (
        (d1 === "Artemis" && d2 === "Zeus") ||
        (d1 === "Zeus" && d2 === "Artemis")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Artemis"
            nomeD1="Artemis"
            imagemD2="Zeus"
            nomeD2="Zeus"
            imagemDuoBencao="dbArtemisZeus"
            nomeDuoBencao="Para-Raios"
            descricao="Seu colecionável Tiro ataca inimigos próximos a cada 1s. Dano de raio: 70"
          />,
        ]);
      }
      //ATENA
      else if (
        (d1 === "Atena" && d2 === "Demeter") ||
        (d1 === "Demeter" && d2 === "Atena")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Atena"
            nomeD1="Atena"
            imagemD2="Demeter"
            nomeD2="Demeter"
            imagemDuoBencao="dbAtenaDemeter"
            nomeDuoBencao="Raízes Teimosas"
            descricao="Se você não tiver Morte/Desafio Teimoso , sua Saúderecuperação será lenta.Regeneração de vida durante a batalha: 1 (a cada 0,8 s)Saúde"
          />,
        ]);
      } else if (
        (d1 === "Atena" && d2 === "Dionisio") ||
        (d1 === "Dionisio" && d2 === "Atena")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Atena"
            nomeD1="Atena"
            imagemD2="Dionisio"
            nomeD2="Dionisio"
            imagemDuoBencao="dbAtenaDionisio"
            nomeDuoBencao="Risco Calculado"
            descricao="Os projéteis de ataque à distância dos seus inimigos são mais lentos. Redução de velocidade do projétil inimigo: +50%"
          />,
        ]);
      } else if (
        (d1 === "Atena" && d2 === "Poseidon") ||
        (d1 === "Poseidon" && d2 === "Atena")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Atena"
            nomeD1="Atena"
            imagemD2="Poseidon"
            nomeD2="Poseidon"
            imagemDuoBencao="dbAtenaPoseidon"
            nomeDuoBencao="Coragem Inabalável"
            descricao="Você não pode ser atordoado e resiste a alguns danos de Chefes. Redução de dano do chefe: +10%"
          />,
        ]);
      } else if (
        (d1 === "Atena" && d2 === "Zeus") ||
        (d1 === "Zeus" && d2 === "Atena")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Atena"
            nomeD1="Atena"
            imagemD2="Zeus"
            nomeD2="Zeus"
            imagemDuoBencao="dbAtenaZeus"
            nomeDuoBencao="Falange Relâmpago"
            descricao="Seu Conjuração ricocheteia entre inimigos próximos. Máximo de rebatidas: 3"
          />,
        ]);
      }

      //DEMETER
      else if (
        (d1 === "Demeter" && d2 === "Dionisio") ||
        (d1 === "Dionisio" && d2 === "Demeter")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Demeter"
            nomeD1="Demeter"
            imagemD2="Dionisio"
            nomeD2="Dionisio"
            imagemDuoBencao="dbDemeterDionisio"
            nomeDuoBencao="Vinho de Gelo"
            descricao="Sua Conjuração explode uma área com Névoa Festiva congelante que inflige Congelamento. Dano da Explosão: +30%"
          />,
        ]);
      } else if (
        (d1 === "Demeter" && d2 === "Poseidon") ||
        (d1 === "Poseidon" && d2 === "Demeter")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Demeter"
            nomeD1="Demeter"
            imagemD2="Poseidon"
            nomeD2="Poseidon"
            imagemDuoBencao="dbDemeterPoseidon"
            nomeDuoBencao="Tiro de Nevasca"
            descricao="Seu TIRO se move lentamente, atravessando inimigos e disparando fragmentos ao seu redor. Dano dos Fragmentos: 40"
          />,
        ]);
      } else if (
        (d1 === "Demeter" && d2 === "Zeus") ||
        (d1 === "Zeus" && d2 === "Demeter")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Demeter"
            nomeD1="Demeter"
            imagemD2="Zeus"
            nomeD2="Zeus"
            imagemDuoBencao="dbDemeterZeus"
            nomeDuoBencao="Fusão a Frio"
            descricao="Seus efeitos de Eletricidade não expiram quando os inimigos atacam. Duração de Eletricidade: 10 seg"
          />,
        ]);
      }
      //DIONISIO
      else if (
        (d1 === "Dionisio" && d2 === "Poseidon") ||
        (d1 === "Poseidon" && d2 === "Dionisio")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Dionisio"
            nomeD1="Dionisio"
            imagemD2="Poseidon"
            nomeD2="Poseidon"
            imagemDuoBencao="dbDionisioPoseidon"
            nomeDuoBencao="Acesso Exclusivo"
            descricao="Qualquer Benção encontrada têm seus efeitos melhorados. Minimo Raridade Benção: Épica"
          />,
        ]);
      } else if (
        (d1 === "Dionisio" && d2 === "Zeus") ||
        (d1 === "Zeus" && d2 === "Dionisio")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Dionisio"
            nomeD1="Dionisio"
            imagemD2="Zeus"
            nomeD2="Zeus"
            imagemDuoBencao="dbDionisioZeus"
            nomeDuoBencao="Banquete Cintilante"
            descricao="Sua Fumaça Festiva inflinge dano elétrico periodicamente. Dano Elétrico: 60"
          />,
        ]);

        /////////////////////////////////////////////////
      } 
      
      //POSEIDON & ZEUS
      else if (
        (d1 === "Poseidon" && d2 === "Zeus") ||
        (d1 === "Zeus" && d2 === "Poseidon")
      ) {
        exibeBencao(() => [
          <DuoBencaos
            key={0}
            imagemD1="Poseidon"
            nomeD1="Poseidon"
            imagemD2="Zeus"
            nomeD2="Zeus"
            imagemDuoBencao="dbPoseidonZeus"
            nomeDuoBencao="Oceano Tempestuoso"
            descricao="Seus efeitos de empurrão também causam relâmpagos nos inimigos próximos. Dano Elétrico: 40"
          />,
        ]);
      }
    }
  }

  return (
    <div>
      <button id="btnSearch" onClick={verificaBencao}>
        DUO!
      </button>
      <Exibicao>{bencao}</Exibicao>
    </div>
  );
}

export default App;
