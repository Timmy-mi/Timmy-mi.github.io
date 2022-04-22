function menu(){
    document.getElementById('first').innerHTML = "you will get a number and 6 options";
    document.getElementById('second').innerHTML = "choose 3 in the 6 options in order to get the original number";
    document.getElementById('third').innerHTML = "If you add these three numbers together, it's equal to that original number, you win";
   }
   
   function levelone(){
    var rntotal = Math.ceil(Math.random()*100);
    var rn1 = Math.ceil(Math.random()*40);
    var rn2 = Math.ceil(Math.random()*30);
    var ln = rntotal - rn1 -rn2;
    var op1 = Math.ceil(Math.random()*20);
    var op2 = Math.ceil(Math.random()*50);
    var op3 = Math.ceil(Math.random()*40);
    var option = [rn1,rn2,ln,op1,op2,op3];
    //generating numbers
    alert(option)
   
     var currentIndex = option.length
     var randomIndex;
   
     // While there remain elements to shuffle.
     while (currentIndex != 0) {
   
       // Pick a remaining element.
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
   
       // And swap it with the current element.
       [option[currentIndex], option[randomIndex]] = [
         option[randomIndex], option[currentIndex]];
       //I didn't write this, I copy it from the internet
       //this way even though randomIndex might be the same but since currentIndex will continue to change, the order of the array will change
     }
   
    var sentence1 = "the total number is " + rntotal + "\nPlease enter the order!" + "\n" + option;
    var orderone = parseInt(prompt(sentence1));
    var ordertwo = parseInt(prompt(sentence1));
    var orderthree = parseInt(prompt(sentence1));
    if (orderone <= 0 || orderone >= 6){
       alert('You have 10,000 iq and should 1v1 dream in manhaunt ')
       return
   }
   
   else if(orderthree <= 0 || orderthree >= 6){
       alert('Smart Boy')
       return
   }
   else if(ordertwo <= 0 || ordertwo >= 6){
       alert('You are so smart. You shouldn\'t be here')
       return
   }
   else if(ordertwo === orderone || orderthree === orderone || orderthree === ordertwo){
       for (var i = 0; i < 100 ; i++){
       alert('you are disqualified, prepare to press your enter key for 100 times haha!')
    }


  }
    var first = option[orderone - 1]
    var second = option[ordertwo - 1]
    var third = option[orderthree - 1]
    if (first+second+third == rntotal){
     alert('you win')
    }
    else{
     alert('you lose')
    }
   
   
   
   }
   
   
   function leveltwo(){
    var rntotal = Math.ceil(Math.random()*200);
    var rn1 = Math.ceil(Math.random()*80);
    var rn2 = Math.ceil(Math.random()*60);
    var ln = rntotal - rn1 -rn2;
    var op1 = Math.ceil(Math.random()*40)-15;
    var op2 = Math.ceil(Math.random()*100)-45;
    var op3 = Math.ceil(Math.random()*80)-35;
    var option = [rn1,rn2,ln,op1,op2,op3];
    //generating numbers
    alert(option)
   
     var currentIndex = option.length
     var randomIndex;
   
     // While there remain elements to shuffle.
     while (currentIndex != 0) {
   
       // Pick a remaining element.
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
   
       // And swap it with the current element.
       [option[currentIndex], option[randomIndex]] = [
         option[randomIndex], option[currentIndex]];
       //I didn't write this, I copy it from the internet
       //this way even though randomIndex might be the same but since currentIndex will continue to change, the order of the array will change
     }
   
    var sentence1 = "the total number is " + rntotal + "\nPlease enter the order!" + "\n" + option;
    var orderone = parseInt(prompt(sentence1));
    var ordertwo = parseInt(prompt(sentence1));
    var orderthree = parseInt(prompt(sentence1));
    if (orderone <= 0 || orderone >= 6){
       alert('You have 10,000 iq and should 1v1 dream in manhaunt ')
       return
   }
   
   else if(orderthree <= 0 || orderthree >= 6){
       alert('Smart Boy')
       return
   }
   else if(ordertwo <= 0 || ordertwo >= 6){
       alert('You are so smart. You shouldn\'t be here')
       return
   }
   else if(ordertwo === orderone || orderthree === orderone || orderthree === ordertwo){
       for (var i = 0; i < 100 ; i++){
       alert('you are disqualified, prepare to press your enter key for 100 times you idiot!')
       
   }
    var first = option[orderone - 1]
    var second = option[ordertwo - 1]
    var third = option[orderthree - 1]
    if (first+second+third == rntotal){
     alert('you win')
    }
    else{
     alert('you lose')
    }
   }
}
   
   function levelthree(){
    var rntotal = Math.ceil(Math.random()*1000);
    var rn1 = Math.ceil(Math.random()*400);
    var rn2 = Math.ceil(Math.random()*300);
    var ln = rntotal - rn1 -rn2;
    var op1 = Math.ceil(Math.random()*200)-50;
    var op2 = Math.ceil(Math.random()*500)-40;
    var op3 = Math.ceil(Math.random()*400)-100;
    var option = [rn1,rn2,ln,op1,op2,op3];
    //generating numbers
    alert(option)
   
     var currentIndex = option.length;
     var randomIndex;
   
     // While there remain elements to shuffle.
     while (currentIndex != 0) {
   
       // Pick a remaining element.
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
   
       // And swap it with the current element.
       [option[currentIndex], option[randomIndex]] = [
         option[randomIndex], option[currentIndex]];
       //I didn't write this, I copy it from the internet
       /*this way even though randomIndex might be the same 
       but since currentIndex 
       will continue to change, the order 
       of the array will change*/
     }
   var sentence1 = "the total number is " + rntotal + "\nPlease enter the order!" + "\n" + option;
    var orderone = parseInt(prompt(sentence1));
    var ordertwo = parseInt(prompt(sentence1));
    var orderthree = parseInt(prompt(sentence1));
   if (orderone <= 0 || orderone >= 6){
       alert('You have 10,000 iq and should 1v1 dream in manhaunt ')
       return
   }
   else if(orderthree <= 0 || orderthree >= 6){
       alert('Smart Boy')
       return
   }
   else if(ordertwo <= 0 || ordertwo >= 6){
       alert('You are so smart. You shouldn\'t be here')
       return
   }
   else if(ordertwo === orderone || orderthree === orderone || orderthree === ordertwo){
       for (var i = 0; i < 100 ; i++){
       alert('you are disqualified, prepare to press your enter key for 100 times you idiot!')
   }	
   }
    var first = option[orderone - 1]
    var second = option[ordertwo - 1]
    var third = option[orderthree - 1];
   if(first+second+third == rntotal){
       alert('you win')
   }
   else{
       alert('you lose')
   }
   }
   
   
   /*function main(){
       var chooselevel = parseInt(prompt('choose your level : 1 ~ 3'));
       if (chooselevel === 1){
           levelone();
       }
       else if (chooselevel === 2){
           leveltwo();
       }
       else if (chooselevel === 3){
           levelthree();
       }
       else if (chooselevel > 3 || chooselevel < 1){
           alert("You are too smart, you shouldn't be here. You should go to MIT and become a professor");
       }
   }
   */
   function main(){
       var chooselevel = parseInt(prompt('choose your level: 1 ~ 3'));
       if (chooselevel === 1){
           levelone();
       }
       else if (chooselevel === 2){
           leveltwo();
       }
       else if (chooselevel === 3){
           levelthree();
       }
       else if (chooselevle > 3 || chooselevel < 1){
           alert("uuu");
       }
   }