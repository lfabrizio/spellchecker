/*global fetch*/

function handleClick(){
 const word = document.getElementById("word").value;

 
 console.log(word);
  fetch("/data" + "?" + "word=" + word)
  .then(response=>response.text())
  .then(function(response){
   console.log(response);
   document.getElementById("results").innerHTML = response;
  });

}
