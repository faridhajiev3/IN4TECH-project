const faPlus = document.querySelectorAll(".plus");
const itemNav = document.querySelectorAll(".item-nav");

faPlus.forEach((item, index) => {
    item.addEventListener("click", () => { 
        const itemNavIndex = itemNav[index];

        if (itemNavIndex.style.height === "0px" || !itemNavIndex.style.height) {
            itemNavIndex.style.height = itemNavIndex.scrollHeight + "px"; 
        } else {
            itemNavIndex.style.height = "0px"; 
        }
    });
});
