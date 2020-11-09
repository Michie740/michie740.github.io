let response = document.querySelector("#response");
let next = document.querySelector("#next")
let cancel = document.querySelector("#image");
let footer = document.querySelector("#foot");
cancel.hidden = true;
let counter = 0;
next.addEventListener('click', myFunction);

function myFunction(){
    next.textContent = "Next";

    if (counter == 0){
        response.textContent = "In 'The Medium is the Message', McLuhan says that the content of the message given is important, but medium in which we send and recieve messages is more important. This is because the way we send and recieve messages really influence the way the we behave and change the way our messages are intepreted. For example, something that could be taken as a joke when when speaking verbally could be taken as an insult when written out during text because it is missing the verbal cues and tones that speaking in person does. " ;
        document.body.style.backgroundColor = "#FFFFF0";
    }
    else if (counter == 1){
        response.textContent = "Additionally, the platform we use also tend to influence the way we talk. In the way that a lot of people use alternative forms of message based on the medium they are in, which is incredibly interesting. And sometimes the specific words of that community can bleed into everyday life. For example on the streaming site Twitch, there are the usages of specific emojis that other sites don't use such as pogchamp and kekw which are using in both text form and visual form. These words are starting to bleed out of the twitch community and also be used in everyday life.";
        document.body.style.backgroundColor = "#ffffb7";
    }
    else if (counter == 2){
        response.textContent = "On Instagram, on the other hand, people might tend to write more directly positive comments while on Twitter, they might write stuff more funny/diverse then what they would do on Instagram. I believe a large part of this is also because of the status quo that has been set by other people using that medium already.";
        document.body.style.backgroundColor = "#fff192";
    }
    else if (counter == 3){
        response.textContent = "The rise of the importance of the medium has indirectly led to the rise of the importance of the content. I mean this because 10 years ago, the content didn't matter as much. Or should I say it mattered, but the medium wasn't as widespread. Now, 10 years later, the importance and awareness of the medium has grown a lot and as a result, content matters a lot more. People have to watch what they say online now (which is good) or they might have to face backlash. A good example of this would be the FBI agent that is assigned to you or the present toxic cancel culture where you can get 'cancelled' for the smallest things.";
        document.body.style.backgroundColor = "#ffea61";
    }
    else if (counter == 4){
        response.textContent = "But also because of the rise of the medium, there is also the rise of performative activism where people will post/share content just because they know other people are going to be looking. Additionally, the fact that other people will judge if you don't share is also an issue, so it goes both ways. ";
        document.body.style.backgroundColor = "#ffdd3c";
    }
    else if (counter == 5){
        response.textContent = "It's quite interesting how McLuhan's message from 1964 is still relevant today. I would assume it's because technology and the way in which we communicate is always changing - from morse code to telephones to social media."
        document.body.style.backgroundColor = "#ffd400";
    }
    counter++;
    if (counter == 6){
        response.textContent = "fyi, you're";
        response.style.color = "red";
        document.body.style.backgroundColor = "black";
        next.hidden = true;
        cancel.hidden = false;
        footer.style.color = "red";
    }
}