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


var bestsells=[
    {
        name:"Hermione Padded Knot Back Top",
        price:"$39",
        size:"large",
        category:"Tops",
        image:"https://i.ibb.co/DQjXFF2/hermione-padded-knot-back.jpg"
    },
    {
        name:"Margaux Off Shoulder Knit Top",
        price:"$45",
        category:"Tops",
        size:"small",
        image:"https://i.ibb.co/zGXtcNb/margaux-off-shoulder-knit-top.webp"
    },
    {
        name:"Nyra Linen Wide Leg Culottes",
        price:"$59",
        category:"Pants",
        size:"medium",
        image:"https://i.ibb.co/gd0VGXH/Nyra-Linen-Wide-Leg-Culottes.webp"
    }
    ,
    {
        name:"Wesson Belted Cotton Shorts",
        price:"$45",
        category:"Shorts",
        size:"medium",
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
                        `
       

    bestSellGallery.appendChild(theSell);
    
    
    
});