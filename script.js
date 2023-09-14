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
        name:"blue shirt",
        price:"$15",
        category:"Tops",
        size:"small",
        image:"https://i.ibb.co/DQjXFF2/hermione-padded-knot-back.jpg"
    },
    {
        name:"orange shirt",
        price:"$23",
        category:"Bottom",
        size:"medium",
        image:"https://i.ibb.co/DQjXFF2/hermione-padded-knot-back.jpg"
    }
]
{/* <img src=${getShown.image} class="bestSellImage"><br></br> */}

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