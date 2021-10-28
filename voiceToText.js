var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.onend = stop();

var ongoing;

var Textbox = $("#box_1");

var Content = "";

recognition.continuous = true;

recognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  Content += transcript;
  Textbox.val(Content);
};

$("#speak_button").on("click", function (e) {});

Textbox.on("input", function () {
  Content = $(this).val();
});

function stop() {
  var btn = document.getElementById("speak_button");

  ongoing = false;
  btn.innerHTML = "Speak";
}

function voiceToText() {
  var btn = document.getElementById("speak_button");

  if (ongoing) {
    recognition.stop();
    stop();
  } else {
    if (Content.length) {
      Content += " ";
    }
    recognition.start();
    ongoing = true;
    btn.innerHTML = "Stop";
  }
}
