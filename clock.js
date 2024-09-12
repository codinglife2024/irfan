setInterval(() => {
  let timeformpc =new Date() 
  time_in_html.innerHTML=timeformpc.toLocaleTimeString()
}, 1000);
function setALARM(){
    let h =hours_html.value
    let m =minutes_html.value
    setalarmtime.innerHTML=h+":"+m+":00"
}
 let checkInterval=setInterval(() => {
  let alarmtime=setalarmtime.innerHTML;
  alarmtime=alarmtime.split(":");
  let alarmhours=alarmtime[0];
  let alarmminutes=alarmtime[1];
  let systemTime=new Date();
  let systemhours=systemTime.getHours();
  let systemminutes=systemTime.getMinutes();
  if(systemhours>12){
    systemhours=systemhours-12;
  }
  if(alarmhours==systemhours && alarmminutes==systemminutes){
    alarmImage.src="Alarm_Clock.png"
    AramSound.play();
    AramSound.loop="true"

    clearInterval(checkIntreval)
}

}, 1000);