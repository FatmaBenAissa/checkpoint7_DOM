
var parent=document.getElementById('parent');
let items = document.getElementsByClassName('Item')
for (let i = 0; i < items.length; i++) {
    deleteBtn=items[i].lastElementChild;
    deleteBtn.addEventListener('click', function() {
        parent.removeChild(items[i])
        
    
    })
}
  


let plusBtns = document.getElementsByClassName('plus-btn')
for (let i = 0; i < plusBtns.length; i++) {
    let plus = plusBtns[i];
    plus.addEventListener('click', function() {
        plus.previousElementSibling.value++;
        price1();
        price2();
        price3();
        priceTotal()
    }
    )}


let minusBtns = document.getElementsByClassName('minus-btn')
for (let i = 0; i < minusBtns.length; i++) {
    let minus = minusBtns[i];
    minus.addEventListener('click', function() {
        if(minus.nextElementSibling.value==0){
            minus.nextElementSibling.value=0;
        }
        else{
        minus.nextElementSibling.value--;
        price1();
        price2();
        price3();
        priceTotal()
    }
    }
    )
     
    
    }
    


let heart = document.getElementsByClassName('like')
for (let i = 0; i < heart.length; i++) {
    let like = heart[i];
    like.addEventListener('click', function() {
       var el=like.firstElementChild;
       el.style.color="red"
       console.log(el);
        
    
    })
}
function price1(){
    let price = document.getElementById('p1')
    let quant1 = document.getElementById('q1')
    price.innerHTML= 1379*quant1.value;
    
}
function price2(){
    let price = document.getElementById('p2')
    let quant1 = document.getElementById('q2')
    price.innerHTML= 176.80*quant1.value;
    
}
function price3(){
    let price = document.getElementById('p3')
    let quant1 = document.getElementById('q3')
    price.innerHTML= 249*quant1.value;
    
}
function priceTotal(){
    let pt=document.getElementById('finalPrice');
    let p1 = document.getElementById('p1').innerHTML;
    let p2 = document.getElementById('p2').innerHTML;
    let p3 = document.getElementById('p3').innerHTML;
    
    pt.value=parseInt(p1)+parseInt(p2)+parseInt(p3)
    
}

    // let price = document.getElementsByClassName('price')

    // for (let i = 0; i < price.length; i++) {
    //     let onePrice= price[i].innerHTML;
    //     // console.log(onePrice)
    
    //     let quantity = document.getElementsByClassName("Quant")
    //     for (let j = 0; j < quantity.length; j++) {
    //         // console.log(quantity[j])
    //     //  let  prix=parseInt(onePrice[i])*quantity[j].value;
    //     // onePrice=parseInt(onePrice)*parseInt(quantity[i+1].value);}
    //     console.log(prix)
    // }
    // }
        
    
