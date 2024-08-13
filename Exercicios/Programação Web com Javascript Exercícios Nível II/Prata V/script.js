function getLocaleDate(){
  const dataLocalizada = new Date(); 
  console.log(dataLocalizada.toLocaleDateString(navigator.language));
  
}

getLocaleDate();