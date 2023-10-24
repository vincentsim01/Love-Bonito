var theBurger=document.getElementById("theBurger");
var mobileMenu=document.getElementById("mobileMenu");

theBurger.addEventListener("click",mobileMenuOut);

function mobileMenuOut(){
    mobileMenu.classList.remove("noneMenu");

}

var mobileMenuX=document.getElementById("mobileMenuX");

mobileMenuX.addEventListener("click",mobileMenuIn);

function mobileMenuIn(){
    mobileMenu.classList.add("noneMenu");
}

var geolocationmobile=document.getElementById("geolocationmobile");
var globeIcon = document.getElementById("globeIcon");
globeIcon.addEventListener("click",geoLocation);
geolocationmobile.addEventListener("click",geoLocation);


function geoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(positioning)

    }else{
        alert("Geolocation Error");
    }
}

function positioning(data){
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) =>  res.json())
    .then((data) => {
        console.log(data)
        let cityName = data.city.name;
        let temp = data.list[0].temp.day+" °C"
        alert(`You are in ${cityName}, the weather now is at ${temp}`);
    })

}


var bestsells=[
    {
        name:"Hermione Padded Knot Back Top",
        price:"$39",
        size:"large",
        category:"Tops",
        color:["red", "green", "blue"],
        image:"https://i.ibb.co/DQjXFF2/hermione-padded-knot-back.jpg"
    },
    {
        name:"Margaux Off Shoulder Knit Top",
        price:"$45",
        category:"Tops",
        size:"small",
        color:["pink", "green", "orange", "blue"],
        image:"https://i.ibb.co/zGXtcNb/margaux-off-shoulder-knit-top.webp"
    },
    {
        name:"Nyra Linen Wide Leg Culottes",
        price:"$59",
        category:"Pants",
        size:"medium",
        color:["gold", "black", "white", "purple", "green"],
        image:"https://i.ibb.co/gd0VGXH/Nyra-Linen-Wide-Leg-Culottes.webp"
    }
    ,
    {
        name:"Wesson Belted Cotton Shorts",
        price:"$45",
        category:"Shorts",
        size:"medium",
        color:["red", "yellow", "turquoise"],
        image:"https://i.ibb.co/8jrzTRt/Wesson-Belted-Cotton-Shorts.webp"
    }
]
{/* <img src=${getShown.image} class="bestSellImage"><br></br> */}

// {/* <a href="https://ibb.co/WckDqdj"><img src="https://i.ibb.co/8jrzTRt/Wesson-Belted-Cotton-Shorts.webp" alt="Wesson-Belted-Cotton-Shorts" border="0"></a> */}

{/* <a href="https://ibb.co/Mfz6bjW"><img src="https://i.ibb.co/gd0VGXH/Nyra-Linen-Wide-Leg-Culottes.webp" alt="Nyra-Linen-Wide-Leg-Culottes" border="0"></a> */}

var bestSellGallery=document.getElementById("bestSellerGallery");

bestsells.forEach(getShown=>{
    var theSell=document.createElement("button");
    theSell.classList.add("bebesellsell");
    theSell.innerHTML=`
                            <img src=${getShown.image} class="bestSellImage"><br></br>
                            <p class="bestSellCategory"> ${getShown.category}</p><br>
                            <p class="bestSellName"> ${getShown.name}</p>
                            <br>
                            <p class="bestSellPrice"> ${getShown.price}</p>
                            <span class="colorCircle" style="background-color:beige;"><span>Color Available: ${getShown.color}</span></span>

                            
                        `
    //    console.log(getShown.color);

    bestSellGallery.appendChild(theSell);
    
    
    
});

var firstFooterContainer=document.getElementById("firstFooterContainer");
var navigation=document.getElementById("navigation");
var bestSellerText=document.getElementById("bestSellerText");
var specialDeal=document.getElementById("specialDeal");
var whatTrendingText=document.getElementById("whatTrendingText");
var LDtext=document.getElementById("LDtext");


var theBody=document.getElementsByTagName('body');


var lightdarkmobile=document.getElementById("lightdarkmobile");
lightdarkmobile.addEventListener("click",function(){
    document.body.classList.toggle("darkMode");
    firstFooterContainer.classList.toggle("grayMode");
    navigation.classList.toggle("fontwhite");
    bestSellerText.classList.toggle("fontwhite");
    specialDeal.classList.toggle("fontwhite");
    whatTrendingText.classList.toggle("fontwhite");
    LDtext.classList.toggle("fontwhite");

});

var darklightButton=document.getElementById("darklightModeButton");
darklightButton.addEventListener("click",function(){
    document.body.classList.toggle("darkMode");
    firstFooterContainer.classList.toggle("grayMode");
    navigation.classList.toggle("fontwhite");
    bestSellerText.classList.toggle("fontwhite");
    specialDeal.classList.toggle("fontwhite");
    whatTrendingText.classList.toggle("fontwhite");
    LDtext.classList.toggle("fontwhite");


});



var popup=document.getElementById("popup");
var newArrivalBanner=document.getElementById("newArrivalBanner");
document.body.onload=setTimeout(popupAppear,3000);

function popupAppear(){
    popup.classList.remove("none");
    newArrivalBanner.style.opacity="60%";

}

var popupCloseButton = document.getElementById("popupCloseButton");
popupCloseButton.addEventListener("click",popupGone);

function popupGone(){
    popup.classList.add("none");
    newArrivalBanner.style.opacity="100%";


}


// var popup2=document.getElementById("popup2");
// document.body.onload=setTimeout(popup2Appear,3000);

// function popup2Appear(){
//     popup2.classList.remove("none2");
//     newArrivalBanner.style.opacity="60%";

// }

// var popup2CloseButton = document.getElementById("popup2CloseButton");
// popup2CloseButton.addEventListener("click",popup2Gone);

// function popup2Gone(){
//     popup2.classList.add("none2");
//     newArrivalBanner.style.opacity="100%";


// }