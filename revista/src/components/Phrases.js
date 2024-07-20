import { useState } from "react";
import 'animate.css';

export const Phrases = () => {
  const phrasesarray = [
    "«Una vida que no ha sido examinada no merece ser vivida» Sócrates",
"«Un hombre honesto es siempre un niño» Sócrates",
"«El único conocimiento verdadero es saber que no sabes nada» Sócrates",
"«No la vida, sino la buena vida, es lo que debe ser más valorado» Sócrates",
"«El mayor de todos los misterios es el hombre» Sócrates",
"«La muerte podría ser la más grande de las bendiciones» Sócrates",
"«No hay que dejar que crezca la hierba en el camino de la amistad» Sócrates",
"«Dejad que quien vaya a mover el mundo primero se mueva él mismo» Sócrates",
"«Una moral que se basa en valores emocionales relativos es una mera ilusión» Sócrates",
"«Soy ciudadano no de Atenas o de Grecia, sino del mundo» Sócrates",
"«Para encontrarte a ti mismo, piensa por ti mismo» Sócrates",
"«Solo el conocimiento que llega desde el interior es verdadero conocimiento» Sócrates",
"«No hagas a otros lo que te enfurecería si te lo hicieran los demás» Sócrates",
"«Prefiero el conocimiento a la riqueza, ya que el primero es perenne, mientras que el segundo es caduco» Sócrates",
"«Solo existe un bien: el conocimiento. Solo hay un mal: la ignorancia» Sócrates",
"«El conocimiento empieza en el asombro» Sócrates",
"«Preferiría que las multitudes estuviesen en desacuerdo conmigo que encontrarme fuera de armonía conmigo mismo» Sócrates",
"«El camino más noble no es someter a los demás, sino perfeccionarse a uno mismo» Sócrates",
"«Ser es hacer» Sócrates",
"«Mantén un buen ánimo acerca de la muerte, y haz tuya esta verdad: que nada malo le puede pasar a un hombre bueno, ni en vida ni después de morir» Sócrates",
"«Entenderse a uno mismo es el inicio del conocimiento» Sócrates",
"«Es mejor cambiar de opinión que mantenerse en la errónea» Sócrates",
"«Sé amable con todo el mundo, pues cada persona libra algún tipo de batalla» Sócrates",
"«El paso del tiempo arruga tu piel, pero la falta de entusiasmo arruga tu alma» Sócrates",
"«Las verdaderas batallas se libran en el interior» Sócrates",
"«La comprensión de una pregunta es una respuesta a medias» Sócrates",
"«Pon tu atención en ti mismo/a, sé consciente a cada momento de lo que piensas, sientes, deseas y haces.» G. I. Gurdjieff",
"«Convierte tu enojo en creatividad.» G.I.Gurdjieff",
"«La fe mecánica es estupidez. La fe emocional es esclavitud. La fe consciente es libertad.» G.I.Gurdjieff",
"«El amor físico depende del tipo y de la polaridad. El amor emocional provoca lo opuesto. El amor consciente evoca lo mismo en respuesta.» G.I.Gurdjieff",
"«La esperanza, cuando audaz, es fuerza. La esperanza, con duda, es cobardía. La esperanza, con miedo, es debilidad.» G.I.Gurdjieff",
"«Tú sólo observas a través de un velo de ideas puestas en ti por tu cultura.» Jiddu Krishnamurti",
"«La palabra “alcanzar” implica tiempo y distancia. La mente es pues esclava de la palabra alcanzar. Si la mente puede librarse de las palabras “conseguir”, “alcanzar” y “llegar”, entonces el ver puede ser inmediato.» Jiddu Krishnamurti",
"«¿Ha notado usted que la inspiración llega cuando no la está buscando? Llega cuando toda expectativa se detiene, cuando la mente y el corazón se tranquilizan.» Jiddu Krishnamurti",
"«Evadir un problema solo sirve para intensificarlo, y en este proceso la autocomprensión y la libertad se abandonan.» Jiddu Krishnamurti",
"«No es signo de buena salud el estar bien adaptado a una sociedad profundamente enferma.» Jiddu Krishnamurti",
"«Por la esperanza del mañana sacrificamos el hoy, sin embargo la felicidad siempre está en el ahora.» Jiddu Krishnamurti",
"«Solo cuando la mente está libre de ideas y creencias puede actuar correctamente.» Jiddu Krishnamurti",
"«Lo decisivo para traer paz al mundo es nuestra conducta diaria.» Jiddu Krishnamurti",
"«La felicidad es extraña; llega cuando no la buscas. Cuando no estás haciendo un esfuerzo de ser feliz, inesperadamente, misteriosamente, la felicidad está ahí, naciendo de la pureza.» Jiddu Krishnamurti",
"«Si uno observa, verá que el cuerpo tiene su propia inteligencia; requiere de una gran dosis de inteligencia para observar la inteligencia del cuerpo.» Jiddu Krishnamurti",
"«Si nos mantenemos totalmente atentos a lo que es, lo comprenderemos y nos veremos libres de ello; pero para estar atentos a lo que somos, tenemos que dejar de luchar por lo que no somos.» Jiddu Krishnamurti",
"«Lo que se necesita, en lugar de escapar, controlar o suprimir o cualquier otra resistencia, es entender el miedo; ello significa mirarlo, aprender sobre él, ir a contactar con él. Hemos de aprender sobre el miedo, no cómo escapar de él.» Jiddu Krishnamurti",
"«Cuando la mente está completamente silenciosa, tanto en los niveles superficiales como en los profundos; lo desconocido, lo inconmensurable puede revelarse.» Jiddu Krishnamurti",
"«Entre dos soluciones, opte siempre por la más generosa.» Jiddu Krishnamurti",
"«Inteligencia es la capacidad para percibir lo esencial, lo que “es”, y educación es el proceso de despertar esta capacidad en nosotros mismos y en los demás.» Jiddu Krishnamurti",
"«Para transformar el mundo debemos comenzar por nosotros mismos y lo que es importante de comenzar con nosotros mismos es la intención.» Jiddu Krishnamurti",
"«Dile a tu amigo que en su muerte una parte de ti muere y va con él. Vaya donde vaya, tú también vas. No estará solo.» Jiddu Krishnamurti",
"«El propio perfeccionamiento es la antítesis misma de la libertad y del aprender. Descubra cómo vivir sin comparar y verá que ocurre algo extraordinario.» Jiddu Krishnamurti",
"«Ya me di al poder que mi destino rige. No me agarro ya de nada, para así no tener nada que defender. No tengo pensamientos, para así poder ver. No temo ya a nada, para así poder acordarme de mí. Sereno y desprendido, me dejará el águila pasar a la libertad.» Carlos Castaneda",
"«La libertad no está en ninguna ideología; la libertad está en el acto mismo de pensar.» Jiddu Krishnamurti",
"«La mente que está quietamente en meditación, libre de todos los condicionamientos, es creativa.» Jiddu Krishnamurti",
"«El arte de escuchar es muy importante. Si sabemos escuchar, es un gran instrumento de conocimiento, pero si escuchamos con comparación, con juicio, con opiniones, con nuestra experiencia, entonces, al escuchar, estamos escuchando nuestra propia charla.» Jiddu Krishnamurti",
"«No es necesario ser exitoso. Es necesario ser totalmente uno mismo.» Jiddu Krishnamurti",
"«El mundo es incomprensible. No vamos a entenderlo nunca, no vamos a desentrañar sus secretos nunca. Por lo tanto, debemos tratar al mundo tal como es: un gran misterio.» Don Juan. Carlos Castaneda",
"«Hasta que la nube no llore, ¿cómo puede florecer el jardín?» Rumi",
"«El agua del arroyo cambia muchas veces, pero el reflejo de la luna y las estrellas en el agua siempre es el mismo.» Rumi",
"«Sé una lámpara, un bote salvavidas o una escalera. Ayuda a sanar el alma de alguien. Sal de tu casa como un pastor.» Rumi",
"«Donde hay ruina, hay esperanza para un tesoro.» Rumi",
"«Naciste con alas. ¿Por qué prefieres arrastrarte por la vida?» Rumi",
"«Deja de actuar tan pequeño. Tú eres el universo entero en movimiento.» Rumi",
"«No te aflijas. Cualquier cosa que pierdas, regresa con otra forma distinta.» Rumi",
"«Responde a toda llamada que excite tu espíritu.» Rumi",
"«Por medio del amor, lo amargo se vuelve dulce. Por medio del amor, el cobre se torna oro. Por medio del amor, el dolor se vuelve medicinal.» Rumi",
"«Cada uno ha sido fabricado para un trabajo en particular, y el deseo para ese trabajo ha sido puesto en cada corazón.» Rumi",
"«Las heridas son el lugar por donde entra la luz en ti.» Rumi",
"«Antes de que la muerte se lleve lo que se te ha dado, da lo que tienes para dar.» Rumi",
"«Trabaja en el mundo invisible al menos tan duro como haces en el visible.» Rumi",
"«Tu tarea no es buscar el amor, sino buscar y encontrar las barreras dentro de ti mismo que has construido contra él.» Rumi",
"«Estos dolores que sientes son mensajeros. Escúchalos.» Rumi",
"«Lo que buscas te está buscando a ti.» Rumi",
"«El dolor que abrazamos se convierte en alegría. Llévalo a tus brazos donde puede cambiar.» Rumi",
"«Hay una canasta de pan fresco en tu cabeza y aun así vas de puerta en puerta pidiendo cortezas.» Rumi",
"«Dios te pasa de un sentimiento a otro y te enseña por medio de los opuestos, para que tengas dos alas para volar, no una.» Rumi",
"«La brisa de la madrugada tiene secretos que contarte. No te vayas a dormir.» Rumi",
"«No pienses que el jardín pierde su éxtasis en invierno. Es silencioso, pero sus raíces están ahí debajo.» Rumi",
"«Cuando haces cosas desde tu alma, sientes un río moviéndose dentro de ti, una alegría. Cuando la acción viene de otra sección, el sentimiento desaparece.» Rumi",
"«Permítete a ti mismo ser silenciado por el tirón más grande de lo que verdaderamente amas.» Rumi",
"«Conviértete en poesía viviente.» Rumi",
"«Preocúpate entonces por lo que realmente valoras y deja al ladrón que se lleve algo más.» Rumi",
"«Purifica tus ojos, y mira la pureza del mundo. Tu vida se llenará con radiantes formas.» Rumi",
"«Hoy, como cualquier otro día, nos levantamos vacíos y con miedo. Que la belleza que amamos sea lo que hacemos.» Rumi",
"«Hay una mañana dentro de ti, esperando a estallar en la luz.» Rumi",
"«Sigue llamando y la alegría en el interior se abrirá eventualmente, y mirará quién hay ahí.» Rumi",
"«Cuando los labios están en silencio, el corazón tiene cien lenguas.» Rumi",
"«No te sientas solo, el universo entero está dentro de ti.» Rumi",
"«Nuestra mayor fortaleza radica en la dulzura y la ternura de nuestro corazón.» Rumi",
"«Cuando sientas deseos de quejarte, da gracias en su lugar.» Rumi",
"«Permite que el silencio te lleve al centro de la vida.» Rumi",
"«Lo que se planta en el alma de cada persona, brotará.» Rumi",
"«Caminando en línea recta no puede uno llegar muy lejos» El Principito, Antoine de Saint-Exupéry",
"«El hombre se descubre cuando se mide con un obstáculo» El Principito, Antoine de Saint-Exupéry",
"«Sólo se ve bien con el corazón; lo esencial es invisible a los ojos» El Principito, Antoine de Saint-Exupéry",
"«Haz de tu vida un sueño, y de tu sueño una realidad» El Principito, Antoine de Saint-Exupéry",
"«Para ver claro, basta con cambiar la dirección de la mirada» El Principito, Antoine de Saint-Exupéry",
"«Fue el tiempo que pasaste con tu rosa lo que la hizo tan importante» El Principito, Antoine de Saint-Exupéry",
"«Para los vanidosos, los demás hombres son admiradores» El Principito, Antoine de Saint-Exupéry",
"«Si vienes a las cuatro de la tarde, comenzaré a ser feliz desde las tres» El Principito, Antoine de Saint-Exupéry",
"«Si juzgas a la gente, no tienes tiempo de amarla» El Principito, Antoine de Saint-Exupéry",
"«Es mucho más difícil juzgarse a sí mismo que juzgar a los demás» El Principito, Antoine de Saint-Exupéry",
"«No tengo derecho a decir o hacer nada que disminuya a un hombre ante sí mismo. Lo que importa no es lo que yo pienso de él, sino lo que él piensa de sí mismo. Herir a un hombre en su dignidad es un crimen» El Principito, Antoine de Saint-Exupéry",
"«El mundo entero se aparta cuando ve pasar a un hombre que sabe a dónde va» El Principito, Antoine de Saint-Exupéry",
"«El fracaso fortifica a los fuertes» El Principito, Antoine de Saint-Exupéry",
"«Si queremos un mundo de paz y de justicia hay que poner decididamente la inteligencia al servicio del amor» El Principito, Antoine de Saint-Exupéry",
"«El amor no consiste en mirar al otro, sino en mirar juntos en la misma dirección» El Principito, Antoine de Saint-Exupéry",
"«En toda multitud hay hombres a los que no se distingue, pero son portadores de mensajes prodigiosos. Y sin saberlo ellos mismos» El Principito, Antoine de Saint-Exupéry",
"«Eres el dueño de tu vida y tus emociones, nunca lo olvides. Para bien y para mal» El Principito, Antoine de Saint-Exupéry",
"«Los hombres ya no tienen tiempo para conocer nada. Compran las cosas ya hechas a los comerciantes; pero como no existe ningún comerciante de amigos, los hombres ya no tienen amigos» El Principito, Antoine de Saint-Exupéry",
"«Mi dibujo no fue un fracaso. Simplemente, mi flor aún no había florecido» El Principito, Antoine de Saint-Exupéry",
"«Me pregunto si las estrellas se iluminan con el fin de que algún día, cada uno pueda encontrar la suya» El Principito, Antoine de Saint-Exupéry",
"«El sentido de las cosas no está en las cosas mismas, sino en nuestra actitud hacia ellas» El Principito, Antoine de Saint-Exupéry",
"«Si quieres comprender la palabra felicidad, tienes que entenderla como recompensa y no como fin» El Principito, Antoine de Saint-Exupéry",
"«Lo bello del desierto es que en algún lugar esconde un pozo» El Principito, Antoine de Saint-Exupéry",
"«Si quieres construir un barco, no empieces por buscar madera, cortar tablas o distribuir el trabajo. Evoca primero en los hombres y mujeres el anhelo del mar libre y ancho» El Principito, Antoine de Saint-Exupéry",
"«Mirad, en la vida no hay soluciones, sino fuerzas en marcha. Es preciso crearlas, y las soluciones vienen» El Principito, Antoine de Saint-Exupéry",
"«Es mucho más difícil juzgarse a sí mismo que a los demás. Si logras juzgarte bien a ti mismo eres un verdadero sabio» El Principito, Antoine de Saint-Exupéry",
"«Solo seremos felices cuando cobremos conciencia de nuestro papel, aunque nos corresponda el más oscuro» El Principito, Antoine de Saint-Exupéry",
"«La perfección se consigue no cuando no hay más que añadir, sino cuando no hay nada más por quitar» El Principito, Antoine de Saint-Exupéry",
"«Me pregunto si las estrellas se iluminan con el fin de que algún día, cada uno pueda encontrar la suya» El Principito, Antoine de Saint-Exupéry",
"«Si alguien ama a una flor de la que sólo existe un ejemplar en millones y millones de estrellas, es suficiente para que sea feliz» El Principito, Antoine de Saint-Exupéry",
"«Lo que embellece el desierto es que esconde un pozo en alguna parte» El Principito, Antoine de Saint-Exupéry",
"«Uno de los secretos profundos de la vida es que todo lo que realmente vale la pena hacer es lo que hacemos por los demás.» Lewis Carroll",
"«Pero no quiero andar entre locos —protestó Alicia—. —Oh, no puedes evitarlo —dijo el Gato—: todos estamos locos por aquí. Yo estoy loco. Tú estás loca.» Lewis Carroll",
"«Me doy buenos consejos a mí misma, pero rara vez los sigo.» Lewis Carroll",
"«Alicia: ¿Cuánto tiempo es para siempre? Conejo blanco: A veces, sólo un segundo.» Lewis Carroll",
"«A lo mejor caigo a través de toda la tierra! ¡Qué divertido sería salir donde vive esta gente que anda cabeza abajo! Los antipáticos, creo…» Lewis Carroll",
"«¿Quién soy yo, primero? Contéstenme, y luego, si me gusta ser esa persona, subiré, si no, me quedaré aquí abajo hasta que sea otra…» Lewis Carroll",
"«Si conocieras el tiempo tan bien como yo no hablarías de matarlo. El tiempo es todo un personaje.» Lewis Carroll",
"«Si no sabes hacia donde te dirijes, cualquier lugar te llevará.» Lewis Carroll",
"«No puedo volver al pasado porque entonces era una persona diferente.» Lewis Carroll",
"«Por lo general, son caras ante las que pasamos sin darnos cuenta.» Lewis Carroll",
"«¡Considera qué niña más excepcional eres! ¡Considera lo muy lejos que has llegado hoy! ¡Considera la hora que es! ¡Considera cualquier cosa, pero no llores!» Lewis Carroll",
"«Sabía quién era esta mañana, pero he cambiado varias veces desde entonces.» Lewis Carroll",
"«Pues la regla es: mermelada mañana y mermelada ayer… pero nunca mermelada hoy.» Lewis Carroll",
"«Es un tipo de memoria muy pobre la que solo funciona hacia atrás.» Lewis Carroll",
"«¡No se pueden creer las cosas imposibles! —Será porque no lo has intentado—le dijo la Reina—. Cuando yo tenía tu edad, lo intentaba media hora cada día… A la hora del desayuno a veces ya me había creído seis cosas imposibles.» Lewis Carroll",
"«¿Cuánto dura la eternidad? -preguntó Alicia- -A veces, solo un segundo -respondió el conejo.» Lewis Carroll",
"«Las mejores personas están completamente locas.» Lewis Carroll",
"«Habla en francés cuando no te acuerdes de alguna palabra en castellano… acuérdate bien de andar con las puntas de los pies hacia afuera… y no te olvides nunca de quien eres!» Lewis Carroll",
"«Para quedarte donde estás tienes que correr lo más rápido que puedas…y si quieres ir a otro sitio, deberás correr, por lo menos, dos veces más rápido.» Lewis Carroll",
"«Sino sabes a dónde vas, cualquier camino te llevará allí.» Lewis Carroll",
"«La cosa no tenía nada de muy especial, […] pero tampoco le pareció a Alicia que tuviera nada de muy extraño.» Lewis Carroll",
"«¡Es de… lo más… irritante… -dijo al fin- que una persona no sepa distinguir una corbata de un cinturón! - Sé que es una terrible ignorancia por mi parte - dijo Alicia en un tono tan humilde que Tentetieso se aplacó.» Lewis Carroll",
"«pues a esta curiosa criatura le gustaba mucho pretender que era dos personas a la vez.» Lewis Carroll"
  ];
  const [selectedPhrase, setSelectedPhrase] = useState("");
  const [isAnimating, setIsAnimating] = useState(false); 
  
  const selectRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrasesarray.length);
    const randomPhrase = phrasesarray[randomIndex];
    setSelectedPhrase(randomPhrase);
  };
 
  const hidePhrase = () => {
    setIsAnimating(true); 
    setTimeout(() => {
      setSelectedPhrase("");
      setIsAnimating(false); 
    }, 1000); 
  };

  return (
    <div id="inicio">
      <div className="phrase-button-div">
        <div className="text-button">
          Click aquí &#8594;
          <img
            src="https://i.gifer.com/XDZT.gif"
            alt="Example GIF"
            id="phrase-button"
            onClick={selectRandomPhrase}
          />
          <br /> para obtener tu frase al azar
        </div>
      </div>
      <div
        id="phrase-div"
        className={`animate__animated ${
          isAnimating ? "animate__fadeOutUpBig" : "animate__fadeInDownBig"
        }`}
        style={{ display: selectedPhrase ? "flex" : "none" }}
      >
        <div className="textandbutton-div">
          <p id="phrase-text">{selectedPhrase}</p>
          <button id="goon-button" onClick={hidePhrase}>continuar</button>
        </div>
      </div>
    </div>
  );
};
