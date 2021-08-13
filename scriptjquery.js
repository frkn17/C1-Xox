$(function(){
    var allCells=document.querySelectorAll('.cell');
    var gameplay = [[2,2,2],[2,2,2],[2,2,2]];
    var start = 0;
    var xS=0;
    var xScore=0;
    var oS=0;
    var oScore=0;
    var winner=-1;
    var tour=1;


    $('#newTour').attr('disabled','disabled');
    $("#newGame").attr('disabled','disabled');
    $('.cell').click(function(e){
        $(e.target).animate(
            {fontSize:"3rem"}
        );
        $("#newGame").removeAttr('disabled');
        start++;
        if(start %2 ==1){
            $(e.target).text('X');
            whereIsClicked(e.target,1);
            $('#turn').text("O's turn");
        }
        else{
            $(e.target).text('O');
            whereIsClicked(e.target,0);
            $('#turn').text("X's turn");
        }
        colorChange(start,e);
        if(xFinished()){
            xScore++;
            $('#turn').text("X WON");
            finished();
        }
        else if(oFinished()){
            oScore++;
            $('#turn').text("O WON");
            finished();
        }
        if((start == 9 ) && (winner != -1)){
            finished();
            $('#newTour').removeAttr('disabled');
        }
        $('#score').text(`ROUND : "${tour}" || X: ${xScore} - ${oScore}: Y`);
    });
    $('#newTour').click(function(){
        tour++;
        $('.cell').removeAttr('disabled');
        $('.cell').text('');
        $('.cell').css('backgroundColor','beige');
        $('#newTour').attr('disabled','disabled');
        $('.cell').animate(
            {fontSize:"0rem"}
        );

    });
     $('#newGame').click(function(){
         finished();
         xScore=0;
         tour=1;
         oScore=0;
         winner=-1;
         $('#turn').text("LET'S START");
         $('.cell').removeAttr('disabled');
         $('.cell').text('');
         $('.cell').css('backgroundColor','beige');
         $('#newTour').attr('disabled','disabled');
         $('#score').text(`ROUND : "${tour-1}" || X: ${xScore} - ${oScore}: Y`);
         $("#newGame").attr('disabled','disabled');
         $('.cell').animate(
            {fontSize:"0rem"}
        );

     });

    function whereIsClicked(location,XO){
        switch(location.id){
            case 'zz':
                gameplay[0][0]=XO;
                break;
            case 'zo':
                gameplay[0][1]=XO;
                break;
            case 'zt':
                gameplay[0][2]=XO;
                break;
            case 'oz':
                gameplay[1][0]=XO;
                break;
            case 'oo':
                gameplay[1][1]=XO;
                break;
            case 'ot':
                gameplay[1][2]=XO;
                break;
            case 'tz':
                gameplay[2][0]=XO;
                break;
            case 'to':
                gameplay[2][1]=XO;
                break;
            case 'tt':
                gameplay[2][2]=XO;
                break;
        }
        $(location).attr('disabled','disabled');
    }
    function colorChange(start,e){
       if(start %2 ==1){
           allCells.forEach(function(item){
               if(item.textContent==''){
                   item.style.backgroundColor='#CACE32';
                   e.target.style.backgroundColor='beige';
               }
           });
       }
       else{
             allCells.forEach(function(item){
            if(item.textContent==''){
                item.style.backgroundColor='#32CEB6';
                e.target.style.backgroundColor='beige';
            }
        });

       }
    }
    function xFinished(){
        for(let i = 0;i<3;i++){
            if(gameplay[0][i]===1){
                xS++;
            }
        }
        if(xS==3){
            winner=1;
            xS=0;
            return true;
        }
        else{
            xS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[1][i]===1){
                xS++;
            }
        }
        if(xS==3){
            winner=1;
            xS=0;
            return true;
        }
        else{
            xS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[2][i]===1){
                xS++;
            }
        }
        if(xS==3){
            winner=1;
            xS=0;
            return true;
        }
        else{
            xS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[i][0]===1){
                xS++;
            }
        }
        if(xS==3){
            winner=1;
            xS=0;
            return true;
        }
        else{
            xS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[i][1]===1){
                xS++;
            }
        }
        if(xS==3){
            winner=1;
            xS=0;
            return true;
        }
        else{
            xS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[i][2]===1){
                xS++;
            }
        }
        if(xS==3){
            winner=1;
            xS=0;
            return true;
        }
        else{
            xS=0;
        }
        if((gameplay[0][0]===1) && (gameplay[1][1]===1) && (gameplay[2][2]==1)){
            winner=1;
            xS=0;
            return true;
        }
        if((gameplay[2][0]===1) && (gameplay[1][1]===1) && (gameplay[0][2]==1)){
            winner=1;
            xS=0;
            return true;
        }
        
    }
    
    function oFinished(){
        for(let i = 0;i<3;i++){
            if(gameplay[0][i]===0){
                oS++;
            }
        }
        if(oS==3){
            winner=0;
            oS=0;
            return true;
        }
        else{
            oS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[1][i]===0){
                oS++;
            }
        }
        if(oS==3){
            winner=0;
            oS=0;
            return true;
        }
        else{
            oS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[2][i]===0){
                oS++;
            }
        }
        if(oS==3){
            winner=0;
            oS=0;
            return true;
        }
        else{
            oS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[i][0]===0){
                oS++;
            }
        }
        if(oS==3){
            winner=0;
            oS=0;
            return true;
        }
        else{
            oS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[i][1]===0){
                oS++;
            }
        }
        if(oS==3){
            winner=0;
            oS=0;
            return true;
        }
        else{
            oS=0;
        }
        for(let i = 0;i<3;i++){
            if(gameplay[i][2]===0){
                oS++;
            }
        }
        if(oS==3){
            winner=1;
            oS=0;
            return true;
        }
        else{
            oS=0;
        }
        if((gameplay[0][0]===0) && (gameplay[1][1]===0) && (gameplay[2][2]==0)){
            winner=0;
            oS=0;
            return true;
        }
        if((gameplay[2][0]===0) && (gameplay[1][1]===0) && (gameplay[0][2]==0)){
            winner=1;
            xS=0;
            return true;
        }
    }
    function finished(){
        start=0;
        gameplay = [[2,2,2],[2,2,2],[2,2,2]];
        xS=0;
        oS=0;
        winner=-1;
        $('#newTour').removeAttr('disabled','disabled');
    }


});
