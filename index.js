console.log("This is javascript alarm clock");

let form=document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let alarmInput=document.getElementById('alarmInput');
    let alarmSetDate=new Date(alarmInput.value);
    console.log(alarmSetDate+"alarmSetDate");
    let nowTime=new Date();
    console.log(nowTime,"nowTime");
    let timeToSetAlarm=nowTime-alarmSetDate;
    console.log(timeToSetAlarm);


    if(timeToSetAlarm>=0){
        setTimeout(() => {
            console.log("Alarm Ringing");
            audioPlay();
            
        }, timeToSetAlarm);
    }
    else{
        console.log("AUDIO NOT PLAYING");
    }
})



function audioPlay() {

   let audio = document.getElementById('audio');
  audio.play();
 }
