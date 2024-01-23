///<reference types="../@types/jquery" />
$('.icon-open').on('click', function(){
    $('.link-list').animate({width:300, opacity: 1},1000,function(){   
        $('.close').show(500)
    })
})


$('.close').on('click',function(){
    $('.link-list').animate({width:0, opacity: 0 },1000,function(){
        $('.close').hide(500)
    })
    // $('.link-list').slideToggle(500)
})

$('.singer h3').on('click',function(){
    $('.singer p').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})
const demo =document.getElementById('one')
const test =document.getElementById('two')
const tes =document.getElementById('three')
const te =document.getElementById('four')
let count =+demo.innerHTML
let countwo =+test.innerHTML
let counthree =+tes.innerHTML
let countfour =+te.innerHTML


let num = setInterval(() => {
    count +=1;
    demo.innerHTML=count
    if(count == 833){
        clearInterval(num)
    }
}, 100);
let num2 = setInterval(() => {
    countwo+=1;
    test.innerHTML=countwo 
    if(countwo == 11){
        clearInterval(num2)
    }
}, 100);
let num3 = setInterval(() => {
    counthree+=1;
    tes.innerHTML=counthree
    if(counthree == 40){
        clearInterval(num3)
    }
}, 100);
let num4 = setInterval(() => {
    countfour+=1;
    te.innerHTML=countfour
    if(countfour == 1000){
        clearInterval(num4)
    }
}, 100);

$('.bt-sub ').on('click', function (e) {
    e.preventDefault();
});

$('#messageText').on('input', function(event){
    let alertMessage  = document.querySelector(".alertMessage")
    let num  = document.querySelector(".numres")
    let x= event.target.value.length;
    num.textContent = x;
    if( x>=100){
        alertMessage.classList.remove("d-none")
    }
    else{
        alertMessage.classList.add("d-none")
    }
})

