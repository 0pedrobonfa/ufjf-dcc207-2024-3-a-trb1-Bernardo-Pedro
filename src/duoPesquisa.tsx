export function botaoPesquisa()
{
    const botaoDeus1 = document.querySelector<HTMLSelectElement>("#btnD1");
    const botaoDeus2 = document.querySelector<HTMLSelectElement>("#btnD2");

    if(botaoDeus1 && botaoDeus2)
    {
        const valorSelecionadoD1 = botaoDeus1.value;
        const valorSelecionadoD2 = botaoDeus2.value;

        if(valorSelecionadoD1 === "1" && valorSelecionadoD2 == "2")
        {
            console.log("Ares e Demeter");
        }
    }
    
}