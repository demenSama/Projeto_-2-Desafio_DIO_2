let vitorias = 0;
let derrotas = 0;
let rank = ["ferro","bronze","prata","ouro","diamante","lendario","imortal"]; 


//sistema de repetição para as vitorias e vitorias esta abaixo.

while(vitorias<=152 && derrotas<152){
    switch(vitorias){
        case 0:
        vitorias=vitorias+1;
        break;
    }vitorias+=3;
//---------------------------------------------------------//
    switch(derrotas){
        case 0:
        derrotas=derrotas+1;
        break;
    }derrotas+=1;
//---------------------------------------------------------// terminar if e else, e depois resolver problema das partidas
            let saldo = valores(vitorias,derrotas);

            function valores (num1,num2){
                return num1-num2; 
            }
            if(saldo<10){
                console.log("rank de aventureiro é "+rank[0]+ " pois ele tem um saldo de " +saldo);
            }else 
                if(10<saldo && saldo<=20){
                    console.log("rank de aventureiro é "+rank[1]+ " pois ele tem um saldo de " +saldo);
                }else 
                    if (saldo>20 && saldo<=50){
                        console.log("rank de aventureiro é "+rank[2]+ " pois ele tem um saldo de " +saldo);
                    }else
                        if(saldo>50 && saldo<=80){
                            console.log("rank de aventureiro é "+rank[3]+ " pois ele tem um saldo de " +saldo);
                        }else
                            if(saldo>80 && saldo<=90){
                                console.log("rank de aventureiro é "+rank[4]+ " pois ele tem um saldo de " +saldo);
                            }else 
                                if(saldo>90 && saldo<=100){
                                    console.log("rank de aventureiro é "+rank[5]+ " pois ele tem um saldo de " +saldo);
                                }else
                                    if(saldo>100){
                                        console.log("rank de aventureiro é "+rank[6]+ " pois ele tem um saldo de " +saldo);
                                    }

                                    
    }      
//--------------------------------------------------------//







