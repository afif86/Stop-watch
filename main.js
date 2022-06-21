window.onload = function () {
  
    let seconds = 00;
    let tens = 00;
    let minutes = 00;
    let Interval;
  
    document.getElementById('button-start').onclick = function () {
      
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    
    document.getElementById('button-stop').onclick = function () {
        clearInterval(Interval);
    }
    
  
    document.getElementById('button-reset').onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00"
        document.getElementById("tens").innerHTML = tens;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = minutes;
    }
    
     
    
    function startTimer() {
        tens++;
      
        if (tens <= 9) {
            document.getElementById("tens").innerHTML = "0" + tens;
        }
      
        if (tens > 9) {
            document.getElementById("tens").innerHTML = tens;
        
        }
      
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            document.getElementById("seconds").innerHTML = "0" + seconds;
            tens = 0;
            document.getElementById("tens").innerHTML = "0" + 0;
        }
      
        if (seconds > 9) {
            document.getElementById("seconds").innerHTML = seconds;
        }
        
        if (seconds > 59) {
            console.log("minutes");
            minutes++;
            if (minutes <= 9) {
                document.getElementById("minutes").innerHTML = "0" + minutes;
            } else {
                document.getElementById("minutes").innerHTML = minutes;
            }

            document.getElementById("seconds").innerHTML = "0" + 0;
            seconds = 0;
    
        }
    
    }
}