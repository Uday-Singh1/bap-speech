
let inputTxt = document.querySelector('#textInput');
let play = document.querySelector('#play');
let play2 = document.querySelector('#play2');
let play3 = document.querySelector('#play3');
let play4 = document.querySelector('#play4');

play.addEventListener('click', () => {sayTheWord(inputTxt.value);});
play2.addEventListener('click', () => {sayTheWord(textData.welcomeEn());});
play3.addEventListener('click', () => {sayTheWord(textData.dateStringEnglish());});
play4.addEventListener('click', () => { sayTheWord(textArray[3]); });
 
let synthesizer =  window.speechSynthesis; // init speech synthesizer
let magicVoice = new SpeechSynthesisUtterance(); // instance of speech to text

// text to speech
function sayTheWord(theseWords){
    console.log(theseWords);
    synthesizer.cancel(); // reset de speech synthesizer
    //magicVoice.voice = synthesizer.getVoices()[16]; // language selection dutch
    magicVoice.voice = synthesizer.getVoices()[0]; // language selection english
    magicVoice.pitch = 0.5; // toonhoogte
    magicVoice.rate = 0.8; // speed
    magicVoice.text = theseWords; // say it    
    synthesizer.speak(magicVoice);
}

const textArray = ['Are you interested in Nike shoes.', 'Have a nice day.', 'I have a special discount offer', 'Welcome to UJ'];

class TextData{
    dateStringDutch(){
        let date = new Date();
        let dayName = [ 'Zondag','Maandag','Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag',  'Zaterdag'];
        let monthName = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
        let dateString = dayName[date.getDay()] + " " + date.getMonth()  + " " + monthName[date.getMonth()]  + " " + date.getHours() + " "+ " uur "+ date.getMinutes() ;
        console.log(dateString); // debug
        return(dateString);
    }
    dateStringEnglish(){
        let date = new Date();
        let dayName = [ 'Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday',  'Saturday'];
        let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let dateString = dayName[date.getDay()] + " " + monthName[date.getMonth()] + " " + date.getMonth() + " time " + date.getHours() +" hours "+ date.getMinutes() + " minutes ";
        console.log(dateString); // debug
        return(dateString);
    }
    welcomeEn(){
        let textString = ("Welcome to the U J webshop! How can I help you ?");
        return textString;
    }
    welcomeDu(){
        let textString = ("Welkom bij de U J  webwinkel. Hoe kan ik jou helpen ?");
        return textString;
    }
}
textData = new TextData; // maak een instance van de class


console.log(synthesizer.getVoices()); // show available languages in console