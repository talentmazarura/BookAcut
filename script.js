const openFormButton=document.getElementById('open-form');
const closeFormButton=document.getElementById('close-form');
const orderForm=document.getElementById('order-form');
openFormButton.addEventListener('click',()=>{
    orderForm.style.display='block';
});
closeFormButton.addEventListener('click',()=>{
    orderForm.style.display='none';
});
window.onlick=function(event){
    if(event.target==orderForm){
        orderForm.style,display="none";
    }
}

document.addEventListener('DOMContentLoaded',function(){
    console.log('Script loaded and DOM is ready!');
});
