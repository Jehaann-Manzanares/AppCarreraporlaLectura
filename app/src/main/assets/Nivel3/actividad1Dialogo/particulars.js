function crear()
{var divBotones=$("<div>",{id:"divBotones"});$("#lienzo").append(divBotones);var divSecuencias=$("<div>",{id:"contentSecuencias"});$("#lienzo").append(divSecuencias);cargarElementosBotones();}
function cargarElementosBotones()
{var divConmutador=$("<div>",{id:"conmutador"});$("#divBotones").append(divConmutador);var divUnoAUno=$("<div>",{id:"unoauno","class":"btn"});$("#conmutador").append(divUnoAUno);var divComenzar=$("<div>",{id:"comenzarU","class":"estadoComenzar"});$(divComenzar).html("<span class='titBtn'>"+txtComenzar+"</span><span class='txtBtn'>"+txtFraseFrase+"</span>");$("#unoauno").append(divComenzar);var divPausar=$("<div>",{id:"pausarU","class":"estadoPausar",css:{"display":"none"}});$(divPausar).html("<div class='iconEstadoPlayer'></div>");$("#unoauno").append(divPausar);var divReanudar=$("<div>",{id:"reanudarU","class":"estadoReanudar",css:{"display":"none"}});$(divReanudar).html("<div class='iconEstadoPlayer'></div>");$("#unoauno").append(divReanudar);var divSiguiente=$("<div>",{id:"siguienteU","class":"estadoSiguiente",css:{"display":"none"}});$(divSiguiente).html("<div class='iconEstadoPlayer'></div><span class='titBtn'>"+txtSiguiente+"</span>");$("#unoauno").append(divSiguiente);var divError=$("<div>",{id:"errorU","class":"estadoError",css:{"display":"none"}});$("#unoauno").append(divError);var divSecuencial=$("<div>",{id:"secuencial","class":"btn"});$("#conmutador").append(divSecuencial);var divComenzar=$("<div>",{id:"comenzarS","class":"estadoComenzar"});$(divComenzar).html("<span class='titBtn'>"+txtComenzar+"</span><span class='txtBtn'>"+txtReproducirTodo+"</span>");$("#secuencial").append(divComenzar);var divPausar=$("<div>",{id:"pausarS","class":"estadoPausar",css:{"display":"none"}});$(divPausar).html("<div class='iconEstadoPlayer'></div>");$("#secuencial").append(divPausar);var divReanudar=$("<div>",{id:"reanudarS","class":"estadoReanudar",css:{"display":"none"}});$(divReanudar).html("<div class='iconEstadoPlayer'></div>");$("#secuencial").append(divReanudar);var divError=$("<div>",{id:"errorS","class":"estadoError",css:{"display":"none"}});$("#secuencial").append(divError);$("#unoauno,#secuencial").click(activarModo);var rutaAudio=rutaRecursos+audios[0]["audio"];var rutaAudioOgg=rutaRecursosInicio+audios[0]["audio"];var audioCadena="<audio id='pistaAudio'><source id='pistaAudioMP3' src='"+rutaAudio+"' type='audio/mpeg'></source><source id='pistaAudioOGG' src='"+rutaAudio.substring(0,rutaAudio.length-3)+"ogg' type='audio/ogg'></source><source id='pistaAudioOGG2' src='"+rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg' onError='errores();' type='audio/ogg'></source></audio>";$("#divBotones").append(audioCadena);cargarSecuencias();}
function cargarSecuencias()
{var cadena="<ol>";for(i=0;i<audios.length;i++)
{if(i<10)var ix="0"+i;else var ix=i;for(j=0;j<participantes.length;j++)
{if(j<10)var jx="0"+j;else var jx=j;if(participantes[j]["id"]==audios[i]["id"])
{var rutaImagen=rutaRecursos+participantes[j]["imagen"];if(participantes[j]["imagen"]=="")rutaImagen="img_html5/personajeDefault.png";var texto=audios[i]["texto"];if(texto_visible=="no")texto="";var claseAdicional="";if(participantes[j]["interpretadar_alumno"]=="si")claseAdicional="interpretado";cadena+="<li id='elementoLista"+ix+"'>";cadena+="<div id='gnlPersonaje"+ix+"' class='personaje "+claseAdicional+"'>";cadena+="<div id='imgPersonaje"+ix+"' class='imgPersonaje'>";cadena+="<div id='sndPersonaje"+ix+"' class='soundOffImagen'></div>";cadena+="<img id='imaPersonaje"+ix+"' src='"+rutaImagen+"' width='200' height='200' alt='"+participantes[j]["nombre"]+"' onError='errorImagen(this);'>";cadena+="</div>";cadena+="<div id='silPersonaje"+ix+"' class='silenciaParticipa unselectable' unselectable='on'></div>";cadena+="</div>";cadena+="<div id='secPersonaje"+ix+"' class='secuenciaTexto'>";cadena+="<div id='cntPersonaje"+ix+"' class='contentSecuencia'>";cadena+="<div id='nomPersonaje"+ix+"' class='nombrePersonaje'>"+participantes[j]["nombre"]+"</div>";cadena+="<div id='txtPersonaje"+ix+"' class='txtSecuencia'>"+texto+"</div>";cadena+="</div>";cadena+="</div>";cadena+="</li>";}}}
cadena+="</ol>";$("#contentSecuencias").append(cadena);$("li").click(activaAudioDesdeTexto);};function extraerDatos()
{tipo_actividad="Dialogo";try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
try{botonReinicio=xmlDoc.getElementsByTagName("boton_reiniciar")[0].childNodes[0].nodeValue;}catch(e){botonReinicio='visible';}
try{colorFuente=xmlDoc.getElementsByTagName("color_fuente")[0].childNodes[0].nodeValue;colorFuenteB=xmlDoc.getElementsByTagName("color_fuente_b")[0].childNodes[0].nodeValue;colorFuenteInt=colorFuente.substring(2,colorFuente.length);colorFuente="#"+colorFuente.substring(2,colorFuente.length);colorFuenteB="#"+colorFuenteB.substring(2,colorFuenteB.length);}catch(e){colorFuente="#FFFFFF";colorFuenteB="#111111";}
colorFondo=xmlDoc.getElementsByTagName("color_fondo_h")[0].childNodes[0].nodeValue;colorFondoInt=colorFondo.substring(2,colorFondo.length);colorFondo="#"+colorFondo.substring(2,colorFondo.length);colorBotones=xmlDoc.getElementsByTagName("color_botones_h")[0].childNodes[0].nodeValue;colorBotones=colorBotones.substring(2,colorBotones.length);try{logoPersonalizado=xmlDoc.getElementsByTagName("logoPersonalizado")[0].childNodes[0].nodeValue;}catch(e){logoPersonalizado="";}
try{franjaPersonalizada=xmlDoc.getElementsByTagName("franjaPersonalizada")[0].childNodes[0].nodeValue;}catch(e){franjaPersonalizada="";}
sensible_mayusculas="noDefinido";sensible_acentos="noDefinido";sensible_mayusculas_ocultar="si";sensible_acentos_ocultar="si";numero_intentos="noDefinido";tiempo=0;if(xmlDoc.getElementsByTagName("autor")[0].childNodes.length==0){autor='';}else{autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;}
descripcionUsuario=xmlDoc.getElementsByTagName("descripcionUsuario")[0].childNodes[0].nodeValue;registro=xmlDoc.getElementsByTagName("registro")[0];descripcion=xmlDoc.getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;enunciado=xmlDoc.getElementsByTagName("enunciado_edu")[0].childNodes[0].nodeValue;tiempo_entre_secuencia=xmlDoc.getElementsByTagName("tiempo_entre_secuencia")[0].childNodes[0].nodeValue;texto_visible=xmlDoc.getElementsByTagName("texto_visible")[0].childNodes[0].nodeValue;num_personajes=xmlDoc.getElementsByTagName("num_personajes")[0].childNodes[0].nodeValue;participantes=new Array();var personajes=xmlDoc.getElementsByTagName("personaje");for(i=0;i<personajes.length;i++)
{var datosPersonaje=new Array();datosPersonaje["id"]=personajes[i].attributes.getNamedItem("id").value;datosPersonaje["nombre"]=personajes[i].attributes.getNamedItem("nombre").value;datosPersonaje["interpretadar_alumno"]=personajes[i].attributes.getNamedItem("interpretadar_alumno").value;if(datosPersonaje["interpretadar_alumno"]=="si")datosPersonaje["silencio"]=1;else datosPersonaje["silencio"]=0;datosPersonaje["imagen"]=personajes[i].attributes.getNamedItem("imagen").value;participantes[i]=datosPersonaje;}
audios=new Array();var secuencias=xmlDoc.getElementsByTagName("fragmento_audio");for(i=0;i<secuencias.length;i++)
{var datosSecuencia=new Array();datosSecuencia["id"]=secuencias[i].attributes.getNamedItem("id").value;datosSecuencia["audio"]=secuencias[i].getElementsByTagName("audio")[0].childNodes[0].nodeValue;datosSecuencia["texto"]=secuencias[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue;datosSecuencia["silencio"]=0;audios[i]=datosSecuencia;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtPuntos=idioma.getElementsByTagName("txtPuntos")[0].childNodes[0].nodeValue;txtTiempo=idioma.getElementsByTagName("txtTiempo")[0].childNodes[0].nodeValue;txtTituloErrorAudio=idioma.getElementsByTagName("txtTituloErrorAudio")[0].childNodes[0].nodeValue;txtErrorAudioSoportado=idioma.getElementsByTagName("txtErrorAudioSoportado")[0].childNodes[0].nodeValue;txtAceptar=idioma.getElementsByTagName("txtAceptar")[0].childNodes[0].nodeValue;txtComenzar=idioma.getElementsByTagName("txtComenzar")[0].childNodes[0].nodeValue;txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAyuda=idioma.getElementsByTagName("txtAyuda")[0].childNodes[0].nodeValue;txtMostrarMas=idioma.getElementsByTagName("txtMostrarMas")[0].childNodes[0].nodeValue;txtMostrarMenos=idioma.getElementsByTagName("txtMostrarMenos")[0].childNodes[0].nodeValue;txtReiniciar=idioma.getElementsByTagName("txtReiniciar")[0].childNodes[0].nodeValue;txtPantallaCompleta=idioma.getElementsByTagName("txtPantallaCompleta")[0].childNodes[0].nodeValue;txtBoxRespuestaCorrecta="";txtMayusculasMinusculas="";txtAcentos="";txtSensible="";txtTiempoMaximo="";txtSensible="";txtVolverJugar="";txtRegistrarse="";txtAcceder="";txtCompartirResultado="";txtImprimir="";txtVolverA=idioma.getElementsByTagName("txtVolver1")[0].childNodes[0].nodeValue;txtFraseFrase=idioma.getElementsByTagName("txtVolver2")[0].childNodes[0].nodeValue;txtReanudar=idioma.getElementsByTagName("txtContinuar1")[0].childNodes[0].nodeValue;txtEstaFrase=idioma.getElementsByTagName("txtContinuar2")[0].childNodes[0].nodeValue;txtPausar=idioma.getElementsByTagName("txtPausar1")[0].childNodes[0].nodeValue;txtSiguiente=idioma.getElementsByTagName("txtSiguiente1")[0].childNodes[0].nodeValue;txtFrase=idioma.getElementsByTagName("txtSiguiente2")[0].childNodes[0].nodeValue;txtContinuo=idioma.getElementsByTagName("txtVolverCnt2")[0].childNodes[0].nodeValue;txtReproducirTodo=idioma.getElementsByTagName("txtComenzarCnt2")[0].childNodes[0].nodeValue;txtLaReproduccion=idioma.getElementsByTagName("txtContinuarCnt2")[0].childNodes[0].nodeValue;txtSocial=idioma.getElementsByTagName("txtSocial")[0].childNodes[0].nodeValue;}
function inicializarElementos()
{inicializarColores();inicializarEventosPrincipales();inicializarPantallaInicial();inicializarParametros();inicializarTituloAct();inicializarRecargar();inicializarAyuda();inicializarRegistro();}
function inicializarEventosPrincipales()
{$(window).resize(function(){redimensionar();});};function comenzar()
{$('#contentPreActividad').hide();$('#contentAct').css('top',0);idInterval=setInterval(contador,1000);}
function redimensionar()
{cargarDescripcionInicio();}
var modoReproduccion="unoauno";function activarModo(e)
{if(e!="desdeTexto")
{e.preventDefault();var id=e.target.getAttribute("id");if((id!="secuencial")||(id!="unoauno"))id=$(e.target).parent().attr("id");if((id!="secuencial")||(id!="unoauno"))id=$(e.target).parent().parent().attr("id");}
else
{var id=modoReproduccion;}
if(id=="secuencial")
{$("#unoauno").removeClass("btn-primary");$("#reanudarU").hide();$("#pausarU").hide();$("#siguienteU").hide();$('#errorU').hide();$("#comenzarU").show();$("#secuencial").addClass("btn-primary");modoReproduccion="secuencial";if($("#comenzarS").css("display")!="none")
{$("#comenzarS").hide();$("#pausarS").show();gestionReproducir(1);}
else if($("#pausarS").css("display")!="none")
{$("#pausarS").hide();$("#reanudarS").show();gestionReproducir(0);$("#secuencial").removeClass("btn-primary");}
else if($("#reanudarS").css("display")!="none")
{$("#reanudarS").hide();$("#pausarS").show();gestionReproducir(1);}}
else if(id=="unoauno")
{$("#secuencial").removeClass("btn-primary");$("#reanudarS").hide();$("#pausarS").hide();$('#errorS').hide();$("#comenzarS").show();$("#unoauno").addClass("btn-primary");modoReproduccion="unoauno";if($("#comenzarU").css("display")!="none")
{$("#comenzarU").hide();$("#pausarU").show();gestionReproducir(1);}
else if($("#pausarU").css("display")!="none")
{$("#pausarU").hide();$("#reanudarU").show();gestionReproducir(0);$("#unoauno").removeClass("btn-primary");}
else if($("#reanudarU").css("display")!="none")
{$("#reanudarU").hide();$("#pausarU").show();gestionReproducir(1);}
else if($("#siguienteU").css("display")!="none")
{$("#siguienteU").hide();$("#pausarU").show();gestionReproducir(1);}}}
function gestionReproducir(n)
{if(n==1)
{marcarElementos();reproducir();}
else
{document.getElementById("pistaAudio").pause();clearTimeout(timeoutFinal);}}
function marcarElementos()
{if(numActivo<10)var numActivox="0"+numActivo;else var numActivox=numActivo;$("li").removeClass("textoActivo");$("#elementoLista"+numActivox).addClass("textoActivo");$("#contentSecuencias").scrollTo($("#elementoLista"+numActivox),600);}
var compruebaFin=0;function reproducir()
{document.getElementById("pistaAudio").pause();if(safariPC())loadSafari();else
{document.getElementById("pistaAudio").load();document.getElementById("pistaAudio").play();for(j=0;j<participantes.length;j++)
{if(audios[numActivo]["id"]==participantes[j]["id"])
{if(participantes[j]["interpretadar_alumno"]=="si")
{document.getElementById("pistaAudio").volume=0;}
else
{document.getElementById("pistaAudio").volume=1;}}}
controlFinalAudio();}}
function loadSafari()
{var contenido=$("#pistaAudio").html();$("#pistaAudio").html("");$("#pistaAudio").html(contenido);setTimeout(function(){document.getElementById("pistaAudio").play();for(j=0;j<participantes.length;j++)
{if(audios[numActivo]["id"]==participantes[j]["id"])
{if(participantes[j]["interpretadar_alumno"]=="si")
{document.getElementById("pistaAudio").volume=0;}
else
{document.getElementById("pistaAudio").volume=1;}}}
controlFinalAudio();},500);}
var timeoutFinal=0;var timeoutParcial=0;function controlFinalAudio()
{if(document.getElementById("pistaAudio").ended)
{clearTimeout(timeoutParcial);timeoutParcial=setTimeout(function(){gestionAudios();},tiempo_entre_secuencia*1000);}
else
{timeoutFinal=setTimeout(function(){controlFinalAudio("pistaAudio");},1000);for(m=0;m<participantes.length;m++)
{if(audios[numActivo]["id"]==participantes[m]["id"])
{if(participantes[m]["silencio"]==1)
{document.getElementById("pistaAudio").volume=0;}
else
{if(audios[numActivo]["silencio"]==1)document.getElementById("pistaAudio").volume=0;else document.getElementById("pistaAudio").volume=1;}}}}}
var numActivo=0;function gestionAudios()
{numActivo++;if(numActivo<audios.length)
{var rutaAudio=rutaRecursos+audios[numActivo]["audio"];var rutaAudioOgg=rutaRecursosInicio+audios[numActivo]["audio"];$("#pistaAudioMP3").attr("src",rutaAudio);$("#pistaAudioOGG").attr("src",rutaAudio.substring(0,rutaAudio.length-3)+"ogg");$("#pistaAudioOGG2").attr("src",rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg");if(modoReproduccion=="secuencial")
{gestionReproducir(1);marcarElementos();}
else
{$("#reanudarU").hide();$("#pausarU").hide();$("#comenzarU").hide();$("#siguienteU").show();$("#unoauno").removeClass("btn-primary");}}
else
{reiniciarDialogo();if(registroRealizado==0)registraAplicacion();}}
function reiniciarDialogo()
{numActivo=0;var rutaAudio=rutaRecursos+audios[numActivo]["audio"];var rutaAudioOgg=rutaRecursosInicio+audios[numActivo]["audio"];$("#pistaAudioMP3").attr("src",rutaAudio);$("#pistaAudioOGG").attr("src",rutaAudio.substring(0,rutaAudio.length-3)+"ogg");$("#pistaAudioOGG2").attr("src",rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg");$("#comenzarU").show();$("#reanudarU").hide();$("#pausarU").hide();$("#siguienteU").hide();$('#errorU').hide();$("#unoauno").removeClass("btn-primary");$("#comenzarS").show();$("#reanudarS").hide();$("#pausarS").hide();$('#errorS').hide();$("#secuencial").removeClass("btn-primary");$("li").removeClass("textoActivo");$("#contentSecuencias").scrollTo(0,1000);}
function activaAudioDesdeTexto(e)
{var id=e.target.getAttribute("id");var cadenaId=id.substring(12,14);var numId=parseInt(cadenaId);if(id.substring(0,3)=="sil")
{silenciarUsuario(cadenaId);}
else
{numActivo=numId;var rutaAudio=rutaRecursos+audios[numActivo]["audio"];var rutaAudioOgg=rutaRecursosInicio+audios[numActivo]["audio"];$("#pistaAudioMP3").attr("src",rutaAudio);$("#pistaAudioOGG").attr("src",rutaAudio.substring(0,rutaAudio.length-3)+"ogg");$("#pistaAudioOGG2").attr("src",rutaAudioOgg.substring(0,rutaAudioOgg.length-3)+"ogg");activarModo("desdeTexto");if(modoReproduccion=="secuencial")
{if($("#pausarS").css("display")=="none")activarModo("desdeTexto");}
else if(modoReproduccion=="unoauno")
{if($("#pausarU").css("display")=="none")activarModo("desdeTexto");}
marcarElementos();}}
function silenciarUsuario(elem)
{if(!$("#gnlPersonaje"+elem).hasClass("silenciado"))
{$("#gnlPersonaje"+elem).addClass("silenciado");audios[parseInt(elem,10)]["silencio"]=1;}
else
{$("#gnlPersonaje"+elem).removeClass("silenciado");audios[parseInt(elem,10)]["silencio"]=0;}}
function errores()
{$("li").removeClass("textoActivo");$("#secuencial").removeClass("btn-primary");$("#comenzarS").hide();$("#reanudarS").hide();$("#pausarS").hide();$("#errorS").show();$('#errorS').attr("title",txtErrorAudioSoportado);$("#unoauno").removeClass("btn-primary");$("#comenzarU").hide();$("#reanudarU").hide();$("#pausarU").hide();$("#siguienteU").hide();$("#errorU").show();$('#errorU').attr("title",txtErrorAudioSoportado);}
function errorImagen(imagen)
{$(imagen).attr("src","img_html5/personajeDefault.png");}
var registroRealizado=0;function registraAplicacion()
{finalizado=1;finOK=1;setRegistroPuntuacion("100");var tiempoFinal=$("#numTiempo").html();for(i=0;i<tiempoFinal.length;i++)
{if(tiempoFinal.charAt(i)==":")
{posicion=i;break;}}
var minutos=parseInt(tiempoFinal.substring(0,posicion),10);var segundos=parseInt(tiempoFinal.substring(posicion+1,posicion+3),10);tiempoFinal=segundos+minutos*60;setRegistroTiempo(tiempoFinal);finalizar();registroRealizado=1;}
;/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);