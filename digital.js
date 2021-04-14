var offsetTime = {
  London : 0,
  Bangalore : 330,
  NewYork : -300,
  Melbourne : 600,
  Chicago : -360,
  LosAngeles : -480,
  Montreal : -300,
  Berlin : 60,
  Glasgow : -330
};

function getCurrentTime(minutes) {
  var currentTime = new Date();
  var currentTimeInMS = currentTime.valueOf();
  var UTCtimeInMS = currentTimeInMS + (( currentTime.getTimezoneOffset()*60)*1000);

  var requiredTimeInMS = UTCtimeInMS+((minutes*60)*1000);
  var requiredTimeObj = new Date(requiredTimeInMS);

  return requiredTimeObj;
}

function getTime(dateObj){
  if(dateObj instanceof Date){
    return dateObj.getHours() + ' : ' + dateObj.getMinutes() + ' : ' + dateObj.getSeconds();
  }
}

function updateTimeOnScreen(){
  let container = ' ';
  for(let city in offsetTime){
    let offsetMinutes = offsetTime[city];
    let hours = getCurrentTime(offsetMinutes).getHours();
    let className = hours >=6 && hours < 18 ? 'day-time' : 'night-time';
    container += "<div class='col "+ className +"'><div class='city'>" + city + "</div><div class='time'>"+ 
        getTime(getCurrentTime(offsetMinutes)) +"</div></div>";
  }
  document.getElementById('wall-clock').innerHTML = container;
  setTimeout(updateTimeOnScreen, 1000);
}

updateTimeOnScreen();
 