// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    if(currency>10000) {
        obj.error="You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }

    if(currency<=0){
        return obj;
    }

    if(currency>=50){
        obj.H=0;
    }
    while(currency>=50){
        obj.H++;
        currency-=50;
    }
    if(currency>=25){
        obj.Q=0;
    }
    while(currency>=25){
        obj.Q++;
        currency-=25;
    }
    if(currency>=10){
        obj.D=0;
    }
    while(currency>=10){
        obj.D++;
        currency-=10;
    }

    if(currency>=5){
        obj.N=0;
    }
    while(currency>=5){
        obj.N++;
        currency-=5;
    }

    if(currency>=1){
        obj.P=0;
    }

    while(currency>=1){
        obj.P++;
        currency-=1;
    }
    return obj;
}
