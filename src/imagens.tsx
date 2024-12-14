import Ares from "./assets/Deuses/Ares.png";
import Afrodite from "./assets/Deuses/Afrodite.png";
import Artemis from "./assets/Deuses/Artemis.png";
import Atena from "./assets/Deuses/Atena.png";
import Demeter from "./assets/Deuses/Demeter.png";
import Dionisio from "./assets/Deuses/Dionisio.png";
import Poseidon from "./assets/Deuses/Poseidon.png";
import Zeus from "./assets/Deuses/Zeus.png";

import AfroditeAres from "./assets/DuoBencao/dbAfroditeAres.png";
import AfroditeArtemis from "./assets/DuoBencao/dbAfroditeArtemis.png";
import AfroditeAtena from "./assets/DuoBencao/dbAfroditeAtena.png";
import AfroditeDemeter from "./assets/DuoBencao/dbAfroditeDemeter.png";
import AfroditeDionisio from "./assets/DuoBencao/dbAfroditeDionisio.png";
import AfroditePoseidon from "./assets/DuoBencao/dbAfroditePoseidon.png";
import AfroditeZeus from "./assets/DuoBencao/dbAfroditeZeus.png";


export default function insereImagem(imagemDeus:String){

    if(imagemDeus === "Ares"){
        return (<img src={Ares}/>);
    }
    else if(imagemDeus === "Afrodite"){
        return (<img src={Afrodite}/>);
    }
    else if(imagemDeus === "Artemis"){
        return (<img src={Artemis}/>);
    }
    else if(imagemDeus === "Atena"){
        return (<img src={Atena}/>);
    }
    else if(imagemDeus === "Demeter"){
        return (<img src={Demeter}/>);
    }
    else if(imagemDeus === "Dionisio"){
        return (<img src={Dionisio}/>);
    }
    else if(imagemDeus === "Poseidon"){
        return (<img src={Poseidon}/>);
    }
    else if(imagemDeus === "Zeus"){
        return (<img src={Zeus}/>);
    }
    return null;

}


export function insereImagemDuoBencao(imagemDuoBencao:String){

    if(imagemDuoBencao === "dbAfroditeAres"){
        return (<img src={AfroditeAres}/>);
    }
    else if(imagemDuoBencao === "dbAfroditeArtemis"){
        return (<img src={AfroditeArtemis}/>);
    }
    else if(imagemDuoBencao === "dbAfroditeAtena"){
        return (<img src={AfroditeAtena}/>);
    }
    else if(imagemDuoBencao === "dbAfroditeDemeter"){
        return (<img src={AfroditeDemeter}/>);
    }
    else if(imagemDuoBencao === "dbAfroditeDionisio"){
        return (<img src={AfroditeDionisio}/>);
    }
    else if(imagemDuoBencao === "dbAfroditePoseidon"){
        return (<img src={AfroditePoseidon}/>);
    }
    else if(imagemDuoBencao === "dbAfroditeZeus"){
        return (<img src={AfroditeZeus}/>);
    }

    return null;

}
