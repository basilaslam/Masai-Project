function textToSpeach(){
var text = document.getElementById('box_2').value
let lang = sessionStorage.getItem('lang')
lang = JSON.parse(lang) 

  if ('speechSynthesis' in window) {

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.text = text
    msg.lang = lang
    msg.voice = voices[10]; 
    window.speechSynthesis.speak(msg);

   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }
} 