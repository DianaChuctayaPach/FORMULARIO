
function primMayuscula(id){
    var nombreArray = id.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
} 

function verificarNombre() {
    var name = document.getElementById('nombre').value;
    var yesname = document.getElementById("yesname");
        if(name.length > 0 && name.match(/^[a-zA-Z\s]*$/)){
        yesname.innerHTML="<div style='color:green' ><strong> Nombre Valido ✔</strong> </div>";    
        }
    else{
        // var noname = document.getElementById("noname");
        yesname.innerHTML="<div style='color:red' > <strong>Escribir un Nombre</strong></div>";
        }
}
 function verificarApellido() {
    var apellido = document.getElementById("apellido").value;//papá
    var ExpreRegu = new RegExp(/^[a-zA-Z\s]*$/);
     var yesapellido = document.getElementById("yesapellido");
      if (apellido.length>0 && ExpreRegu.test(apellido)) {
          yesapellido.innerHTML="<div style='color:green' ><strong> Apellido Valido ✔</strong> </div>";
          }else{
              yesapellido.innerHTML="<div style='color:red' ><strong> Escribir un Apellido Valido </strong> </div>";
          }     
 }
 function verificarDni() {
     var dni = document.getElementById("dni").value; //papá
      var yesdni = document.getElementById("yesdni");
      if (dni.length > 0 && dni.match(/^\d.{6,7}$/)) {
          yesdni.innerHTML="<div style='color:green' ><strong>Dni Correcto</strong></div>";
      }else{
          yesdni.innerHTML="<div style = 'color:red' ><strong>Dni Incorrecto</strong></div>";
      }
 }
 function verificarCelular() {
     var celular = document.getElementById("celular").value; //papá
      var yescelular = document.getElementById("yescelular");
      if (celular.length > 0 && celular.match(/^\d.{,6}$/)) {
          yescelular.innerHTML="<div style='color:green' ><strong>Numero Correcto</strong></div>";
      }else{
          yescelular.innerHTML="<div style = 'color:red' ><strong>Numero Incorrecto</strong></div>";
      }
 }
 function verificarContraseña() {
     var contraseña = document.getElementById("contraseña").value; //papá
     var confir_contraseña = document.getElementById("confir-contraseña").value; //papá
      var yescontraseña = document.getElementById("yescontraseña");
      if (contraseña.length > 0  && contraseña.match(/^(?=.*\d).{6,}$/ )) {
          yescontraseña.innerHTML="<div style='color:green' ><strong>Contraseña Correcta</strong></div>";
      }else{
          yescontraseña.innerHTML="<div style = 'color:red' ><strong>Contraseña Incorrecta</strong></div>";
      }
      console.log(contraseña)
 }
 function verificarContraseña2() {
     var contraseña = document.getElementById("contraseña").value; //papá
     var confir_contraseña = document.getElementById("confir-contraseña").value; //papá
      var yes2contraseña = document.getElementById("yes2contraseña");
      if (confir_contraseña.length > 0 && contraseña === confir_contraseña && contraseña.match(/^(?=.*\d).{6,}$/ )) {
          yes2contraseña.innerHTML="<div style='color:green' ><strong>Contraseña Correcta</strong></div>";
      }else{
          yes2contraseña.innerHTML="<div style = 'color:red' ><strong>Contraseña Incorrecta</strong></div>";
      }
      console.log(confir_contraseña)
 }
