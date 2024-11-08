window.onload=() =>{

    function enMayuscula(){
        let element=document.getElementById("texto");
        element.value=element.value.toUpperCase();
        //let element = document.getElementById("texto").value;
        //document.getElementById("texto").value=texto.toUpperCase();
    }

    function enMayusculaProprioElemento(element){
    // let texto=element.value;
        element.value=element.value.toUpperCase();
    }

    function toUpperCase(){
        let texto=document.getElementById("texto").value;
        document.getElementById("texto").value=texto.toUpperCase();
    }


    let elemento = document.getElementById("texto");
    /*Manera chapucera
    elemento.addEventListener("keyup",function(){
        toUpperCase();
    });/*/
    elemento.addEventListener("keyup",(event)=>{
        event.target.value=event.target.value.toUpperCase();
    })
}