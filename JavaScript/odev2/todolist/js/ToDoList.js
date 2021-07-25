var button = document.querySelector("#liveToastBtn")
var list= document.querySelector("#list")
var task = document.querySelector("#task")
var closeButton = document.querySelector("#close")
var li = document.getElementsByTagName("li")
function newitem(){
   
    if(task.value === "" || task.value.replace(/^\s+|\s+$/g, "").length == 0){
        $(".error").toast("show")
        task.value=""
    }
    else{
        $(".success").toast("show")
    var licreate = document.createElement("li")
    licreate.innerText=task.value
    list.appendChild(licreate)
    var remove = document.createElement("span")
    remove.innerText="✕"
    remove.classList.add("close")
    licreate.appendChild(remove)
    list.appendChild(licreate)
    
    }
   
    task.value=""
    

    
}
button.addEventListener("click", newitem)

var mylist = document.getElementsByTagName("li")
for(var i=0;i<mylist.length;i++){
    var remove = document.createElement("span")
    remove.innerText="✕"
    remove.classList.add("close")
    mylist[i].appendChild(remove)
}
    



list.addEventListener("click",function(e){

    const target = e.target

    if(target.matches("span")){
        target.parentNode.remove()
    }
})


var ikon =document.createElement("span")
        ikon.classList.add("icon")
        ikon.innerText="✓"

list.addEventListener("click",function(e){

    const target = e.target

    if(!target.classList.contains("liBackground")){
        target.classList.add("liBackground")
        target.appendChild(ikon)
    

    }else if( target.classList.contains("liBackground")){
        target.classList.remove("liBackground")
        target.removeChild(ikon)
    }
})

