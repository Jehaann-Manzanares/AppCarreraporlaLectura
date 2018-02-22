var DatosActividad = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><actividad tipo="Completar">\n\n<!-- Parte generica -->\n	<color_fuente_b>0x000000</color_fuente_b>\n	<color_fuente>0xFFFFFF</color_fuente>\n	<!-- Indica que color de fondo se le pondra al flash (por defecto 0x8993A0) -->\n	<color_fondo>0x8993A0</color_fondo>\n	<!-- Indica que color se le pondra a los elementos del flash (por defecto 0x728F61) -->\n	<color_botones>0xff8a00</color_botones>\n    <!-- Indica que color de fondo se le pondra al html5 (por defecto 0x7cb139) -->\n	<color_fondo_h>0x7cb139</color_fondo_h>\n	<!-- Indica que color se le pondra a los elementos del html5 (por defecto 0xFCA800) -->\n	<color_botones_h>0xFCA800</color_botones_h>\n    <!-- Indica el logo personalizado si lo hay -->\n    <logoPersonalizado>no</logoPersonalizado>\n    <franjaPersonalizada>no</franjaPersonalizada>\n	<!-- Indica si se mostrara al alumno la respuesta correcta o no, en caso de que el alumno no supere el ejercicio -->\n	<correccion>si</correccion>\n	<numero_intentos>2</numero_intentos>\n    <puntos>100</puntos>\n	<puntos_resta>50</puntos_resta>\n	<!-- Indica si la respuesta del alumno debe ser igual a la respuesta correcta en lo referente a las mayusculas y acentos, solo en el caso de que la forma de completar sea escrita -->\n	<sensible_mayusculas>no</sensible_mayusculas>\n	<sensible_acentos>no</sensible_acentos>\n	<sensible_mayusculas_ocultar>no</sensible_mayusculas_ocultar>\n	<sensible_acentos_ocultar>no</sensible_acentos_ocultar>\n	<!-- Indica si tiene un tiempo maximo para realizar la actividad, estara definido en segundos -->\n	<tiempo maximo="0">no</tiempo>\n	\n	<autor>Tecnología Educativa</autor>\n	<descripcionUsuario>Escucho por parte de mi profesora/o el cuento de “hansel y grethel”.\nCompleto una parte del cuento de “hansel y grethel” seleccionando las palabras y ubicándolas en su lugar correcto.\n</descripcionUsuario>\n    <descripcionUsuarioLimpio>Escucho por parte de mi profesora/o el cuento de “hansel y grethel”.\nCompleto una parte del cuento de “hansel y grethel” seleccionando las palabras y ubicándolas en su lugar correcto.\n</descripcionUsuarioLimpio>\n	<origen_recursos></origen_recursos><xorigen_recursos>https://cloud.educaplay.com/recursos/108/3486348/</xorigen_recursos>\n	\n      <registro>\n		<!-- Indica el tipo de registro:\n		- script -> registro a traves de un script (php, jsp, etx)\n		- scorm -> registreo a traves de scorp\n		-->\n		<tipo>scorm</tipo>\n		<!-- Indica la url del scrip, en caso de que el tipo sea script	-->\n		<url></url>\n		<!-- Indica los parametros a pasar al script, en caso de que el tipo sea script	-->\n		<parametros>\n			<!-- La etiqueta nombre contiene el nombre del parametro a pasar -->\n			<!-- La etiqueta valor contiene el valor al que hace referencia el parametro (buscara el nombre de la varible en flash):\n			- SCORE: puntuacion de la actividad, en porcentaje\n			- TIME: tiempo de la actividad, en segundos\n			- URL: direccion de la actividad\n			-->\n			<parametro id="1">\n				<nombre>score</nombre>\n				<valor>SCORE</valor>\n			</parametro>\n			<parametro id="2">\n				<nombre>time</nombre>\n				<valor>TIME</valor>\n			</parametro>\n			<parametro id="3">\n				<nombre>url</nombre>\n				<valor>URL</valor>\n			</parametro>\n		</parametros>\n	</registro>\n    \n<!-- Parte especifica -->\n	<!-- Indica si se mostrara al alumno las palabras que estan ocultas -->\n	<ayuda>si</ayuda>\n	<!-- Indica la forma de completar los huecos, 2 opciones:\n	- escribir\n	- clickar, esta forma conlleva a que la ayuda este activada\n	-->\n	<forma_completar>clickar</forma_completar>\n	<titulo>Instrucciones</titulo>\n	\n	<tituloAplicacion>complete</tituloAplicacion>\n	\n	<!-- Indica la forma de realizar la actividad, es decir la ayuda de la actividad -->\n	<descripcion>Intenta completar el texto con las palabras que faltan.\n        Para ello, pulsa sobre las palabras de la parte inferior en el orden correcto para completar todos los huecos.\n    \n</descripcion>\n	<enunciado>Complete este texto</enunciado>\n    <!-- parametro solo para la importación a ADR -->\n    <enunciado_edu>complete</enunciado_edu>\n    \n	<texto>Había una vez un leñador y su esposa que vivían en el bosque en una humilde cabaña con sus dos hijos, Hänsel y Gretel. Trabajaban mucho para darles de comer pero nunca ganaban lo suficiente. Un día viendo que ya no eran capaces de alimentarlos y que los niños pasaban mucha hambre, el matrimonio se sentó a la mesa y amargamente tuvo que tomar una decisión. \n \n- No podemos hacer otra cosa. Los dejaremos en el bosque con la esperanza de que alguien de buen corazón y mejor situación que nosotros pueda hacerse cargo de ellos, dijo la madre. \n \nLos niños, que no podían dormir de hambre que tenían, oyeron toda la conversación y comenzaron a llorar en cuanto supieron el final que les esperaba. Hänsel, el niño, dijo a su hermana: \n- No te preocupes. Encontraré la forma de regresar a casa. Confía en mí. \n \nAsí que al día siguiente fueron los cuatro al bosque, los niños se quedaron junto a una hoguera y no tardaron en quedarse dormidos. Cuando despertaron no había rastro de sus padres y la pequeña Gretel empezó a llorar. \n \n- No llores Hänsel. He ido dejando trocitos de pan a lo largo de todo el camino. Sólo tenemos que esperar a que la Luna salga y podremos ver el camino que nos llevará a casa. \n \nPero la Luna salió y no había rastro de los trozos de pan: se los habían comido las palomas. \n \nAsí que los niños anduvieron perdidos por el bosque hasta que estuvieron exhaustos y no pudieron dar un paso más del hambre que tenían. Justo entonces, se encontraron con una casa de ensueño hecha de pan y cubierta de bizcocho y cuyas ventanas eran de azúcar. Tenían tanta hambre, que enseguida se lanzaron a comer sobre ella. De repente se abrió la puerta de la casa y salió de ella una vieja que parecía amable.</texto>\n    <textoLimpio>Había una vez un leñador y su esposa que vivían en el bosque en una humilde cabaña con sus dos hijos, Hänsel y Gretel. Trabajaban mucho para darles de comer pero nunca ganaban lo suficiente. Un día viendo que ya no eran capaces de alimentarlos y que los niños pasaban mucha hambre, el matrimonio se sentó a la mesa y amargamente tuvo que tomar una decisión. \n \n- No podemos hacer otra cosa. Los dejaremos en el bosque con la esperanza de que alguien de buen corazón y mejor situación que nosotros pueda hacerse cargo de ellos, dijo la madre. \n \nLos niños, que no podían dormir de hambre que tenían, oyeron toda la conversación y comenzaron a llorar en cuanto supieron el final que les esperaba. Hänsel, el niño, dijo a su hermana: \n- No te preocupes. Encontraré la forma de regresar a casa. Confía en mí. \n \nAsí que al día siguiente fueron los cuatro al bosque, los niños se quedaron junto a una hoguera y no tardaron en quedarse dormidos. Cuando despertaron no había rastro de sus padres y la pequeña Gretel empezó a llorar. \n \n- No llores Hänsel. He ido dejando trocitos de pan a lo largo de todo el camino. Sólo tenemos que esperar a que la Luna salga y podremos ver el camino que nos llevará a casa. \n \nPero la Luna salió y no había rastro de los trozos de pan: se los habían comido las palomas. \n \nAsí que los niños anduvieron perdidos por el bosque hasta que estuvieron exhaustos y no pudieron dar un paso más del hambre que tenían. Justo entonces, se encontraron con una casa de ensueño hecha de pan y cubierta de bizcocho y cuyas ventanas eran de azúcar. Tenían tanta hambre, que enseguida se lanzaron a comer sobre ella. De repente se abrió la puerta de la casa y salió de ella una vieja que parecía amable.</textoLimpio>\n	<!-- Las palabras que seran eliminadas del texto -->\n	<palabras>\n    		<palabra>30</palabra>\n    		<palabra>151</palabra>\n    		<palabra>231</palabra>\n    		<palabra>348</palabra>\n    		<palabra>425</palabra>\n    		<palabra>614</palabra>\n    		<palabra>722</palabra>\n    		<palabra>823</palabra>\n    		<palabra>1018</palabra>\n    		<palabra>1144</palabra>\n    		<palabra>1261</palabra>\n    		<palabra>1348</palabra>\n    		<palabra>1478</palabra>\n    		<palabra>1555</palabra>\n    		<palabra>1653</palabra>\n    		<palabra>1709</palabra>\n    	</palabras>\n	\n    \n        <idioma>\n		<nIntentos>Num. Intentos</nIntentos>\n		<txtPuntos>Puntos</txtPuntos>\n		<txtTiempo>Tiempo</txtTiempo>\n		<txtTiempoRestante>Tiempo Restante</txtTiempoRestante>\n		<comprobar>Comprobar</comprobar>\n\n		<txtRespuestaIncorrecta>Respuesta Incorrecta</txtRespuestaIncorrecta>\n		<txtActNoSuperada>Actividad no superada</txtActNoSuperada>\n		<txtTiempoSuperado>Has superado el tiempo máximo para esta actividad</txtTiempoSuperado>\n		<txtCerrar>Cerrar</txtCerrar>\n		<txtRespuestaCorrecta>La respuesta correcta es</txtRespuestaCorrecta>\n		<txtOtrasRespuestas>Otras respuestas</txtOtrasRespuestas>\n		<txtTituloRespuestaCorrecta>Respuesta correcta</txtTituloRespuestaCorrecta>\n		<txtBoxRespuestaCorrecta>Enhorabuena has superado la actividad</txtBoxRespuestaCorrecta>\n		<txtTituloOtrasRespuestas>Otras posibles respuestas</txtTituloOtrasRespuestas>\n		<txtSuperadoNumeroIntentos>Has superado el número de intentos de esta actividad</txtSuperadoNumeroIntentos>\n		<txtTituloSuperadoNumeroIntentos>Actividad no superada</txtTituloSuperadoNumeroIntentos>\n        \n   		<txtAceptar>Aceptar</txtAceptar>\n   		<txtTituloPalabrasParaCompletar>Palabras para completar los espacios</txtTituloPalabrasParaCompletar>\n   		<txtMsgNoCompleta>No ha completado todos los huecos por lo que la respuesta no es correcta</txtMsgNoCompleta>\n		<txtMsgNoCorrecta>La respuesta introducida no es correcta</txtMsgNoCorrecta>\n		<txtPalabraYaIntroducida>La palabra introducida, ya está en otro hueco</txtPalabraYaIntroducida>\n		<txtPalabraIncorrecta>La palabra introducida no está entre las opciones restantes</txtPalabraIncorrecta>\n\n   		<txtSensibleMayusculas>Diferencia entre mayúsculas y minúsculas</txtSensibleMayusculas>\n		<txtNoSensibleMayusculas>No diferencia entre mayúsculas y minúsculas</txtNoSensibleMayusculas>\n		<txtSensibleAcentos>Sensible a acentos</txtSensibleAcentos>\n		<txtNoSensibleAcentos>No sensible a acentos</txtNoSensibleAcentos>\n		\n		<txtTiempoMaximo>Tiempo máximo</txtTiempoMaximo>\n		<txtSensible>Sensible</txtSensible>\n		<txtMayusculasMinusculas>Mayúsculas/Minúsculas</txtMayusculasMinusculas>\n		<txtAcentos>Acentos</txtAcentos>\n		<txtComenzar>Comenzar</txtComenzar>\n		<txtAutor>Autor</txtAutor>\n		<txtAyuda>Ayuda</txtAyuda>\n		<txtMostrarMas>Mostrar más</txtMostrarMas>\n		<txtMostrarMenos>Mostrar menos</txtMostrarMenos>\n		<txtReiniciar>Reiniciar</txtReiniciar>\n		<txtVolverJugar>Volver a jugar</txtVolverJugar>\n		<txtResponder>Responder</txtResponder>\n		<txtRegistrarse>Registrarse</txtRegistrarse>\n		<txtAcceder>Acceder</txtAcceder>\n		<txtCompartirResultado>Compartir resultado</txtCompartirResultado>\n		<txtAumentar>Aumentar</txtAumentar>\n		<txtReducir>Reducir</txtReducir>\n		<txtPantallaCompleta>Pantalla completa</txtPantallaCompleta>\n		<txtImprimir>Imprimir</txtImprimir>\n		<txtSocial>He obtenido [puntuacion] puntos en [tiempo] min. en la actividad [nomactividad]. ¿Puedes superarlo?</txtSocial>\n	</idioma>\n\n\n</actividad>';