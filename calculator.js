function Calculate_Length() {
    let city1 = document.getElementById("city1").value;
    let city2 = document.getElementById("city2").value;
    let city3 = document.getElementById("city3").value;
 
    let smallest ='',string='';

    smallest=Math.min(city1.length,city2.length,city3.length)
    if(city1.length<city2.length && city1.length<city3.length)
    {
       string =city1;
    }
     else  if(city2.length<city1.length && city2.length<city3.length)
     {
       string =city2;
     }
     else if(city3.length<city2.length && city3.length<city1.length)
     {
       string =city3;
     }
    
    document.getElementById("solution").innerHTML =  "The smallest string is " + string +" and its length is "+smallest
}
