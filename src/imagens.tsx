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
    if(imagemDuoBencao === "dbAfroditeArtemis"){
        return (<img src={AfroditeArtemis}/>);
    }

    return null;

}
