const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 57;
const docheight = document.documentElement.scrollHeight;

const winheight = window.innerHeight;
const imgwidth = winheight*1.778;

const Darkgrey = "#404040";                   /*COLORS*/
const Orange = "#F57328";
const lightRed = "#d04a4a";
const dimRed = "#98483d";
const offWhite = "#f2f2f2";

window.onbeforeunload = () => {             
  window.scrollTo(0, 0);  
}



/*const currentFrame = index => ( 
    `files/imges/${index.toString().padStart(5, '0')}.jpg`
)*/

function currentFrame(index){
    if(window.innerWidth<800){
        return `files/imges_small/${index.toString().padStart(5, '0')}.jpg`;
    }else{
        return `files/imges/${index.toString().padStart(5, '0')}.jpg`;
    }
}

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);

canvas.height = winheight;
canvas.width = imgwidth;

img.onload=function(){
  context.drawImage(img, 0, 0, );
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0,);
}

window.onscroll = function() {main_scroll_values();alerttt();timeline();trinityBlured();}

function main_scroll_values() {  
  var scrollTop = window.pageYOffset;   
    var valuePX = scrollTop / (docheight - winheight);
    var percentround = Math.round(valuePX*100);
    var y = 7*(percentround/100);
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(y * frameCount)
    
  );
  console.log("Canvas Loaded");
  requestAnimationFrame(() => updateImage(frameIndex + 1))
};

preloadImages()
    
window.onresize = function(){scrollReset();}
function scrollReset(){
    window.scrollTo(0, 0); 
}

function alerttt(){   
    var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    var x = valuePercnt/100;
 document.getElementById("screenHeight").innerHTML = valuePercnt +"% " + "- " + scroll + "px" + x;
    if (valuePercnt >= 15){
        
          document.getElementById("hero-lightpass").className= "fadeOff";
        document.getElementById("title_container").className= "title_container_off";
         body = document.getElementsByTagName("BODY")[0];
         body.style.transition = "background 0.5s";
         body.style.background = offWhite;
  } else  {
      document.getElementById("hero-lightpass").className= "fadeOn";
      document.getElementById("title_container").className= "title_container";
      body = document.getElementsByTagName("BODY")[0];
      body.style.transition = "background 0.5s";
      body.style.background = "black";
  }
 if(valuePercnt >= 1){
     elem = document.getElementById("title_container");
     elem.style.transition = "top 0.6s 0s";
     elem.style.top = "35%";
     document.getElementById("title_quote").style = "display: flex;";
     document.getElementById("title_quote").className = "title_quote";
 }else{elem = document.getElementById("title_container");
     elem.style.transition = "top 0.6s 0s";
     elem.style.top = "40%";
       document.getElementById("title_quote").className = "title_quote_off";
      }
   
   
}
        
function timeline(){
    var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    var x = valuePercnt/100;
    
    disc_1904 = document.getElementById("disc1904");
    disc_1943 = document.getElementById("disc1943");
    disc_1945 = document.getElementById("disc1945");
    date_1904 = document.getElementById("date1904");
    date_1943 = document.getElementById("date1943");
    date_1945 = document.getElementById("date1945");
    
    scale_1904 = document.getElementById("scaleBG");
    young = document.getElementById("image02");
    home = document.getElementById("image03");
    newyork = document.getElementById("image01");
      
    smoking_pipe = document.getElementById("image05");
    presentation = document.getElementById("image04");
    losAlamosGate = document.getElementById("image06");
    
    resign = document.getElementById("image09");
    joined = document.getElementById("image07");
    extraIMG = document.getElementById("image08");
    if(valuePercnt >= 15 && valuePercnt<22){                                                
        
        /*..1904..*/
    
        scale_1904.style.backgroundSize = "100% 17.1%";
        document.getElementById("timeline_container").style.opacity = "1";
        newyork.style.opacity = "1";
        newyork.style.transform = "translate3d(80px, 0px, 0px)";
        young.style.transform = "translate3d(300px,0px,100px)";                         /*250*/
        young.style.opacity = "1";
        home.style.opacity = "1";
        home.style.transform = "translate3d(-150px,0px,150px)";                         /*-300*/
        disc_1904.style.transform = "translate(0px)";
        disc_1904.style.transitionDelay = "0.5s";
        date_1904.style.background = lightRed;
        date_1904.style.transitionDelay = "0.7s";       
                    date_1943.style.background = Darkgrey;
                    disc_1943.style.transitionDelay = "0s";
                    disc_1943.style.transform = "translate(-265px)";      
                                date_1945.style.background = Darkgrey;
        
        
        presentation.style.transform = "translate3d(200px, 1100px, 0px)";
        losAlamosGate.style.transform = "translate3d(300px,1100px,150px)";
        smoking_pipe.style.transform = "translate3d(-100px,1100px,100px)";
        }  
        else if(valuePercnt >= 22 && valuePercnt<29){                                       /*..1943..*/
        
        scale_1904.style.backgroundSize = "100% 50.4%";
        document.getElementById("timeline_container").style.opacity = "1";      
            young.style.transform = "translate3d(300px,-800px,100px)";
            home.style.transform = "translate3d(-150px,-800px,150px)";
            newyork.style.opacity = "0";
            newyork.style.transform = "translate3d(80px, -800px, 0px)";
            disc_1904.style.transform = "translate(-267px)";
            disc_1904.style.transitionDelay = "0s";
            date_1904.style.background = dimRed;            
                    date_1943.style.background = lightRed;
                    disc_1943.style.transitionDelay = "0.5s";
                    disc_1943.style.transform = "translate(0px)";           
                                date_1945.style.background = Darkgrey;
                                disc_1945.style.transitionDelay = "0s";
                                disc_1945.style.transform = "translate(-267px)";
            
            presentation.style.transform = "translate3d(200px, 0px, 0px)";
            losAlamosGate.style.transform = "translate3d(300px,170px,150px)";
            smoking_pipe.style.transform = "translate3d(-100px,350px,100px)";
                            joined.style.transform = "translate3d(220px, 1100px, 0px)";
                            resign.style.transform = "translate3d(310px,1100px,150px)";
                            extraIMG.style.transform = "translate3d(110px,1100px,100px)";
        }    
        else if(valuePercnt >= 29 && valuePercnt <=36){                                                         /*..1945..*/
        scale_1904.style.backgroundSize = "100% 83.75%";
        document.getElementById("timeline_container").style.opacity = "1";
            document.getElementById("sec_2").style.opacity = "1";
            date_1943.style.background = dimRed;
            disc_1943.style.transitionDelay = "0s";
            disc_1943.style.transform = "translate(-267px)";            
                        date_1945.style.background = lightRed;
                        disc_1945.style.transitionDelay = "0.5s";
                        disc_1945.style.transform = "translate(0px)";
            
            presentation.style.transform = "translate3d(200px, -1100px, 0px)";
            losAlamosGate.style.transform = "translate3d(300px,-1100px,150px)";
            smoking_pipe.style.transform = "translate3d(-100px,-1100px,100px)";
            
            joined.style.transform = "translate3d(220px, 0px, 0px)";
            resign.style.transform = "translate3d(310px,370px,150px)";
            extraIMG.style.transform = "translate3d(110px,150px,100px)";
            
            
            Trinity_BG = document.getElementById("trinity_BG").style.opacity = "0";
            document.getElementById("trinity_BG_blurred").style.opacity = "0";
            document.getElementById("textMHP").style.position= "fixed";
        }
        else if(valuePercnt===37){
            joined.style.transform = "translate3d(220px, -1100px, 0px)";
            resign.style.transform = "translate3d(310px,-1100px,150px)";
            extraIMG.style.transform = "translate3d(110px,-1100px,100px)";
            document.getElementById("sec_2").style.opacity = "0";
            manhattan();
            console.log(ScrollArray);
        }
    else{
        scale_1904.style.backgroundSize = "100% 0%";
        document.getElementById("timeline_container").style.opacity = "0";
        
      
        
        disc_1904.style.transform = "translate(-265px)";
        disc_1904.style.transitionDelay = "0s";
        date_1904.style.background = "#404040";
        date_1904.style.transitionDelay = "0s";      
                date_1943.style.background = Darkgrey;
                date_1943.style.transitionDelay = "0s";
                disc_1943.style.transitionDelay = "0s";
                disc_1943.style.transform = "translate(-265px)";     
                    date_1945.style.background = Darkgrey;
        
    }
   
}    

function makeArray(count) {
   var result = [];
  
      for(var i = 0; i < count; i++) {
         result.push(i);
      }
   
   return result;
}
var ScrollArray = makeArray(101);

function manhattan(){
    
    var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    var transform_end = scroll+(winheight);
    var transform_middle = scroll+(winheight/2);
    section_3 = document.getElementById("sec_3");
    MH_title = document.getElementById("textMHP");
    MH_disc = document.getElementById("discMHP");
    Trinity_BG = document.getElementById("trinity_BG");
    
    Trinity_BG.style.opacity = "1";
    MH_title.style.opacity = "1";
   
    MH_title.style.transform = 'translate(0,' + transform_middle +'px)';
    
    MH_disc.style.transform = 'translate(0,' + transform_middle +'px)';
    
    MH_disc.style.opacity = "1";
    
    trinityBlured();
    japanBombs();
}

function trinityBlured(){
    var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    Trinity_BG = document.getElementById("trinity_BG");
    MH_title = document.getElementById("textMHP");
    
    if(valuePercnt>35 && valuePercnt<60){
        Trinity_BG.style.opacity = "1";
    }else{
        Trinity_BG.style.opacity = "0";
        
    }
   
}

function japanBombs(){
    
    var scroll = window.pageYOffset;
    var value = scroll / (docheight - winheight);
    var valuePercnt = Math.round(value*100);
    var transform_middle = scroll+(winheight/2);
    
    section_4 = document.getElementById("sec_4");
    japan_container = document.getElementById("japan_container");
    japan_title_container = document.getElementById("japan_titile_container");
    
    
   
    
    japan_container.style.transform = 'translate(0,' + transform_middle +'px)';
   japan_container.style.opacity = "1";
   
    
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