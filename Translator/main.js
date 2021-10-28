window.onload = ()=>{
  sessionStorage.setItem('lang',JSON.stringify('en'))
}
async function getlangs() {
  let res = await fetch(`https://libretranslate.de/languages`);
  let data = await res.json();

  appendLang(data)
}

getlangs()

function appendLang(data){

    let parent = document.getElementById('langs')

    data.forEach(el => {
      let opt = document.createElement('option')
      opt.value = el.code
      opt.textContent = el.name
    parent.append(opt)
    });
}

function getValue(){
  let val = document.getElementById('langs').value
  sessionStorage.setItem('lang',JSON.stringify(val))
  return val
}



function getInput(){
  let input = document.getElementById('box_1')
  return input.value
}



async function translate() {
  var lang =  sessionStorage.getItem('lang')
  lang = JSON.parse(lang)
  let userData = getInput().trim()

  const res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: userData,
		source: "en",
		target: lang,
	}),
	headers: { "Content-Type": "application/json" }
});
let data = res.json()


appendData(data)
}
 
function getthevalu() {
  let log = document.getElementById("box_1").value
  translate()
}


function appendData(data) {
 data.then((res)=>{
   let translated = res.translatedText
  let trgt = document.getElementById(`box_2`);
  trgt.value = translated;
 })

} 