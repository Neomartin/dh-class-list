const sidebarItems = document.querySelectorAll('.sidebar-item'); //ejemplo de selectores
// const flavorList = document.querySelectorAll('.ice-cream-flavor');

console.info(sidebarItems)
// sidebarItems.classList.remove('sidebar-item')
function toggleFlavor(event) {
    console.log(event.target);
    const flavorItem = event.target;
    flavorItem.classList.toggle('active')
}


function setItemActive(index) {
    console.log(index)
    // console.log(index.target.classList)
    sidebarItems.forEach((item, idx) => {
        if(index === idx) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    });
}