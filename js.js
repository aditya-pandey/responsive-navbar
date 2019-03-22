const menu = document.querySelector("#hamburger");

menu.addEventListener("click",() =>{
    const menuItems = document.querySelector(".mob");
    const hamburger = document.querySelector("#hamburger");
    if(menuItems.style.opacity === "0"){
        menuItems.style.opacity = "0.95";
        hamburger.innerHTML = "<i class='fas fa-times'></i>";
    }
    else{
        menuItems.style.opacity = "0";
        hamburger.innerHTML = "<i class='fas fa-bars'></i>";
    }
});