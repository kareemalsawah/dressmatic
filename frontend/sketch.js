
var checkbox;
function setup() {
  checkbox = createCheckbox('check this to enable text to speech', false);
  
}



var myVoice = new p5.Speech();
myVoice.setRate(1);

window.onload = function(){
    if (annyang) {

var test , test2 , test3;
var picTaken= false;
var check= false;
var cameraOpened=false;
var modeSelected = false;
        var commands = {
//inputs  

      'input*order': function(order) {
       picTaken= false;
       cameraOpened=false;
       test = order.toString(order) ;
       modeSelected= true; 
      console.log(test);

     switch(test){
       case" new":
          if(checkbox.checked){ myVoice.speak('ok! inputing new ... please, open up your camera'); }
//insert code here
 break;

        case" old":
             if(checkbox.checked){ myVoice.speak('ok! inputing old, open up your camera'); } 
// insert code here
break;

        case" clean":
             if(checkbox.checked){ myVoice.speak('ok! inputing washed clothes , open up your camera'); } break;
//insert code here
 break;

        case" back": if(checkbox.checked){ myVoice.speak('ok lets try again');} break;
//insert code here 
 break;

 default:   if(checkbox.checked){ myVoice.speak('please repeat');} console.log(JSON.stringify(order)); check= true; 
//insert code here
 }
} ,
 
//outputs 

      'output*orders': function(orders) {
       test2 = orders.toString(orders) ; 
        picTaken= false;
        cameraOpened=false;
        modeSelected= true; 
      console.log(test2);
        
      switch(test2){
           case" casual":  if(checkbox.checked){ myVoice.speak(' checking for a casual outfit ,please ..... when you take the suggested outfit'); }
//insert code here
 break;

           case" formal":
            if(checkbox.checked){ myVoice.speak('checking for a formal outfit ,please ..... when you take the suggested outfit'); }
// insert code here
 break;

           case" semi-formal":
             if(checkbox.checked){ myVoice.speak('checking for a semi-formal outfit ,please ..... when you take the suggested outfit'); }
//insert code here
 break; 

           case" back": if(checkbox.checked){ myVoice.speak('ok lets try again');}
//insert code here 
 break;

           default:   if(checkbox.checked){ myVoice.speak('please repeat');} console.log(JSON.stringify(orders)); check= true; 
//insert code here

   } 

},

//wash

  'washing mode':   function(){  if(checkbox.checked){ myVoice.speak('please use the camera to shoot the clothes you will wash');} modeSelected= true;picTaken= false;cameraOpened=false;},
  
//help

  'help':function(){ modeSelected = false; cameraOpened=false; picTaken= false; if(checkbox.checked){myVoice.setRate(0.5);  myVoice.speak('please listen to the following tutorial carefully ....... first lets start with the commands we have 3 types of commands input ..... output..... and.... wash...... also you can use commands like...... back ......and .....repeat .....lets start with input if you want to add new clothes to the wardrobe use the ..... input new ...... command if you want to add clothes which are already registered on the app use the .... input old..... command if you want to add clothes that you took to wash use the ..... input wash..... command , now for the output command if you want a formal outfit use the ..... output formal...... commandif you want a semi formal outfit use the .... output semi formal or output semi ...... command , if you want a casual outfit use the .... output casual ....., when  you want to take dirty clothes to wash them use the .... washing mode command......please say help if you need to here this again or ...next help... to  proceed ');}

    
},

 'open camera': function(){picTaken= false; cameraOpened=true; if(modeSelected){if(checkbox.checked){ myVoice.speak('ready to take picture say ....shoot ....to take the photo');}} else{if(checkbox.checked){ myVoice.speak('please select a mode first');}}
//add your code
},

 'shoot':function(){ 
    if(cameraOpened){if(modeSelected){if(checkbox.checked){ myVoice.speak('Picture taken');picTaken=true;}}else{if(checkbox.checked){ myVoice.speak('please select a mode first');}}} else{if(checkbox.checked){ myVoice.speak('Please select a mode and open up your camera first');}}
 // add your code
},

'next':function(){ 
  if(picTaken){if(modeSelected){if(checkbox.checked){ myVoice.speak('ready to take the next picture');}}else{if(checkbox.checked){ myVoice.speak('please select a mode first');}}} else{if(checkbox.checked){ myVoice.speak('Please select a mode and open up your camera then shoot a photo');}}
// add your code 
  },
'done':function(){ if(picTaken){if(checkbox.checked){ myVoice.speak('ok,got that');}}
// add your code
}
        };


        
  
  
        annyang.addCommands(commands);
        annyang.start();
if(check){annyang.start()};
    }

} 