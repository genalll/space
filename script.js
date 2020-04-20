
const spaces=document.querySelector(".space");
const shatl=document.querySelector(".shatl");
const bomb = document.createElement('div');
const ufo=document.querySelector(".ufo");
bomb.classList.add("bomb");
let a=5;

function soundClick() {
    var audio = new Audio(); 
    audio.src = 'sound/shot.mp3'; 
    audio.autoplay = true; 
    };

function soundClick2() {
    var audio = new Audio(); 
    audio.src = 'sound/ufoluz.mp3'; 
    audio.autoplay = true; 
    };

function soundClick3() {
    var audio = new Audio(); 
    audio.src = 'sound/bom.mp3'; 
    audio.autoplay = true; 
    };

document.addEventListener('keydown', function (event) {
   if (event.key === 'ArrowRight' && a>=5 && a<=85) {
        a=a+5;
        shatl.setAttribute('style', "left:"+ a + "%");
    }
  });

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft' && a>=10 && a<=95) {
        a=a-5;
        shatl.setAttribute('style', "left:"+ a + "%");
    }
  });

document.addEventListener('keydown', function (event) {
    console.log(event);
    
    const left = a;
    if (event.key === " ") {
        soundClick();
        spaces.appendChild(bomb);
        bomb.setAttribute('style', "left:"+ a + "%");
        for (let i=1; i<100 ; i++) {
            
            setTimeout( function timer(){
                bomb.setAttribute('style', "top:"+ -i + "%;" + "left:"+ (left + 2) + "%");
            }, i*10 );
        }
    }
});

function remove(){
    spaces.removeChild(bomb);
    }
    
setTimeout(remove,5000);

function randomUfo(){
    const b = Math.floor(Math.random() * (90 - 10)) + 10;
    ufo.setAttribute('style', "left:"+ b + "%");
    };

function position(classa) {
        var obj = document.querySelector("." + classa); 
        var posX = obj.offsetTop;  
        var posY = obj.offsetLeft;
        console.log(posY);
        return  posY
      };


for (let i=1; i<10000 ; i++) {
    setTimeout( function timer(){
        randomUfo();
        soundClick3();
        if ((position("bomb")-position("ufo")>0 && position("bomb")-position("ufo")<50)){
          ufo.classList.add("ufoluz");
          soundClick2();
          alert("Ты выиграл! Инопланетяне в спешке покидаю замлю. Но они будут наблюдать издали");
        };
    }, i*2000 );
};




  

