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
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;titulo=xmlDoc.getElementsByTagName("enunciado")[0].childNodes[0].nodeValue;forma_completar=xmlDoc.getElementsByTagName("forma_completar")[0].childNodes[0].nodeValue;forma_juego=xmlDoc.getElementsByTagName("forma_juego")[0].childNodes[0].nodeValue;imagen=xmlDoc.getElementsByTagName("imagen")[0].childNodes[0].nodeValue;re=[];au=[];coordenadaX=[];coordenadaY=[];respuestaNum=xmlDoc.getElementsByTagName("respuesta");for(var i=0;i<respuestaNum.length;i++)
{re[i]=respuestaNum[i].childNodes[0].nodeValue;coordenadaX[i]=respuestaNum[i].attributes.getNamedItem("x").value;coordenadaY[i]=respuestaNum[i].attributes.getNamedItem("y").value;au[i]=respuestaNum[i].attributes.getNamedItem("audio").value;if(au[i]=="")au[i]="no";}
var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtAprender=idioma.getElementsByTagName("txtAprender")[0].childNodes[0].nodeValue;txtMarcar=idioma.getElementsByTagName("txtMarcar")[0].childNodes[0].nodeValue;txtEscribir=idioma.getElementsByTagName("txtEscribir")[0].childNodes[0].nodeValue;$("#aprender").click(function(){$("label").removeClass("modoSel");$("#aprenderL").addClass("modoSel");modo="aprender";$("#lienzo").html('');$("ul").html('');crearPrint();});$("#marcar").click(function(){$("label").removeClass("modoSel");$("#marcarL").addClass("modoSel");modo="marcar";$("#lienzo").html('');$("ul").html('');crearPrint();});$("#escribir").click(function(){$("label").removeClass("modoSel");$("#escribirL").addClass("modoSel");modo="escribir";$("#lienzo").html('');$("ul").html('');crearPrint();});$("#aprenderLS").text(txtAprender);$("#marcarLS").text(txtMarcar);$("#escribirLS").text(txtEscribir);if(forma_juego=="juego")
{$("#aprenderL").removeClass("modoSel").hide();$("#marcarL").addClass("modoSel");$("#marcar").attr("checked","true");modo="marcar";}
else
{$("#aprenderL").addClass("modoSel");$("#aprender").attr("checked","true");}}
var modo="aprender";function crearPrint()
{$("#txtTitAct").html(titulo);$("#textoAutor").html(txtAutor+":");$("#nombreAutor").html(autor);miLienzo=$('#lienzo');var rutaImagen=rutaRecursos+imagen;var img=new Image();img.src=rutaImagen;img.onload=function(){imagenAncho=img.width;imagenAlto=img.height;var divImagen=$("<div>",{id:"divImagen"});miLienzo.append(divImagen);$("#divImagen").css("width",imagenAncho+"px");$("#divImagen").css("height",imagenAlto+"px");$("#divImagen").append(img);cargarPrint();}}
function cargarPrint()
{for(i=0;i<re.length;i++)
{if(i<10)ix="0"+i;else ix=i;var pxt=coordenadaX[i];var pyt=coordenadaY[i];var porceX=pxt*100/imagenAncho;var porceY=pyt*100/imagenAlto;var pxtp=porceX+"%";var pytp=porceY+"%";var divPunto=$("<div>",{id:"marker"+ix,"class":"marker",css:{"left":pxtp,"top":pytp}});$("#divImagen").append(divPunto);var contenidoCelda="";if((modo=="aprender")||(modo=="escribir"))contenidoCelda=i+1;$("#marker"+ix).html("<div class='numMarker'>"+contenidoCelda+"</div>");}
pistasPrint();}
function pistasPrint()
{for(k=0;k<re.length;k++)
{var valorPista=re[k];var liPista=$("<li>");var spanNum=$("<span>",{"class":"numPista"});spanNum.html(k+1+".");liPista.append(spanNum);var spanPista=$("<span>",{"class":"pista"});if(re[k]!="no")
{spanPista.html(valorPista);}
if(au[k]!="no")
{spanPista.html(spanPista.html()+"<span class='audio'> (Pista en formato audio)</span>");}
if(modo=="escribir"){spanPista.html("");spanPista.addClass("lineaGris");}
liPista.append(spanPista);var par=k%2;if(par==0)apartado="D";else apartado="I";if(apartado=="D")
{$("#pistasDerecha").append(liPista);}
if(apartado=="I")
{$("#pistasIzquierda").append(liPista);}}}