var games = [
    {
        name: 'Doom',
        image : '../GameTemplate/Fotoğraflar/carddoom.jpg'
    },
    {
        name: 'Deep Rock Galactic',
        image : '../GameTemplate/Fotoğraflar/carddrg.jpg'
    },
    {
        name: 'Witcher 3',
        image : '../GameTemplate/Fotoğraflar/cardwitcher.jpg'
    },
    {
        name: 'Wolfestein',
        image : '../GameTemplate/Fotoğraflar/cardwtnc.jpg'
    },
    {
        name: 'GTA 5',
        image : '../GameTemplate/Fotoğraflar/newgta5.jpg'
    },
    {
        name : 'Cyberpunk 2077',
        image : '../GameTemplate/Fotoğraflar/cardcyberpunk.png'
    }
];
var index = 0;
var slayt = games.length;
var interval;
var settings = {
    duration : '2000',
    random : false
};

function init(settings){
 
interval = setInterval(function(){
        if(settings.random){
            do{
            index = Math.floor(Math.random() * slayt);
            }while(index==prev)
            prev=index;
        }else{
            if(slayt == index){
                index = 0;
            }
            slider(index);
            index++;
            
        }


    },settings.duration);

}



init(settings);
function slider(index){
document.querySelector('.card-img-top').setAttribute('src',games[index].image);
document.querySelector('h5').textContent = games[index].name;
}
const geri = document.querySelector('.fa-arrow-circle-left');
geri.addEventListener('click',function(){

if(index==0){
    index=games.length;
}
index--;
slider(index);
});
const ileri = document.querySelector('.fa-arrow-circle-right');
ileri.addEventListener('click',function(){
if(index==games.length-1){
    index=-1;
}
index++;
slider(index);
});
document.querySelectorAll('.fas').forEach(function(item){
item.addEventListener('mouseenter',function(){
clearInterval(interval);
});
});
document.querySelectorAll('.fas').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
});
