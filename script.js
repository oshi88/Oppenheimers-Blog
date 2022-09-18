const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 57;
const docheight = "5000";

const winheight = window.innerHeight;
const imgwidth = winheight*1.778;


/*window.onbeforeunload = () => {  
  window.scrollTo(0, 0);  
};*/


const currentFrame = index => (
  `C:/Users/Oshi/Desktop/imageScroll/img_full/${index.toString().padStart(5, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
/*canvas.width=774;
canvas.height=1000;*/
canvas.height = winheight;
canvas.width = imgwidth;

img.onload=function(){
  context.drawImage(img, 0, 0, );
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0,);
}

window.onscroll = function() {main_scroll_values();alerttt();timeline();}

function main_scroll_values() {  
  var scrollTop = window.pageYOffset;   
    var valuePX = scrollTop / (docheight - winheight);
    var percentround = Math.round(valuePX*100);
    var y = 5*(percentround/100);
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(y * frameCount)
    
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
};

preloadImages()
    
function screenHeight(value){
    var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    var x = valuePercnt/100;
    
}

function alerttt()
{var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    var x = valuePercnt/100;
 document.getElementById("screenHeight").innerHTML = valuePercnt;
    if (valuePercnt >= 20){
          document.getElementById("hero-lightpass").className= "fadeOff";
        document.getElementById("title_container").className= "title_container_off";
         body = document.getElementsByTagName("BODY")[0];
         body.style.transition = "background 0.5s 0.2s";
         body.style.background = "white";
  } else  {
      document.getElementById("hero-lightpass").className= "fadeOn";
      document.getElementById("title_container").className= "title_container";
      body = document.getElementsByTagName("BODY")[0];
      body.style.transition = "background 0.6 0s";
      body.style.background = "black";
  }
 if(valuePercnt >= 3){
     elem = document.getElementById("title_container");
     elem.style.transition = "top 0.6s 0s";
     elem.style.top = "30%";
     document.getElementById("title_quote").style = "display: flex;";
     document.getElementById("title_quote").className = "title_quote";
 }else{elem = document.getElementById("title_container");
     elem.style.transition = "top 0.6s 0s";
     elem.style.top = "50%";
       document.getElementById("title_quote").className = "title_quote_off";
      }
   
   console.log()
}
        
function timeline(){
    var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    var x = valuePercnt/100;
    
    scale_1904 = document.getElementById("scaleBG");
    scale_1943 = document.getElementById("scaleBG");
    scale_1945 = document.getElementById("scaleBG");
    scale_bg = document.getElementById("scaleBG");
    if(valuePercnt >= 20 && valuePercnt<34){
        scale_1904.style.backgroundSize = "100% 17.1%";
        document.getElementById("timeline_container").style.opacity = "1";
    }else if(valuePercnt >= 34 && valuePercnt<48){
        scale_1904.style.backgroundSize = "100% 50.4%";
        document.getElementById("timeline_container").style.opacity = "1";
    }else if(valuePercnt >= 48){
        scale_1904.style.backgroundSize = "100% 83.75%";
        document.getElementById("timeline_container").style.opacity = "1";
    }else{
        scale_1904.style.backgroundSize = "100% 0%";
        document.getElementById("timeline_container").style.opacity = "0";
    }
}    











/*const frameIndex = Math.min(x - 1, Math.ceil(y * x));
            document.getElementById ("inner").value = percentround; 

/*-- Array maker
let range = num =>  Array.from({ length: num}, (_, i) => ++i)*/

/*-- BG color gradual change

const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.section1')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})---*/


/*-- original scroller

window.addEventListener('scroll', () => {  
  const s = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = s / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});*/