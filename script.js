var arr=[
    {name:"flower face",image:"https://i.pinimg.com/236x/95/8b/94/958b949740c2ad2f8171a26ba1c4bf29.jpg"},
    {name:"blond car",image:"https://i.pinimg.com/564x/c9/10/e4/c910e4a1ebf47107a7e5d35645d7a979.jpg"},
    {name:"mbappe",image:"https://i.pinimg.com/736x/17/18/48/171848e17ad9bda03e86ad1d8a2450e4.jpg"},
    {name:"tired boy",image:"https://i.pinimg.com/564x/80/82/06/808206b9a04c66f9759bcb8f6f1673b6.jpg"},
    {name:"starry night",image:"https://i.pinimg.com/564x/b9/84/25/b984252f3738d0ab42a70bf0efe22ad2.jpg"},
    {name:"eyes",image:"https://i.pinimg.com/564x/67/91/78/67917815bd710fb0cc7b78e689360303.jpg"},
    {name:"mountains",image:"https://i.pinimg.com/564x/e6/2e/99/e62e99199da1e8653a1fde89d0104a06.jpg"},
    {name:"kendric lamar",image:"https://i.pinimg.com/564x/2b/a4/f3/2ba4f320823073a6bf5be64188eb193d.jpg"},
    {name:"sky",image:"https://i.pinimg.com/564x/4b/ce/73/4bce73aefc72ea9b223b175644cfc9f5.jpg"},
    {name:"winter",image:"https://i.pinimg.com/564x/94/92/4a/94924a4c9add57dbb7cac1ba6690610f.jpg"}
]
function showCards(){
    var clutter ="";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class ="cursor-pointer" src= "${obj.image}" alt="${obj.name}">
        <div class="caption">${obj.image}</div>
        </div>`;
     })
     document.querySelector('.container').innerHTML=clutter;
}
function searchfunctionality(){
    var input=document.querySelector('#searchinput');
    var overlay=document.querySelector('.overlay');
    
    input.addEventListener('focus',function(){
        overlay.style.display='block';

    });
    input.addEventListener('blur',function(){
        overlay.style.display='none';

    });
    input.addEventListener('input',function(){
        const filteredArray= arr.filter(obj=> obj.name.toLowerCase().startsWith(input.value));
        var clutter="";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class ="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`
        })

    var searchData =document.querySelector('.searchdata');
    searchData.style.display='block';
    searchData.innerHTML=clutter;
    })
    
    
}
searchfunctionality();
showCards();