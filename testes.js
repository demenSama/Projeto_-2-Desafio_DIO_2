//sistema de repetição com multipicação aplicando incremento.
let vitorias = 0;
let derrotas = 0;
let partidas; 
//sistema de repetição para as vitorias e vitorias esta abaixo.
{
while(vitorias<200 && derrotas<200){
    switch(vitorias){
        case 0:
            vitorias=vitorias+1;
        break;
    }
vitorias*=3;

    switch(derrotas){
        case 0:
            derrotas=derrotas+1;
        break;
    }
   
    derrotas*=2;
    console.log(derrotas+vitorias);
}

}