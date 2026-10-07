let page = 1;

const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const photo = document.querySelector(".photo");
const text = document.querySelector("p");
const button = document.querySelector("button");

function nextPage(){

    if(page===1){
        title.innerHTML="🎂 Happy Birthday Ari ❤️";
        subtitle.innerHTML="My Special Cake";
        photo.src="cake.png";
        text.innerHTML="May your birthday be filled with love, happiness and endless smiles. ❤️";
        page++;
    }

    else if(page===2){
        title.innerHTML="💐 Flowers For You";
        subtitle.innerHTML="Only For My Ari";
        photo.src="flower.png";
        text.innerHTML="These beautiful flowers are a small gift with all my love. 🌹❤️";
        page++;
    }

    else if(page===3){
        title.innerHTML="📸 Beautiful Smile";
        subtitle.innerHTML="My Cute Ari";
        photo.src="ari1.jpg";
        text.innerHTML="Your smile is the most beautiful thing in my life. 😊❤️";
        page++;
    }

    else if(page===4){
        title.innerHTML="💕 My Princess";
        subtitle.innerHTML="Always Beautiful";
        photo.src="ari2.jpg";
        text.innerHTML="Every moment with you is precious. I love you forever. ❤️";
        page++;
    }

    else if(page===5){
        title.innerHTML="❤️ Together Forever";
        subtitle.innerHTML="You & Me";
        photo.src="together1.jpg";
        text.innerHTML="Thank you for making my life beautiful. 💖";
        page++;
    }

    else if(page===6){
        title.innerHTML="💖 Best Memories";
        subtitle.innerHTML="Forever Together";
        photo.src="together2.jpg";
        text.innerHTML="No matter what happens, I will always stay with you. ❤️";
        page++;
    }

    else if(page===7){
        title.innerHTML="🎥 Our Special Video";
        subtitle.innerHTML="Click Below";
        photo.src="ari1.jpg";
        text.innerHTML="Now watch our beautiful memories together. ❤️";

        button.innerHTML="▶ Play Video";

        button.onclick=function(){
            window.location.href="birthday.mp4";
        };
    }
}