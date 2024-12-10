import Ares from "./assets/Deuses/Ares.png";
import Afrodite from "./assets/Deuses/Afrodite.png";


export default function insereImagem(imagemDeus:String){

    if(imagemDeus === "Ares"){

        return (<img src={Ares}/>);
        
    }
    else if(imagemDeus === "Afrodite"){

        return (<img src={Afrodite}/>);
        
    }
    return null;

}