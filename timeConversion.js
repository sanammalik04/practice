function timeConversion(s) {
   //only looking at the hours and then shave off the am or pm
   //12 AM is 00
   //1 AM to 12 PM -> do nothing
   // 1 PM to 11 PM -> take the hour and add 12

   //create varible to hold the pm or am 
   let amPm = s.charAt(8) //index 8 is wher the A or P in AM and PM will be
   let military = '' //for the time we converted

   //diferentiate between am and pm
   if(amPm == "A"){
       //substring take consecutive chars from a string and 0,2 will give us chars from index 0 to 1. 
       if(s.substring(0, 2) == '12'){
           military = '00'

       }else{
        military = s.substring(0, 2)
       }

    }else{ //pm
        if(s.substring(0, 2) == '12'){
            military = s.substring(0, 2)
        } else{
            military = parseInt(s.substring(0, 2), 10) + 12
        }
        

   }
   console.log(military + s.substring(2,8))



}

timeConversion('07:05:45PM')