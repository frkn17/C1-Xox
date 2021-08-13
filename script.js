const allBtns = document.querySelectorAll('.btn-game');//button
const turn = document.querySelector('#turn');//h2 turn
const newGame=document.querySelector('#newGame');//newGame button
const newTour=document.querySelector('#newTour');//newTour button
const score=document.querySelector('#score');//h2 score

////////////////////

var game =[[2,2,2],[2,2,2],[2,2,2]]; //3x3 matris
var b;//diziye x ise 1 o ise 0
var start=0; //kimin sırası ,xden başlar
var round=1;
/////////////////

var xS=0;//x sayıları
var oS=0;//o sayıları
var winner = -1;// 1-> x 0->O -1->Berabere
var finish = 0 ;//1->Oyun bitti 0->bitmedi
var xScore=0;//1 tur bittiğinde x kazandığında artar
var oScore=0;//1 tur bittiğinde o kazandığında artar
///////////////////

/////////////
newGame.addEventListener('click',startNewGame);
newTour.addEventListener('click',startNewTour);
allBtns.forEach(function(item){
    item.addEventListener('click',xo);
}
);
//////////////

function xo(e){//BtnGameClicK
    start++;
    if(start%2 == 1){
        e.target.textContent='X';
        b=1; //X
        turn.textContent="O's turn."//h2ye yazdırma
        
    }
    else{
        e.target.textContent='O';
        b=0; //O
        turn.textContent="X's turn." //h2ye yazdırma
       
    }
    colorChange(start,e);//renk değiştirme
    whereIsClicked(e.target,b);//Diziye yazdırır
    xFinished();//Bitiş kontrolü
    oFinished();//Bitiş kontrolü
    if(winner == 1){
        finish=1;
        xScore++;
        turn.textContent="X WON!";

    }
    else if(winner == 0){  
        finish=1;
        oScore++;
        turn.textContent="O WON!";

    }
    if(start == 9){
        if(winner == -1){
            turn.textContent="Draw";
            

        }
    }
    score.textContent=`ROUND "${round}" || X: ${xScore} - ${oScore} :O`;
    control();
    
    
}

function whereIsClicked(location,vXO){ //Diziye Ekleme
    switch(location.id){
        case 'zz':
            game[0][0]=vXO;
            
            break;
        case 'zo':
            game[0][1]=vXO;
            break;
        case 'zt':
            game[0][2]=vXO;
            break;
        case 'oz':
            game[1][0]=vXO;
            break;
        case 'oo':
            game[1][1]=vXO;
            break;
        case 'ot':
            game[1][2]=vXO;
            break;
        case 'tz':
            game[2][0]=vXO;
            break;
        case 'to':
            game[2][1]=vXO;
            break;
        case 'tt':
            game[2][2]=vXO;
            break;
        
           
    }
    location.disabled=true;//basılan butonun disable etme
   
}

function xFinished(){// X kazandı mı
    //Yatay Bitiş
    for(let i=0;i<3;i++){ //00-02
        if(game[0][i] === 1){
           xS++;
        }
    }
    if(xS == 3){
        winner=1;
        xS=0;
    }
    else{
        xS=0;
    }

    for(let i=0;i<3;i++){ //10-12
        if(game[1][i] === 1){
           xS++;
        }
    }
    if(xS == 3){
       winner=1;
        xS=0;
    }
    else{
        xS=0;
    }

    for(let i=0;i<3;i++){ //20-22
        if(game[2][i] === 1){
           xS++;
        }
    }
    if(xS == 3){
        winner=1;
        xS=0;
    }
    else{
        xS=0;
    }


    //Dikey Bitiş

    for(let i=0;i<3;i++){
        if(game[i][0] === 1){
            xS++;
        }
    }
    if(xS==3){
        winner=1;
        xS=0;
    }
    else{
        xS=0;
    }

    for(let i=0;i<3;i++){
        if(game[i][1] === 1){
            xS++;
        }
    }
    if(xS==3){
        winner=1;
        xS=0;
    }
    else{
        xS=0;
    }

    for(let i=0;i<3;i++){
        if(game[i][2] === 1){
            xS++;
        }
    }
    if(xS==3){
        winner=1;
        xS=0;
    }
    else{
        xS=0;
    }
    
    //Çarpraz Bitirme

    if((game[0][0] === 1) && (game[1][1] === 1) && (game[2][2]===1)){
        winner=1;
        
    }
    if((game[2][0] === 1) && (game[1][1] === 1) && (game[0][2]===1)){
        winner=1;
        
    }
    
    
}

function oFinished(){ //O kazandı mı
    for(let i=0;i<3;i++){ //00-02
        if(game[0][i] === 0){
           oS++;
        }
    }
    if(oS == 3){
        winner=0;
        oS=0;
    }
    else{
        oS=0;
    }

    for(let i=0;i<3;i++){ //10-12
        if(game[1][i] === 0){
           oS++;
        }
    }
    if(oS == 3){
        winner=0;
        oS=0;
    }
    else{
        oS=0;
    }

    for(let i=0;i<3;i++){ //20-22
        if(game[2][i] === 0){
           oS++;
        }
    }
    if(oS == 3){
        winner=0;
        oS=0;
    }
    else{
        oS=0;
    }


    //Dikey Bitiş

    for(let i=0;i<3;i++){
        if(game[i][0] === 0){
            oS++;
        }
    }
    if(oS==3){
        winner=0;
        oS=0;
    }
    else{
        oS=0;
    }

    for(let i=0;i<3;i++){
        if(game[i][1] === 0){
            oS++;
        }
    }
    if(oS==3){
        winner=0;
        oS=0;
    }
    else{
        oS=0;
    }

    for(let i=0;i<3;i++){
        if(game[i][2] === 0){
            oS++;
        }
    }
    if(oS==3){
        winner=0;
        oS=0;
    }
    else{
        oS=0;
    }
    //Çarpraz
    if((game[0][0] === 0) && (game[1][1] === 0) && (game[2][2]===0)){
        winner=0;
        
    }
    if((game[2][0] === 0) && (game[1][1] === 0) && (game[0][2]===0)){
        winner=0;
        
    }
   

}

function colorChange(start,e){//Renk Ayarlamaları
    
    if(start%2==1){
    allBtns.forEach(function(item){
            if(item.textContent === ''){
                item.style.backgroundColor='#87B8FB'; //Uygun o için arka plan rengi verme
                e.target.style.backgroundColor='#fff';//basılan butonun arkaplan rengini normale çevirme
            }
        });
    }
    else{
        allBtns.forEach(function(item){
            if(item.textContent === ''){
                item.style.backgroundColor='#E1FF92';//Uygun x için arka plan rengi verme
                e.target.style.backgroundColor='#fff';//basılan butonun arkaplan rengini normale çevirme
            }
        });
    }

}

function control(){//ButtonKontrol
    if(finish==1){
        allBtns.forEach(function(item){
            item.disabled=true;
        });
    }
}

function startNewGame(event){//Yeni oyun başlatma
    newGame.setAttribute('href','index.HTML');
}

function startNewTour(){//Tur bittiğinde basılması gereken buton
    round++;
    game =[[2,2,2],[2,2,2],[2,2,2]];
    start=0;
    finish=0;
    winner=-1;
    allBtns.forEach(function(item){
        item.textContent='';
        item.disabled=false;
        item.style.backgroundColor='rgb(226,121,121)';
    });
}