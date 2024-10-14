let btn = document.querySelector('#btn');
let content = document.querySelector('#content');

function speak(text) {
    window.speechSynthesis.cancel();  // Clear any previous speech
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = 'hi-GB';  // Test with en-US or use any language that works
    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let date = new Date();
    let hours = date.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener("load", () => {
    if ('speechSynthesis' in window) {
        setTimeout(() => {
            wishme();               // Add a delay before calling wishme
        }, 1000);                   // 1 second delay for smoother load
    } else {
        console.log("Speech Synthesis not supported");
    }
});


let speechRecognition=Window.SpeechRecognition ||window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=((event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    console.log(event);
    
   takeCommand(transcript.toLowerCase())

})
btn.addEventListener('click', function() {
    recognition.start()
     voice.style.display="block"
    btn.style.display="none"
});
function takeCommand(message){
    voice.style.display="none"
     btn.style.display="flex"
     if(message.includes("hello")||message.includes("hey")||message.includes("hi")||message.includes("vani")){
         speak("hello sir,i am vani ,what can i help you?")
     }
     else if(message.includes("who are you")||message.includes("hu r u")||message.includes("created")||message.includes("create")||message.includes("who you are")){
         speak("i am virtual assistant ,created by Shivanshu Sir")
     }
     else if(message.includes("banaya")||message.includes("kisne")||message.includes("tujhe")){
        speak("mujhe Shivanshu Sir ne banaya hai")
    }
    else if(message.includes("banoge")||message.includes("friend")){
        speak("sorry mai sirf shivanshu sir ki freind hu mujhe unse permission leni hogi")
    }
    
     else if(message.includes("birth")||message.includes("date of birth")||message.includes("birthday")){
        speak("4 june 2024")
    }
    
     else if(message.includes("bani")||message.includes("nani")||message.includes("pani")|message.includes("Shivani")){
        speak("Sorry sir! My name is Vani")
    } 
    else if(message.includes("number")||message.includes("sakte")){
        speak("mujhe number dene se mna kiya gyaaa haei")
    } 

     else if(message.includes("open youtube")||message.includes("youtube")){
         speak("opening youtube...")
         window.open("https://youtube.com/","_blank")
     }
     else if(message.includes("kaise")||message.includes("how")||message.includes("id")){
        speak("For more details Ask shivanshu sir")
        window.open("https://instagram.com/___para.noid___/","_blank")
    }
     else if(message.includes("open google")||message.includes("google")){
         speak("opening google...")
         window.open("https://google.com/","_blank")
     }
     else if(message.includes("open chatgpt")||message.includes("chat gpt")){
        speak("opening chatgpt...")
        window.open("https://chatgpt.com/","_blank")
    }
     else if(message.includes("open facebook")||message.includes("facebook")){
         speak("opening facebook...")
         window.open("https://facebook.com/","_blank")
     }
     else if(message.includes("open instagram")||message.includes("instagram")){
         speak("opening instagram...")
         window.open("https://instagram.com/","_blank")
     }
     else if(message.includes("open github")||message.includes("github")){
        speak("opening github...")
        window.open("https://github.com/","_blank")
    }
     else if(message.includes("open calculator")){
         speak("opening calculator..")
         window.open("calculator://")
     }
     else if(message.includes("open whatsapp")){
         speak("opening whatsapp..")
         window.open("https://web.whatsapp.com/","_blank")
     }
     else if(message.includes("open linkedin")||message.includes("linkedin")){
        speak("opening linkedin..")
        window.open("https://linkedin.com/","_blank")
    }
     else if(message.includes("time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric",second:'2-digit'})
       speak(time)
     }
     else if(message.includes("date")){
         let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
         speak(date)
       }
     else{
         let finalText="this is what i found on internet regarding" + message.replace("vani","") || message.replace("vani","")
         speak(finalText)
         window.open(`https://www.google.com/search?q=${message.replace("vani","")}`,"_blank")
     }
     setTimeout(function(){
        content.innerHTML="What More Can i Help You"
     },7000)
 }
