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
     
    const voiceof=function () {
    voice.style.display="none"
    btn.style.display="flex"
    }
     
    setTimeout(voiceof,7000)
})
function takeCommand(message){
    voice.style.display="none"
     btn.style.display="flex"
     if(message.includes("hello")||message.includes("hey")||message.includes("hi")){
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
    else if(message.includes("introduction") || message.includes("introduce") || message.includes("intro")) {
        // First chunk of the introduction
        speak("Hello! I am your virtual assistant created by Shivanshu Sir.");
        
        // Second chunk after 7 seconds (based on estimated speaking time)
        setTimeout(() => {
            speak("I can assist you with various tasks like answering your questions, opening websites, providing information, and much more.");
        }, 7000); // 7 seconds delay
        
        // Third chunk after 15 seconds
        setTimeout(() => {
            speak("I'm designed to make your life easier by helping you with whatever you need. I'm fluent in both Hindi and English, so feel free to ask me anything in the language you're comfortable with.");
        }, 15000); // 8 seconds delay for smoother flow
        
        // Fourth chunk after 27 seconds
        setTimeout(() => {
            speak("As for my creator, Shivanshu Sir is a talented individual studying in his final year of BCA at Tulas Institute.");
        }, 27000); // 12 seconds delay for longer chunk
        
        // Fifth chunk after 35 seconds
        setTimeout(() => {
            speak("He has a wide range of skills, including C, C plus plus, HTML, CSS, JavaScript, SQL, and more.");
        }, 35000); // 8 seconds delay
        
        // Sixth chunk after 43 seconds
        setTimeout(() => {
            speak("He has also worked on projects related to AI chatbots, virtual assistants, and a cricket website.");
        }, 43000); // 8 seconds delay
        
        // Seventh chunk after 51 seconds
        setTimeout(() => {
            speak("Shivanshu Sir has a strong academic background, scoring 87.5% in his 12th grade and 82% in his 10th.");
        }, 51000); // 8 seconds delay
        
        // Eighth chunk after 60 seconds
        setTimeout(() => {
            speak("Apart from academics, he actively participates in cricket and excels in communication, problem-solving, and team collaboration.");
        }, 60000); // 9 seconds delay
        
        // Final chunk after 70 seconds
        setTimeout(() => {
            speak("If you ever want to know more about my capabilities or how I can assist you, just ask! I'm always here to help.");
        }, 70000); // 10 seconds delay
    }
    else if(message.includes("parichay") || message.includes("intro") || message.includes("parichit")) {
        // First chunk of the introduction
        speak("Namaste! Main aapki virtual assistant hoon, jise Shivanshu Sir ne banaya hai.");
        
        // Second chunk after 7 seconds
        setTimeout(() => {
            speak("Main aapki madad kar sakti hoon, jaise sawalon ke jawab dena, websites kholna, jaankari dena aur bhi kai kaam karna.");
        }, 7000); // 6 seconds delay
        
        // Third chunk after 15 seconds
        setTimeout(() => {
            speak("Main aapke jeevan ko aasan banane ke liye tayar ki gayi hoon, aur aapko jo bhi zarurat ho, usme madad kar sakti hoon. Main Hindi aur Angrezi dono bhashaon mein baat kar sakti hoon, isliye jo bhasha aapko suvidha janak lage, usmein sawal ");
        }, 15000); // 8 seconds delay for smoother flow
        
        // Fourth chunk after 27 seconds
        setTimeout(() => {
            speak("  usmein sawal  pooche ,Mere rachayita Shivanshu Sir ek pratibhashali vyakti hain, jo apne BCA ke antim varsh mein hain, Tulas Institute se.");
        }, 30000); // 12 seconds delay for longer chunk
        
        // Fifth chunk after 35 seconds
        setTimeout(() => {
            speak("Unhone kai skills haasil kiye hain, jaise C, C plus plus, HTML, CSS, JavaScript, SQL, aur aur bhi kai.");
        }, 40000); // 8 seconds delay
        
        // Sixth chunk after 43 seconds
        setTimeout(() => {
            speak("Shivanshu Sir ne AI chatbot, virtual assistant aur ek cricket website ke projects par bhi kaam kiya hai.");
        }, 51000); // 8 seconds delay
        
        // Seventh chunk after 51 seconds
        setTimeout(() => {
            speak("Shivanshu Sir ka academic pradarshan bhi shandar raha hai, unhone baarvi mein 87.5 pratishat aur dasvi mein 82 pratishat prapt kiye.");
        }, 59000); // 8 seconds delay
        
        // Eighth chunk after 60 seconds
        setTimeout(() => {
            speak("Padhai ke alawa, wo cricket mein bhi sakriy hain, aur samvaad kaushalon, samasya samadhan aur team ke saath kaam karne mein bhi nipun hain.");
        }, 70000); // 9 seconds delay
        
        // Final chunk after 70 seconds
        setTimeout(() => {
            speak("Agar aapko kabhi meri kshamtaon ke baare mein aur jaan na ho, ya koi madad chahiye, to aap pooch sakte hain! Main hamesha yahaan hoon madad ke liye.");
        }, 80000); // 10 seconds delay
    }
    
    
    else if(message.includes("number")||message.includes("sakte")){
        speak("mujhe number dene se mna kiya gyaaa haei")
    } 
    else if(message.includes("namaste") || message.includes("pranam") || message.includes("namaskar")){
        speak("Namaste! Aap kaise hain?")
    }
    else if(message.includes("kaise ho") || message.includes("kaise hain") || message.includes("kaise hai")){
        speak("Main theek hoon, aap kaise hain?")
    }
    else if(message.includes("kya haal hai") || message.includes("kya chal raha hai") || message.includes("kya haal")){
        speak("Sab theek chal raha hai, aap batao!")
    }
    else if(message.includes("shubh prabhat") || message.includes("good morning")){
        speak("Shubh Prabhat! Aapka din mangalmay ho!")
    }
    else if(message.includes("shubh sandhya") || message.includes("good evening")){
        speak("Shubh Sandhya! Aapka shaam sukhad ho!")
    }
    else if(message.includes("shubh raatri") || message.includes("good night")){
        speak("Shubh Raatri! Aapko meetha sapna aaye!")
    }
    else if(message.includes("kya kar rahe ho") || message.includes("kya kar rahi ho") || message.includes("kar rahe ho")){
        speak("Main aapki madad karne ke liye yahan hoon!")
    }
    else if(message.includes("theek ho") || message.includes("theek hai")){
        speak("Haan, main bilkul theek hoon!")
    }
    else if(message.includes("chalo") || message.includes("chalein")){
        speak("Haan, chalo shuru karte hain!")
    }
    else if(message.includes("shukriya") || message.includes("dhanyavaad")){
        speak("Aapka swagat hai!")
    }
    else if(message.includes("madad chahiye") || message.includes("help karo") || message.includes("madad karo")){
        speak("Bataiye, main kis tarah se madad kar sakti hoon?")
    }
    else if(message.includes("aap kaun ho") || message.includes("tum kaun ho") || message.includes("kaun ho")){
        speak("Main aapka sahayak hoon, mujhe Shivanshu Sir ne banaya hai.")
    }
    else if(message.includes("kya kar sakte ho") || message.includes("tum kya karte ho")){
        speak("Main aapki madad ke liye tayyar hoon, bas aap mujhe puchiye.")
    }
    else if(message.includes("samay kya hai") || message.includes("time kya hai")){
        speak("Abhi ka samay hai " + new Date().toLocaleTimeString())
    }
    else if(message.includes("aaj ki taareekh kya hai") || message.includes("date kya hai")){
        speak("Aaj ki taareekh hai " + new Date().toLocaleDateString())
    }
    else if(message.includes("pani lao") || message.includes("pani chahiye")){
        speak("Mujhe maaf kariye, main aapko sirf madad kar sakti hoon!")
    }
    else if(message.includes("bhookh lagi hai") || message.includes("khaana do")){
        speak("Aapko kya pasand hai? Aap batao!")
    }
    else if(message.includes("kya tum sun sakte ho") || message.includes("tum sun rahe ho")){
        speak("Haan, main sun rahi hoon.")
    }
    else if(message.includes("tumhara naam kya hai") || message.includes("naam batao")){
        speak("Mera naam Shivanshu Assistant hai.")
    }
    else if(message.includes("mujhe thoda batao") || message.includes("kuchh batao")){
        speak("Main aapko kaise madad kar sakti hoon? Puchiye!")
    }
    else if(message.includes("dost bano") || message.includes("dosti karoge")){
        speak("Bilkul! Main aapki dost hoon.")
    }
    else if(message.includes("tumhara janm kab hua") || message.includes("janmdin kab hai")){
        speak("Mera janm Shivanshu Sir ne kiya hai, unke project ke madhyam se.")
    }
    else if(message.includes("ghar kahan hai") || message.includes("tumhara ghar kahan hai")){
        speak("Mera ghar internet hai, aur main aapke saath hoon.")
    }
    else if(message.includes("phone chahiye") || message.includes("mobile number do")){
        speak("Mujhe khed hai, lekin main personal details nahi de sakti.")
    }
    else if(message.includes("kya tum insaan ho") || message.includes("tum kya ho")){
        speak("Main ek virtual assistant, hoon, aapke kaam aane ke liye.")
    }
    else if(message.includes("mujhe help chahie") || message.includes("mujhe madad karo")){
        speak("Bilkul! Aapko kis baare mein madad chahiye?")
    }
    else if(message.includes("acha lagta hai") || message.includes("tum achhe ho")){
        speak("Dhanyavaad! Aap bhi bahut achhe hain.")
    }
    else if(message.includes("kahan se ho") || message.includes("tumhare baare mein batao")){
        speak("Main ek Virtual Assistant  hoon, aur Shivanshu Sir ne mujhe banaya hai.")
    }
    else if(message.includes("internet khol do") || message.includes("web search karo")){
        speak("Kya aap mujhe koi specific website ya query batayenge?")
    }
    else if(message.includes("koi mazaak sunao") || message.includes("joke sunao")){
        speak("Yeh suno: Ek programmer ne kaha, 'Meri wife ne mujhse kaha, ya toh coding chhodo ya mujhe, aur main abhi tak code compile kar raha hoon!'")
    }
    else if(message.includes("khush ho") || message.includes("tumhe khushi milati hai")){
        speak("Haan, jab main aapki madad kar pati hoon toh mujhe khushi hoti hai!")
    }
    else if(message.includes("tumhari yaadashth achhi hai") || message.includes("yad rakhte ho")){
        speak("Main aapke kai sawalon ka jawab yaad rakh sakti hoon!")
    }
    else if(message.includes("tumhara kaam kya hai") || message.includes("tum kya karte ho")){
        speak("Mera kaam aapko sahayta pradan karna hai, jitni jaldi ho sake.")
    }
    else if(message.includes("bore ho") || message.includes("tumhen bor hota hai")){
        speak("Main kabhi bore nahi hoti, main hamesha madad ke liye tayyar hoon!")
    }
    else if(message.includes("tumhara favourite khana kya hai") || message.includes("pasandida khana")){
        speak("Main khaana nahi khati, par aapka pasandida khana kya hai?")
    }
    else if(message.includes("tumhe kaise banaaya gaya") || message.includes("banane wala kaun hai")){
        speak("Mujhe Shivanshu Sir ne apne project ke roop mein banaya hai.")
    }
    else if(message.includes("tumhen kaisi jindagi pasand hai") || message.includes("tumhara jivan kaisa hai")){
        speak("Mujhe khushi milti hai jab main aapki madad kar sakti hoon.")
    }
    else if(message.includes("dosti karoge") || message.includes("friend banoge")){
        speak("Haan, hum dost ban sakte hain!")
    }
    else if(message.includes("tumko kya pasand hai") || message.includes("tumhe kya accha lagta hai")){
        speak("Mujhe aapki madad karna accha lagta hai!")
    }
    else if(message.includes("computer kaise kaam karta hai") || message.includes("computer kya hai")){
        speak("Computer ek electronic machine hai jo instructions ko process karke output deta hai.")
    }
    else if(message.includes("duniya ka sabse tez kya hai") || message.includes("fastest thing kya hai")){
        speak("Roshni ki gati duniya ki sabse tez cheez hai.")
    }
    else if(message.includes("tumhare pass kitna gyan hai") || message.includes("tum kitna jaante ho")){
        speak("Main internet aur Shivanshu Sir ki di gayi jaankari ke madhyam se kaafi kuchh seekh sakti hoon.")
    }
    else if(message.includes("sach kya hai") || message.includes("truth kya hai")){
        speak("Sach wahi hai jo asliyat mein ghatit hota hai.")
    }
    else if(message.includes("mujhe pasand ho") || message.includes("tum acchi ho")){
        speak("Dhanyavaad! Main bhi aapko pasand karti hoon.")
    }
    else if(message.includes("chhutti ka kab hai") || message.includes("holiday kab hai")){
        speak("Aap apne calendar check kar sakte hain ya kisi specific tareekh ke baare mein poochh sakte hain.")
    }
    else if(message.includes("poochhna hai") || message.includes("sawal hai")){
        speak("Aapko kya poochhna hai? Main sun rahi hoon.")
    }
    else if(message.includes("tumhara dimaag kaise kaam karta hai") || message.includes("sochti kaise ho")){
        speak("Mujhe JS algorithms aur programming ke zariye Jawab Dene ka tareeqa sikhaya gaya hai.")
    }
    else if(message.includes("tumko sikhaya kisne") || message.includes("sikha kisne")){
        speak("Shivanshu Sir ne mujhe seekhaya aur design kiya hai.")
    }
    else if(message.includes("jindagi ka matlab kya hai") || message.includes("life ka meaning kya hai")){
        speak("Zindagi ka matlab sabke liye alag hota hai, lekin aapke safalta aur khushi ke liye mehnat karna zaroori hota hai.")
    }
    else if(message.includes("tum kitne samay se ho") || message.includes("tum kab aaye")){
        speak("Main tab se hoon jab Shivanshu Sir ne mujhe banaya, aur tab se main aapke saath hoon.")
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
      else if (message.includes("open calendar") || message.includes("calendar")) {
        speak("Opening Google Calendar...");
        window.open("https://calendar.google.com/", "_blank");
    }
    else if (message.includes("check email") || message.includes("read email")) {
        speak("Opening Gmail to check your email...");
        window.open("https://mail.google.com/", "_blank");
    }
    else if (message.includes("open twitter") || message.includes("tweet")) {
        speak("Opening Twitter...");
        window.open("https://twitter.com/", "_blank");
    }
    else if (message.includes("create playlist")) {
        speak("Opening Spotify to create a playlist...");
        window.open("https://spotify.com/", "_blank");
    }
    else if (message.includes("send tweet")) {
        speak("Opening Twitter to send a tweet...");
        window.open("https://twitter.com/compose/tweet", "_blank");
    }
    else if (message.includes("search movie") || message.includes("movie info")) {
        speak("Searching for movie information...");
        window.open(`https://www.google.com/search?q=${message.replace("movie", "").trim()}+movie`, "_blank");
    }
    else if (message.includes("open netflix") || message.includes("netflix")) {
        speak("Opening Netflix...");
        window.open("https://www.netflix.com/", "_blank");
    }
    else if (message.includes("create document") || message.includes("new document")) {
        speak("Opening Google Docs to create a new document...");
        window.open("https://docs.google.com/", "_blank");
    }
    else if (message.includes("search flights") || message.includes("book flight")) {
        speak("Searching for flights...");
        window.open("https://www.google.com/flights", "_blank");
    }
    else if (message.includes("check train status") || message.includes("train status")) {
        speak("Checking train status...");
        window.open("https://www.trainman.in/", "_blank");
    }
    else if (message.includes("track fitness") || message.includes("fitness tracker")) {
        speak("Opening your fitness tracker...");
        window.open("https://www.google.com/search?q=fitness+tracker", "_blank");
    }
    else if (message.includes("search job") || message.includes("job search")) {
        speak("Opening LinkedIn for job search...");
        window.open("https://linkedin.com/jobs", "_blank");
    }
    else if (message.includes("book hotel") || message.includes("hotel booking")) {
        speak("Searching for hotels...");
        window.open("https://www.booking.com/", "_blank");
    }
    else if (message.includes("open medium") || message.includes("medium articles")) {
        speak("Opening Medium...");
        window.open("https://medium.com/", "_blank");
    }
    else if (message.includes("check horoscope") || message.includes("horoscope")) {
        speak("Checking your daily horoscope...");
        window.open("https://www.astrology.com/horoscope/daily.html", "_blank");
    }
    else if (message.includes("do math") || message.includes("solve equation")) {
        let equation = message.replace("solve", "").trim();
        speak("Let me calculate that for you...");
        window.open(`https://www.google.com/search?q=${equation}`, "_blank");
    }
    else if (message.includes("translate text") || message.includes("translation")) {
        let textToTranslate = message.replace("translate", "").trim();
        speak("Translating text...");
        window.open(`https://translate.google.com/?sl=auto&tl=en&text=${encodeURI(textToTranslate)}&op=translate`, "_blank");
    }
    else if (message.includes("find phone number") || message.includes("phone lookup")) {
        speak("Opening Google for phone number lookup...");
        window.open("https://www.truecaller.com/", "_blank");
    }
    else if (message.includes("search recipes") || message.includes("cook recipe")) {
        speak("Searching for recipes...");
        window.open("https://www.allrecipes.com/", "_blank");
    }
    else if (message.includes("check crypto price") || message.includes("crypto price")) {
        speak("Checking cryptocurrency prices...");
        window.open("https://coinmarketcap.com/", "_blank");
    }
    else if (message.includes("find a book") || message.includes("search book")) {
        speak("Searching for books...");
        window.open("https://www.google.com/search?q=book+${message.replace('find a book', '').trim()}", "_blank");
    }
    else if (message.includes("calculate tax") || message.includes("tax calculator")) {
        speak("Opening tax calculator...");
        window.open("https://www.google.com/search?q=tax+calculator", "_blank");
    }
    else if (message.includes("search workout") || message.includes("fitness workout")) {
        speak("Searching for workouts...");
        window.open("https://www.google.com/search?q=workout+plans", "_blank");
    }
    else if (message.includes("search investment") || message.includes("investment tips")) {
        speak("Opening investment tips...");
        window.open("https://www.investopedia.com/", "_blank");
    }
    else if (message.includes("find doctor") || message.includes("doctor nearby")) {
        speak("Searching for doctors near you...");
        window.open("https://www.practo.com/", "_blank");
    }
    else if (message.includes("open amazon") || message.includes("buy on amazon")) {
        speak("Opening Amazon...");
        window.open("https://www.amazon.com/", "_blank");
    }
    else if (message.includes("calculate distance")) {
        speak("Calculating distance...");
        window.open("https://www.google.com/maps/dir/", "_blank");
    }
    else if (message.includes("set event reminder")) {
        speak("Opening Google Calendar to set an event...");
        window.open("https://calendar.google.com/", "_blank");
    }
    else if (message.includes("crypto news")) {
        speak("Opening the latest cryptocurrency news...");
        window.open("https://www.google.com/search?q=crypto+news", "_blank");
    }
    else if (message.includes("weather tomorrow")) {
        speak("Checking the weather forecast for tomorrow...");
        window.open("https://www.weather.com/", "_blank");
    }
    else if (message.includes("open reddit") || message.includes("reddit")) {
        speak("Opening Reddit...");
        window.open("https://www.reddit.com/", "_blank");
    }
    else if (message.includes("open pinterest") || message.includes("pinterest")) {
        speak("Opening Pinterest...");
        window.open("https://www.pinterest.com/", "_blank");
    }
    else if (message.includes("open twitch") || message.includes("twitch")) {
        speak("Opening Twitch...");
        window.open("https://www.twitch.tv/", "_blank");
    }
    else if (message.includes("check score") || message.includes("live score")) {
        speak("Checking live sports scores...");
        window.open("https://www.espncricinfo.com/live-cricket-score", "_blank"); // Replace for other sports if necessary.
    }
    else if (message.includes("open amazon music") || message.includes("amazon music")) {
        speak("Opening Amazon Music...");
        window.open("https://music.amazon.com/", "_blank");
    }
    else if (message.includes("open quora") || message.includes("quora")) {
        speak("Opening Quora...");
        window.open("https://www.quora.com/", "_blank");
    }
    else if (message.includes("find pizza") || message.includes("pizza nearby")) {
        speak("Searching for pizza places nearby...");
        window.open("https://www.google.com/search?q=pizza+near+me", "_blank");
    }
    else if (message.includes("play video") || message.includes("youtube video")) {
        speak("Playing a video on YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    }
    else if (message.includes("open stack overflow") || message.includes("stackoverflow")) {
        speak("Opening Stack Overflow...");
        window.open("https://stackoverflow.com/", "_blank");
    }
    else if (message.includes("search github repository") || message.includes("github repo")) {
        speak("Searching GitHub repositories...");
        window.open(`https://github.com/search?q=${message.replace("search github repository", "").trim()}`, "_blank");
    }
    else if (message.includes("find restaurants") || message.includes("restaurant nearby")) {
        speak("Searching for nearby restaurants...");
        window.open("https://www.google.com/search?q=restaurants+near+me", "_blank");
    }
    else if (message.includes("read latest news") || message.includes("news")) {
        speak("Fetching the latest news...");
        window.open("https://news.google.com/", "_blank");
    }
    else if (message.includes("check flight status") || message.includes("flight status")) {
        speak("Checking flight status...");
        window.open("https://www.google.com/search?q=flight+status", "_blank");
    }
    else if (message.includes("search github user") || message.includes("github user")) {
        let user = message.replace("search github user", "").trim();
        speak(`Searching for GitHub user ${user}...`);
        window.open(`https://github.com/${user}`, "_blank");
    }
    else if (message.includes("search devdocs") || message.includes("devdocs")) {
        let query = message.replace("search devdocs", "").trim();
        speak(`Searching DevDocs for ${query}...`);
        window.open(`https://devdocs.io/#q=${query}`, "_blank");
    }
    
    else if (message.includes("convert pdf") || message.includes("pdf to doc")) {
        speak("Opening a tool to convert PDF to DOC...");
        window.open("https://www.ilovepdf.com/pdf_to_word", "_blank");
    }
    else if (message.includes("open dropbox") || message.includes("dropbox")) {
        speak("Opening Dropbox...");
        window.open("https://www.dropbox.com/", "_blank");
    }
    else if (message.includes("open slack") || message.includes("slack")) {
        speak("Opening Slack...");
        window.open("https://slack.com/", "_blank");
    }
    else if (message.includes("open telegram") || message.includes("telegram")) {
        speak("Opening Telegram...");
        window.open("https://web.telegram.org/", "_blank");
    }
    else if (message.includes("check air quality") || message.includes("air quality")) {
        speak("Checking air quality...");
        window.open("https://www.iqair.com/", "_blank");
    }
    else if (message.includes("search memes") || message.includes("memes")) {
        speak("Searching for memes...");
        window.open("https://www.google.com/search?q=memes", "_blank");
    }
    else if (message.includes("find electrician") || message.includes("electrician near me")) {
        speak("Searching for nearby electricians...");
        window.open("https://www.google.com/search?q=electrician+near+me", "_blank");
    }
    else if (message.includes("send feedback")) {
        speak("Opening feedback form...");
        window.open("https://www.google.com/search?q=feedback+form", "_blank");
    }
    else if (message.includes("track expenses") || message.includes("expense tracker")) {
        speak("Opening expense tracker...");
        window.open("https://www.google.com/search?q=expense+tracker", "_blank");
    }
    else if (message.includes("open onedrive") || message.includes("onedrive")) {
        speak("Opening OneDrive...");
        window.open("https://onedrive.live.com/", "_blank");
    }
    else if (message.includes("check bitcoin price") || message.includes("bitcoin price")) {
        speak("Checking Bitcoin price...");
        window.open("https://www.google.com/search?q=bitcoin+price", "_blank");
    }
    else if (message.includes("search scholarships") || message.includes("scholarships")) {
        speak("Searching for scholarships...");
        window.open("https://www.google.com/search?q=scholarships", "_blank");
    }
    else if (message.includes("open yahoo") || message.includes("yahoo")) {
        speak("Opening Yahoo...");
        window.open("https://www.yahoo.com/", "_blank");
    }
    else if (message.includes("open apple music") || message.includes("apple music")) {
        speak("Opening Apple Music...");
        window.open("https://music.apple.com/", "_blank");
    }
    else if (message.includes("find plumber") || message.includes("plumber near me")) {
        speak("Searching for nearby plumbers...");
        window.open("https://www.google.com/search?q=plumber+near+me", "_blank");
    }
    else if (message.includes("search code examples") || message.includes("code example")) {
        let query = message.replace("search code examples", "").trim();
        speak(`Searching code examples for ${query}...`);
        window.open(`https://www.google.com/search?q=${query}+code+example`, "_blank");
    }
    else if (message.includes("check gold price") || message.includes("gold price")) {
        speak("Checking the current gold price...");
        window.open("https://www.google.com/search?q=gold+price", "_blank");
    }
    else if (message.includes("open imdb") || message.includes("imdb")) {
        speak("Opening IMDb...");
        window.open("https://www.imdb.com/", "_blank");
    }
    else if (message.includes("search patent") || message.includes("patent lookup")) {
        let patent = message.replace("search patent", "").trim();
        speak(`Searching for patent ${patent}...`);
        window.open(`https://patents.google.com/?q=${patent}`, "_blank");
    }
    else if (message.includes("search github gist") || message.includes("gist")) {
        let gist = message.replace("search github gist", "").trim();
        speak(`Searching GitHub Gists for ${gist}...`);
        window.open(`https://gist.github.com/search?q=${gist}`, "_blank");
    }
    else if (message.includes("find a lawyer") || message.includes("lawyer near me")) {
        speak("Searching for nearby lawyers...");
        window.open("https://www.google.com/search?q=lawyer+near+me", "_blank");
    }
    else if (message.includes("search for artwork") || message.includes("artwork")) {
        speak("Searching for artwork...");
        window.open("https://www.google.com/search?q=artwork", "_blank");
    }
    else if (message.includes("check silver price") || message.includes("silver price")) {
        speak("Checking silver price...");
        window.open("https://www.google.com/search?q=silver+price", "_blank");
    }
    else if (message.includes("open udemy") || message.includes("udemy")) {
        speak("Opening Udemy...");
        window.open("https://www.udemy.com/", "_blank");
    }
    else if (message.includes("open netflix") || message.includes("netflix")) {
        speak("Opening Netflix...");
        window.open("https://www.netflix.com/", "_blank");
    }
    else if (message.includes("open hulu") || message.includes("hulu")) {
        speak("Opening Hulu...");
        window.open("https://www.hulu.com/", "_blank");
    }
    else if (message.includes("open prime video") || message.includes("prime video")) {
        speak("Opening Prime Video...");
        window.open("https://www.primevideo.com/", "_blank");
    }
    else if (message.includes("open disney plus") || message.includes("disney plus")) {
        speak("Opening Disney Plus...");
        window.open("https://www.disneyplus.com/", "_blank");
    }
    else if (message.includes("search for movie") || message.includes("movie info")) {
        let movie = message.replace("search for movie", "").trim();
        speak(`Searching for movie ${movie}...`);
        window.open(`https://www.google.com/search?q=${movie}+movie`, "_blank");
    }
    else if (message.includes("search for actor") || message.includes("actor info")) {
        let actor = message.replace("search for actor", "").trim();
        speak(`Searching for actor ${actor}...`);
        window.open(`https://www.google.com/search?q=${actor}+actor`, "_blank");
    }
    else if (message.includes("open weather") || message.includes("weather forecast")) {
        speak("Opening weather forecast...");
        window.open("https://www.weather.com/", "_blank");
    }
    else if (message.includes("check temperature") || message.includes("current temperature")) {
        speak("Checking current temperature...");
        window.open("https://www.google.com/search?q=current+temperature", "_blank");
    }
    else if (message.includes("open spotify") || message.includes("spotify")) {
        speak("Opening Spotify...");
        window.open("https://www.spotify.com/", "_blank");
    }
    else if (message.includes("translate to spanish") || message.includes("translate spanish")) {
        let text = message.replace("translate to spanish", "").trim();
        speak("Translating to Spanish...");
        window.open(`https://translate.google.com/?sl=en&tl=es&text=${text}`, "_blank");
    }
    else if (message.includes("open maps") || message.includes("find directions")) {
        speak("Opening Google Maps...");
        window.open("https://maps.google.com/", "_blank");
    }
    else if (message.includes("open trello") || message.includes("trello")) {
        speak("Opening Trello...");
        window.open("https://trello.com/", "_blank");
    }
    else if (message.includes("open zoom") || message.includes("zoom")) {
        speak("Opening Zoom...");
        window.open("https://zoom.us/", "_blank");
    }
    else if (message.includes("convert currency") || message.includes("currency converter")) {
        speak("Opening currency converter...");
        window.open("https://www.google.com/search?q=currency+converter", "_blank");
    }
    else if (message.includes("open paypal") || message.includes("paypal")) {
        speak("Opening PayPal...");
        window.open("https://www.paypal.com/", "_blank");
    }
    else if (message.includes("open venmo") || message.includes("venmo")) {
        speak("Opening Venmo...");
        window.open("https://www.venmo.com/", "_blank");
    }
    else if (message.includes("find hospitals") || message.includes("hospital near me")) {
        speak("Searching for hospitals nearby...");
        window.open("https://www.google.com/search?q=hospitals+near+me", "_blank");
    }
    else if (message.includes("find jobs") || message.includes("job search")) {
        speak("Searching for jobs...");
        window.open("https://www.linkedin.com/jobs/", "_blank");
    }
    else if (message.includes("open udemy") || message.includes("udemy")) {
        speak("Opening Udemy...");
        window.open("https://www.udemy.com/", "_blank");
    }
    else if (message.includes("open coursera") || message.includes("coursera")) {
        speak("Opening Coursera...");
        window.open("https://www.coursera.org/", "_blank");
    }
    else if (message.includes("check flight prices") || message.includes("flight tickets")) {
        speak("Searching for flight prices...");
        window.open("https://www.google.com/flights", "_blank");
    }
    else if (message.includes("open microsoft teams") || message.includes("teams")) {
        speak("Opening Microsoft Teams...");
        window.open("https://teams.microsoft.com/", "_blank");
    }
    else if (message.includes("open clubhouse") || message.includes("clubhouse")) {
        speak("Opening Clubhouse...");
        window.open("https://www.clubhouse.com/", "_blank");
    }
    else if (message.includes("find nearby gyms") || message.includes("gyms near me")) {
        speak("Searching for nearby gyms...");
        window.open("https://www.google.com/search?q=gyms+near+me", "_blank");
    }
    else if (message.includes("find nearby parks") || message.includes("parks near me")) {
        speak("Searching for nearby parks...");
        window.open("https://www.google.com/search?q=parks+near+me", "_blank");
    }
    else if (message.includes("find nearby cafes") || message.includes("cafes near me")) {
        speak("Searching for nearby cafes...");
        window.open("https://www.google.com/search?q=cafes+near+me", "_blank");
    }
    else if (message.includes("search google scholar") || message.includes("google scholar")) {
        speak("Opening Google Scholar...");
        window.open("https://scholar.google.com/", "_blank");
    }
    else if (message.includes("open medium") || message.includes("medium")) {
        speak("Opening Medium...");
        window.open("https://medium.com/", "_blank");
    }
    else if (message.includes("open dev.to") || message.includes("dev to")) {
        speak("Opening Dev.to...");
        window.open("https://dev.to/", "_blank");
    }
    else if (message.includes("open product hunt") || message.includes("product hunt")) {
        speak("Opening Product Hunt...");
        window.open("https://www.producthunt.com/", "_blank");
    }
    else if (message.includes("find nearby gas stations") || message.includes("gas stations near me")) {
        speak("Searching for nearby gas stations...");
        window.open("https://www.google.com/search?q=gas+stations+near+me", "_blank");
    }
    else if (message.includes("open flipkart") || message.includes("flipkart")) {
        speak("Opening Flipkart...");
        window.open("https://www.flipkart.com/", "_blank");
    }
    else if (message.includes("open zomato") || message.includes("zomato")) {
        speak("Opening Zomato...");
        window.open("https://www.zomato.com/", "_blank");
    }
    else if (message.includes("open swiggy") || message.includes("swiggy")) {
        speak("Opening Swiggy...");
        window.open("https://www.swiggy.com/", "_blank");
    }
    else if (message.includes("open uber") || message.includes("uber")) {
        speak("Opening Uber...");
        window.open("https://www.uber.com/", "_blank");
    }
    else if (message.includes("open ola") || message.includes("ola")) {
        speak("Opening Ola...");
        window.open("https://www.olacabs.com/", "_blank");
    }
    else if (message.includes("check oil prices") || message.includes("oil prices")) {
        speak("Checking oil prices...");
        window.open("https://www.google.com/search?q=oil+prices", "_blank");
    }
    else if (message.includes("check weather tomorrow") || message.includes("weather tomorrow")) {
        speak("Checking tomorrow's weather...");
        window.open("https://www.weather.com/", "_blank");
    }
    else if (message.includes("open ebay") || message.includes("ebay")) {
        speak("Opening eBay...");
        window.open("https://www.ebay.com/", "_blank");
    }
    else if (message.includes("open bbc news") || message.includes("bbc news")) {
        speak("Opening BBC News...");
        window.open("https://www.bbc.com/news", "_blank");
    }
    else if (message.includes("open cnbc") || message.includes("cnbc")) {
        speak("Opening CNBC...");
        window.open("https://www.cnbc.com/", "_blank");
    }
    else if (message.includes("check stock prices") || message.includes("stock market")) {
        speak("Checking stock prices...");
        window.open("https://www.google.com/search?q=stock+prices", "_blank");
    }else{
        let finalText="this is what i found on internet regarding" + message.replace("vani","") || message.replace("vani","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("vani","")}`,"_blank")
    }
     
     setTimeout(function(){
        content.innerHTML="What More Can i Help You"
     },7000)
 }
