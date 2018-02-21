window.onload=function(){rutaRecursos="/actividades/"+$(document).data("idActividad")+"/";rutaRecursos="";cargarDatosPrint();}
function cargarDatosPrint()
{xmlDoc=cargarXMLJS();if((xmlDoc!=null)&&(xmlDoc!=undefined))
{try{extraerDatosPrint();}
catch(e){errorXML();}
crearPrint();}
else
{errorXML();}}
function errorXML()
{$.get("/avisoEstructuraXml.php");$("#lienzo").html("<div id='errorXML'>"+$(document).data("loadingXmlError")+"</div>");}
function cargarXMLJS(){return jQuery.parseXML(DatosActividad);}
function extraerDatosPrint()
{try{origen_recursos=xmlDoc.getElementsByTagName("origen_recursos")[0].childNodes[0].nodeValue;}catch(e)
{origen_recursos="";}
if(origen_recursos){rutaRecursos=origen_recursos;}
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;titulo=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;filas=xmlDoc.getElementsByTagName("numero_filas")[0].childNodes[0].nodeValue;pa=[];fi=[];co=[];di=[];var palab=xmlDoc.getElementsByTagName("palabra");for(var i=0;i<palab.length;i++)
{pa[i]=palab[i].getElementsByTagName("valor")[0].childNodes[0].nodeValue;fi[i]=parseInt(palab[i].getElementsByTagName("fila")[0].childNodes[0].nodeValue);co[i]=parseInt(palab[i].getElementsByTagName("columna")[0].childNodes[0].nodeValue);di[i]=palab[i].getElementsByTagName("direccion")[0].childNodes[0].nodeValue;}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtPistas=idioma.getElementsByTagName("txtPistas")[0].childNodes[0].nodeValue;txtHuecos=idioma.getElementsByTagName("txtHuecos")[0].childNodes[0].nodeValue;txtNoPistas=idioma.getElementsByTagName("txtNoPistas")[0].childNodes[0].nodeValue;$("#pistas").click(function(){$("label").removeClass("modoSel");$("#pistasL").addClass("modoSel");modo="pistas";$("#lienzo").html('');$("ul").html('');crearPrint();});$("#huecos").click(function(){$("label").removeClass("modoSel");$("#huecosL").addClass("modoSel");modo="huecos";$("#lienzo").html('');$("ul").html('');crearPrint();});$("#noPistas").click(function(){$("label").removeClass("modoSel");$("#noPistasL").addClass("modoSel");modo="noPistas";$("#lienzo").html('');$("ul").html('');crearPrint();});$("#pistasLS").text(txtPistas);$("#huecosLS").text(txtHuecos);$("#noPistasLS").text(txtNoPistas);$("#pistasL").addClass("modoSel");$("#pistas").attr("checked","true");pistas=xmlDoc.getElementsByTagName("pistas")[0].childNodes[0].nodeValue;botonesOcultos=xmlDoc.getElementsByTagName("botonesOcultos")[0].childNodes[0].nodeValue;if(botonesOcultos=="1")
{if(pistas=="ninguna")
{$("#pistasL").removeClass("modoSel").hide();$("#huecosL").removeClass("modoSel").hide();$("#noPistasL").addClass("modoSel");$("#noPistas").attr("checked","true");modo="noPistas";}
else if(pistas=="asteriscos")
{$("#pistasL").removeClass("modoSel").hide();$("#huecosL").addClass("modoSel");$("#huecos").attr("checked","true");modo="huecos";}}
else
{$("#aprenderL").addClass("modoSel");$("#aprender").attr("checked","true");}}
var modo="pistas";function crearPrint()
{$("#txtTitAct").html(titulo);$("#textoAutor").html(txtAutor+":");$("#nombreAutor").html(autor);var tamMaximo=680;tamCasilla=parseInt(tamMaximo/filas);if(tamCasilla>35)tamCasilla=35;$("#lienzo").width(tamCasilla*filas);$("#lienzo").height(tamCasilla*filas);miLienzo=$('#lienzo');var px=0;var py=0;for(i=0;i<filas;i++)
{if(i<10)var ix="0"+i;else var ix=i;for(j=0;j<filas;j++)
{pxt=px+"px";pyt=py+"px";if(j<10)var jy="0"+j;else var jy=j;var div=$("<div>",{id:"c"+ix+"_"+jy,"class":"casilla",css:{"left":pxt,"top":pyt}});miLienzo.append(div);px=px+(tamCasilla);var tamLetra=tamCasilla-11;if(tamLetra<7)tamLetra=7;if(tamLetra>21)tamLetra=21;$("#c"+ix+"_"+jy).css({"width":tamCasilla+"px","height":tamCasilla+"px","font-size":tamLetra+"px","line-height":tamCasilla+"px"});}
px=0;py=py+(tamCasilla);}
cargarPrint();}
function cargarPrint()
{for(k=0;k<pa.length;k++)
{fila=fi[k];columna=co[k];direccion=di[k];palabra=pa[k];if(k<10)var kz="0"+k;else var kz=k;if(columna<10)var columnax="0"+columna;else columnax=columna;if(fila<10)var filay="0"+fila;else filay=fila;if(direccion=="E")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila;if(filax<10)var filax="0"+filax;columnay=columna+i;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}
if(direccion=="SE")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila+i;if(filax<10)var filax="0"+filax;columnay=columna+i;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}
if(direccion=="S")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila+i;if(filax<10)var filax="0"+filax;columnay=columna;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}
if(direccion=="SO")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila+i;if(filax<10)var filax="0"+filax;columnay=columna-i;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}
if(direccion=="O")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila;if(filax<10)var filax="0"+filax;columnay=columna-i;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}
if(direccion=="NO")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila-i;if(filax<10)var filax="0"+filax;columnay=columna-i;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}
if(direccion=="N")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila-i;if(filax<10)var filax="0"+filax;columnay=columna;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}
if(direccion=="NE")
{for(i=0;i<=(palabra.length-1);i++)
{if(i<10)var ix="0"+i;else var ix=i;filax=fila-i;if(filax<10)var filax="0"+filax;columnay=columna+i;if(columnay<10)var columnay="0"+columnay;$("#c"+filax+"_"+columnay).html(palabra[i]);}}}
rellenarPrint();}
function rellenarPrint()
{var letras=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];for(i=0;i<filas;i++)
{if(i<10)var ix="0"+i;else var ix=i;for(j=0;j<filas;j++)
{var aleatorio=parseInt(Math.random()*100);while(aleatorio>=letras.length-1)
{aleatorio=parseInt(Math.random()*100);}
if(j<10)var jy="0"+j;else var jy=j;if($("#c"+ix+"_"+jy).html()=="")$("#c"+ix+"_"+jy).html(letras[aleatorio]);}}
pistasPrint();}
function pistasPrint()
{for(k=0;k<pa.length;k++)
{var valorPista=pa[k];var liPista=$("<li>");var spanNum=$("<span>",{"class":"numPista"});spanNum.html(k+1+".");liPista.append(spanNum);var spanPista=$("<span>",{"class":"pista"});if(modo=="noPistas")valorPista="????";if(modo=="huecos")
{var asteriscos="";for(p=0;p<pa[k].length;p++)
{asteriscos+="_ ";}
valorPista=asteriscos;}
spanPista.html(valorPista);liPista.append(spanPista);var par=k%2;if(par==0)apartado="D";else apartado="I";if(apartado=="D")
{$("#pistasDerecha").append(liPista);}
if(apartado=="I")
{$("#pistasIzquierda").append(liPista);}}}