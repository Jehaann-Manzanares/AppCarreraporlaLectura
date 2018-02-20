var demostracion=1;var idInterval=0;function crear()
{miLienzo=$('#lienzo');img=new Image();img.src=rutaRecursos+imagen;img.id="imagenPrincipal";img.onload=function(){imagenAncho=img.width;imagenAlto=img.height;var divImagen=$("<div>",{id:"divImagen"});miLienzo.append(divImagen);$("#divImagen").append(img);if(((forma_juego=="ambos")||(forma_juego=="demostracion"))&&(demostracion==1))demostracion=1;else demostracion=0;if(demostracion==1)cargarPresentacion();else{$('#btnsPresentacion').hide();$('#btnsPresentacion2').hide();$('#footAct').removeClass('screemAprender');cargarJuego();}}}
function cargarJuego()
{for(i=0;i<re.length;i++)
{if(i<10)ix="00"+i;else if(i<100)ix="0"+i;else ix=i;var pxt=coordenadaX[i];var pyt=coordenadaY[i];if($("#imagenPrincipal").height()>$("#wrapper").height())
{$("#imagenPrincipal").css("height",$("#wrapper").height());$("#imagenPrincipal").css("width","auto");$("#divImagen").css("width",$("#imagenPrincipal").width());$("#divImagen").css("height",$("#imagenPrincipal").height());$("#divImagen").css("margin","auto");$("#scroller").css("width",$("#imagenPrincipal").width());$("#scroller").css("height",$("#imagenPrincipal").height());$("#scroller").css("margin","auto");}
var porceX=pxt*100/imagenAncho;var porceY=pyt*100/imagenAlto;var pxtp=porceX+"%";var pytp=porceY+"%";var divPunto=$("<div>",{id:"marker"+ix,"class":"marker",css:{"left":pxtp,"top":pytp}});$("#divImagen").append(divPunto);var divSolucion=$("<div>",{id:"solucion"+ix});$("#marker"+ix).append(divSolucion);}
$('#scroller').addClass('unselectable');$(".marker").click(gestionarPalabra);$("#numPuntos").text("0");if(forma_juego!="juego")
{idInterval=setInterval(contador,1000);}}
function cargarPresentacion()
{for(i=0;i<re.length;i++)
{if(i<10)ix="00"+i;else if(i<100)ix="0"+i;else ix=i;var pxt=coordenadaX[i];var pyt=coordenadaY[i];if($("#imagenPrincipal").height()>$("#wrapper").height())
{$("#imagenPrincipal").css("height",$("#wrapper").height());$("#imagenPrincipal").css("width","auto");$("#divImagen").css("width",$("#imagenPrincipal").width());$("#divImagen").css("height",$("#imagenPrincipal").height());$("#divImagen").css("margin","auto");$("#scroller").css("width",$("#imagenPrincipal").width());$("#scroller").css("height",$("#imagenPrincipal").height());$("#scroller").css("margin","auto");}
if(forma_presentacion=="secuencia")
{var clasePresentacion="marker mAprender";}
else if(forma_presentacion=="libre")
{var clasePresentacion="marker mDescubrir";}
var porceX=pxt*100/imagenAncho;var porceY=pyt*100/imagenAlto;var pxtp=porceX+"%";var pytp=porceY+"%";var divPunto=$("<div>",{id:"marker"+ix,"class":clasePresentacion,css:{"left":pxtp,"top":pytp}});$("#divImagen").append(divPunto);var divSolucion=$("<div>",{id:"solucion"+ix,"class":"soluciones"});if(globalFeedback==1)
{if(fe[i]!=undefined)
{divSolucion.html("<div class='hid'><div class='titTooltip'>"+re[i]+"</div><div class='txtTooltip'>"+fe[i]+"</div></div>");}
else
{divSolucion.html("<div class='hid'><div class='titTooltip'>"+re[i]+"</div></div>");}}
else
{divSolucion.html("<div class='hid'><div class='titTooltip'>"+re[i]+"</div></div>");}
$("#marker"+ix).append(divSolucion);if(forma_presentacion=="secuencia")
{var divNumerito=$("<div>",{id:"numerito"+ix,"class":"numMapaRespuesta"});$(divNumerito).text(i+1);$("#marker"+ix).append(divNumerito);}
var anchuraTooltip=118;var alturaTooltip=$("#wrapper").height()/2;var coX=parseInt($("#marker"+ix).css("left"),10);var coY=parseInt($("#marker"+ix).css("top"),10);claseCS="tooltip arriba centro";if((coX<anchuraTooltip)&&(coY<alturaTooltip))claseCS="tooltip abajo derecha";else if((coX<anchuraTooltip)&&(coY>alturaTooltip))claseCS="tooltip arriba derecha";else if((coX>$("#scroller").width()-anchuraTooltip)&&(coY<alturaTooltip))claseCS="tooltip abajo izquierda";else if((coX>$("#scroller").width()-anchuraTooltip)&&(coY>alturaTooltip))claseCS="tooltip arriba izquierda";else if(coY<alturaTooltip)claseCS="tooltip abajo centro";$("#solucion"+ix).addClass(claseCS);if(globalFeedback==1)
{if(fe[i]!=undefined)
{$("#solucion"+ix).addClass("bTooltip");}}}
$('#scroller').addClass('unselectable');$("#numPuntos").text("0");$("#pistaPalabra").hide();$("#btnAudio").hide();if(forma_presentacion=="secuencia")
{$('.marker').hide();$('#numPag').html(0+" ");$('#numPagT').html("/ "+re.length);$("#txtBtnAtras").text(txtAnterior);$("#txtBtnAdelante").text(txtSiguiente);$("#btnsPresentacion2").hide();$("#btnComenzarAprender").text(txtJugar);$("#btnAdelante").click(function(){gestionPresentacion('adelante');});}
else if(forma_presentacion=="libre")
{$("#btnsPresentacion").hide();$(".marker").click(gestionPresentacionClick);if(forma_juego=="demostracion")
{$("#btnSeguir").text(txtFinalizar);$("#btnSeguir").click(function(e){e.preventDefault();pantallaFinalSinJuego();});}
else
{$("#btnSeguir").text(txtJugar);$("#btnSeguir").click(function(e){e.preventDefault();finalPresentacionClick();});}}};function extraerDatos()
{tipo_actividad="Mapa";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
try{botonReinicio=xmlDoc.getElementsByTagName("boton_reiniciar")[0].childNodes[0].nodeValue;}catch(e){botonReinicio='visible';}
try{colorFuente=xmlDoc.getElementsByTagName("color_fuente")[0].childNodes[0].nodeValue;colorFuenteB=xmlDoc.getElementsByTagName("color_fuente_b")[0].childNodes[0].nodeValue;colorFuenteInt=colorFuente.substring(2,colorFuente.length);colorFuente="#"+colorFuente.substring(2,colorFuente.length);colorFuenteB="#"+colorFuenteB.substring(2,colorFuenteB.length);}catch(e){colorFuente="#FFFFFF";colorFuenteB="#111111";}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
try{franjaPersonalizada=xmlDoc.getElementsByTagName("franjaPersonalizada")[0].childNodes[0].nodeValue;}catch(e){franjaPersonalizada="";}
forma_completar=xmlDoc.getElementsByTagName("forma_completar")[0].childNodes[0].nodeValue;forma_juego=xmlDoc.getElementsByTagName("forma_juego")[0].childNodes[0].nodeValue;forma_presentacion=xmlDoc.getElementsByTagName("forma_presentacion")[0].childNodes[0].nodeValue;if((forma_completar=="escribir")&&(forma_juego!="demostracion"))
{sensible_mayusculas=xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0].nodeValue;sensible_acentos=xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0].nodeValue;if(xmlDoc.getElementsByTagName("sensible_mayusculas_ocultar")[0].childNodes[0]!=undefined)
{sensible_mayusculas_ocultar=xmlDoc.getElementsByTagName("sensible_mayusculas_ocultar")[0].childNodes[0].nodeValue;}
else
{sensible_mayusculas_ocultar="no";}
if(xmlDoc.getElementsByTagName("sensible_acentos_ocultar")[0].childNodes[0]!=undefined)
{sensible_acentos_ocultar=xmlDoc.getElementsByTagName("sensible_acentos_ocultar")[0].childNodes[0].nodeValue;}
else
{sensible_acentos_ocultar="no";}}
else
{sensible_mayusculas_ocultar="si";sensible_acentos_ocultar="si";sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";}
numero_intentos=xmlDoc.getElementsByTagName("numero_intentos")[0].childNodes[0].nodeValue;globalFeedback=xmlDoc.getElementsByTagName("globalFeedback")[0].childNodes[0].nodeValue;if(xmlDoc.getElementsByTagName("autor")[0].childNodes.length==0){autor='';}else{autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;}
descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;imagen=xmlDoc.getElementsByTagName("imagen")[0].childNodes[0].nodeValue;var idioma=xmlDoc.getElementsByTagName("idioma")[0];instrucciones=idioma.getElementsByTagName("txtTitulo")[0].childNodes[0].nodeValue;nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;txtMostrarPalabra=idioma.getElementsByTagName("txtMostrarPalabra")[0].childNodes[0].nodeValue;pista=idioma.getElementsByTagName("pista")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtActNoSuperada=idioma.getElementsByTagName("txtActNoSuperada")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtRespuestaCorrecta=idioma.getElementsByTagName("txtRespuestaCorrecta")[0].childNodes[0].nodeValue;txtOtrasRespuestas=idioma.getElementsByTagName("txtOtrasRespuestas")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtRespuestaCorrecta=idioma.getElementsByTagName("txtRespuestaCorrecta")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtTituloOtrasRespuestas=idioma.getElementsByTagName("txtTituloOtrasRespuestas")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtInicioPreguntas=idioma.getElementsByTagName("txtInicioPreguntas")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtSensibleMayusculas=idioma.getElementsByTagName("txtSensibleMayusculas")[0].childNodes[0].nodeValue;txtNoSensibleMayusculas=idioma.getElementsByTagName("txtNoSensibleMayusculas")[0].childNodes[0].nodeValue;txtSensibleAcentos=idioma.getElementsByTagName("txtSensibleAcentos")[0].childNodes[0].nodeValue;txtNoSensibleAcentos=idioma.getElementsByTagName("txtNoSensibleAcentos")[0].childNodes[0].nodeValue;txtErrorImagen=idioma.getElementsByTagName("txtErrorAudioSoportado")[0].childNodes[0].nodeValue;txtActividadNoSuperada=idioma.getElementsByTagName("txtActividadNoSuperada")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtResponder=idioma.getElementsByTagName("txtResponder")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtAumentar=idioma.getElementsByTagName("txtAumentar")[0].childNodes[0].nodeValue;txtReducir=idioma.getElementsByTagName("txtReducir")[0].childNodes[0].nodeValue;txtImprimir=idioma.getElementsByTagName("txtImprimir")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtAnterior=idioma.getElementsByTagName("txtAnterior")[0].childNodes[0].nodeValue;txtSiguiente=idioma.getElementsByTagName("txtSiguiente")[0].childNodes[0].nodeValue;txtJugar=idioma.getElementsByTagName("txtJugar")[0].childNodes[0].nodeValue;txtFinalizar=idioma.getElementsByTagName("txtFinalizar")[0].childNodes[0].nodeValue;txtInfoAdicional=idioma.getElementsByTagName("txtInfoAdicional")[0].childNodes[0].nodeValue;txtSocial=idioma.getElementsByTagName("txtSocial")[0].childNodes[0].nodeValue;re=[];au=[];fe=[];coordenadaX=[];coordenadaY=[];respuestaNum=xmlDoc.getElementsByTagName("respuesta");for(var i=0;i<respuestaNum.length;i++)
{re[i]=respuestaNum[i].childNodes[0].nodeValue;re[i]=re[i].replace('&lt;','<');re[i]=re[i].replace('&gt;','>');re[i]=re[i].replace('&amp;','&');coordenadaX[i]=respuestaNum[i].attributes.getNamedItem("x").value;coordenadaY[i]=respuestaNum[i].attributes.getNamedItem("y").value;au[i]=respuestaNum[i].attributes.getNamedItem("audio").value;if(au[i]=="")au[i]="no";if(globalFeedback==1)
{if(respuestaNum[i].attributes.getNamedItem("feedback").value!="")
{fe[i]=respuestaNum[i].attributes.getNamedItem("feedback").value;fe[i]=libLinkCreator(fe[i],{target:'_blank',linkReplace:''});}}}}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarPista();inicializarParametros();inicializarTituloAct();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarZoom();inicializarRegistro();setTimeout(function(){inicializarSonidos();},2000);}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar("redi");});if(forma_completar=="clickar")
{$("#wrapper").mousemove(function(e){if(e.pageY<155){$("#pistaPalabra").addClass("pistaBottom");}else{$("#pistaPalabra").removeClass("pistaBottom");}});$("#pistaPalabra").click(function(){if($("#pistaPalabra").hasClass("pistaBottom")){$("#pistaPalabra").removeClass("pistaBottom");}else{$("#pistaPalabra").addClass("pistaBottom");}});}}
function inicializarPista()
{if(forma_completar=="clickar")
{$('#textoPistaPalabra').text(txtInicioPreguntas);}
else if(forma_completar=="escribir")
{$('#btnAudio').hide();$("#pistaPalabra").hide();$("#btnComprueba").attr("value",txtAceptar);$("#shadowMap").click(function(){$("#campoEscribir").val("");cerrarPantallaEscribir();$("#marker"+cadenaPalabraActiva).bind("click",gestionarPalabra);});}}
function inicializarSonidos()
{var rutaAudio="snd_html5/bien.mp3";$('#sonidos').html("<audio id='audioBien'><source src='"+rutaAudio+"'><source src='"+rutaAudio.substring(0,15)+".wav'></audio>");rutaAudio="snd_html5/mal.mp3";$('#sonidos').html($('#sonidos').html()+"<audio id='audioMal'><source src='"+rutaAudio+"'><source src='"+rutaAudio.substring(0,14)+".wav'></audio>");};function inicializarVariablesXapi(){}
function inicializarCorregir(){}
function inicializarXapi(){}
function completarXapi(tipoFinal){}
function abandonarXapi(){}
function responderUnicaXapi(testcorrecta,respuesta,testrespondida,exito){}
function responderMultipleXAPI(correcta,respuesta,testrespondida,exito){}
function responderEscritaXapi(correcta,testrespondida,exito){}
function pulsar(sentido){var origen="";if(sentido=="siguiente"){origen="#btnAdelante"}
else{origen="#btnAtras"}
$(origen).click(function(e){e.preventDefault();if(sentido=="siguiente"){cambiarPregunta("AD");}
else{cambiarPregunta("AT");}});}
function pulsarRadio(){}
function pulsarEscribir(e){}
function pulsarReproducir(e){}
function desmarcarCheck(){}
function marcarCheck(){};var controlPresentacion=0;function gestionPresentacion(accion)
{redimensionar('encaja');if(accion=="inicio")
{$("#btnAtras").addClass('disable');}
else if(accion=="atras")
{controlPresentacion--;if(controlPresentacion==0){$("#btnAtras").unbind("click");$("#btnAtras").addClass('disable');}
if(controlPresentacion==re.length-1)
{$("#comenzarScreemAprender").hide();$(".shadowMap").hide();$("#btnComenzarAprender").unbind('click');$("#btnAdelante").click(function(){gestionPresentacion('adelante');});$("#btnAdelante").removeClass("disable");}}
else if(accion=="adelante")
{controlPresentacion++;if(controlPresentacion==1){$("#btnAtras").click(function(){gestionPresentacion('atras');});$("#btnAtras").removeClass('disable');}
if(controlPresentacion==re.length)
{$("#btnAdelante").unbind("click");$("#btnAdelante").addClass("disable");$("#comenzarScreemAprender").show();$(".shadowMap").show();if(forma_juego=="demostracion")
{$("#btnComenzarAprender").text(txtFinalizar);$("#btnComenzarAprender").click(function(e){e.preventDefault();pantallaFinalSinJuego();});}
else
{$("#btnComenzarAprender").click(function(e){e.preventDefault();gestionPresentacion('jugar');});}}}
else if(accion=="jugar")
{if(document.getElementById('pistaAudio')!=null)document.getElementById('pistaAudio').pause();$("#comenzarScreemAprender").hide();$(".shadowMap").hide();var cadena="";cadena+="<div id='pistaPalabra'>";cadena+="<div id='textoPistaPalabra'></div>";cadena+="<div id='valorPistaPalabra'></div>";cadena+="<div id='audioPistaPalabra'></div>";cadena+="</div>";cadena+="<div id='wrapper'>";cadena+="<div id='scroller'>";cadena+="<div class='btnComenzar' id='comenzarScreemAprender'>";cadena+="<a href='#' class='btn btn-large btn-primary' id='btnComenzarAprender'></a>";cadena+="</div>";cadena+="<div id='cuadroEscribir' class='cuadroEscribir'>";cadena+="<input type='text' id='campoEscribir'>";cadena+="<input type='button' id='btnComprueba' class='btn btn-mini'>";cadena+="<div class='clear'></div>";cadena+="</div>";cadena+="<div id='lienzo'></div>";cadena+="<div class='shadowMap' id='shadowMap'></div>";cadena+="</div>";cadena+="</div>";$('#main').html(cadena);inicializarEventosPrincipales();inicializarPista();demostracion=0;$(document).unbind("keyup");$("#pistaAudio").remove();if(forma_completar=="clickar")
{$("#pistaPalabra").show();$("#btnAudio").show();cambiarPalabra();}
crear();comenzar();clearInterval(compruebaFin);}
if(accion!="jugar")
{var indicador=controlPresentacion+1;if(indicador>re.length)indicador=re.length;$('#numPag').html(indicador+" ");if(controlPresentacion<10)cx="00"+controlPresentacion;else if(controlPresentacion<100)cx="0"+controlPresentacion;else cx=controlPresentacion;$('.marker').hide();$('#marker'+cx).show();if((au[controlPresentacion]!="no")&&(au[controlPresentacion]!=undefined))
{if(document.getElementById('pistaAudio')!=null)document.getElementById('pistaAudio').pause();$('#audioPistaPalabra').html("");$('#btnAudio').unbind("click");var rutaAudio=rutaRecursos+au[controlPresentacion];var rutaAudioOgg=rutaRecursosInicio+au[controlPresentacion];var audioCadena="<audio id='pistaAudio'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores(-1);' type='audio/ogg'></source></audio>";$('#audioPistaPalabra').html(audioCadena);$('#btnAudio').show();$('#btnAudio').click(function(e){e.preventDefault();gestionReproducir("pistaAudio","iconoAudio");});reproducir("pistaAudio","iconoAudio");}
else
{$('#btnAudio').hide();if(document.getElementById('pistaAudio')!=null)document.getElementById('pistaAudio').pause();}}}
function gestionPresentacionClick(e)
{var id=e.target.getAttribute("id");var cadenaNumMarker=id.substring(6,9);var numMarker=parseInt(id.substring(6,9),10);if(!$("#marker"+cadenaNumMarker).hasClass("mostrarTooltip"))
{$(".marker").removeClass("mostrarTooltip");$("#marker"+cadenaNumMarker).addClass("mostrarTooltip");if((au[numMarker]!="no")&&(au[numMarker]!=undefined))
{if(document.getElementById('pistaAudio')!=null)document.getElementById('pistaAudio').pause();$('#audioPistaPalabra').html("");$('#btnAudio').unbind("click");var rutaAudio=rutaRecursos+au[numMarker];var rutaAudioOgg=rutaRecursosInicio+au[numMarker];var audioCadena="<audio id='pistaAudio'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores(-1);' type='audio/ogg'></source></audio>";$('#audioPistaPalabra').html(audioCadena);$('#btnAudio').show();$('#btnAudio').click(function(e){e.preventDefault();gestionReproducir("pistaAudio","iconoAudio");});reproducir("pistaAudio","iconoAudio");}
else
{$('#btnAudio').hide();if(document.getElementById('pistaAudio')!=null)document.getElementById('pistaAudio').pause();}}
else
{$("#marker"+cadenaNumMarker).removeClass("mostrarTooltip");$('#btnAudio').hide();if(document.getElementById('pistaAudio')!=null)document.getElementById('pistaAudio').pause();}}
function finalPresentacionClick()
{if(document.getElementById('pistaAudio')!=null)document.getElementById('pistaAudio').pause();$("#btnSeguir").hide();var cadena="";cadena+="<div id='pistaPalabra'>";cadena+="<div id='textoPistaPalabra'></div>";cadena+="<div id='valorPistaPalabra'></div>";cadena+="<div id='audioPistaPalabra'></div>";cadena+="</div>";cadena+="<div id='wrapper'>";cadena+="<div id='scroller'>";cadena+="<div class='btnComenzar' id='comenzarScreemAprender'>";cadena+="<a href='#' class='btn btn-large btn-primary' id='btnComenzarAprender'></a>";cadena+="</div>";cadena+="<div id='cuadroEscribir' class='cuadroEscribir'>";cadena+="<input type='text' id='campoEscribir'>";cadena+="<input type='button' id='btnComprueba' class='btn btn-mini'>";cadena+="<div class='clear'></div>";cadena+="</div>";cadena+="<div id='lienzo'></div>";cadena+="<div class='shadowMap' id='shadowMap'></div>";cadena+="</div>";cadena+="</div>";$('#main').html(cadena);inicializarEventosPrincipales();inicializarPista();demostracion=0;$(document).unbind("keyup");if(forma_completar=="clickar")
{$("#pistaPalabra").show();$("#btnAudio").show();cambiarPalabra();}
crear();comenzar();}
function validarTecladoPresentacion(event)
{var evento=event||window.event;if(evento.keyCode==39)
{if(controlPresentacion<re.length)gestionPresentacion('adelante');}
if(evento.keyCode==37)
{if(controlPresentacion>0)gestionPresentacion('atras');}}
function comenzar()
{inicializarVariablesXapi();inicializarXapi();$(document).unbind('keyup');$(document).keyup(validarTecladoPresentacion);$('#contentPreActividad').hide();$('#contentAct').css('top',0);if(is_touch_device())
{myScroll=new iScroll('wrapper',{zoom:true});}
else
{$('#wrapper').css("overflow","hidden");$('#lienzo').mousedown(capturarCoordenadasInicio);$(document).mouseup(pararDesplazamiento);$('#lienzo').mousemove(desplazarLienzo);$('#scroller').addClass('cursorGrab');document.getElementById('scroller').onmousewheel=wheel;document.getElementById('scroller').addEventListener('DOMMouseScroll',wheel,false);}
if(forma_juego=="demostracion")
{idInterval=setInterval(contador,1000);puntosReg=100;$("#numPuntos").text("100");if(forma_presentacion=="secuencia")
{gestionPresentacion('inicio');}}
if(forma_juego=="juego")
{idInterval=setInterval(contador,1000);if(forma_completar=="clickar")
{cambiarPalabra();}}
if((forma_juego=="ambos")&&(forma_presentacion=="secuencia")&&(demostracion==1))
{gestionPresentacion('inicio');}}
var escala=1;var escalaAnterior=1;var controlZoom=0;var controlRedi=0;function redimensionar(tipo)
{if(tipo=="redi")
{if(($("#imagenPrincipal").width()<=$("#wrapper").width())&&($("#imagenPrincipal").height()>=$("#wrapper").height()))
{$("#imagenPrincipal").css("height",$("#wrapper").height());$("#imagenPrincipal").css("width","auto");$("#divImagen").css("width",$("#imagenPrincipal").width());$("#divImagen").css("height",$("#imagenPrincipal").height());$("#divImagen").css("margin","auto");$("#scroller").css("width",$("#imagenPrincipal").width());$("#scroller").css("height",$("#imagenPrincipal").height());$("#scroller").css("margin","auto");}
else
{$("#imagenPrincipal").css("height","auto");$("#imagenPrincipal").css("width","100%");$("#divImagen").css("width","100%");$("#divImagen").css("height","auto");$("#scroller").css("width","100%");$("#scroller").css("height","auto");}
if(controlRedi==0)
{setTimeout(function(){redimensionar("redi")},200);controlRedi=1;}
else
{controlRedi=0;}
cargarDescripcionInicio();}
if(tipo=="encaja")
{controlZoom=1;$('#encajarEnPantalla').addClass('disable');$('#zoomDown').addClass('disable');$('#zoomUp').removeClass('disable');escalaAnterior=escala;escala=1;if(escala!=escalaAnterior)
{var zoom=parseInt(100*escala);$('#infoZoom').html(zoom+"%");$('#infoZoom').fadeIn(500);setTimeout(function(){$('#infoZoom').fadeOut(500);},2000);}
actualX=0;actualY=0;$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualX+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualX+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualX+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualX+")");$('.marker').css("-moz-transform","scale("+escala+")");$('.marker').css("-ms-transform","scale("+escala+")");$('.marker').css("-o-transform","scale("+escala+")");$('.marker').css("-webkit-transform","scale("+escala+")");$("#comenzarScreemAprender").css("-moz-transform","scale("+escala+")");$("#comenzarScreemAprender").css("-ms-transform","scale("+escala+")");$("#comenzarScreemAprender").css("-o-transform","scale("+escala+")");$("#comenzarScreemAprender").css("-webkit-transform","scale("+escala+")");}
if(tipo=="up")
{controlZoom=1;$('#encajarEnPantalla').removeClass('disable');$('#zoomDown').removeClass('disable');if(escala>=4.9)$('#zoomUp').addClass('disable');if(escala!=5)
{escalaAnterior=escala;escala=escala+0.1;if(escala>=5)escala=5;escalaInv=escala-0.1;if(escala!=escalaAnterior)
{var zoom=parseInt(100*escala);$('#infoZoom').html(zoom+"%");$('#infoZoom').fadeIn(500);setTimeout(function(){$('#infoZoom').fadeOut(500);},2000);}
$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");var escalaInv=1/escala;$('.marker').css("-moz-transform","scale("+escalaInv+")");$('.marker').css("-ms-transform","scale("+escalaInv+")");$('.marker').css("-o-transform","scale("+escalaInv+")");$('.marker').css("-webkit-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-moz-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-ms-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-o-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-webkit-transform","scale("+escalaInv+")");}}
if(tipo=="down")
{controlZoom=1;if(escala==1.1)
{$('#encajarEnPantalla').addClass('disable');$('#zoomDown').addClass('disable');}
$('#zoomUp').removeClass('disable');if(escala!=1)
{escalaAnterior=escala;escala=escala-0.1;if(escala<=1)escala=1;if(escala!=escalaAnterior)
{var zoom=parseInt(100*escala);$('#infoZoom').html(zoom+"%");$('#infoZoom').fadeIn(500);setTimeout(function(){$('#infoZoom').fadeOut(500);},2000);}
$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")");var limX=(($('#scroller').width()*escala-$('#scroller').width())/2)-(($('#wrapper').width()-$('#scroller').width())/2);if($('#wrapper').width()>$('#scroller').width()*escala)limX=0;var limY=($('#scroller').height()*escala-$('#scroller').height())/2;var limYB=(($('#scroller').height()*escala-$('#scroller').height())/2)+($('#scroller').height()-$('#wrapper').height());if(actualX>=limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+limX+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+limX+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+limX+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+limX+","+actualY+")");actualX=limX;}
else if(actualX<-limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+"px,"+actualY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+actualY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+actualY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+actualY+")");actualX=-limX;}
if(actualY>=limY)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+limY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+limY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+limY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+limY+")");actualY=limY;}
else if(actualY<-limYB)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+actualX+"px,"+(-limYB)+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+(-limYB)+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+(-limYB)+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+actualX+","+(-limYB)+")");actualY=-limYB;}
if(escala<1)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+",0px,0px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+",0,0)");actualX=0;actualY=0;}
var escalaInv=1/escala;$('.marker').css("-moz-transform","scale("+escalaInv+")");$('.marker').css("-ms-transform","scale("+escalaInv+")");$('.marker').css("-o-transform","scale("+escalaInv+")");$('.marker').css("-webkit-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-moz-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-ms-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-o-transform","scale("+escalaInv+")");$("#comenzarScreemAprender").css("-webkit-transform","scale("+escalaInv+")");}}}
var activadoMover=0;var actualX=0;var actualY=0;var moviX=0;var moviY=0;function capturarCoordenadasInicio(ev)
{$('body').addClass('cursorGrabbing');var matrizInicioMoz="matrix("+escala+",0,0,"+escala+","+actualX+"px,"+actualY+"px)";var matrizInicio="matrix("+escala+",0,0,"+escala+","+actualX+","+actualY+")";$('#scroller').css("-moz-transform",matrizInicioMoz);$('#scroller').css("-ms-transform",matrizInicio);$('#scroller').css("-o-transform",matrizInicio);$('#scroller').css("-webkit-transform",matrizInicio);if(activadoMover==1)activadoMover=0;else activadoMover=1;inicioX=ev.clientX;inicioY=ev.clientY;}
function pararDesplazamiento(ev)
{$('body').removeClass('cursorGrabbing');activadoMover=0;var matriz=$('#scroller').css("-moz-transform");if(matriz==undefined)matriz=$('#scroller').css("-ms-transform");if(matriz==undefined)matriz=$('#scroller').css("-o-transform");if(matriz==undefined)matriz=$('#scroller').css("-webkit-transform");var arrayMatriz=matriz.split(',');trasX=parseInt(arrayMatriz[4]);trasY=parseInt(arrayMatriz[5]);actualX=trasX;actualY=trasY;var limX=(($('#scroller').width()*escala-$('#scroller').width())/2)-(($('#wrapper').width()-$('#scroller').width())/2);if($('#wrapper').width()>$('#scroller').width()*escala)limX=0;var limY=($('#scroller').height()*escala-$('#scroller').height())/2;var limYB=(($('#scroller').height()*escala-$('#scroller').height())/2)+($('#scroller').height()-$('#wrapper').height());if(trasX>=limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+limX+"px,"+moviY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+limX+","+moviY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+limX+","+moviY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+limX+","+moviY+")");moviX=limX;actualX=limX;}
else if(trasX<-limX)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+"px,"+moviY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+moviY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+moviY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+(-limX)+","+moviY+")");moviX=-limX;actualX=-limX;}
if(trasY>=limY)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+moviX+"px,"+limY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+limY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+limY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+limY+")");moviY=limY;actualY=limY;}
else if(trasY<-limYB)
{if($('#wrapper').height()>$('#scroller').height()*escala)limYB=-limY;$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+moviX+"px,"+(-limYB)+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+(-limYB)+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+(-limYB)+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+(-limYB)+")");moviY=-limYB;actualY=-limYB;}
if(escala<1)
{$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+",0px,0px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+",0,0)");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+",0,0)");actualX=0;actualY=0;}}
function desplazarLienzo(ev)
{var movX=ev.clientX;var movY=ev.clientY;if(activadoMover==1)
{moviX=movX-inicioX+actualX;moviY=movY-inicioY+actualY;$('#scroller').css("-moz-transform","matrix("+escala+",0,0,"+escala+","+moviX+"px,"+moviY+"px)");$('#scroller').css("-ms-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+moviY+")");$('#scroller').css("-o-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+moviY+")");$('#scroller').css("-webkit-transform","matrix("+escala+",0,0,"+escala+","+moviX+","+moviY+")");}}
var controlAciertos=[];var respuestasUsuario=[];var palabrasMostradas=[];var compruebaFin=0;function cambiarPalabra()
{aleatorio=1000;if(palabrasMostradas.length<=re.length-1)
{while(aleatorio>=re.length)
{aleatorio=parseInt(Math.random()*1000);for(i=0;i<palabrasMostradas.length;i++)
{if(aleatorio==palabrasMostradas[i])
{aleatorio=1000;break;}}}
palabrasMostradas.push(aleatorio);$('#valorPistaPalabra').html("");$('#audioPistaPalabra').html("");$('#valorPistaPalabra').html(re[aleatorio]);clearInterval(compruebaFin);if(au[aleatorio]!="no")
{$('#audioPistaPalabra').html("");$('#btnAudio').unbind("click");var rutaAudio=rutaRecursos+au[aleatorio];var rutaAudioOgg=rutaRecursosInicio+au[aleatorio];var audioCadena="<audio id='pistaAudio'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores(-1);' type='audio/ogg'></source></audio>";$('#audioPistaPalabra').html(audioCadena);$('#btnAudio').show();$('#btnAudio').click(function(e){e.preventDefault();gestionReproducir("pistaAudio","iconoAudio");});reproducir("pistaAudio","iconoAudio");}
else
{$('#btnAudio').hide();}
var marg=parseInt($("#pistaPalabra").css("height"))+133;$("#wrapper").mousemove(function(e){if(e.pageY<marg){$("#pistaPalabra").addClass("pistaBottom");}else{$("#pistaPalabra").removeClass("pistaBottom");}});}
else
{numero_intentos=0;if(puntosReg>=50){for(i=0;i<re.length;i++){if(re[i].toUpperCase()==respuestasUsuario[i].toUpperCase()){exito=1;}
else{exito=0;}
responderEscritaXapi(re[i],re[i],respuestasUsuario[i],exito)}
completarXapi('OK',puntosReg,tiempoReg)
cargarPantallaFinal('OK');}
else{for(i=0;i<re.length;i++){if(re[i].toUpperCase()==respuestasUsuario[i].toUpperCase()){exito=1;}
else{exito=0;}
responderEscritaXapi(re[i],re[i],respuestasUsuario[i],exito)}
completarXapi('KO',puntosReg,tiempoReg)
cargarPantallaFinal('noSuperada');}
clearInterval(idInterval);}}
function reproducir(media,icono)
{try{document.getElementById(media).currentTime=0;}catch(e){}
document.getElementById(media).pause();if(document.getElementById(media).currentTime!=0)document.getElementById(media).load();document.getElementById(media).play();$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");clearInterval(compruebaFin);compruebaFin=setInterval(function(){controlFinalAudio(media,icono);},500);}
function gestionReproducir(media,icono)
{if($("#"+icono).hasClass("iPlay"))
{$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");reproducir(media,icono);}
else
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");document.getElementById(media).pause();}}
function controlFinalAudio(media,icono)
{if(document.getElementById(media).ended)
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");clearInterval(compruebaFin);}}
function errores(tipo)
{if(tipo==-1)
{$('#errorAudio').show();$('#audioOK').hide();$('#errorAudio').attr("title",txtErrorImagen);}
else
{$('#errorAudio_'+tipo).show();$('#audioOK_'+tipo).hide();$('#errorAudio_'+tipo).attr("title",txtErrorImagen);}}
function gestionarPalabra(event)
{if(forma_completar=="clickar")
{palabraActiva=aleatorio;if(palabraActiva<10)cadenaPalabraActiva="00"+palabraActiva;else if(palabraActiva<100)cadenaPalabraActiva="0"+palabraActiva;else cadenaPalabraActiva=palabraActiva;idPalabraSeleccionada=event.target.getAttribute("id");cadenaPalabraSeleccionada=idPalabraSeleccionada.substring(6,9);numeroPalabraSeleccionada=parseInt(idPalabraSeleccionada.substring(6,9),10);if(re[numeroPalabraSeleccionada]==$('#valorPistaPalabra').text())
{document.getElementById('audioBien').play();$("#marker"+cadenaPalabraSeleccionada).addClass("respuestaOK");$("#marker"+cadenaPalabraSeleccionada).html($("#marker"+cadenaPalabraSeleccionada).html()+"<div class='iconoRespuesta'></div>");$("#marker"+cadenaPalabraSeleccionada).unbind("click");controlAciertos[numeroPalabraSeleccionada]=1;respuestasUsuario[numeroPalabraSeleccionada]=$('#valorPistaPalabra').text();for(i=0;i<palabrasPulsadas.length;i++)
{$("#marker"+palabrasPulsadas[i]).click(gestionarPalabra);$("#marker"+palabrasPulsadas[i]).removeClass("respuestaIntentoMAL");}
setTimeout(function(){palabrasPulsadas=[];},50);reiniciarIntentos();actualizarPuntos();mostrarSolucion("ok");}
else
{respuestasUsuario[palabraActiva]=re[numeroPalabraSeleccionada];document.getElementById('audioMal').play();$("#marker"+cadenaPalabraSeleccionada).addClass("respuestaIntentoMAL");palabrasPulsadas.push(cadenaPalabraSeleccionada);$("#marker"+cadenaPalabraSeleccionada).unbind("click");actualizarIntentosClickar();}}
else if(forma_completar=="escribir")
{idPalabraActiva=event.target.getAttribute("id");cadenaPalabraActiva=idPalabraActiva.substring(6,9);palabraActiva=parseInt(idPalabraActiva.substring(6,9),10);mostrarPantallaEscribir();}}
var palabrasPulsadas=[];function actualizarIntentosClickar()
{var cadenaIntentos=$('#numIntentos').text();var pos=cadenaIntentos.indexOf("/");var numeroIntentos=parseInt(cadenaIntentos.substring(0,pos+1));if(numeroIntentos<numero_intentos-1)
{numeroIntentos++;cadenaIntentos=numeroIntentos+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);}
else
{setTimeout(function(){for(i=0;i<palabrasPulsadas.length;i++)
{$("#marker"+palabrasPulsadas[i]).click(gestionarPalabra);$("#marker"+palabrasPulsadas[i]).removeClass("respuestaIntentoMAL");}},500);setTimeout(function(){palabrasPulsadas=[];},600);reiniciarIntentos();mostrarSolucion("mal");document.getElementById('audioMal').play();$("#marker"+cadenaPalabraActiva).addClass("respuestaMAL");$("#marker"+cadenaPalabraActiva).html($("#marker"+cadenaPalabraActiva).html()+"<div class='iconoRespuesta'></div>");$("#marker"+cadenaPalabraActiva).unbind("click");controlAciertos[palabraActiva]=0;}}
function reiniciarIntentos()
{$('#numIntentos').html("0<sup>/"+numero_intentos+"</sup>");}
function mostrarSolucion(tipo)
{if(tipo=="ok")
{var cadenaPa=cadenaPalabraSeleccionada;}
else
{var cadenaPa=cadenaPalabraActiva;}
$("#solucion"+cadenaPa).text(re[palabraActiva]);var anchuraTooltipI=58;var anchuraTooltipD=178;var alturaTooltip=158;var coX=parseInt($("#marker"+cadenaPa).css("left"),10);var coY=parseInt($("#marker"+cadenaPa).css("top"),10);claseCS="tooltip arriba centro";if((coX<130)&&(coY<80))claseCS="tooltip abajo derecha";else if((coX<130)&&(coY>80))claseCS="tooltip arriba derecha";else if((coX>$("#scroller").width()-130)&&(coY<80))claseCS="tooltip abajo izquierda";else if((coX>$("#scroller").width()-130)&&(coY>80))claseCS="tooltip arriba izquierda";else if(coY<80)claseCS="tooltip abajo centro";$("#solucion"+cadenaPa).addClass(claseCS);if(forma_completar=="clickar")cambiarPalabra();}
var catidadPalabrasAcertadas=0;var puntosReg=0;function actualizarPuntos()
{catidadPalabrasAcertadas++;var total=re.length;var puntos=100/total;cantidadActual=puntos*catidadPalabrasAcertadas;puntosReg=parseInt(cantidadActual);$("#numPuntos").html(parseInt(cantidadActual));}
var controlEjecucion=0;var markerAnterior="";function mostrarPantallaEscribir()
{if(is_touch_device()){myScroll.destroy();myScroll=null;}
redimensionar("encaja");$("#shadowMap").show();$("#marker"+cadenaPalabraActiva).css("z-index",12);if(controlEjecucion==1)
{$("#marker"+markerAnterior).bind("click",gestionarPalabra);$("#cuadroEscribir").removeClass(claseCE);}
markerAnterior=cadenaPalabraActiva;controlEjecucion=1;if(au[palabraActiva]!="no")
{var rutaAudio=rutaRecursos+au[palabraActiva];var rutaAudioOgg=rutaRecursosInicio+au[palabraActiva];var audioCadena="<audio id='pistaAudio'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores(-1);' type='audio/ogg'></source></audio>";$('#audioPistaPalabra').html(audioCadena);$('#btnAudio').show();$('#btnAudio').click(function(e){e.preventDefault();gestionReproducir("pistaAudio","iconoAudio");});reproducir("pistaAudio","iconoAudio");}
else
{$('#btnAudio').hide();}
setTimeout(function(){var cX=parseInt($("#marker"+cadenaPalabraActiva).css("left"),10);var cY=parseInt($("#marker"+cadenaPalabraActiva).css("top"),10);claseCE="arriba centro";if((cX<130)&&(cY<80))claseCE="abajo derecha";else if((cX<130)&&(cY>80))claseCE="arriba derecha";else if((cX>$("#wrapper").width()-130)&&(cY<80))claseCE="abajo izquierda";else if((cX>$("#wrapper").width()-130)&&(cY>80))claseCE="arriba izquierda";else if(cY<80)claseCE="abajo centro";$("#cuadroEscribir").addClass(claseCE);$("#marker"+cadenaPalabraActiva).unbind("click");$("#btnComprueba").click(comprobarPalabra);$("#cuadroEscribir").appendTo("#marker"+cadenaPalabraActiva);$('#cuadroEscribir').show();$("#campoEscribir").focus();var cont=intentosPalabras[palabraActiva];if(cont==undefined)cont=0;cadenaIntentos=cont+1+"<sup>/"+numero_intentos+"</sup>";$('#numIntentos').html(cadenaIntentos);$('#cajaIntentos').addClass('alertLuz');setTimeout(function(){$('#cajaIntentos').removeClass('alertLuz');},1000);$(document).keyup(validarIntro);},200);}
function validarIntro(event)
{var evento=event||window.event;if(evento.keyCode==13)
{comprobarPalabra();}
if(evento.keyCode==27)
{cerrarPantallaEscribir();$("#marker"+cadenaPalabraActiva).bind("click",gestionarPalabra);}}
function cerrarPantallaEscribir()
{$("#campoEscribir").blur();if(is_touch_device()){myScroll=new iScroll('wrapper',{zoom:true});}
$(document).unbind("keyup");$('#cuadroEscribir').hide();$("#cuadroEscribir").removeClass(claseCE);$("#shadowMap").hide();$("#marker"+cadenaPalabraActiva).css("z-index","");$("#btnComprueba").unbind("click");$('#audioPistaPalabra').html("");$('#btnAudio').unbind("click");$('#btnAudio').hide();clearInterval(compruebaFin);if(is_touch_device())
{$("#marker"+cadenaPalabraActiva).appendTo("#main");$("#marker"+cadenaPalabraActiva).appendTo("#divImagen");}}
var palabrasAcertadas=[];function comprobarPalabra()
{controlEjecucion=0;var valorIntroducido=$("#campoEscribir").val();var valorCorrecto=re[palabraActiva];if(sensible_mayusculas=="no")
{valorIntroducido=valorIntroducido.toUpperCase();valorCorrecto=valorCorrecto.toUpperCase();}
if(sensible_acentos=="no")
{valorIntroducido=borraAcentos(valorIntroducido);valorCorrecto=borraAcentos(valorCorrecto);}
respuestasUsuario[palabraActiva]=valorIntroducido;if(valorIntroducido==valorCorrecto)
{document.getElementById('audioBien').play();$("#marker"+cadenaPalabraActiva).addClass("respuestaOK");$("#marker"+cadenaPalabraActiva).html($("#marker"+cadenaPalabraActiva).html()+"<div class='iconoRespuesta'></div>");controlAciertos[palabraActiva]=1;palabrasAcertadas.push(palabraActiva);actualizarPuntos();mostrarSolucion("esc");setTimeout(function(){if(comprobarFinal())
{numero_intentos=0;if(puntosReg>=50){for(i=0;i<re.length;i++){if(re[i].toUpperCase()==respuestasUsuario[i].toUpperCase()){exito=1;}
else{exito=0;}
responderEscritaXapi(re[i],re[i],respuestasUsuario[i],exito)}
completarXapi('OK',puntosReg,tiempoReg)
cargarPantallaFinal('OK');}
else{for(i=0;i<re.length;i++){if(re[i].toUpperCase()==respuestasUsuario[i].toUpperCase()){exito=1;}
else{exito=0;}
responderEscritaXapi(re[i],re[i],respuestasUsuario[i],exito)}
completarXapi('KO',puntosReg,tiempoReg)
cargarPantallaFinal('noSuperada');}
clearInterval(idInterval);}},50);}
else
{document.getElementById('audioMal').play();actualizarIntentosEscribir();}
$("#campoEscribir").val("");cerrarPantallaEscribir();}
var intentosPalabras=[];var controlIntentosPalabras=[];var controlFinal=0;function actualizarIntentosEscribir()
{if(intentosPalabras[palabraActiva]==undefined)intentosPalabras[palabraActiva]=0;if(intentosPalabras[palabraActiva]<numero_intentos-1)
{intentosPalabras[palabraActiva]++;$("#marker"+cadenaPalabraActiva).addClass("respuestaIntentoMAL");controlIntentosPalabras.push(cadenaPalabraActiva);setTimeout(function(){$("#marker"+controlIntentosPalabras[0]).removeClass("respuestaIntentoMAL");controlIntentosPalabras.shift();},1000);setTimeout(function(){$("#marker"+cadenaPalabraActiva).bind("click",gestionarPalabra)},50);}
else
{controlAciertos[palabraActiva]=0;$("#marker"+cadenaPalabraActiva).addClass("respuestaMAL");$("#marker"+cadenaPalabraActiva).html($("#marker"+cadenaPalabraActiva).html()+"<div class='iconoRespuesta'></div>");mostrarSolucion("esc");$("#marker"+cadenaPalabraActiva).unbind("click");setTimeout(function(){if(comprobarFinal())
{numero_intentos=0;if(puntosReg>=50){for(i=0;i<re.length;i++){if(re[i].toUpperCase()==respuestasUsuario[i].toUpperCase()){exito=1;}
else{exito=0;}
responderEscritaXapi(re[i],re[i],respuestasUsuario[i],exito)}
completarXapi('OK',puntosReg,tiempoReg)
cargarPantallaFinal('OK');}
else{for(i=0;i<re.length;i++){if(re[i].toUpperCase()==respuestasUsuario[i].toUpperCase()){exito=1;}
else{exito=0;}
responderEscritaXapi(re[i],re[i],respuestasUsuario[i],exito)}
completarXapi('KO',puntosReg,tiempoReg)
cargarPantallaFinal('noSuperada');}
clearInterval(idInterval);}},50);}}
function borraAcentos(cadenaQuitar)
{var conAcentos="áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";var sinAcentos="aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";var nueva="";var encontrada=0;for(i=0;i<cadenaQuitar.length;i++)
{encontrada=0;for(j=0;j<conAcentos.length;j++)
{if(cadenaQuitar[i]==conAcentos[j])
{nueva+=sinAcentos[j];encontrada=1;break;}}
if(encontrada==0)nueva+=cadenaQuitar[i];}
return nueva;}
function comprobarFinal()
{for(m=0;m<respuestaNum.length;m++)
{if(controlAciertos[m]==undefined)
{controlFinal=1;break;}}
if(controlFinal==0)
{return true;}
else
{controlFinal=0;return false;}}
function pantallaFinalSinJuego()
{for(i=0;i<re.length;i++)
{controlAciertos[i]=1;}
numero_intentos=0;$("#btnSeguir").unbind("click").click(function(e){e.preventDefault()});if(puntosReg>=50){completarXapi('OK',puntosReg,tiempoReg)
cargarPantallaFinal('OK');}
else{completarXapi('KO',puntosReg,tiempoReg)
cargarPantallaFinal('noSuperada');}
clearInterval(idInterval);}
function completarPantallaFinal()
{var img=new Image();img.src=rutaRecursos+imagen;img.id="imgFinalM";img.onload=function(){imagenAncho=img.width;imagenAlto=img.height;redimensionaIF();var divImagen=$("<div>",{id:"divImagenF",width:divAncho,height:divAlto});$("#respuestaResultados").append(divImagen);$("#divImagenF").append(img);for(i=0;i<re.length;i++)
{if(i<10)ix="00"+i;else if(i<100)ix="0"+i;else ix=i;var pxt=coordenadaX[i];var pyt=coordenadaY[i];var porceX=pxt*100/imagenAncho;var porceY=pyt*100/imagenAlto;var pxtp=porceX+"%";var pytp=porceY+"%";var claseRespuesta;if(controlAciertos[i]==1)claseRespuesta="respuestaOK";else claseRespuesta="respuestaMAL";var divMarker=$("<div>",{id:"markerF"+ix,"class":"marker "+claseRespuesta,css:{"left":pxtp,"top":pytp}});$("#divImagenF").append(divMarker);var divNumerito=$("<div>",{id:"numeritoF"+ix,"class":"numMapaRespuesta"});$(divNumerito).text(i+1);$("#markerF"+ix).append(divNumerito);var divSolucion=$("<div>",{id:"solucionF"+ix,"class":"tooltip"});$("#markerF"+ix).append(divSolucion);$("#solucionF"+ix).text(re[i]);}
$("#actividadMapa").append(divImagen);setTimeout(function(){for(i=0;i<re.length;i++)
{if(i<10)ix="00"+i;else if(i<100)ix="0"+i;else ix=i;var cX=parseInt($("#markerF"+ix).css("left"),10);var cY=parseInt($("#markerF"+ix).css("top"),10);var claseCSF="arriba centro";if((cX<130)&&(cY<80))claseCSF="abajo derecha";else if((cX<130)&&(cY>80))claseCSF="arriba derecha";else if((cX>$("#divImagenF").width()-130)&&(cY<80))claseCSF="abajo izquierda";else if((cX>$("#divImagenF").width()-130)&&(cY>80))claseCSF="arriba izquierda";else if(cY<80)claseCSF="abajo centro";$("#solucionF"+ix).addClass(claseCSF);}},1000);}
$(window).resize(function(){redimensionaIF();});finalCargado();completarPantallaFinal2();}
function finalCargado()
{if($("#resumen").css("display")=="block")redimensionaIF();else setTimeout(finalCargado,100);}
function redimensionaIF()
{if($("#resumen").width()<imagenAncho)
{divAncho=$("#resumen").width();divAlto=imagenAlto*divAncho/imagenAncho;}
else
{divAncho=imagenAncho;divAlto=imagenAlto;}
$("#divImagenF").width(divAncho);$("#divImagenF").height(divAlto);}
function completarPantallaFinal2()
{for(k=0;k<re.length;k++)
{crearElementosFinal(k);$('#numRespuesta_'+k).html(k+1);if(k<10)kx="00"+k;else if(k<100)kx="0"+k;else kx=k;$('#pCorrecta_'+k).html(re[k]);if(controlAciertos[k]!=1)$("#contentRespuesta_"+k).addClass('respuestaIncorrecta');}
$('.accordionButton').click(function(){$('.accordionButton').removeClass('on');$('.accordionContent').slideUp('slow');if($(this).next().is(':hidden')==true){$(this).addClass('on');$(this).next().slideDown('slow');cargarFinal(this);}});$('.accordionContent').hide();}
function crearElementosFinal(k)
{var cadenaHTML="";if(au[k]!="no")
{cadenaHTML+="<li class='pistaConSonido'>";cadenaHTML+="<div class='soundPlayer' id='btnAudio_"+k+"'>";cadenaHTML+="<div class='errorSound' id='errorAudio_"+k+"'></div>";cadenaHTML+="<a href='#' class='btn' id='audioOK_"+k+"'><span class='iPlayerReducido iPlay' id='iconoAudio_"+k+"'></span></a>";cadenaHTML+="</div>";setTimeout(function(){cargarAudio(k);},1000);}
else
{cadenaHTML+="<li>";}
if(globalFeedback==1)
{if(fe[k]!=undefined)
{cadenaHTML+="<div class='accordionButton' id='accordion_"+k+"'>";}}
cadenaHTML+="<div class='contentRespuesta' id='contentRespuesta_"+k+"'>";cadenaHTML+="<span class='numRespuesta' id='numRespuesta_"+k+"'></span>";cadenaHTML+="<span class='txtRespuesta'><span id='pCorrecta_"+k+"'></span></span>";if(globalFeedback==1)
{if(fe[k]!=undefined)
{cadenaHTML+="<span title='"+txtInfoAdicional+"' class='iExtraInfo'></span>";}}
cadenaHTML+="</div>";if(globalFeedback==1)
{if(fe[k]!=undefined)
{cadenaHTML+="</div>";}}
if(globalFeedback==1)
{if(fe[k]!=undefined)
{cadenaHTML+="<div class='accordionContent'>";cadenaHTML+="<div class='contentInfoRespuesta'>";cadenaHTML+="<div class='txtExtraInfo' id='txtExtraInfo_"+k+"'></div>";cadenaHTML+="</div>";cadenaHTML+="</div>";}}
cadenaHTML+="</li>";$("#listaFinal").html($("#listaFinal").html()+cadenaHTML);}
function cargarFinal(enlace)
{var idAccordion=$(enlace).attr('id');var k=parseInt(idAccordion.substring(10,13),10);if(globalFeedback==1)
{if(fe[k]!=undefined)
{$("#txtExtraInfo_"+k).html(fe[k]);}}}
function cargarAudio(num)
{var rutaAudio=rutaRecursos+au[num];var rutaAudioOgg=rutaRecursosInicio+au[num];var audioCadena="<audio id='pistaAudio_"+num+"'><source src='"+rutaAudio+"' type='audio/mpeg'></source><source src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores("+num+");' type='audio/ogg'></source></audio>";$('#sonidos').html($('#sonidos').html()+audioCadena);$('#btnAudio_'+num).click(function(e){e.preventDefault();gestionReproducir("pistaAudio_"+num,"iconoAudio_"+num);});};
/*!
 * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(window,doc){var m=Math,dummyStyle=doc.createElement('div').style,vendor=(function(){var vendors='t,webkitT,MozT,msT,OT'.split(','),t,i=0,l=vendors.length;for(;i<l;i++){t=vendors[i]+'ransform';if(t in dummyStyle){return vendors[i].substr(0,vendors[i].length-1);}}
return false;})(),cssVendor=vendor?'-'+vendor.toLowerCase()+'-':'',transform=prefixStyle('transform'),transitionProperty=prefixStyle('transitionProperty'),transitionDuration=prefixStyle('transitionDuration'),transformOrigin=prefixStyle('transformOrigin'),transitionTimingFunction=prefixStyle('transitionTimingFunction'),transitionDelay=prefixStyle('transitionDelay'),isAndroid=(/android/gi).test(navigator.appVersion),isIDevice=(/iphone|ipad/gi).test(navigator.appVersion),isTouchPad=(/hp-tablet/gi).test(navigator.appVersion),has3d=prefixStyle('perspective')in dummyStyle,hasTouch='ontouchstart'in window&&!isTouchPad,hasTransform=vendor!==false,hasTransitionEnd=prefixStyle('transition')in dummyStyle,RESIZE_EV='onorientationchange'in window?'orientationchange':'resize',START_EV=hasTouch?'touchstart':'mousedown',MOVE_EV=hasTouch?'touchmove':'mousemove',END_EV=hasTouch?'touchend':'mouseup',CANCEL_EV=hasTouch?'touchcancel':'mouseup',TRNEND_EV=(function(){if(vendor===false)return false;var transitionEnd={'':'transitionend','webkit':'webkitTransitionEnd','Moz':'transitionend','O':'otransitionend','ms':'MSTransitionEnd'};return transitionEnd[vendor];})(),nextFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1);};})(),cancelFrame=(function(){return window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;})(),translateZ=has3d?' translateZ(0)':'',iScroll=function(el,options){var that=this,i;that.wrapper=typeof el=='object'?el:doc.getElementById(el);that.wrapper.style.overflow='hidden';that.scroller=that.wrapper.children[0];that.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,topOffset:0,checkDOMChanges:false,handleClick:true,hScrollbar:true,vScrollbar:true,fixedScrollbar:isAndroid,hideScrollbar:isIDevice,fadeScrollbar:isIDevice&&has3d,scrollbarClass:'',zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:'scroll',snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){e.preventDefault();},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(i in options)that.options[i]=options[i];that.x=that.options.x;that.y=that.options.y;that.options.useTransform=hasTransform&&that.options.useTransform;that.options.hScrollbar=that.options.hScroll&&that.options.hScrollbar;that.options.vScrollbar=that.options.vScroll&&that.options.vScrollbar;that.options.zoom=that.options.useTransform&&that.options.zoom;that.options.useTransition=hasTransitionEnd&&that.options.useTransition;if(that.options.zoom&&isAndroid){translateZ='';}
that.scroller.style[transitionProperty]=that.options.useTransform?cssVendor+'transform':'top left';that.scroller.style[transitionDuration]='0';that.scroller.style[transformOrigin]='0 0';if(that.options.useTransition)that.scroller.style[transitionTimingFunction]='cubic-bezier(0.33,0.66,0.66,1)';if(that.options.useTransform)that.scroller.style[transform]='translate('+that.x+'px,'+that.y+'px)'+translateZ;else that.scroller.style.cssText+=';position:absolute;top:'+that.y+'px;left:'+that.x+'px';if(that.options.useTransition)that.options.fixedScrollbar=true;that.refresh();that._bind(RESIZE_EV,window);that._bind(START_EV);if(!hasTouch){if(that.options.wheelAction!='none'){that._bind('DOMMouseScroll');that._bind('mousewheel');}}
if(that.options.checkDOMChanges)that.checkDOMTime=setInterval(function(){that._checkDOMChanges();},500);};iScroll.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var that=this;switch(e.type){case START_EV:if(!hasTouch&&e.button!==0)return;that._start(e);break;case MOVE_EV:that._move(e);break;case END_EV:case CANCEL_EV:that._end(e);break;case RESIZE_EV:that._resize();break;case'DOMMouseScroll':case'mousewheel':that._wheel(e);break;case TRNEND_EV:that._transitionEnd(e);break;}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||(this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))return;this.refresh();},_scrollbar:function(dir){var that=this,bar;if(!that[dir+'Scrollbar']){if(that[dir+'ScrollbarWrapper']){if(hasTransform)that[dir+'ScrollbarIndicator'].style[transform]='';that[dir+'ScrollbarWrapper'].parentNode.removeChild(that[dir+'ScrollbarWrapper']);that[dir+'ScrollbarWrapper']=null;that[dir+'ScrollbarIndicator']=null;}
return;}
if(!that[dir+'ScrollbarWrapper']){bar=doc.createElement('div');if(that.options.scrollbarClass)bar.className=that.options.scrollbarClass+dir.toUpperCase();else bar.style.cssText='position:absolute;z-index:100;'+(dir=='h'?'height:7px;bottom:1px;left:2px;right:'+(that.vScrollbar?'7':'2')+'px':'width:7px;bottom:'+(that.hScrollbar?'7':'2')+'px;top:2px;right:1px');bar.style.cssText+=';pointer-events:none;'+cssVendor+'transition-property:opacity;'+cssVendor+'transition-duration:'+(that.options.fadeScrollbar?'350ms':'0')+';overflow:hidden;opacity:'+(that.options.hideScrollbar?'0':'1');that.wrapper.appendChild(bar);that[dir+'ScrollbarWrapper']=bar;bar=doc.createElement('div');if(!that.options.scrollbarClass){bar.style.cssText='position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.15);'+cssVendor+'background-clip:padding-box;'+cssVendor+'box-sizing:border-box;'+(dir=='h'?'height:100%':'width:100%')+';'+cssVendor+'border-radius:3px;border-radius:3px';}
bar.style.cssText+=';pointer-events:none;'+cssVendor+'transition-property:'+cssVendor+'transform;'+cssVendor+'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);'+cssVendor+'transition-duration:0;'+cssVendor+'transform: translate(0,0)'+translateZ;if(that.options.useTransition)bar.style.cssText+=';'+cssVendor+'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';that[dir+'ScrollbarWrapper'].appendChild(bar);that[dir+'ScrollbarIndicator']=bar;}
if(dir=='h'){that.hScrollbarSize=that.hScrollbarWrapper.clientWidth;that.hScrollbarIndicatorSize=m.max(m.round(that.hScrollbarSize*that.hScrollbarSize/that.scrollerW),8);that.hScrollbarIndicator.style.width=that.hScrollbarIndicatorSize+'px';that.hScrollbarMaxScroll=that.hScrollbarSize-that.hScrollbarIndicatorSize;that.hScrollbarProp=that.hScrollbarMaxScroll/that.maxScrollX;}else{that.vScrollbarSize=that.vScrollbarWrapper.clientHeight;that.vScrollbarIndicatorSize=m.max(m.round(that.vScrollbarSize*that.vScrollbarSize/that.scrollerH),8);that.vScrollbarIndicator.style.height=that.vScrollbarIndicatorSize+'px';that.vScrollbarMaxScroll=that.vScrollbarSize-that.vScrollbarIndicatorSize;that.vScrollbarProp=that.vScrollbarMaxScroll/that.maxScrollY;}
that._scrollbarPos(dir,true);},_resize:function(){var that=this;setTimeout(function(){that.refresh();},isAndroid?200:0);},_pos:function(x,y){if(this.zoomed)return;x=this.hScroll?x:0;y=this.vScroll?y:0;if(this.options.useTransform){this.scroller.style[transform]='translate('+x+'px,'+y+'px) scale('+this.scale+')'+translateZ;}else{x=m.round(x);y=m.round(y);this.scroller.style.left=x+'px';this.scroller.style.top=y+'px';}
this.x=x;this.y=y;this._scrollbarPos('h');this._scrollbarPos('v');},_scrollbarPos:function(dir,hidden){var that=this,pos=dir=='h'?that.x:that.y,size;if(!that[dir+'Scrollbar'])return;pos=that[dir+'ScrollbarProp']*pos;if(pos<0){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']+m.round(pos*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';}
pos=0;}else if(pos>that[dir+'ScrollbarMaxScroll']){if(!that.options.fixedScrollbar){size=that[dir+'ScrollbarIndicatorSize']-m.round((pos-that[dir+'ScrollbarMaxScroll'])*3);if(size<8)size=8;that[dir+'ScrollbarIndicator'].style[dir=='h'?'width':'height']=size+'px';pos=that[dir+'ScrollbarMaxScroll']+(that[dir+'ScrollbarIndicatorSize']-size);}else{pos=that[dir+'ScrollbarMaxScroll'];}}
that[dir+'ScrollbarWrapper'].style[transitionDelay]='0';that[dir+'ScrollbarWrapper'].style.opacity=hidden&&that.options.hideScrollbar?'0':'1';that[dir+'ScrollbarIndicator'].style[transform]='translate('+(dir=='h'?pos+'px,0)':'0,'+pos+'px)')+translateZ;},_start:function(e){var that=this,point=hasTouch?e.touches[0]:e,matrix,x,y,c1,c2;if(controlZoom==1){this.scale=escala;controlZoom=0;}
if(!that.enabled)return;if(that.options.onBeforeScrollStart)that.options.onBeforeScrollStart.call(that,e);if(that.options.useTransition||that.options.zoom)that._transitionTime(0);that.moved=false;that.animating=false;that.zoomed=false;that.distX=0;that.distY=0;that.absDistX=0;that.absDistY=0;that.dirX=0;that.dirY=0;if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDistStart=m.sqrt(c1*c1+c2*c2);that.originX=m.abs(e.touches[0].pageX+e.touches[1].pageX-that.wrapperOffsetLeft*2)/2-that.x;that.originY=m.abs(e.touches[0].pageY+e.touches[1].pageY-that.wrapperOffsetTop*2)/2-that.y;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);}
if(that.options.momentum){if(that.options.useTransform){matrix=getComputedStyle(that.scroller,null)[transform].replace(/[^0-9\-.,]/g,'').split(',');x=+(matrix[12]||matrix[4]);y=+(matrix[13]||matrix[5]);}else{x=+getComputedStyle(that.scroller,null).left.replace(/[^0-9-]/g,'');y=+getComputedStyle(that.scroller,null).top.replace(/[^0-9-]/g,'');}
if(x!=that.x||y!=that.y){if(that.options.useTransition)that._unbind(TRNEND_EV);else cancelFrame(that.aniTime);that.steps=[];that._pos(x,y);if(that.options.onScrollEnd)that.options.onScrollEnd.call(that);}}
that.absStartX=that.x;that.absStartY=that.y;that.startX=that.x;that.startY=that.y;that.pointX=point.pageX;that.pointY=point.pageY;that.startTime=e.timeStamp||Date.now();if(that.options.onScrollStart)that.options.onScrollStart.call(that,e);that._bind(MOVE_EV,window);that._bind(END_EV,window);that._bind(CANCEL_EV,window);},_move:function(e){var that=this,point=hasTouch?e.touches[0]:e,deltaX=point.pageX-that.pointX,deltaY=point.pageY-that.pointY,newX=that.x+deltaX,newY=that.y+deltaY,c1,c2,scale,timestamp=e.timeStamp||Date.now();if(that.options.onBeforeScrollMove)that.options.onBeforeScrollMove.call(that,e);if(that.options.zoom&&hasTouch&&e.touches.length>1){c1=m.abs(e.touches[0].pageX-e.touches[1].pageX);c2=m.abs(e.touches[0].pageY-e.touches[1].pageY);that.touchesDist=m.sqrt(c1*c1+c2*c2);that.zoomed=true;scale=1/that.touchesDistStart*that.touchesDist*this.scale;if(scale>=1)
{escala=scale;var escalaInv=1/escala;$('.marker').css("-moz-transform","scale("+escalaInv+")");$('.marker').css("-ms-transform","scale("+escalaInv+")");$('.marker').css("-o-transform","scale("+escalaInv+")");$('.marker').css("-webkit-transform","scale("+escalaInv+")");}
$('#encajarEnPantalla').removeClass('disable');$('#zoomDown').removeClass('disable');$('#zoomUp').removeClass('disable');margenX0=($("#wrapper").width()-$("#scroller").width())/2;margenXI=($("#wrapper").width()-$("#scroller").width()*escala)/2;if(margenXI>0)
{if(escala>=1)
{$('#scroller').css("left",margenXI);}
else
{$('#scroller').css("left",margenX0);}}
else
{$('#scroller').css("left",0);}
if(scale<that.options.zoomMin)scale=0.5*that.options.zoomMin*Math.pow(2.0,scale/that.options.zoomMin);else if(scale>that.options.zoomMax)scale=2.0*that.options.zoomMax*Math.pow(0.5,that.options.zoomMax/scale);that.lastScale=scale/this.scale;newX=this.originX-this.originX*that.lastScale+this.x,newY=this.originY-this.originY*that.lastScale+this.y;this.scroller.style[transform]='translate('+newX+'px,'+newY+'px) scale('+scale+')'+translateZ;if(that.options.onZoom)that.options.onZoom.call(that,e);return;}
that.pointX=point.pageX;that.pointY=point.pageY;if(newX>0||newX<that.maxScrollX){newX=that.options.bounce?that.x+(deltaX/2):newX>=0||that.maxScrollX>=0?0:that.maxScrollX;}
if(newY>that.minScrollY||newY<that.maxScrollY){newY=that.options.bounce?that.y+(deltaY/2):newY>=that.minScrollY||that.maxScrollY>=0?that.minScrollY:that.maxScrollY;}
that.distX+=deltaX;that.distY+=deltaY;that.absDistX=m.abs(that.distX);that.absDistY=m.abs(that.distY);if(that.absDistX<6&&that.absDistY<6){return;}
if(that.options.lockDirection){if(that.absDistX>that.absDistY+5){newY=that.y;deltaY=0;}else if(that.absDistY>that.absDistX+5){newX=that.x;deltaX=0;}}
that.moved=true;that._pos(newX,newY);that.dirX=deltaX>0?-1:deltaX<0?1:0;that.dirY=deltaY>0?-1:deltaY<0?1:0;if(timestamp-that.startTime>300){that.startTime=timestamp;that.startX=that.x;that.startY=that.y;}
if(that.options.onScrollMove)that.options.onScrollMove.call(that,e);},_end:function(e){if(hasTouch&&e.touches.length!==0)return;var that=this,point=hasTouch?e.changedTouches[0]:e,target,ev,momentumX={dist:0,time:0},momentumY={dist:0,time:0},duration=(e.timeStamp||Date.now())-that.startTime,newPosX=that.x,newPosY=that.y,distX,distY,newDuration,snap,scale;that._unbind(MOVE_EV,window);that._unbind(END_EV,window);that._unbind(CANCEL_EV,window);if(that.options.onBeforeScrollEnd)that.options.onBeforeScrollEnd.call(that,e);if(that.zoomed){scale=that.scale*that.lastScale;scale=Math.max(that.options.zoomMin,scale);scale=Math.min(that.options.zoomMax,scale);that.lastScale=scale/that.scale;that.scale=scale;that.x=that.originX-that.originX*that.lastScale+that.x;that.y=that.originY-that.originY*that.lastScale+that.y;that.scroller.style[transitionDuration]='200ms';that.scroller.style[transform]='translate('+that.x+'px,'+that.y+'px) scale('+that.scale+')'+translateZ;actualX=that.x;actualY=that.y;that.zoomed=false;that.refresh();if(that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);return;}
if(!that.moved){if(hasTouch){if(that.doubleTapTimer&&that.options.zoom){clearTimeout(that.doubleTapTimer);that.doubleTapTimer=null;if(that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.zoom(that.pointX,that.pointY,that.scale==1?that.options.doubleTapZoom:1);if(that.options.onZoomEnd){setTimeout(function(){that.options.onZoomEnd.call(that,e);},200);}}else if(this.options.handleClick){that.doubleTapTimer=setTimeout(function(){that.doubleTapTimer=null;target=point.target;while(target.nodeType!=1)target=target.parentNode;if(target.tagName!='SELECT'&&target.tagName!='INPUT'&&target.tagName!='TEXTAREA'){ev=doc.createEvent('MouseEvents');ev.initMouseEvent('click',true,true,e.view,1,point.screenX,point.screenY,point.clientX,point.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);ev._fake=true;target.dispatchEvent(ev);}},that.options.zoom?250:0);}}
that._resetPos(400);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(duration<300&&that.options.momentum){momentumX=newPosX?that._momentum(newPosX-that.startX,duration,-that.x,that.scrollerW-that.wrapperW+that.x,that.options.bounce?that.wrapperW:0):momentumX;momentumY=newPosY?that._momentum(newPosY-that.startY,duration,-that.y,(that.maxScrollY<0?that.scrollerH-that.wrapperH+that.y-that.minScrollY:0),that.options.bounce?that.wrapperH:0):momentumY;newPosX=that.x+momentumX.dist;newPosY=that.y+momentumY.dist;if((that.x>0&&newPosX>0)||(that.x<that.maxScrollX&&newPosX<that.maxScrollX))momentumX={dist:0,time:0};if((that.y>that.minScrollY&&newPosY>that.minScrollY)||(that.y<that.maxScrollY&&newPosY<that.maxScrollY))momentumY={dist:0,time:0};}
if(momentumX.dist||momentumY.dist){newDuration=m.max(m.max(momentumX.time,momentumY.time),10);if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold){that.scrollTo(that.absStartX,that.absStartY,200);}
else{snap=that._snap(newPosX,newPosY);newPosX=snap.x;newPosY=snap.y;newDuration=m.max(snap.time,newDuration);}}
that.scrollTo(m.round(newPosX),m.round(newPosY),newDuration);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
if(that.options.snap){distX=newPosX-that.absStartX;distY=newPosY-that.absStartY;if(m.abs(distX)<that.options.snapThreshold&&m.abs(distY)<that.options.snapThreshold)that.scrollTo(that.absStartX,that.absStartY,200);else{snap=that._snap(that.x,that.y);if(snap.x!=that.x||snap.y!=that.y)that.scrollTo(snap.x,snap.y,snap.time);}
if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);return;}
that._resetPos(200);if(that.options.onTouchEnd)that.options.onTouchEnd.call(that,e);},_resetPos:function(time){var that=this,resetX=that.x>=0?0:that.x<that.maxScrollX?that.maxScrollX:that.x,resetY=that.y>=that.minScrollY||that.maxScrollY>0?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;if(resetX==that.x&&resetY==that.y){if(that.moved){that.moved=false;if(that.options.onScrollEnd)that.options.onScrollEnd.call(that);}
if(that.hScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.hScrollbarWrapper.style[transitionDelay]='300ms';that.hScrollbarWrapper.style.opacity='0';}
if(that.vScrollbar&&that.options.hideScrollbar){if(vendor=='webkit')that.vScrollbarWrapper.style[transitionDelay]='300ms';that.vScrollbarWrapper.style.opacity='0';}
return;}
that.scrollTo(resetX,resetY,time||0);},_wheel:function(e){var that=this,wheelDeltaX,wheelDeltaY,deltaX,deltaY,deltaScale;if('wheelDeltaX'in e){wheelDeltaX=e.wheelDeltaX/12;wheelDeltaY=e.wheelDeltaY/12;}else if('wheelDelta'in e){wheelDeltaX=wheelDeltaY=e.wheelDelta/12;}else if('detail'in e){wheelDeltaX=wheelDeltaY=-e.detail*3;}else{return;}
if(that.options.wheelAction=='zoom'){deltaScale=that.scale*Math.pow(2,1/3*(wheelDeltaY?wheelDeltaY/Math.abs(wheelDeltaY):0));if(deltaScale<that.options.zoomMin)deltaScale=that.options.zoomMin;if(deltaScale>that.options.zoomMax)deltaScale=that.options.zoomMax;if(deltaScale!=that.scale){if(!that.wheelZoomCount&&that.options.onZoomStart)that.options.onZoomStart.call(that,e);that.wheelZoomCount++;that.zoom(e.pageX,e.pageY,deltaScale,400);setTimeout(function(){that.wheelZoomCount--;if(!that.wheelZoomCount&&that.options.onZoomEnd)that.options.onZoomEnd.call(that,e);},400);}
return;}
deltaX=that.x+wheelDeltaX;deltaY=that.y+wheelDeltaY;if(deltaX>0)deltaX=0;else if(deltaX<that.maxScrollX)deltaX=that.maxScrollX;if(deltaY>that.minScrollY)deltaY=that.minScrollY;else if(deltaY<that.maxScrollY)deltaY=that.maxScrollY;if(that.maxScrollY<0){that.scrollTo(deltaX,deltaY,0);}},_transitionEnd:function(e){var that=this;if(e.target!=that.scroller)return;that._unbind(TRNEND_EV);that._startAni();},_startAni:function(){var that=this,startX=that.x,startY=that.y,startTime=Date.now(),step,easeOut,animate;if(that.animating)return;if(!that.steps.length){that._resetPos(400);return;}
step=that.steps.shift();if(step.x==startX&&step.y==startY)step.time=0;that.animating=true;that.moved=true;if(that.options.useTransition){that._transitionTime(step.time);that._pos(step.x,step.y);that.animating=false;if(step.time)that._bind(TRNEND_EV);else that._resetPos(0);return;}
animate=function(){var now=Date.now(),newX,newY;if(now>=startTime+step.time){that._pos(step.x,step.y);that.animating=false;if(that.options.onAnimationEnd)that.options.onAnimationEnd.call(that);that._startAni();return;}
now=(now-startTime)/step.time-1;easeOut=m.sqrt(1-now*now);newX=(step.x-startX)*easeOut+startX;newY=(step.y-startY)*easeOut+startY;that._pos(newX,newY);if(that.animating)that.aniTime=nextFrame(animate);};animate();},_transitionTime:function(time){time+='ms';this.scroller.style[transitionDuration]=time;if(this.hScrollbar)this.hScrollbarIndicator.style[transitionDuration]=time;if(this.vScrollbar)this.vScrollbarIndicator.style[transitionDuration]=time;},_momentum:function(dist,time,maxDistUpper,maxDistLower,size){var deceleration=0.0006,speed=m.abs(dist)/time,newDist=(speed*speed)/(2*deceleration),newTime=0,outsideDist=0;if(dist>0&&newDist>maxDistUpper){outsideDist=size/(6/(newDist/speed*deceleration));maxDistUpper=maxDistUpper+outsideDist;speed=speed*maxDistUpper/newDist;newDist=maxDistUpper;}else if(dist<0&&newDist>maxDistLower){outsideDist=size/(6/(newDist/speed*deceleration));maxDistLower=maxDistLower+outsideDist;speed=speed*maxDistLower/newDist;newDist=maxDistLower;}
newDist=newDist*(dist<0?-1:1);newTime=speed/deceleration;return{dist:newDist,time:m.round(newTime)};},_offset:function(el){var left=-el.offsetLeft,top=-el.offsetTop;while(el=el.offsetParent){left-=el.offsetLeft;top-=el.offsetTop;}
if(el!=this.wrapper){left*=this.scale;top*=this.scale;}
return{left:left,top:top};},_snap:function(x,y){var that=this,i,l,page,time,sizeX,sizeY;page=that.pagesX.length-1;for(i=0,l=that.pagesX.length;i<l;i++){if(x>=that.pagesX[i]){page=i;break;}}
if(page==that.currPageX&&page>0&&that.dirX<0)page--;x=that.pagesX[page];sizeX=m.abs(x-that.pagesX[that.currPageX]);sizeX=sizeX?m.abs(that.x-x)/sizeX*500:0;that.currPageX=page;page=that.pagesY.length-1;for(i=0;i<page;i++){if(y>=that.pagesY[i]){page=i;break;}}
if(page==that.currPageY&&page>0&&that.dirY<0)page--;y=that.pagesY[page];sizeY=m.abs(y-that.pagesY[that.currPageY]);sizeY=sizeY?m.abs(that.y-y)/sizeY*500:0;that.currPageY=page;time=m.round(m.max(sizeX,sizeY))||200;return{x:x,y:y,time:time};},_bind:function(type,el,bubble){(el||this.scroller).addEventListener(type,this,!!bubble);},_unbind:function(type,el,bubble){(el||this.scroller).removeEventListener(type,this,!!bubble);},destroy:function(){var that=this;that.scroller.style[transform]='';that.hScrollbar=false;that.vScrollbar=false;that._scrollbar('h');that._scrollbar('v');that._unbind(RESIZE_EV,window);that._unbind(START_EV);that._unbind(MOVE_EV,window);that._unbind(END_EV,window);that._unbind(CANCEL_EV,window);if(!that.options.hasTouch){that._unbind('DOMMouseScroll');that._unbind('mousewheel');}
if(that.options.useTransition)that._unbind(TRNEND_EV);if(that.options.checkDOMChanges)clearInterval(that.checkDOMTime);if(that.options.onDestroy)that.options.onDestroy.call(that);},refresh:function(){var that=this,offset,i,l,els,pos=0,page=0;if(that.scale<that.options.zoomMin)that.scale=that.options.zoomMin;that.wrapperW=that.wrapper.clientWidth||1;that.wrapperH=that.wrapper.clientHeight||1;that.minScrollY=-that.options.topOffset||0;that.scrollerW=m.round(that.scroller.offsetWidth*that.scale);that.scrollerH=m.round((that.scroller.offsetHeight+that.minScrollY)*that.scale);that.maxScrollX=that.wrapperW-that.scrollerW;that.maxScrollY=that.wrapperH-that.scrollerH+that.minScrollY;that.dirX=0;that.dirY=0;if(that.options.onRefresh)that.options.onRefresh.call(that);that.hScroll=that.options.hScroll&&that.maxScrollX<0;that.vScroll=that.options.vScroll&&(!that.options.bounceLock&&!that.hScroll||that.scrollerH>that.wrapperH);that.hScrollbar=that.hScroll&&that.options.hScrollbar;that.vScrollbar=that.vScroll&&that.options.vScrollbar&&that.scrollerH>that.wrapperH;offset=that._offset(that.wrapper);that.wrapperOffsetLeft=-offset.left;that.wrapperOffsetTop=-offset.top;if(typeof that.options.snap=='string'){that.pagesX=[];that.pagesY=[];els=that.scroller.querySelectorAll(that.options.snap);for(i=0,l=els.length;i<l;i++){pos=that._offset(els[i]);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;that.pagesX[i]=pos.left<that.maxScrollX?that.maxScrollX:pos.left*that.scale;that.pagesY[i]=pos.top<that.maxScrollY?that.maxScrollY:pos.top*that.scale;}}else if(that.options.snap){that.pagesX=[];while(pos>=that.maxScrollX){that.pagesX[page]=pos;pos=pos-that.wrapperW;page++;}
if(that.maxScrollX%that.wrapperW)that.pagesX[that.pagesX.length]=that.maxScrollX-that.pagesX[that.pagesX.length-1]+that.pagesX[that.pagesX.length-1];pos=0;page=0;that.pagesY=[];while(pos>=that.maxScrollY){that.pagesY[page]=pos;pos=pos-that.wrapperH;page++;}
if(that.maxScrollY%that.wrapperH)that.pagesY[that.pagesY.length]=that.maxScrollY-that.pagesY[that.pagesY.length-1]+that.pagesY[that.pagesY.length-1];}
that._scrollbar('h');that._scrollbar('v');if(!that.zoomed){that.scroller.style[transitionDuration]='0';that._resetPos(400);}},scrollTo:function(x,y,time,relative){var that=this,step=x,i,l;that.stop();if(!step.length)step=[{x:x,y:y,time:time,relative:relative}];for(i=0,l=step.length;i<l;i++){if(step[i].relative){step[i].x=that.x-step[i].x;step[i].y=that.y-step[i].y;}
that.steps.push({x:step[i].x,y:step[i].y,time:step[i].time||0});}
that._startAni();},scrollToElement:function(el,time){var that=this,pos;el=el.nodeType?el:that.scroller.querySelector(el);if(!el)return;pos=that._offset(el);pos.left+=that.wrapperOffsetLeft;pos.top+=that.wrapperOffsetTop;pos.left=pos.left>0?0:pos.left<that.maxScrollX?that.maxScrollX:pos.left;pos.top=pos.top>that.minScrollY?that.minScrollY:pos.top<that.maxScrollY?that.maxScrollY:pos.top;time=time===undefined?m.max(m.abs(pos.left)*2,m.abs(pos.top)*2):time;that.scrollTo(pos.left,pos.top,time);},scrollToPage:function(pageX,pageY,time){var that=this,x,y;time=time===undefined?400:time;if(that.options.onScrollStart)that.options.onScrollStart.call(that);if(that.options.snap){pageX=pageX=='next'?that.currPageX+1:pageX=='prev'?that.currPageX-1:pageX;pageY=pageY=='next'?that.currPageY+1:pageY=='prev'?that.currPageY-1:pageY;pageX=pageX<0?0:pageX>that.pagesX.length-1?that.pagesX.length-1:pageX;pageY=pageY<0?0:pageY>that.pagesY.length-1?that.pagesY.length-1:pageY;that.currPageX=pageX;that.currPageY=pageY;x=that.pagesX[pageX];y=that.pagesY[pageY];}else{x=-that.wrapperW*pageX;y=-that.wrapperH*pageY;if(x<that.maxScrollX)x=that.maxScrollX;if(y<that.maxScrollY)y=that.maxScrollY;}
that.scrollTo(x,y,time);},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(MOVE_EV,window);this._unbind(END_EV,window);this._unbind(CANCEL_EV,window);},enable:function(){this.enabled=true;},stop:function(){if(this.options.useTransition)this._unbind(TRNEND_EV);else cancelFrame(this.aniTime);this.steps=[];this.moved=false;this.animating=false;},zoom:function(x,y,scale,time){var that=this,relScale=scale/that.scale;if(!that.options.useTransform)return;that.zoomed=true;time=time===undefined?200:time;x=x-that.wrapperOffsetLeft-that.x;y=y-that.wrapperOffsetTop-that.y;that.x=x-x*relScale+that.x;that.y=y-y*relScale+that.y;that.scale=scale;that.refresh();that.x=that.x>0?0:that.x<that.maxScrollX?that.maxScrollX:that.x;that.y=that.y>that.minScrollY?that.minScrollY:that.y<that.maxScrollY?that.maxScrollY:that.y;that.scroller.style[transitionDuration]=time+'ms';that.scroller.style[transform]='translate('+that.x+'px,'+that.y+'px) scale('+scale+')'+translateZ;that.zoomed=false;},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating;}};function prefixStyle(style){if(vendor==='')return style;style=style.charAt(0).toUpperCase()+style.substr(1);return vendor+style;}
dummyStyle=null;if(typeof exports!=='undefined')exports.iScroll=iScroll;else window.iScroll=iScroll;})(window,document);