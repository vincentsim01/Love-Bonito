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
        name:"pink shirt",
        price:"$25",
        size:"large"
    },
    {
        name:"blue shirt",
        price:"$15",
        size:"small"
    },
    {
        name:"orange shirt",
        price:"$23",
        size:"medium"
    }
]

var bestSellGallery=document.getElementById("bestSellerGallery");

bestsells.forEach(getShown=>{
    var theSell=document.createElement("button");
    theSell.innerHTML=`<p>Name is ${getShown.name}</p>
                        <br>
                        <p>Price is ${getShown.price}</p>`

    bestSellGallery.appendChild(theSell);
    
    
    
});