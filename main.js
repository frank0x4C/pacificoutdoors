function calculateDistance (dis) {

  var calories = dis * 600;
  var time = dis * 30;
  var water = Math.round(dis * 1.2);

  document.getElementById("time").innerHTML = "It will take approximately " + time + " minutes to cover this distance";
  document.getElementById("calories").innerHTML = "You will burn approximately " + calories + " calories on this trip";
  document.getElementById("water").innerHTML = "Minimum water required is " + water + "L for this hike";
  document.getElementById("calc-list").style.display = "block";

};