var idInterval=0;function crear()
{for(i=0;i<numDiapositivas;i++)
{if(i<10)var ix="0"+i;else var ix=i;var divDiapositiva=$("<div>",{id:"diapositiva"+ix,"class":"diapositivas"});$('#lienzo').append(divDiapositiva);for(j=0;j<numElementos[i];j++)
{var tipo=aElementos[i][j].getElementsByTagName("tipo")[0].childNodes[0].nodeValue;cargarElementos(tipo,i,ix,j);}}
asignarElementos();}
var rutasVideos=[];function cargarElementos(tipo,i,ix,j)
{if(tipo=="texto")
{var texto=aElementos[i][j].getElementsByTagName("texto")[0].childNodes[0].nodeValue;try{texto=he.decode(texto);}catch(e){}
var divTexto=$("<div>",{id:"texto"+ix});$(divTexto).html(texto);$("#diapositiva"+ix).append(divTexto);}
else if(tipo=="youtube")
{var video=aElementos[i][j].getElementsByTagName("idVideo")[0].childNodes[0].nodeValue;var rutaVideo="https://www.youtube.com/embed/"+video;rutasVideos[i]=rutaVideo;var cadenaVideo="<iframe id='iframe"+ix+"' class='iframes' type='text/html' src='"+rutaVideo+"' width='100%' height='200px'></iframe>";var divVideo=$("<div>",{id:"video"+ix});$(divVideo).html("<div class='contentVideo'>"+cadenaVideo+"</div>");$("#diapositiva"+ix).append(divVideo);}
else if(tipo=="audio")
{var audio=aElementos[i][j].getElementsByTagName("file")[0].childNodes[0].nodeValue;var divAudio=$("<div>",{id:"audio"+ix});var rutaAudio=rutaRecursos+audio;var rutaAudioOgg=rutaRecursosInicio+audio;pos=-Math.PI/2;posS=pos+salto;var cadena="<audio id='audioR"+ix+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+i+");' type='audio/ogg'></source></audio>";cadena+="<div class='groupPlayer' id='contenedorPlayer"+ix+"'>";cadena+="<div id='iconoAudio"+i+"' class='iPlayer pPlay'></div>";cadena+="<div class='playerEduca'></div>";cadena+="<canvas id='reproductor"+i+"' class='canvasPlayer' width='131' height='131'></canvas>";cadena+="<div class='bgPlayer'></div>";cadena+="</div>";cadena+="<div class='timeSound'><span id='tiempo"+i+"' class='infoTime'>00:00</span> | <span id='duracion"+i+"' class='infoTime'>00:00</span></div>";$(divAudio).html("<div class='contentAudio'>"+cadena+"</div>");$("#diapositiva"+ix).append(divAudio);$('#contenedorPlayer'+ix).click(function(){reproducir("audioR"+ix);});}
else
{var imagen=aElementos[i][j].getElementsByTagName("file")[0].childNodes[0].nodeValue;var titImagen="";if(aElementos[i][j].getElementsByTagName("titulo")[0]!=undefined)
{titImagen=aElementos[i][j].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;}
var divImagen=$("<div>",{id:"imagen"+ix});$("#diapositiva"+ix).append(divImagen);var rutaImagen=rutaRecursos+imagen;var cadenaImg="<div class='contentImagen'><img src='"+rutaImagen+"'></div>";$("#imagen"+ix).html(cadenaImg);if(titImagen!="")
{var divTitImagen=$("<div>",{id:"titImagen"+ix,"class":"pieFoto"});try{titImagen=he.decode(titImagen);}catch(e){}
$(divTitImagen).html(titImagen);$("#imagen"+ix).append(divTitImagen);}}}
function asignarElementos()
{for(i=0;i<numDiapositivas;i++)
{if(i<10)var ix="0"+i;else var ix=i;if(numElementos[i]==1)
{var tipo=aElementos[i][0].getElementsByTagName("tipo")[0].childNodes[0].nodeValue;if(tipo=="texto")$("#texto"+ix).addClass("celda completa");if(tipo=="imagen")$("#imagen"+ix).addClass("celda completa");if(tipo=="youtube")$("#video"+ix).addClass("celda completa");}
else if(numElementos[i]==2)
{var tipo1=aElementos[i][0].getElementsByTagName("tipo")[0].childNodes[0].nodeValue;var tipo2=aElementos[i][1].getElementsByTagName("tipo")[0].childNodes[0].nodeValue;if((tipo1=="youtube")&&(tipo2=="texto"))
{$("#video"+ix).addClass("celda secundario");$("#texto"+ix).addClass("celda principal");}
else if((tipo1=="texto")&&(tipo2=="youtube"))
{$("#texto"+ix).addClass("celda principal");$("#video"+ix).addClass("celda secundario");}
else if((tipo1=="imagenIzquierda")&&(tipo2=="texto"))
{$("#imagen"+ix).addClass("celda secundario");$("#texto"+ix).addClass("celda principal");}
else if((tipo1=="texto")&&(tipo2=="imagenIzquierda"))
{$("#texto"+ix).addClass("celda principal");$("#imagen"+ix).addClass("celda secundario");}
else if((tipo1=="audio")&&(tipo2=="texto"))
{$("#audio"+ix).addClass("celda secundario");$("#texto"+ix).addClass("celda principal");}
else if((tipo1=="texto")&&(tipo2=="audio"))
{$("#texto"+ix).addClass("celda principal");$("#audio"+ix).addClass("celda secundario");}}}
asignarEventos();}
function asignarEventos()
{if(navegacion!="superior")
{for(i=0;i<numDiapositivas;i++)
{if(i<10)var ix="0"+i;else var ix=i;$("#btn"+ix).click(cambiarDiapositiva);}}
else
{$("#btn00").click(cambiarDiapositiva);}
if(navegacion!="inferior")
{$("#btnAtras").click(function(e){e.preventDefault();cambiarDiapositiva("AT")});$("#btnAdelante").click(function(e){e.preventDefault();cambiarDiapositiva("AD")});}};function extraerDatos()
{tipo_actividad="Presentacion";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
try{botonReinicio=xmlDoc.getElementsByTagName("boton_reiniciar")[0].childNodes[0].nodeValue;}catch(e){botonReinicio='visible';}
try{colorFuente=xmlDoc.getElementsByTagName("color_fuente")[0].childNodes[0].nodeValue;colorFuenteB=xmlDoc.getElementsByTagName("color_fuente_b")[0].childNodes[0].nodeValue;colorFuenteInt=colorFuente.substring(2,colorFuente.length);colorFuente="#"+colorFuente.substring(2,colorFuente.length);colorFuenteB="#"+colorFuenteB.substring(2,colorFuenteB.length);}catch(e){colorFuente="#FFFFFF";colorFuenteB="#111111";}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
try{franjaPersonalizada=xmlDoc.getElementsByTagName("franjaPersonalizada")[0].childNodes[0].nodeValue;}catch(e){franjaPersonalizada="";}
sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";sensible_mayusculas_ocultar="si";sensible_acentos_ocultar="si";tiempo=0;numero_intentos=0;if(xmlDoc.getElementsByTagName("autor")[0].childNodes.length==0){autor='';}else{autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;}
descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];if(xmlDoc.getElementsByTagName("navegacion")[0].childNodes[0]!=undefined)
{navegacion=xmlDoc.getElementsByTagName("navegacion")[0].childNodes[0].nodeValue;}
else
{navegacion="ambos";}
descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("titulo")[0].childNodes[0].nodeValue;diapositivas=xmlDoc.getElementsByTagName("diapositiva");numDiapositivas=diapositivas.length;titulos=[];numElementos=[];aElementos=[];for(i=0;i<numDiapositivas;i++)
{titulos[i]=diapositivas[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;contenido=diapositivas[i].getElementsByTagName("contenido")[0];numElementos[i]=contenido.getElementsByTagName("elemento").length;elementos=[];for(j=0;j<numElementos[i];j++)
{elementos[j]=contenido.getElementsByTagName("elemento")[j];}
aElementos[i]=elementos;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTituloErrorAudio=idioma.getElementsByTagName("txtTituloErrorAudio")[0].childNodes[0].nodeValue;txtErrorAudio=idioma.getElementsByTagName("txtErrorAudioSoportado")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtSocial=idioma.getElementsByTagName("txtSocial")[0].childNodes[0].nodeValue;txtPuntos="";txtTiempo="";txtSensible="";txtMayusculasMinusculas="";txtAcentos="";txtBoxRespuestaCorrecta="";txtReiniciar="";txtVolverJugar="";txtRegistrarse="";txtAcceder="";txtCompartirResultado="";txtImprimir="";}
function inicializarElementos()
{inicializarColores();$(".boxIndicadores").hide();inicializarEventosPrincipales()
inicializarPantallaInicial();inicializarParametros();inicializarTituloAct();inicializarNavegacion();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});}
function inicializarNavegacion()
{var divPaginadorFooter=$("<div>",{id:"divPie","class":"footer"});$(divPaginadorFooter).html("<span id='indicador' class='numPagIndicador'></span>");var divPaginador=$("<div>",{id:"botones","class":"paginador"});if(numDiapositivas*30<$("#scroller").width()-250)
{var listaPaginador=$("<ul>");for(i=0;i<numDiapositivas;i++)
{if(i<10)var ix="0"+i;else var ix=i;$(listaPaginador).html($(listaPaginador).html()+"<li><a href='#' id='btn"+ix+"'></a></li>");}
$(divPaginador).append(listaPaginador);}
else
{$(divPaginador).addClass("pagReducido");var cadenaRed="<a href='#' id='pAnterior' class='btnPag prevPag'></a>";cadenaRed+="<input name='textfield' type='text' id='textfield' value='1'>";cadenaRed+="<span class='numTotalPaginas'>/ "+numDiapositivas+"</span>";cadenaRed+="<a href='#' id='pSiguiente' class='btnPag nextPag'></a>";$(divPaginador).html(cadenaRed);}
$(divPaginadorFooter).append(divPaginador);$("#footAct").append(divPaginadorFooter);if(numDiapositivas*30>=$("#scroller").width()-250)
{if(navegacion!="superior")$("#indicador").hide();$("#pAnterior").click(function(e){e.preventDefault();cambiarDiapositiva("AT")});$("#pSiguiente").click(function(e){e.preventDefault();cambiarDiapositiva("AD")});$("#textfield").keydown(gestionaIntro);}
if(navegacion=="superior")
{$("#botones").hide();}
if(navegacion=="inferior")
{$("#btnsNavegacion").hide();$("#contentAct").addClass("sinBotones");}};function comenzar()
{$('#contentPreActividad').hide();$('#contentAct').css('top',0);if(numDiapositivas*30<$("#scroller").width()-250)
{$("#btn00").click();}
else
{$(".diapositivas").hide();$("#diapositiva00").show();if(navegacion=="superior")$("#indicador").html((numBtn+1)+"<sup>"+numDiapositivas+"</sup>");}
idInterval=setInterval(contador,1000);}
function redimensionar()
{$("#botones").html("");if(numDiapositivas*30<$("#scroller").width()-250)
{$("#botones").removeClass("pagReducido");var listaPaginador=$("<ul>");for(i=0;i<numDiapositivas;i++)
{if(i<10)var ix="0"+i;else var ix=i;$(listaPaginador).html($(listaPaginador).html()+"<li><a href='#' id='btn"+ix+"'></a></li>");}
$("#botones").append(listaPaginador);}
else
{$("#botones").addClass("pagReducido");var cadenaRed="<a href='#' id='pAnterior' class='btnPag prevPag'></a>";cadenaRed+="<input name='textfield' type='text' id='textfield' value='"+(numBtn+1)+"'>";cadenaRed+="<span class='numTotalPaginas'>/ "+numDiapositivas+"</span>";cadenaRed+="<a href='#' id='pSiguiente' class='btnPag nextPag'></a>";$("#botones").html(cadenaRed);}
if(numDiapositivas*30>=$("#scroller").width()-250)
{if(navegacion!="superior")$("#indicador").hide();$("#pAnterior").click(function(e){e.preventDefault();cambiarDiapositiva("AT")});$("#pSiguiente").click(function(e){e.preventDefault();cambiarDiapositiva("AD")});$("#textfield").keydown(gestionaIntro);}
else
{$("#indicador").show();$("#btn"+cadenaBtn).addClass("btnActivo");for(i=0;i<numDiapositivas;i++)
{if(i<10)var ix="0"+i;else var ix=i;$("#btn"+ix).click(cambiarDiapositiva);}}
cargarDescripcionInicio();}
function reproducir(media)
{var numElemento=parseInt(media.substring(6,8),10);if($('#iconoAudio'+numElemento).hasClass("pPlay"))
{document.getElementById(media).play();$('#iconoAudio'+numElemento).removeClass("pPlay");$('#iconoAudio'+numElemento).addClass("pPause");controlDuracion(media);}
else
{$('#iconoAudio'+numElemento).removeClass("pPause");$('#iconoAudio'+numElemento).addClass("pPlay");document.getElementById(media).pause();clearTimeout(timeoutCanvas);}}
function controlTiempo(media)
{var numElemento=parseInt(media.substring(6,8),10);var audio=document.getElementById(media);var seg=audio.currentTime;var h=Math.floor(seg/3600);seg=seg%3600;var min=Math.floor(seg/60);seg=Math.floor(seg%60);if(seg.toString().length<2)seg="0"+seg;if(min.toString().length<2)min="0"+min;document.getElementById('tiempo'+numElemento).innerHTML=min+":"+seg;if(!audio.ended)
{setTimeout(function(){controlTiempo(media);},1000);}
else
{pos=-Math.PI/2;posS=pos+salto;$('#iconoAudio'+numElemento).removeClass('pPause');$('#iconoAudio'+numElemento).addClass('pPlay');var miLienzo=document.getElementById('reproductor'+numElemento);var lienzo=miLienzo.getContext('2d');lienzo.clearRect(0,0,240,240);clearTimeout(timeoutCanvas);document.getElementById('tiempo'+numElemento).innerHTML="00:00";try{audio.currentTime=0;}catch(e){}
audio.pause();if(audio.currentTime!=0)document.getElementById(media).load();}}
function controlDuracion(media)
{var numElemento=parseInt(media.substring(6,8),10);var audio=document.getElementById(media);if(!isNaN(audio.duration))
{duracion=audio.duration;var seg=audio.duration;var h=Math.floor(seg/3600);seg=seg%3600;var min=Math.floor(seg/60);seg=Math.floor(seg%60);if(seg.toString().length<2)seg="0"+seg;if(min.toString().length<2)min="0"+min;if(isNaN(min))document.getElementById('duracion'+numElemento).innerHTML="--:--";else document.getElementById('duracion'+numElemento).innerHTML=min+":"+seg;controlTiempo(media);actualizarReproductor(numElemento);}
else
{setTimeout(function(){controlDuracion(media);},50);}}
var salto=2*Math.PI/100;var pos=-Math.PI/2;var posS=pos+salto;var timeoutCanvas=0;function actualizarReproductor(numElemento)
{tiempoSalto=duracion/100*1000;var miLienzo=document.getElementById('reproductor'+numElemento);var lienzo=miLienzo.getContext('2d');lienzo.beginPath();lienzo.strokeStyle='#99CC33';lienzo.lineCap='round';lienzo.shadowOffsetX=0;lienzo.shadowOffsetY=0;lienzo.shadowBlur=10;lienzo.shadowColor="rgba(153, 204, 51, 0.6)";lienzo.lineWidth=10.0;lienzo.arc(65,65,60,pos,posS,false);lienzo.stroke();pos=posS;posS=posS+salto;if(posS<=3*Math.PI/2)
{timeoutCanvas=setTimeout(function(){actualizarReproductor(numElemento)},tiempoSalto);}
else
{pos=-Math.PI/2;posS=pos+salto;}}
function errores(numero)
{var mensajeError="<div class='message mError'>";mensajeError+="<div class='titMessage'></div>";mensajeError+="<div class='descMessage'></div>";mensajeError+="<div class='iMessage'></div>";mensajeError+="</div>";if(numero<10)numerox="0"+numero;else numerox=numero;$("#audio"+numerox).html(mensajeError);$('.titMessage').text(txtTituloErrorAudio);$('.descMessage').text(txtErrorAudio);}
var finalAplicacion=0;var numBtn=0;var numBtnAnterior=0;var cadenaBtn="00";function cambiarDiapositiva(e)
{numBtnAnterior=numBtn;if((e=="AD")||(e=="AT"))
{if(e=="AD")
{if(numBtn<numDiapositivas-1)
{numBtn++;if(numBtn<10)cadenaBtn="0"+numBtn;else cadenaBtn=numBtn;}}
else
{if(numBtn>0)
{numBtn--;if(numBtn<10)cadenaBtn="0"+numBtn;else cadenaBtn=numBtn;}}}
else if(e=="input")
{numBtn=numeroInput;if(numBtn<10)cadenaBtn="0"+numBtn;else cadenaBtn=numBtn;}
else
{e.preventDefault();var btnId=e.target.getAttribute('id');cadenaBtn=btnId.substring(3,5);numBtn=parseInt(cadenaBtn,10);}
$("#footAct .btnActivo").removeClass("btnActivo");$("#btn"+cadenaBtn).addClass("btnActivo");if(navigator.userAgent.toLowerCase().indexOf('safari/')>-1)
{$(".iframes").attr("src","");$("#iframe"+cadenaBtn).attr("src",rutasVideos[numBtn]);}
$(".diapositivas").hide();$("#diapositiva"+cadenaBtn).show();$("#indicador").html((numBtn+1)+"<sup>"+numDiapositivas+"</sup>");$("#numDiap").html((numBtn+1)+".");$("#tituloDiap").html(titulos[numBtn]);if(numDiapositivas*30>=$("#scroller").width()-250)
{$("#textfield").val((numBtn+1));}
if((numBtn==numDiapositivas-1)&&(finalAplicacion==0))finalAplicacion=1;if(finalAplicacion==1){registraAplicacion();finalAplicacion=-1;}
pararAudio();reconponerVideo();}
var numeroInput=0;function gestionaIntro(e)
{var evento=e||window.e;if(evento.keyCode==13)
{var valor=parseInt($("#textfield").val());if((valor<numDiapositivas)&&(valor>=1))valor=valor;else if(valor>numDiapositivas)valor=numDiapositivas;else if(valor<=0)valor=1;else valor=1;numeroInput=valor-1;cambiarDiapositiva("input");}}
function pararAudio()
{for(k=0;k<numDiapositivas;k++)
{if(k<10)var kx="0"+k;else var kx=k;var audio=document.getElementById("audioR"+kx);if(audio!=null)
{var miLienzo=document.getElementById('reproductor'+k);var lienzo=miLienzo.getContext('2d');lienzo.clearRect(0,0,240,240);clearTimeout(timeoutCanvas);pos=-Math.PI/2;posS=pos+salto;$('#iconoAudio'+k).removeClass('pPause');$('#iconoAudio'+k).addClass('pPlay');audio.pause();audio.currentTime=0;if(audio.currentTime!=0)audio.load();}}}
function reconponerVideo()
{if(rutasVideos[numBtnAnterior]!=undefined)
{if(numBtnAnterior<10)cadenaBtnAnterior="0"+numBtnAnterior;else cadenaBtnAnterior=numBtnAnterior;$("#iframe"+cadenaBtnAnterior).attr("src","");$("#iframe"+cadenaBtnAnterior).attr("src",rutasVideos[numBtnAnterior]);}}
function registraAplicacion()
{finalizado=1;finOK=1;clearInterval(idInterval);setRegistroPuntuacion("100");var tiempoFinal=$("#numTiempo").html();for(i=0;i<tiempoFinal.length;i++)
{if(tiempoFinal.charAt(i)==":")
{posicion=i;break;}}
var minutos=parseInt(tiempoFinal.substring(0,posicion),10);var segundos=parseInt(tiempoFinal.substring(posicion+1,posicion+3),10);tiempoFinal=segundos+minutos*60;setRegistroTiempo(tiempoFinal);finalizar();}