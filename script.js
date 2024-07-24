var items = document.querySelectorAll(".timeline li")
window.addEventListener("scroll",myFunction)
function myFunction(){
    for(var i=0;i<items.length;i++){
        if(isElementVisible(items[i])){
            items[i].classList.add("in-view")
        }
    }
}
function isElementVisible(item){
    var rect = item.getBoundingClientRect();
    return (
        rect.top >= 0 && 
        rect.left >=0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
