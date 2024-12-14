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

import AresArtemis from "./assets/DuoBencao/dbAresArtemis.png";
import AresAtena from "./assets/DuoBencao/dbAresAtena.png";
import AresDemeter from "./assets/DuoBencao/dbAresDemeter.png";
import AresDionisio from "./assets/DuoBencao/dbAresDionisio.png";
import AresPoseidon from "./assets/DuoBencao/dbAresPoseidon.png";
import AresZeus from "./assets/DuoBencao/dbAresZeus.png";

import ArtemisAtena from "./assets/DuoBencao/dbArtemisAtena.png";
import ArtemisDemeter from "./assets/DuoBencao/dbArtemisDemeter.png";
import ArtemisDionisio from "./assets/DuoBencao/dbArtemisDionisio.png";
import ArtemisPoseidon from "./assets/DuoBencao/dbArtemisPoseidon.png";
import ArtemisZeus from "./assets/DuoBencao/dbArtemisZeus.png";


import AtenaDemeter from "./assets/DuoBencao/dbAtenaDemeter.png";
import AtenaDionisio from "./assets/DuoBencao/dbAtenaDionisio.png";
import AtenaPoseidon from "./assets/DuoBencao/dbAtenaPoseidon.png";
import AtenaZeus from "./assets/DuoBencao/dbAtenaZeus.png";

import DemeterDionisio from "./assets/DuoBencao/dbDemeterDionisio.png";
import DemeterPoseidon from "./assets/DuoBencao/dbDemeterPoseidon.png";
import DemeterZeus from "./assets/DuoBencao/dbDemeterZeus.png";

import DionisioPoseidon from "./assets/DuoBencao/dbDionisioPoseidon.png";
import DionisioZeus from "./assets/DuoBencao/dbDionisioZeus.png";

import PoseidonZeus from "./assets/DuoBencao/dbPoseidonZeus.png";


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

    else if(imagemDuoBencao === "dbAresArtemis"){
        return (<img src={AresArtemis}/>);
    }
    else if(imagemDuoBencao === "dbAresAtena"){
        return (<img src={AresAtena}/>);
    }
    else if(imagemDuoBencao === "dbAresDemeter"){
        return (<img src={AresDemeter}/>);
    }
    else if(imagemDuoBencao === "dbAresDionisio"){
        return (<img src={AresDionisio}/>);
    }
    else if(imagemDuoBencao === "dbAresPoseidon"){
        return (<img src={AresPoseidon}/>);
    }
    else if(imagemDuoBencao === "dbAresZeus"){
        return (<img src={AresZeus}/>);
    }


    else if(imagemDuoBencao === "dbArtemisAtena"){
        return (<img src={ArtemisAtena}/>);
    }
    else if(imagemDuoBencao === "dbArtemisDemeter"){
        return (<img src={ArtemisDemeter}/>);
    }
    else if(imagemDuoBencao === "dbArtemisDionisio"){
        return (<img src={ArtemisDionisio}/>);
    }
    else if(imagemDuoBencao === "dbArtemisPoseidon"){
        return (<img src={ArtemisPoseidon}/>);
    }
    else if(imagemDuoBencao === "dbArtemisZeus"){
        return (<img src={ArtemisZeus}/>);
    }



    else if(imagemDuoBencao === "dbAtenaDemeter"){
        return (<img src={AtenaDemeter}/>);
    }
    else if(imagemDuoBencao === "dbAtenaDionisio"){
        return (<img src={AtenaDionisio}/>);
    }
    else if(imagemDuoBencao === "dbAtenaPoseidon"){
        return (<img src={AtenaPoseidon}/>);
    }
    else if(imagemDuoBencao === "dbAtenaZeus"){
        return (<img src={AtenaZeus}/>);
    }


    else if(imagemDuoBencao === "dbDemeterDionisio"){
        return (<img src={DemeterDionisio}/>);
    }
    else if(imagemDuoBencao === "dbDemeterPoseidon"){
        return (<img src={DemeterPoseidon}/>);
    }
    else if(imagemDuoBencao === "dbDemeterZeus"){
        return (<img src={DemeterZeus}/>);
    }


    else if(imagemDuoBencao === "dbDionisioPoseidon"){
        return (<img src={DionisioPoseidon}/>);
    }
    else if(imagemDuoBencao === "dbDionisioZeus"){
        return (<img src={DionisioZeus}/>);
    }

    else if(imagemDuoBencao === "dbPoseidonZeus"){
        return (<img src={PoseidonZeus}/>);
    }
    

    return null;

}
