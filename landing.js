document.getElementById("button").addEventListener("click",botontarjet,false);
document.getElementById("Formulario").style.display="none";
document.getElementById("tarjeta").style.display="none";
document.getElementById("nombrealert").style.display="none";
document.getElementById("correoalert").style.display="none";
document.getElementById("contraalert").style.display="none";
document.getElementById("confirmaralert").style.display="none";
document.getElementById("tarjetaalert").style.display="none";

function botontarjet(){
  document.getElementById("Formulario").style.display="block";
  document.getElementById("informacion").style.display="none";
}

function tarjeta(){
  document.getElementById("tarjeta").style.display="block";
}


const formulario=document.getElementById("formulario");
var validarNombre=false;
var nombre=document.getElementById("nombre");
var validarCorreo=false;
var correo=document.getElementById("correo");
var validarContra=false;
var contra=document.getElementById("password");
var confirmarContra=false;
var contra2=document.getElementById("password2");
var validarVisa=true;
var visa=document.getElementById("tarjeta");
var validarDireccion=false;
var direccion=document.getElementById("direccion");
var validarPais=false;
var pais=document.getElementById("pais");

  nombre.addEventListener("blur", validar_nombre, true);
  function validar_nombre(){
    if(nombre.value==""){
      validarNombre=false;
      return false;
    }
    else{
      var nombre1=nombre.value.trim();
      var cont=0;
      for(var i=0;i<nombre1.length;i++){
        if(nombre1[i]===" "){
          cont++;
        }
      }
      if(cont>1){
        document.getElementById("nombrealert").innerHTML="Máximo 2 palabras";
        document.getElementById("nombrealert").style.display="block";
        validarNombre=false;
      }
      else{
        document.getElementById("nombrealert").style.display="none";
        validarNombre=true;
      }
    }
  }
  
  correo.addEventListener("blur", validar_correo, true);
  function validar_correo(){
    var re;
    if(correo.value==""){
      validarCorreo=false;
      return false;
    }
    else{
      var correo1=correo.value.trim();
      re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if(!re.test(correo1)){
        document.getElementById("correoalert").innerHTML="Email no válido";
        document.getElementById("correoalert").style.display="block";
        validarCorreo=false;
      }
      else {
        document.getElementById("correoalert").style.display="none";
        validarCorreo=true;
      }
    }
  }

  contra.addEventListener("blur", validar_contra, true);
  function validar_contra(){
    if(contra.value==""){
      return false;
    }
    else{
      var letras = "abcdefghijklmnñopqrstuvwxyz";
      var numeros="0123456789";
      var contra1=document.getElementById("password").value.trim();
      if(contra1.length>7&&contra1.length<13){
        var mayus=false;
        var minus=false;
        var num=false;
        var especial=false;
        for(var i=0;i<contra1.length;i++){
          if(letras.toUpperCase().indexOf(contra1[i])!=-1){
            mayus=true;
          }
          if(letras.indexOf(contra1[i])!=-1){
              minus=true;
          }
          if(numeros.indexOf(contra1[i])!=-1){
            num=true;
          }
          if(letras.indexOf(contra1[i].toLowerCase())==-1&&numeros.indexOf(contra1[i])==-1){
            especial=true;
          }
        }
        if(mayus==true&&minus==true&&num==true&&especial==true){
          document.getElementById("contraalert").style.display="none";
          validarContra=true;
        }
        else {
          document.getElementById("contraalert").innerHTML="La contraseña debe tener como mínimo una mayúscula, una minúscula, un número y un caracter especial";
          document.getElementById("contraalert").style.display="block";
          validarContra=false;
        }
      }
      else{
        document.getElementById("contraalert").innerHTML="La contraseña debe ser entre 8 y 12 dígitos";
        document.getElementById("contraalert").style.display="block";
        validarContra=false;
      }
    }
  }

  contra2.addEventListener("blur", validar_contra2, true);
  function validar_contra2(){
    if(contra.value==""||contra2.value==""){
      confirmarContra=false;
      return false;
    }
    else{
      var contra3=document.getElementById("password2").value.trim();
      if(contra3!==document.getElementById("password").value.trim()){
        document.getElementById("confirmaralert").innerHTML="No coincide con la contraseña";
        document.getElementById("confirmaralert").style.display="block";
        confirmarContra=false;
      }
      else {
        document.getElementById("confirmaralert").style.display="none";
        confirmarContra=true;
      }
    }
  }

  visa.addEventListener("change", validar_visa, true);
  function validar_visa(){
    if(visa.value==""){
      validarVisa=true;
      return false;
    }
    else{
      if(visa.value.length!=16){
        document.getElementById("tarjetaalert").innerHTML="Visa no válida";
        document.getElementById("tarjetaalert").style.display="block";
        validarVisa=false;
      }
      else{
        document.getElementById("tarjetaalert").style.display="none";
        validarVisa=true;
      }
    }
  }

  direccion.addEventListener("change", validar_direccion, true);
  function validar_direccion(){
    if(direccion.value==""){
      validarDireccion=false;
      return false;
    }
    else{
      validarDireccion=true;
      if(validarPais==true){
        tarjeta();
      }
    }
  }

  pais.addEventListener("change", validar_pais, true);
  function validar_pais(){
    if(pais.value=="Pais"){
      validarPais=false;
      return false;
    }
    else{
      validarPais=true;
      if(validarDireccion==true){
        tarjeta();
      }
    }
  }

  formulario.addEventListener("submit", (e) => {
    if(validarNombre==true&&validarCorreo==true&&validarContra==true&&confirmarContra==true&&validarVisa==true){
      alert("Tus datos se han validado correctamente");
      }
      e.preventDefault();
  });