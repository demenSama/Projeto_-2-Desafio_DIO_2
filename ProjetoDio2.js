let vitorias = 0;
let derrotas = 0;
let rank = ["Ferro","Bronze","Prata","Ouro","Diamante","LENDARIO","IMORTAL!"]; 


//sistema de repetição para as vitorias e vitorias esta abaixo.

while(vitorias<=152 && derrotas<152){
    switch(vitorias){
        case 0:
        vitorias=vitorias+1;
        break;
    }vitorias+=3;

    switch(derrotas){
        case 0:
        derrotas=derrotas+1;
        break;
    }derrotas+=1;

let saldo = valores(vitorias,derrotas);

function valores (num1,num2){
    return num1-num2; 
}
// partidas contador
let partidas = saldo/2
// if e elses
if(saldo<10){
    console.log("O seu heroi, na partida número "+partidas+" ficou no rank "+rank[0]+ " pois ele tem um saldo de " +saldo+ " vitorias");
    console.log("--------------------------------");
}else 
    if(10<saldo && saldo<=20){
        console.log("O seu heroi, na partida número "+partidas+" ficou no rank "+rank[1]+ " pois ele tem um saldo de " +saldo+ " vitorias");
        console.log("--------------------------------");
    }else 
        if (saldo>20 && saldo<=50){
            console.log("O seu heroi, na partida número "+partidas+" ficou no rank "+rank[2]+ " pois ele tem um saldo de " +saldo+ " vitorias");
            console.log("--------------------------------");
        }else
            if(saldo>50 && saldo<=80){
                console.log("O seu heroi, na partida número "+partidas+" ficou no rank "+rank[3]+ " pois ele tem um saldo de " +saldo+ " vitorias");
                console.log("--------------------------------");
            }else
                if(saldo>80 && saldo<=90){
                    console.log("O seu heroi, na partida número "+partidas+" ficou no rank "+rank[4]+ " pois ele tem um saldo de " +saldo+ " vitorias");
                    console.log("--------------------------------");
                }else 
                    if(saldo>90 && saldo<=100){
                        console.log("O seu heroi, na partida número "+partidas+" ficou no rank "+rank[5]+ " pois ele tem um saldo de " +saldo+ " vitorias");
                        console.log("--------------------------------");
                    }else
                        if(saldo>100){
                            console.log("O seu heroi, na partida número "+partidas+" ficou no rank "+rank[6]+ " pois ele tem um saldo de " +saldo+ " vitorias");
                            console.log("--------------------------------");
                        }                                  
    }      







