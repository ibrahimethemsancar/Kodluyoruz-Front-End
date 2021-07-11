let ad = prompt("Lütfen Adınızı Giriniz :");

let myname = document.querySelector("#myName");
myname.innerHTML=`${ad}`;


function goster()
{

let tarih = new Date();
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();
let gun = tarih.getDay();

if (dakika<10){
    dakika=`0${dakika}`;
}
if (saat<10){
    saat=`0${saat}`;
}
if (saniye<10){
    saniye=`0${saniye}`;
}

    switch(gun){
        case 0 :
            gun="Pazar"
        break;
        case 1 : 
            gun='Pazartesi'
        break;
        case 2 : 
            gun='Salı'
        break;
        case 3 :
            gun= 'Çarşamba'
        break;
        case 4 :
            gun= 'Perşembe'
        break;
        case 5 :
            gun='Cuma'
        break;
        case 6 : 
            gun='Cumartesi'
        break;
    }

    let simdi = `${saat} : ${dakika} : ${saniye}  ${gun}`;

    let yazdir =document.querySelector(".clock");
    yazdir.textContent= simdi;
    yazdir.innerHTML=simdi
    


    setTimeout(goster,1000)

}
goster();

