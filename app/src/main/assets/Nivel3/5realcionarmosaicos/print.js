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
autor=xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;titulo=xmlDoc.getElementsByTagName("tituloApli")[0].childNodes[0].nodeValue;gruposD=new Array();countEl=0;var parejas=xmlDoc.getElementsByTagName("pareja");for(i=0;i<parejas.length;i++)
{elementoA=parejas[i].getElementsByTagName("elementoA")[0];elementoB=parejas[i].getElementsByTagName("elementoB")[0];var datosPareja=new Array();datosPareja["elemento_Tipo"]=elementoA.attributes.getNamedItem("tipo").value;datosPareja["elemento_Valor"]=elementoA.childNodes[0].nodeValue;gruposD[countEl]=datosPareja;countEl++;datosPareja=new Array();datosPareja["elemento_Tipo"]=elementoB.attributes.getNamedItem("tipo").value;datosPareja["elemento_Valor"]=elementoB.childNodes[0].nodeValue;gruposD[countEl]=datosPareja;countEl++;}
tamanoCartas='M';if(tamanoCartas=='S')claseTamCartas='size-s';else if(tamanoCartas=='M')claseTamCartas='size-m';else claseTamCartas='size-l';var idioma=xmlDoc.getElementsByTagName("idioma")[0];txtAutor=idioma.getElementsByTagName("txtAutor")[0].childNodes[0].nodeValue;txtGrupo=idioma.getElementsByTagName("txtGrupo")[0].childNodes[0].nodeValue;txtHuecos=idioma.getElementsByTagName("txtHuecos")[0].childNodes[0].nodeValue;txtNormal=idioma.getElementsByTagName("txtNormal")[0].childNodes[0].nodeValue;txtElementos=idioma.getElementsByTagName("txtElementos")[0].childNodes[0].nodeValue;txtTradicional=idioma.getElementsByTagName("txtTradicional")[0].childNodes[0].nodeValue;}
function crearPrint()
{$("#txtTitAct").html(titulo);$("#textoAutor").html(txtAutor+" : ");$("#nombreAutor").html(autor);var divElementos=$("<div>",{id:"contentElementos","class":claseTamCartas});$('#lienzo').append(divElementos);cargarPrint();}
function cargarPrint()
{var countAudio=0;mostrados=[];var repetido=0;for(i=0;i<gruposD.length;i++){repetido=1;aleatorio=0;while(aleatorio>=gruposD.length||repetido==1){aleatorio=parseInt(100*Math.random());repetido=0;for(j=0;j<mostrados.length;j++){if(mostrados[j]==aleatorio)repetido=1;}}
mostrados[i]=aleatorio;var divElemento=$("<div>",{id:"elemento"+i,"class":"block-card cardContainer"});$('#contentElementos').append(divElemento);var divNumero=$("<div>",{id:"numero"+i,"class":"numero"});$('#elemento'+i).append(divNumero);$('#numero'+i).html(i+1);var divNumeroBox=$("<div>",{id:"numeroBox"+i,"class":"numeroBox"});$('#elemento'+i).append(divNumeroBox);var divCardPrint=$("<div>",{id:"cardPrint"+i,"class":"cardPrint"});$('#elemento'+i).append(divCardPrint);var divCardBackCont=$("<div>",{id:"cardBackCont"+i,"class":"cardTxt"});$('#cardBack'+i).append(divCardBackCont);if(gruposD[aleatorio]["elemento_Tipo"]=="TEXTO"){$("#cardPrint"+i).html("<div class='cardContent cardTxt'><div class='scrollbox'>"+gruposD[aleatorio]["elemento_Valor"]+"</div></div>");}
else if(gruposD[aleatorio]["elemento_Tipo"]=="IMAGEN"){var src=rutaRecursos+gruposD[aleatorio]["elemento_Valor"];$("#cardPrint"+i).html("<div class='cardContent cardImage'><img src='"+src+"' width='259' height='194'></div>");}
else if(gruposD[aleatorio]["elemento_Tipo"]=="AUDIO"){$("#cardPrint"+i).html("<div class='cardContent cardSound'><button class='soundCard'></button></div>");}}}