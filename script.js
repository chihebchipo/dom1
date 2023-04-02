if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var remove=document.getElementsByClassName('fas fa-times-circle');
    for(let i of remove) {
        var button = i;
        button.addEventListener ('click' , removecartitem)
    }
    
}

var quantityinputs = document.getElementsByClassName('quantity-btn')
    for (var i = 0; i < quantityinputs.length; i++){
        var input = quantityinputs[i]
        input.addEventListener('change', quantitychanged)
    }

function removecartitem (event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
    
    updatecarttotal()
}

function quantitychanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatecarttotal()
}


function updatecarttotal(){
    var cartitemcontainer = document.getElementsByClassName('allitems')[0]
    var cartitems = cartitemcontainer.getElementsByClassName('itemcard')
    var summarytotal= 0
    for (var i = 0; i < cartitems.length; i++) {
        var cartitem = cartitems[i]
        var itemprice = cartitem.getElementsByClassName('prixunitaire')[0]
        var itemquantity = cartitem.getElementsByClassName('quantity-btn')[0]
        var price = parseFloat(itemprice.innerText)
        var quantity = itemquantity.value
        summarytotal = summarytotal + (price * quantity)
        
    }
    document.getElementsByClassName('summarytotal')[0].innerText = summarytotal

}

function btnpurchaseclicked(){
    alert('Thank you for your purchase');
}



const hearts=document.getElementsByClassName('fas fa-heart');

for(let i of hearts) {
    i.addEventListener('click', function() {
        i.classList.toggle('red');
    })
}
