function crear()
{var divCabecero=$("<div>",{id:"divCabecero","class":"cabecero"});$("#lienzo").append(divCabecero);var divErrores=$("<div>",{id:"divErrores","class":"errores"});$("#lienzo").append(divErrores);$("#divErrores").hide();var divEscribir=$("<div>",{id:"divEscribir","class":"escribir"});$("#lienzo").append(divEscribir);$("#divEscribir").html("<textarea id='campoEscribir' onpaste='return false' spellcheck='false' placeholder='"+txtTuRespuesta+"'></textarea>");$("#campoEscribir").attr("disabled",true);cargarPistas();}
function cargarPistas()
{var ol=$("<ol>");for(k=0;k<listaAudios.length;k++)
{if(k<10)var kx="0"+k;else var kx=k;var li=$("<li>");var divPistas=$("<div>",{id:"divPista"+kx,"class":"cajaPista"});$(li).append(divPistas);$(ol).append(li);}
$("#contenidoPista").append(ol);cargarElementosAudio();}
function cargarElementosAudio()
{var cadenaAudio="<div class='pistaAudio' id='pAudio'>";cadenaAudio+="<div id='audioTag'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudio'>";cadenaAudio+="<div class='errorSound' id='errorAudio'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOK'><span id='iconoAudio' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$("#divCabecero").append(cadenaAudio);var rutaAudio=rutaRecursos+listaAudios[0];var rutaAudioOgg=rutaRecursosInicio+listaAudios[0];var audioCadena="<audio id='pistaAudio'><source id='pistaAudioMP3' src='"+rutaAudio+"' type='audio/mpeg'></source><source id='pistaAudioOGG' src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source id='pistaAudioOGG2' src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores();' type='audio/ogg'></source></audio>";$('#audioTag').html(audioCadena);$('#btnAudio').click(function(e){e.preventDefault();gestionReproducir("pistaAudio","iconoAudio");});$("#divCabecero").append("<a href='#' id='btnSiguiente' class='btn'>"+txtSiguiente+"</a>");$("#btnSiguiente").click(function(e){e.preventDefault();cambiarAudio("siguiente");});$("#divCabecero").append("<a href='#' id='btnInicio' class='btn btn-primary'>"+txtComenzar+"</a>");$("#btnInicio").click(function(e){e.preventDefault();iniciarDictado();});$("#pAudio").hide();$("#btnSiguiente").hide();};function extraerDatos()
{tipo_actividad="Dictado";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
try{botonReinicio=xmlDoc.getElementsByTagName("boton_reiniciar")[0].childNodes[0].nodeValue;}catch(e){botonReinicio='visible';}
try{colorFuente=xmlDoc.getElementsByTagName("color_fuente")[0].childNodes[0].nodeValue;colorFuenteB=xmlDoc.getElementsByTagName("color_fuente_b")[0].childNodes[0].nodeValue;colorFuenteInt=colorFuente.substring(2,colorFuente.length);colorFuente="#"+colorFuente.substring(2,colorFuente.length);colorFuenteB="#"+colorFuenteB.substring(2,colorFuenteB.length);}catch(e){colorFuente="#FFFFFF";colorFuenteB="#111111";}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
try{franjaPersonalizada=xmlDoc.getElementsByTagName("franjaPersonalizada")[0].childNodes[0].nodeValue;}catch(e){franjaPersonalizada="";}
numero_intentos="noDefinido";correccion=xmlDoc.getElementsByTagName("correccion")[0].childNodes[0].nodeValue;forma_correccion=xmlDoc.getElementsByTagName("forma_correccion")[0].childNodes[0].nodeValue;puntos_penalizacion=xmlDoc.getElementsByTagName("puntos_penalizacion")[0].childNodes[0].nodeValue;if(xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0]!=undefined)
{sensible_mayusculas=xmlDoc.getElementsByTagName("sensible_mayusculas")[0].childNodes[0].nodeValue;}
else
{sensible_mayusculas="no";}
if(xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0]!=undefined)
{sensible_acentos=xmlDoc.getElementsByTagName("sensible_acentos")[0].childNodes[0].nodeValue;}
else
{sensible_acentos="no";}
if(xmlDoc.getElementsByTagName("sensible_mayusculas_ocultar")[0].childNodes[0]!=undefined)
{sensible_mayusculas_ocultar=xmlDoc.getElementsByTagName("sensible_mayusculas_ocultar")[0].childNodes[0].nodeValue;}
else
{sensible_mayusculas_ocultar="no";}
if(xmlDoc.getElementsByTagName("sensible_acentos_ocultar")[0].childNodes[0]!=undefined)
{sensible_acentos_ocultar=xmlDoc.getElementsByTagName("sensible_acentos_ocultar")[0].childNodes[0].nodeValue;}
else
{sensible_acentos_ocultar="no";}
if(xmlDoc.getElementsByTagName("sensible_saltos")[0].childNodes[0]!=undefined)
{sensible_saltos=xmlDoc.getElementsByTagName("sensible_saltos")[0].childNodes[0].nodeValue;}
else
{sensible_saltos="no";}
if(xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0]!=undefined)
{tiempo=xmlDoc.getElementsByTagName("tiempo")[0].childNodes[0].nodeValue;}
else
{tiempo="no";}
if(tiempo=="si")tiempo=xmlDoc.getElementsByTagName("tiempo")[0].attributes.getNamedItem("maximo").value;else if(tiempo=="no")tiempo=0;if(xmlDoc.getElementsByTagName("autor")[0].childNodes.length==0){autor='';}else{autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;}
descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;puntos=xmlDoc.getElementsByTagName("puntos")[0].childNodes[0].nodeValue;tiempo_entre_secuencia=xmlDoc.getElementsByTagName("tiempo_entre_secuencia")[0].childNodes[0].nodeValue;texto=xmlDoc.getElementsByTagName("texto")[0].childNodes[0].nodeValue;audios=xmlDoc.getElementsByTagName("audio");listaAudios=[];for(i=0;i<audios.length;i++)
{listaAudios[i]=audios[i].childNodes[0].nodeValue;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtNumFallos=idioma.getElementsByTagName("txtNumFallos")[0].childNodes[0].nodeValue;nIntentos=idioma.getElementsByTagName("nIntentos")[0].childNodes[0].nodeValue;txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTiempoRestante=idioma.getElementsByTagName("txtTiempoRestante")[0].childNodes[0].nodeValue;comprobar=idioma.getElementsByTagName("comprobar")[0].childNodes[0].nodeValue;txtRespuestaIncorrecta=idioma.getElementsByTagName("txtRespuestaIncorrecta")[0].childNodes[0].nodeValue;txtActNoSuperada=idioma.getElementsByTagName("txtActNoSuperada")[0].childNodes[0].nodeValue;txtActividadNoSuperada=idioma.getElementsByTagName("txtActividadNoSuperada")[0].childNodes[0].nodeValue;txtTiempoSuperado=idioma.getElementsByTagName("txtTiempoSuperado")[0].childNodes[0].nodeValue;txtSuperadoNumeroIntentos=idioma.getElementsByTagName("txtSuperadoNumeroIntentos")[0].childNodes[0].nodeValue;txtCerrar=idioma.getElementsByTagName("txtCerrar")[0].childNodes[0].nodeValue;txtTituloRespuestaCorrecta=idioma.getElementsByTagName("txtTituloRespuestaCorrecta")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta=idioma.getElementsByTagName("txtBoxRespuestaCorrecta")[0].childNodes[0].nodeValue;txtPalabrasErroneas=idioma.getElementsByTagName("txtPalabrasErroneas")[0].childNodes[0].nodeValue;txtTituloComprobar=idioma.getElementsByTagName("txtTituloComprobar")[0].childNodes[0].nodeValue;txtTituloDictadoModelo=idioma.getElementsByTagName("txtTituloDictadoModelo")[0].childNodes[0].nodeValue;txtTituloTuRespuesta=idioma.getElementsByTagName("txtTituloTuRespuesta")[0].childNodes[0].nodeValue;txtPausar=idioma.getElementsByTagName("txtPausar")[0].childNodes[0].nodeValue;txtContinuar=idioma.getElementsByTagName("txtContinuar")[0].childNodes[0].nodeValue;txtSiguiente=idioma.getElementsByTagName("txtSiguiente")[0].childNodes[0].nodeValue;txtSensibleMayusculas=idioma.getElementsByTagName("txtSensibleMayusculas")[0].childNodes[0].nodeValue;txtNoSensibleMayusculas=idioma.getElementsByTagName("txtNoSensibleMayusculas")[0].childNodes[0].nodeValue;txtSensibleAcentos=idioma.getElementsByTagName("txtSensibleAcentos")[0].childNodes[0].nodeValue;txtNoSensibleAcentos=idioma.getElementsByTagName("txtNoSensibleAcentos")[0].childNodes[0].nodeValue;txtRespuesta=idioma.getElementsByTagName("txtRespuesta")[0].childNodes[0].nodeValue;txtCorreccion=idioma.getElementsByTagName("txtCorreccion2")[0].childNodes[0].nodeValue;txtPistas=idioma.getElementsByTagName("txtPistas")[0].childNodes[0].nodeValue;txtTuRespuesta=idioma.getElementsByTagName("txtTuRespuesta")[0].childNodes[0].nodeValue;txtTituloErrorAudio=idioma.getElementsByTagName("txtTituloErrorAudio")[0].childNodes[0].nodeValue;txtErrorAudioSoportado=idioma.getElementsByTagName("txtErrorAudioSoportado")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtTiempoMaximo=idioma.getElementsByTagName("txtTiempoMaximo")[0].childNodes[0].nodeValue;txtSensible=idioma.getElementsByTagName("txtSensible")[0].childNodes[0].nodeValue;txtMayusculasMinusculas=idioma.getElementsByTagName("txtMayusculasMinusculas")[0].childNodes[0].nodeValue;txtAcentos=idioma.getElementsByTagName("txtAcentos")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtVolverJugar=idioma.getElementsByTagName("txtVolverJugar")[0].childNodes[0].nodeValue;txtRegistrarse=idioma.getElementsByTagName("txtRegistrarse")[0].childNodes[0].nodeValue;txtAcceder=idioma.getElementsByTagName("txtAcceder")[0].childNodes[0].nodeValue;txtCompartirResultado=idioma.getElementsByTagName("txtCompartirResultado")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtImprimir="";txtSocial=idioma.getElementsByTagName("txtSocial")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarPista();inicializarParametros();inicializarTituloAct();inicializarComprobar();inicializarAlertaCorrecta();inicializarAlertaIncorrecta();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});}
function inicializarPista()
{$('#btnCerrar').click(function(e){e.preventDefault();desactivarPista();});$("#btnPistasPie").text(txtPistas);$('#btnPistasPie').click(function(e){e.preventDefault();activarPista();});if($('#all').width()<600)
{desactivarPista();$("#btnPistasPie").show();}
else
{activarPista();$("#btnPistasPie").hide();}}
function desactivarPista()
{$('#info').removeClass('visible');$('#info').addClass('oculto');$('#shadow').removeClass('visible');$('#shadow').addClass('oculto');}
function activarPista()
{$('#info').removeClass('oculto');$('#info').addClass('visible');$('#shadow').removeClass('oculto');$('#shadow').addClass('visible');}
function inicializarComprobar()
{$("#btnComprobar").html(comprobar);$("#btnComprobar").addClass("disable");$("#btnComprobar").click(function(e){e.preventDefault();});};function comenzar()
{inicializarVariablesXapi();inicializarXapi();$('#contentPreActividad').hide();$('#contentAct').css('top',0);idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();if($('#all').width()<600)
{desactivarPista();$("#btnPistasPie").show();}
else
{activarPista();$("#btnPistasPie").hide();}}
var dictadoIniciado=0;function iniciarDictado()
{$("#btnComprobar").click(function(e){e.preventDefault();corregir();});$(".cajaPista").click(cambiarAudio);$("#pAudio").show();$("#btnInicio").hide();$("#campoEscribir").attr("disabled",false);cambiarAudio("siguiente");comprobarContenido();$("#campoEscribir").keyup(comprobarContenido);dictadoIniciado=1;}
function comprobarContenido()
{if($("#campoEscribir").val().length>0)
{$("#btnComprobar").removeClass("disable");}
else
{$("#btnComprobar").addClass("disable");}}
var numPista=0;var pistasMostradas=[];function cambiarAudio(e)
{if(e=="siguiente")
{var k=numPista;}
else
{var id=e.target.getAttribute("id");var k=parseInt(id.substring(8,10),10);numPista=k;}
$(".cajaPista").removeClass("activo");if(k<10)var kx="0"+k;else var kx=k;if(pistasMostradas[k]!=1)
{$("#divPista"+kx).html($("#divPista"+kx).html()+"<div id='numerito"+kx+"' class='numeritos'>"+(k+1)+"</div>");pistasMostradas[k]=1;}
if(numPista<audios.length)numPista++;$("#divPista"+kx).addClass("activo");var rutaAudio=rutaRecursos+listaAudios[k];var rutaAudioOgg=rutaRecursosInicio+listaAudios[k];$("#pistaAudioMP3").attr("src",rutaAudio);$("#pistaAudioOGG").attr("src",rutaAudio.substring(0,rutaAudio.length-3)+"ogg");$("#pistaAudioOGG2").attr("src",rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg");$('#btnAudio').click();if($("#iconoAudio").hasClass("iPlay"))$('#btnAudio').click();$("#btnSiguiente").hide();}
var puntosReg=100;function corregir(modo)
{var pos1=0;var pos2=0;var accion="";mod="";var trozo="";var aux="";numfallos=0;var error=0;if($("#campoEscribir").val().length>0)
{var original=texto;original=original.replace(new RegExp('\[\n]+','g'),' ');var arrayPalabrasTotal=original.split(" ");var k=0;var arrayPalabrasTotalCorregido=[];for(i=0;i<arrayPalabrasTotal.length;i++)
{if(arrayPalabrasTotal[i]!="")
{arrayPalabrasTotalCorregido[k]=arrayPalabrasTotal[i];k++;}}
numPalabrasTotal=arrayPalabrasTotalCorregido.length;var contenido=$("#campoEscribir").val();var solucion=texto.trim();if(sensible_mayusculas=="no")
{contenido=contenido.toUpperCase();solucion=solucion.toUpperCase();}
if(sensible_acentos=="no")
{contenido=borraAcentos(contenido);solucion=borraAcentos(solucion);}
if(sensible_saltos=="no")
{contenido=contenido.replace(new RegExp('\[\n]+','g'),' ');solucion=solucion.replace(new RegExp('\[\n]+','g'),' ');}
var correccion=distancia(contenido,solucion);for(i=0;i<correccion.length;i++)
{accion=correccion.charAt(i);switch(accion)
{case"X":aux=contenido.charAt(pos2);trozo=aux.split("<").join("&lt;");pos1++;pos2++;break;case"D":aux=contenido.charAt(pos2);trozo="<span class='txtSobra'>"+aux.split("<").join("&lt;")+"</span>";pos2++;numfallos++;break;case"I":aux=solucion.charAt(pos1);trozo="<span class='txtFalta'>"+aux.split("<").join("&lt;")+"</span>";pos1++;numfallos++;break;case"S":aux=contenido.charAt(pos2);trozo="<span class='txtError'>"+aux.split("<").join("&lt;")+"</span>";pos2++;pos1++;numfallos++;break;}
mod=mod+trozo;}
contenido=contenido.split("<").join("&lt;");solucion=solucion.split("<").join("&lt;");modAux=mod;modAux=replaceAll(modAux,"<span class='txtFalta'>","*");modAux=replaceAll(modAux,"<span class='txtSobra'>","*");modAux=replaceAll(modAux,"<span class='txtError'>","*");modAux=replaceAll(modAux,"</span>","");modAux=replaceAll(modAux,"* ","*");if(sensible_saltos!="no")
{modAux=modAux.replace(new RegExp('\[\n]+','g'),' ');}
arrayModAux=modAux.split(" ");numPalabrasCorrectas=0;numPalabrasErroneas=0;for(k=0;k<arrayModAux.length;k++)
{if(arrayModAux[k].indexOf("*")==-1)
{if(arrayModAux[k].length!=0)
{numPalabrasCorrectas++;}}}
numPalabrasErroneas=numPalabrasTotal-numPalabrasCorrectas;if(forma_correccion=="proporcional")
{porcentajeAcierto=100-parseInt(numPalabrasErroneas/numPalabrasTotal*100);puntosReg=porcentajeAcierto;$("#numPuntos").html(porcentajeAcierto);}
else if(forma_correccion=="penalizar")
{porcentajeAcierto=100-puntos_penalizacion*numPalabrasErroneas;if(porcentajeAcierto<0)porcentajeAcierto=0;puntosReg=porcentajeAcierto;$("#numPuntos").html(porcentajeAcierto);}
if(modo!="tiempo")
{if(porcentajeAcierto<50)
{$('#btnComprobar').unbind("click");responderEscritaXapi(numPista,solucion,contenido,0);completarXapi("KO",puntos,tiempoReg)
cargarPantallaFinal('noSuperada');}
else
{$('#btnComprobar').unbind("click");responderEscritaXapi(numPista,solucion,contenido,1);completarXapi("OK",puntos,tiempoReg)
cargarPantallaFinal('OK');}}}
else
{if(modo=="tiempo")
{$("#campoEscribir").val(" ");corregir(modo);}}}
function replaceAll(text,busca,reemplaza)
{while(text.toString().indexOf(busca)!=-1)
text=text.toString().replace(busca,reemplaza);return text;}
function distancia(cadena1,cadena2)
{var longitud1=cadena1.length;var longitud2=cadena2.length;var i=0;var j=0;var d=new Array();var pila=new Array();var caracter_i="";var caracter_j="";var coste=0;var insertar=0;var eliminar=0;var sustituir=0;var minimo=0;var maximo=Math.max(longitud1,longitud2);var respuesta="";for(i=0;i<=longitud1;i++)
{d[i]=new Array();pila[i]=new Array();}
for(i=0;i<=longitud1;i++)
{d[i][0]=i;if(i==0)
{pila[i][0]="";}
else
{pila[i][0]="D"+pila[i-1][0];}}
for(j=0;j<=longitud2;j++)
{d[0][j]=j;if(j==0)
{pila[0][j]="";}
else
{pila[0][j]="I"+pila[0][j-1];}}
for(i=1;i<=longitud1;i++)
{for(j=1;j<=longitud2;j++)
{caracter_i=cadena1.charAt(i-1);caracter_j=cadena2.charAt(j-1);if(caracter_i==caracter_j)
{coste=0;}
else
{coste=1;}
insertar=1+(d[i-1][j]);eliminar=1+(d[i][j-1]);sustituir=coste+(d[i-1][j-1]);minimo=Math.min(insertar,eliminar,sustituir);if(insertar==minimo)
{pila[i][j]=pila[i-1][j]+"D";}
else if(eliminar==minimo)
{pila[i][j]=pila[i][j-1]+"I";}
else
{if(coste)
{pila[i][j]=pila[i-1][j-1]+"S";}
else
{pila[i][j]=pila[i-1][j-1]+"X";}}
d[i][j]=minimo;}}
respuesta=pila[longitud1][longitud2];return(respuesta);}
function borraAcentos(cadenaQuitar)
{var conAcentos="áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";var sinAcentos="aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";var nueva="";var encontrada=0;for(i=0;i<cadenaQuitar.length;i++)
{encontrada=0;for(j=0;j<conAcentos.length;j++)
{if(cadenaQuitar[i]==conAcentos[j])
{nueva+=sinAcentos[j];encontrada=1;break;}}
if(encontrada==0)nueva+=cadenaQuitar[i];}
return nueva;}
function reproducir(media,icono)
{document.getElementById(media).pause();if(safariPC())loadSafari(media);else
{document.getElementById(media).load();document.getElementById(media).play();}
$("#"+icono).removeClass("iPlay");$("#"+icono).addClass("iPause");setTimeout(function(){controlFinalAudio(media,icono);},1000);}
function loadSafari(media)
{var contenido=$("#"+media).html();$("#"+media).html("");$("#"+media).html(contenido);setTimeout(function(){document.getElementById(media).play();},500);}
function gestionReproducir(media,icono)
{if($("#"+icono).hasClass("iPlay"))
{reproducir(media,icono);}
else
{$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");document.getElementById(media).pause();}}
function controlFinalAudio(media,icono)
{if(document.getElementById(media).ended)
{setTimeout(function(){$("#"+icono).addClass("iPlay");$("#"+icono).removeClass("iPause");if(numPista<audios.length)$("#btnSiguiente").show();},tiempo_entre_secuencia*1000);}
else
{setTimeout(function(){controlFinalAudio(media,icono);},1000);}}
var detAudioError=0;function errores()
{if(detAudioError==0)
{$('#errorAudio').show();$('#audioOK').hide();$('#errorAudio').attr("title",txtErrorAudioSoportado);if(dictadoIniciado==1)$("#btnSiguiente").show();}
else
{$('#errorAudioF').show();$('#audioOKF').hide();$('#errorAudioF').attr("title",txtErrorAudioSoportado);}}
function completarPantallaFinal()
{var divRespuesta=$("<div>",{id:"divRespuestaF"});var divPistasF=$("<div>",{id:"divPistasF","class":"contentPista"});var cadenaAudio="<div class='pistaAudio' id='pAudioF'>";cadenaAudio+="<div id='audioTagF'></div>";cadenaAudio+="<div class='soundPlayer' id='btnAudioF'>";cadenaAudio+="<div class='errorSound' id='errorAudioF'></div>";cadenaAudio+="<a href='#' class='btn' id='audioOKF'><span id='iconoAudioF' class='iPlayerReducido iPlay'></span></a>";cadenaAudio+="</div>";cadenaAudio+="</div>";$(divPistasF).append(cadenaAudio);var ol=$("<ol>");for(k=0;k<listaAudios.length;k++)
{if(k<10)var kx="0"+k;else var kx=k;var li=$("<li>");var divPistas=$("<div>",{id:"divPistaF"+kx,"class":"cajaPista"});var divNumerito=$("<div>",{id:"numeritoF"+kx,"class":"numeritos"});$(divNumerito).html(k+1);$(divPistas).append(divNumerito);$(li).append(divPistas);$(ol).append(li);}
$(divPistasF).append(ol);$(divRespuesta).append(divPistasF);var divPuntuacion=$("<div>",{id:"divPuntuacionF"});$(divPuntuacion).html(txtPalabrasErroneas+" <span class='numErroneas'>"+numPalabrasErroneas+"/"+""+numPalabrasTotal+"</span>");$(divRespuesta).append(divPuntuacion);var cadena="<div class='optionsView'>";cadena+="<ul>";cadena+="<li><label><input type='checkbox' id='chOriginal' checked><span>"+txtTituloDictadoModelo+"</span></label></li>";cadena+="<li><label><input type='checkbox' id='chRespuesta' checked><span>"+txtRespuesta+"</span></label></li>";cadena+="<li><label><input type='checkbox' id='chCorreccion' checked><span>"+txtCorreccion+"</span></label></li>";cadena+="</ul>";cadena+="</div>";$(divRespuesta).append(cadena);var divTodasRespuestas=$("<div>",{id:"divTodasRespuestasF","class":"viewRespuestas row"});var divRespuestaOriginal=$("<div>",{id:"divRespuestaOriginalF","class":"contentRespuestaDi unselectable"});$(divTodasRespuestas).append(divRespuestaOriginal);var divRespuestaTuRespuesta=$("<div>",{id:"divRespuestaTuRespuestaF","class":"contentRespuestaDi unselectable"});$(divTodasRespuestas).append(divRespuestaTuRespuesta);var divRespuestaCorreccion=$("<div>",{id:"divRespuestaCorreccionF","class":"contentRespuestaDi unselectable"});$(divTodasRespuestas).append(divRespuestaCorreccion);$(divRespuesta).append(divTodasRespuestas);$("#correccion").append(divRespuesta);$(".numeritos").hide();$('#divPistasF li .cajaPista').click(cargarAudioFinal);var rutaAudio=rutaRecursos+listaAudios[0];var rutaAudioOgg=rutaRecursosInicio+listaAudios[0];var audioCadena="<audio id='pistaAudioF'><source id='pistaAudioFMP3' src='"+rutaAudio+"' type='audio/mpeg'></source><source id='pistaAudioFOGG' src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source id='pistaAudioFOGG2' src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores();' type='audio/ogg'></source></audio>";$('#audioTagF').html(audioCadena);$('#btnAudioF').click(function(e){e.preventDefault();$("#divPistaF00").click();});$('label').click(gestionElementosFinal);cargarElementosPantallaFinal();}
function cargarElementosPantallaFinal()
{var cadena="<div class='titRespuesta' unselectable='on'>"+txtTituloDictadoModelo+"</div>";cadena+="<div class='txtRespuestaDi' unselectable='on'>"+texto+"</div>";cadena=cadena.replace(new RegExp('\\n','g'),'<br>');$("#divRespuestaOriginalF").html(cadena);var cadena="<div class='titRespuesta' unselectable='on'>"+txtRespuesta+"</div>";cadena+="<div class='txtRespuestaDi' unselectable='on'>"+$("#campoEscribir").val()+"</div>";cadena=cadena.replace(new RegExp('\\n','g'),'<br>');$("#divRespuestaTuRespuestaF").html(cadena);var cadena="<div class='titRespuesta' unselectable='on'>"+txtCorreccion+"</div>";cadena+="<div class='txtRespuestaDi' unselectable='on'>"+mod+"</div>";cadena=cadena.replace(new RegExp('\\n','g'),'<br>');$("#divRespuestaCorreccionF").html(cadena);}
function cargarAudioFinal(e)
{var id=e.target.getAttribute("id");var cadenaId=id.substring(9,11);var numId=parseInt(cadenaId,10);if(detAudioError==0)$('#btnAudioF').unbind("click").click(function(e){e.preventDefault();gestionReproducir("pistaAudioF","iconoAudioF");});detAudioError=1;$(".cajaPista").removeClass("activo");$("#divPistaF"+cadenaId).addClass("activo");$("#numeritoF"+cadenaId).show();var rutaAudio=rutaRecursos+listaAudios[numId];var rutaAudioOgg=rutaRecursosInicio+listaAudios[numId];$("#pistaAudioFMP3").attr("src",rutaAudio);$("#pistaAudioFOGG").attr("src",rutaAudio.substring(0,rutaAudio.length-3)+"ogg");$("#pistaAudioFOGG2").attr("src",rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg");$('#btnAudioF').click();if($("#iconoAudioF").hasClass("iPlay"))$('#btnAudioF').click();}
var numElementosF=3;function gestionElementosFinal(e)
{var id=e.target.getAttribute("id");if(id=="chOriginal")
{if($("#"+id).is(':checked'))
{$("#divRespuestaOriginalF").show();numElementosF++;}
else
{$("#divRespuestaOriginalF").hide();numElementosF--;}}
else if(id=="chRespuesta")
{if($("#"+id).is(':checked'))
{$("#divRespuestaTuRespuestaF").show();numElementosF++;}
else
{$("#divRespuestaTuRespuestaF").hide();numElementosF--;}}
else if(id=="chCorreccion")
{if($("#"+id).is(':checked'))
{$("#divRespuestaCorreccionF").show();numElementosF++;}
else
{$("#divRespuestaCorreccionF").hide();numElementosF--;}}
$("#divTodasRespuestasF").removeClass("twoBoxes").removeClass("oneBoxes");if(numElementosF==2)$("#divTodasRespuestasF").addClass("twoBoxes");else if(numElementosF==1)$("#divTodasRespuestasF").addClass("oneBoxes");}