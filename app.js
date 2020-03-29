const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//greetings
const greetings = ['I\'m good motherfucker', 'Damn good, homeboi', 'go away' ]
const chants = ['Oust Du Ter Teh', 'Support frontliners', 'No to Emergency powers']
const weather = ['The weather today is sunny']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('voice is activated u can speak to microphone');    
};

recognition.onresult = function(event){
    const text = event.resultIndex;
    const transcript = event.results[text][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to the button

btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont understand';

    if(message.includes('how are you')){
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = greeting;
    }

    if(message.includes('duterte')){
        const chant = chants[Math.floor(Math.random() * chants.length)];
        speech.text = chant;
    }

    if(message.includes('mass testing')){
        const chant = chants[Math.floor(Math.random() * chants.length)];
        speech.text = chant;
    }
    
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    
    window.speechSynthesis.speak(speech);
}