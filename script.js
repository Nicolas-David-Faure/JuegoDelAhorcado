
let musica =[
  {cancion:0, nombre:'Bill Evans-Waltz for Debb', src: './audio/music/Bill Evans   Waltz for Debb.mp3'},
  {cancion:1, nombre:'Dave Brubeck Take Fiv', src: './audio/music/Dave Brubeck   Take Fiv.mp3'},
  {cancion:2, nombre:'Gee Electroswing-Revival', src: './audio/music/GeeElectroswing-Revival.mp3'},
  {cancion:3, nombre:'Jamie Berry -Sweet Rascal ElectroSwing', src: './audio/music/JamieBerrySweetRascalElectroSwing.mp3'},
  {cancion:4, nombre:'Jazz Club-Kriss', src: './audio/music/JazzClub-Kriss.mp3'},
  {cancion:5, nombre:'Horace Silver Song for My Father', src: './audio/music/Horace Silver   Song for My Father (Original) HQ 196.mp3'},
  {cancion:6, nombre:"Unused Shop Loop-Steven O'Brien", src: './audio/music/UnusedShopLoop-StevenOBrien.mp3'},
  {cancion:7, nombre:"Lee Morgan The Sidewinde", src: './audio/music/Lee Morgan   The Sidewinde.mp3'},
  {cancion:8, nombre:"Miles Davis   Flamenco Sketche", src: './audio/music/Miles Davis   Flamenco Sketche.mp3'}  
]
const play = document.getElementsByClassName('play');
const pause = document.getElementsByClassName('pause');
const volumen = document.querySelector('.volume')
let contadorCambioMusica = 0
let audio


  for(element of play){
  element.addEventListener('click',function(){
        let cancion = this.getAttribute('id')
      audio = new Audio(`./audio/music/${cancion}.mp3`);
      audio.play()  
  })
}

  for(element of pause){
  element.addEventListener('click',function(){
      audio.pause()
      
  })
}



volumen.addEventListener('click', function(){
  let volume = this.value
  audio.volume = volume
})

let contadorMusica = 0;
let botonMusica = document.getElementById('contenedor_logo_musica');

botonMusica.addEventListener('click',mostrarMusica());
function mostrarMusica(){
  let contenedorMusica = document.getElementById('contenedor_span_musica')
  let contenedorMusicaChild = document.getElementById('contenedor_musica_principal')
  contadorMusica +=1;
  if(contadorMusica %2 === 0){
    contenedorMusica.classList.add('contenedor_span_musica_Activado');
    contenedorMusicaChild.classList.add('contenedor_span_musica_Activado');
  }else{
    contenedorMusica.classList.remove('contenedor_span_musica_Activado');
    contenedorMusicaChild.classList.remove('contenedor_span_musica_Activado');
  }

}

//Inicio principal
const boton_iniciar = document.getElementById('boton_iniciar');
const boton_agregar = document.getElementById('boton_agregar');
const botonVolver = document.getElementById('boton_volver');
const botonVolver2 = document.getElementById('boton_volver2');


//Teclado
function apretasteTecla(letra){
  let input = document.getElementById('input_letra_a_comparar');
 if(/[^A-ZÑ]/g.test(input.value) === false){
  input.value = letra;
 }
  
  return letra;
}

//iniciar juego
const iniciarJuego = document.getElementById('contenedor__juego');
let letraAComparar = document.getElementById('input_letra_a_comparar');

  letraAComparar.addEventListener('keyup', sendValue);


function dibujarSilla(){
  ctx.lineWidth = 1;
  
  ctx.strokeStyle = 'black';
  
  ctx.beginPath();
  //ctx.arc(x,y,radio, AI, AF, sentido(true || false));
  
  ctx.fillStyle = '#6F563A';
  ctx.fillRect(158,90,2,25)
  ctx.fillRect(140,90,2,25)
  ctx.fillStyle = '#8F6F4C';
  ctx.fillRect(135,90,30,5)
  ctx.fillRect(135,90,3,25)
  ctx.fillRect(162,90,3,25)
  ctx.fillRect(135,70,5,25)
  ctx.fillRect(145,70,5,25)
  ctx.fillRect(155,70,5,25)
  ctx.fillRect(135,70,25,5)
ctx.stroke();
ctx.fill();

}
function volverAjugar(){
  sendValue()
  let contenedor = document.getElementById('contenedor_letras_erradas');
 
  let limpiarLetrasErradas = document.querySelectorAll('#letras_erradas_borrar');
  for(let i = 0; i < limpiarLetrasErradas.length;  i++){
    contenedor.removeChild(limpiarLetrasErradas[i])
  }
  
  
  

  contadorErrores = 0;
  contadorAciertos = 0;
  noMostrarLetrasRepetidas = [];

  ctx.clearRect(0,0,600,400)
    
    ctx.fillStyle = 'rgba(88, 224, 236, 0)'
    ctx.fillRect(0,0,400,200); 
    dibujarBase();
    dibujarSilla()
    crearDibujoRect(50, 110, 75, 5) 
    crearDibujoRect(180, 110, 75, 5)
            /*Base escotilla*/
            dibujarEscotilla(124,110,29,5,'black')
    dibujarEscotilla(153,110,29,5,'black')
              /*Poste*/
  crearSoportePoste();
  crearDibujoRect(95, 10, 7, 100);
  crearDibujoRect(100, 10, 50, 5);
 
}
let compararPalabra = [];
let contadorErrores = 0;
let contadorAciertos = 0;
let noMostrarLetrasRepetidas = [];
function sendValue(){
  let input = document.querySelector('#input_letra_a_comparar')
 input.focus()
  let P = document.querySelectorAll('#letra_a_adivinar_p');
  let letra2 = '';
 let contenedor = document.getElementById('contenedor_letras_erradas');
 let compararPalabra2 = compararPalabra.at(-1);
  letra2 = letraAComparar.value.toUpperCase();
 let abc = 'QWERTYUIOPASDFGHJKLÑZXCVBNM';

 
 let contador = 0;
 //console.log(contador)

  
    for(let i of compararPalabra2){
    for(let j = 0; j < i.length; j++){
     contador +=1;
     
     if(letra2 == i){
      
      contadorErrores--;
      if(P[contador-1].classList.contains("letra_a_adivinar_p_Activo") == false){
        
          contadorAciertos++
          
        }
        
       P[contador-1].classList.add("letra_a_adivinar_p_Activo");
          letraAComparar.value = '';
      }
      
       
       }
     }
  
  
     if(abc.includes(letra2) === false){
      document.getElementById('input_letra_a_comparar').value = '';
      let noCaracterPermitido = document.getElementById('error_caracter-invalido');
      let xImage = document.querySelector('#x-img');
      
      noCaracterPermitido.classList.add('activado-caracter-invalido');
      xImage.focus();
     
     }
  
    if(compararPalabra.indexOf(letra2) == -1 && abc.includes(letra2)){
        
        contadorErrores ++;
        if(noMostrarLetrasRepetidas.includes(letra2) == false && compararPalabra2.includes(letra2) == false ){
         noMostrarLetrasRepetidas.push(letra2);  
         
         


          let result = noMostrarLetrasRepetidas.filter((item,index)=>{
            return noMostrarLetrasRepetidas.indexOf(item) === index;
          });
            if(/[^A-ZÑ]/g.test(letra2) == false){
              contenedor.innerHTML += `<p id="letras_erradas_borrar" class="letras_Erradas">${result[result.length-1]}<p>`
            }
           
          
        } 
        letraAComparar.value = '';
   }
   
   
   if(contadorErrores == 1){
    dibujarCuerdaDoblada();
  }  
   if(contadorErrores == 1){
    dibujarCabeza(0); 
  }if(contadorErrores == 2){
    dibujarTorzo (0); 
  }
  if(contadorErrores == 3){
    dibujarBrazoIzquierdo(0);
  }
  if(contadorErrores == 4){
    dibujarBrazoDerecho(0);
  }
  if(contadorErrores == 5){
    dibujarPiernaIzquierda(0);
  }/*Piernas*/
     
  if(contadorErrores == 6){
    dibujarPiernaDerecha(0);}
   if(contadorErrores > 5){
    
    dibujarEscotilla(124,110,29,5,'black')
    dibujarEscotilla(153,110,29,5,'black')
    ctx.clearRect(0,0,600,400)
    
    ctx.fillStyle = 'rgba(88, 224, 236, 0)';
    ctx.fillRect(0,0,400,200); 
    dibujarBase();
    
    crearDibujoRect(50, 110, 75, 5) 
    crearDibujoRect(180, 110, 75, 5)
            /*Base escotilla*/
            dibujarEscotilla(124,110,5,29,'black')
            dibujarEscotilla(175,110,5,29,'black')
              /*Poste*/
  crearSoportePoste();
  crearDibujoRect(95, 10, 7, 100);
  crearDibujoRect(100, 10, 50, 5);
  dibujarCuerdaDoblada()
  /*personaje*/
  dibujarCabeza(10);
  dibujarTorzo (10);
  dibujarBrazoIzquierdo(10);
  dibujarBrazoDerecho(10);
  dibujarPiernaIzquierda(10);
  dibujarPiernaDerecha(10); 
  
   } 
    
   if(contadorAciertos == compararPalabra2.length){
    noMostrarLetrasRepetidas = [];
    contadorErrores = 0;
    document.getElementById('Span_GANASTE').classList.remove('Span_GANASTE_desactivado')
    document.getElementById('Span_GANASTE').classList.add('Span_GANASTE')

    let mensajesGanadores = document.querySelectorAll('#mensaje_ganador')
    let ContenedorMensajesGanador = document.getElementById('contenedor_mensaje_Ganador')
    let boton_jugarOtra = document.querySelector('#botones_Ganaste_perdiste');
   boton_jugarOtra.focus();
   
    for(let i = 0; i < mensajesGanadores.length; i++){
      ContenedorMensajesGanador.removeChild(mensajesGanadores[i])
    }
    ContenedorMensajesGanador.innerHTML += `<p id="mensaje_ganador" class="mensaje_ganador">Felicidades, ganaste la palabra era <span class="palabra_ganador">${compararPalabra.at(-1).join().replace(/,/g,'')}<span></p>`
  }if(contadorErrores >= 6){
    document.getElementById('Span_PERDISTE').classList.remove('Span_GANASTE_desactivado');
    document.getElementById('Span_PERDISTE').classList.add('Span_PERDISTE');
   let boton_jugarOtra = document.querySelector('#botones_Gan_perdiste');
   boton_jugarOtra.focus();
    let mensajesPerdedores = document.querySelectorAll('#mensaje_perdedor')
    for(let i = 0; i < mensajesPerdedores.length; i++){
      document.getElementById('contenedor_mensaje_Perdedor').removeChild(mensajesPerdedores[i])
    }
    
    document.getElementById('contenedor_mensaje_Perdedor').innerHTML +=  `<p  id ="mensaje_perdedor"class="mensaje_perdedor">Fin del juego, perdiste. La palabra era <span class="palabra_secreta">${compararPalabra.at(-1).join().replace(/,/g,'')}</span>.</p>`
    noMostrarLetrasRepetidas = [];
    contadorErrores = 0;
  }
  
}

function cerrarError(){
  let xImage = document.querySelector('#x-img');
  let noCaracterPermitido = document.getElementById('error_caracter-invalido');
   xImage.focus();
      if(xImage){
        noCaracterPermitido.classList.remove('activado-caracter-invalido');
      }
}

function desistir(){
  contadorErrores = 7;
  if(contadorErrores >= 6){
    document.getElementById('Span_PERDISTE').classList.remove('Span_GANASTE_desactivado');
    document.getElementById('Span_PERDISTE').classList.add('Span_PERDISTE');
   let boton_jugarOtra = document.querySelector('#botones_Gan_perdiste');
   boton_jugarOtra.focus();
    let mensajesPerdedores = document.querySelectorAll('#mensaje_perdedor')
    for(let i = 0; i < mensajesPerdedores.length; i++){
      document.getElementById('contenedor_mensaje_Perdedor').removeChild(mensajesPerdedores[i])
    }
    
    document.getElementById('contenedor_mensaje_Perdedor').innerHTML +=  `<p  id ="mensaje_perdedor"class="mensaje_perdedor">Fin del juego, Desististe. Un verdadero guerrero pelea hasta morir, eres una decepción. Vuelve a intentar, la palabra era: <span class="palabra_secreta">${compararPalabra.at(-1).join().replace(/,/g,'')}</span>.</p>`
    noMostrarLetrasRepetidas = [];
    contadorErrores = 0;
  }
}
 
function cerrarVentana(){
    document.getElementById('Span_GANASTE').classList.remove('Span_GANASTE');
    document.getElementById('Span_GANASTE').classList.add('Span_GANASTE_desactivado');
    document.getElementById('Span_PERDISTE').classList.remove('Span_PERDISTE');
    document.getElementById('Span_PERDISTE').classList.add('Span_GANASTE_desactivado')
}

//Canvas - Juego
const pantallaJuego = document.getElementById('canvas_pantalla');

//Añadir palabras
const agregarPalabra = document.getElementById('contenedor__agregar_palabra');


//Agregar palabras
let inputAgregar = document.getElementById('input_ingresar_palabras');
const botonAnhadirNuevaPalabra = document.getElementById('boton_anhadir_nueva_palabra');
let nuevasPalabras = ''; 
let arrayPalabras = [,'INTERNET','SEMILLA','PAN','TORTA','CEBOLLA','ÑANDU','MAÑANA','MANADA',
'CABEZA','CERTEZA','CHINO','CASCABEL',
'INCENDIO','BUDA','PALO','TERMO','CAMARA','GUERRA','VIDA',
'ADIOS','HOLA','TECLADO','HERMANO','BOMBON',
'BOMBA','CEREAL','LEON','PATO','ELEFANTE','HOSPITAL','PERSONAJE',
'PEINE','HAMBRE','DINERO','LECHUGA','TOMATES','CEREZA'];
let localStorageArray = arrayPalabras;

localStorage.setItem("palabras", JSON.stringify(localStorageArray));


function agregaUnaPalabraNueva(){
  nuevasPalabras = inputAgregar.value.toUpperCase();
     
      if(/[^A-ZÑ]/g.test(nuevasPalabras) === false){
       if(nuevasPalabras.length > 2 && nuevasPalabras.length < 9){
       
        arrayPalabras.push(nuevasPalabras);
        localStorage.setItem("palabras", JSON.stringify(localStorageArray))
       
       }else{
         mostrarError();
       }

    }else if(nuevasPalabras.length >= 9){
    mostrarError();
    } else if(nuevasPalabras.length <= 2){
    mostrarError();}
  else {
    mostrarError();
  }
  document.querySelector('#input_ingresar_palabras').value = '';
  }
  let palabrasArray = JSON.parse(localStorage.getItem('palabras'))
 //Iterar a traves del array
 //Obtener una palabra aleatoria dentro del localStorage
 //Separar la palabra obtenida letra por letra
 //Detectar coincidencias en las letras escritas en el juego y retornarlas,
 //agregar contador del numero de fallos

palabraAleatoria(palabrasArray)

 function palabraAleatoria(array){

  let crearGuiones = document.getElementById('contenedor_letras_de_palabra_aleatoria')
  crearGuiones.innerHTML = '';
  let numeroAMultiplicar = array.length;
  let randomIndex = Math.floor(Math.random() * numeroAMultiplicar);
  let palabraObtenida = array[randomIndex];
  let letrasDePalabras = palabraObtenida.split('')
  let P = document.getElementById('letra_a_adivinar_p')
  for(let letra of letrasDePalabras){
    crearGuiones.innerHTML += 
    `<span class="letra_a_adivinar"><p id="letra_a_adivinar_p" class="letra_a_adivinar_p">${letra}</p></span>`
    
  }

  compararPalabra.push(letrasDePalabras)
 }

//Botones
function cambiarJuegoIniciado(){
  if(boton_iniciar){
     boton_iniciar.className = 'boton_displayNone';
     boton_agregar.className = 'boton_displayNone';
     iniciarJuego.classList.toggle('contenedor_juegoActivo');
     agregarPalabra.classList.remove('contenedor__agregar_palabraActivo')
    } 
 

  }

function agregarPalabras(){
  if(boton_iniciar){
    boton_iniciar.className = 'boton_displayNone';
    boton_agregar.className = 'boton_displayNone';
    agregarPalabra.classList.toggle('contenedor__agregar_palabraActivo');
   } 
}

function volverAlInicio (){
    if(botonVolver){
      iniciarJuego.classList.toggle('contenedor_juegoActivo');
      boton_iniciar.classList.remove('boton_displayNone') ;
      boton_agregar.classList.remove('boton_displayNone');
      boton_iniciar.classList.add('boton', 'iniciar') ;
      boton_agregar.classList.add('boton', 'agregar');
    }
  }
function volverAlInicio2(){
  if(botonVolver2){   
    agregarPalabra.classList.toggle('contenedor__agregar_palabraActivo');
    boton_iniciar.classList.remove('boton_displayNone' );
      boton_agregar.classList.remove('boton_displayNone');
      boton_iniciar.classList.add('boton', 'iniciar') ;
      boton_agregar.classList.add('boton', 'agregar');
  }
}
const spanError = document.getElementById('mensaje_De_Alerta');
function mostrarError(){
  spanError.classList.remove('alerta_mensaje_desactivado');
  spanError.classList.add('alerta_mensaje');
}
function mostrarErrorAceptar(){
  spanError.classList.remove('alerta_mensaje');
  spanError.classList.add('alerta_mensaje_desactivado');
}
let counter = 0;
  let botonTeclado = document.getElementById('teclado_intercalable')
  botonTeclado.addEventListener('click',mostrarTeclado())
function mostrarTeclado(){
  let tecladoId = document.getElementById('contenedor_del_teclado')
  counter += 1;
 
    if(counter %2 === 0){
      tecladoId.classList.add('contenedor_contenedor_letras_teclado');
      tecladoId.classList.add('tecladoOp');
    }else{
      tecladoId.classList.remove('contenedor_contenedor_letras_teclado');
      tecladoId.classList.remove('tecladoOp');
    }
}

let counter2 = 0;
  let mail = document.getElementById('logo_Email');
  mail.addEventListener('click',clickSobreElmail());
function clickSobreElmail(){
  let contenedorMail = document.getElementById('contenedor_mail_mensaje')
  counter2 += 1; 
  
   if(counter2 %2 === 0){
      contenedorMail.classList.add('mail-activado');
    }else{
      contenedorMail.classList.remove('mail-activado');
    }

}

  //Juego
  const ctx = pantallaJuego.getContext('2d'); 
  ctx.fillStyle = 'rgba(88, 224, 236, 0)';
  ctx.fillRect(0,0,400,200); 
    
  function crearDibujoRect(x,y,a,l){
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, a, l)
  }
  function dibujarEscotilla(x,y,a,l,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, a, l)
  }


  
function dibujarCabeza(y){
  ctx.lineWidth = 1;
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  
  ctx.beginPath();
  //ctx.arc(x,y,radio, AI, AF, sentido(true || false));

  ctx.arc(150,30+y,10,0,2*Math.PI,true);

  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'orange';
}
function dibujarTorzo (y){
  crearDibujoRect(149, 40+y, 3, 35) 
}
function crearSoportePoste(){
  
  ctx.fillStyle = 'black';
  ctx.beginPath();

  ctx.moveTo(130,10);
  ctx.lineTo(100,10);
  ctx.lineTo(100,40);

  ctx.fill();

 ctx.fillStyle = 'rgba(143, 57, 25, 1';
 ctx.beginPath();
  ctx.moveTo(120,10);
  
  ctx.lineTo(100,10);
  ctx.lineTo(100,30);

  ctx.fill();
  
}
function dibujarCuerdaDoblada(){
  ctx.fillStyle = 'black'
  ctx.beginPath();
  ctx.moveTo(150,15);
  ctx.lineTo(145,40);
  ctx.lineTo(150,40);
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(150,40);
  ctx.lineTo(145,15);
  ctx.lineTo(150,15);
  ctx.fill();
  
  
}
function dibujarBrazoDerecho(y){
  ctx.fillStyle = 'black';
  
  ctx.beginPath();
  ctx.moveTo(150, 42+y);
  ctx.lineTo(170, 50+y);
  ctx.lineTo(170, 55+y);
  
  ctx.moveTo(170, 54+y);
  ctx.lineTo(150, 45+y);
  ctx.lineTo(150, 40+y);
  ctx.fill();

  
}
function dibujarBrazoIzquierdo(y){
  ctx.fillStyle = 'black';
  
  ctx.beginPath();
  ctx.moveTo(150, 42+y);
  ctx.lineTo(130, 50+y);
  ctx.lineTo(130, 55+y);
  
  ctx.moveTo(130, 54+y);
  ctx.lineTo(150, 45+y);
  ctx.lineTo(150, 40+y);
  ctx.fill();

  
}
function dibujarPiernaDerecha(y){
  ctx.fillStyle = 'black';
  
  ctx.beginPath();
  ctx.moveTo(160, 90+y);
  ctx.lineTo(152, 70+y);
  ctx.lineTo(148, 70+y);
   ctx.fill();
  
   ctx.beginPath();
  ctx.moveTo(150, 70+y);
  ctx.lineTo(160, 90+y);
  ctx.lineTo(165, 90+y);
   ctx.fill();
}
function dibujarPiernaIzquierda(y){
  ctx.fillStyle = 'black';
  
  ctx.beginPath();
  ctx.moveTo(139, 90+y);
  ctx.lineTo(149, 70+y);
  ctx.lineTo(152, 70+y);
   ctx.fill();

ctx.beginPath();
  ctx.moveTo(150, 74+y);
  ctx.lineTo(135, 90+y );
  ctx.lineTo(142, 90+y);
  ctx.fill();
} 


function dibujarBase(){
  crearDibujoRect(35, 120, 40, 5) 
  crearDibujoRect(25, 130, 50, 5) 
  crearDibujoRect(15, 140, 60, 5) 
  crearDibujoRect(230, 120, 40, 5) 
  crearDibujoRect(230, 130, 50, 5) 
  crearDibujoRect(230, 140, 60, 5) 
}

              /*Base*/ 
              dibujarBase();
crearDibujoRect(50, 110, 75, 5) 
crearDibujoRect(180, 110, 75, 5)
            /*Base escotilla*/
           
              /*Poste*/
crearSoportePoste();
crearDibujoRect(95, 10, 7, 100);
crearDibujoRect(100, 10, 50, 5); 

  //Dibujar Cuerda Doblada
 
    
        /* Personaje*/ 



        dibujarEscotilla(124,110,29,5,'black')
        dibujarEscotilla(153,110,29,5,'black')
