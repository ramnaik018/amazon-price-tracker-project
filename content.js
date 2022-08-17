console.log("content")

var pageUrl = window.location.href;
// console.log(pageUrl)
if(pageUrl=='https://www.amazon.in/gp/cart/view.html?ref_=nav_cart'){
    let products = document.getElementsByClassName('a-row sc-list-item sc-list-item-border sc-java-remote-feature')
    for (i = 0; i < products.length; i++) {
        let cleanedUpValues = products[i].innerText.split("\n");
        let item={
            name: cleanedUpValues[0],
            do:"addProduct"
        }
        // console.log(item)
        chrome.runtime.sendMessage(item)
    }
    
}

    

    