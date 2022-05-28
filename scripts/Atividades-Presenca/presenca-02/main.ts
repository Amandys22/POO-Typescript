
//------------------------------------ ----------------------------------------------------
// Criando tipo de dados para poder printar com base em seus atributos usando console.table
//------------------------------------ ----------------------------------------------------
type NumeroMostrado = {
    decimal: string | number,
    octal: string | number,
    hexadecimal: string | number,
    binario: string | number
}

//----------------------------------------------------------------------------------------
// Funções de casting (transformar um tipo de dado em outro)
//----------------------------------------------------------------------------------------
function printBinario(numero: number): number | string{
    return numero.toString(2);
}

function printOctal(numero: number): number | string{
    return numero.toString(8);
}

function printDecimal(numero: number): number | string{
    return numero.toString(10);
}

function printHexadecimal(numero: number): number | string{
    return numero.toString(16);
}

//----------------------------------------------------------------------------------------
// Funções principais de montagem da tabela
//----------------------------------------------------------------------------------------
function printTabela(): void{
    let todosNumeros: Array<NumeroMostrado> = []; 
    
    for (var i = 0; i <= 255; i++) {
        todosNumeros.push(printLinha(i));
    }

    console.table(todosNumeros);
}

function printLinha(numero: number): NumeroMostrado {
    let map: NumeroMostrado = {
        "decimal": printDecimal(numero),
        "octal": printOctal(numero),
        "hexadecimal": printHexadecimal(numero),
        "binario": printBinario(numero)
    };
    return map;
}


//----------------------------------------------------------------------------------------
// Chamar função para mostrar tabela na tela
//----------------------------------------------------------------------------------------
printTabela();