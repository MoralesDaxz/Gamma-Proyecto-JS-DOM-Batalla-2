# Gamma-JS-DOM-GameBatalla
DOM, event, arrow functions, css
Los valores del personaje serán:
jugador -> HP:50 / STR: 20 / DEF: 5
enemigo -> HP:50 / STR: 10 / DEF: 5
Los personajes deben crearse de la misma manera, con una funcio que crea un objeto.
Mostrar los personajes en la pantalla
Crear la barra para los nombres y darle color.

Ponerle con DOM a la barra los nombres de cada personaje.

crear con DOM los campos para cada atributo (key) del personaje.

Rellenar los campos con los valores (value) del personaje

Pista estadísticas
Funcionalidad de los botones
Agregarle el método de ataque al botón con DOM.

¡¡No te olvides de quitar las llamadas a las funciones de ataque!!

Hacer que el número de la vida cambie según la vida del personaje.

Conseguir que la barra de vida cambie según la vida del personaje.

Pista barra de vida
Deshabilitar el botón que se ha pulsado y habilitar el el otro (buscar en internet).

El botón del jugador debe estar deshabilitado al comienzo del juego.
Manejar la sección de logs
Crear las secciones para poner los logs y darle estilo.
mostrar un texto definiendo quien y cuanto daño se ha realizado cada vez que se pulse el botón de ataque.
Hacer que se vean los textos de ataques anteriores.
Bonus1: Poner el nombre de quien hace daño en negrita.
Bonus2: Conseguir que los nuevos textos se muestren en primera posición.
Habilidades

Deshablitar el <select> al comienzo del juego.
Crear una función para controlar la habilidades.
Agregar con DOM la función de las habilidades al select para que se efectúe cada vez que se cambie.
Hacer que la función recoja el valor del <option> dentro del <select> y haga las operaciones en consecuencia.
Las habilidades siguen haciendo lo mismo:
health Múltiplica la vida del personaje por el valor de la habilidad.
boost Múltiplica el ataque str y la defensa def del personaje por el valor de la habilidad.
fireball Quita tanta vida como valor tenga en el objeto de habilidades.
ironbody Dará un aumento a la defensa igual al valor que tenga en el objeto.
Cambiar los atributos de cada personaje en función de la habilidad elegida y hacer que esos cambios se muestren en la parte de las estadísticas.
Después de usar la habilidad que sea, será el turno de atacar del jugaor.
Las habilidades estarán deshabilitadas hasta el momento que se puedan usar.
Las habilidades de health o boost se habilitarán cuando el enemigo entre en la segunda fase y se deshabilitarán después.
Las habilidades de leech, fireball o ironbody se habilitarán.
Cuando uno gana, deshabilitar los dos botones.

Tiene que aparecer un mensaje debajo de la zona de los botones que diga quien es el ganador.

Bonus aumento de vida: Siempre que la vida aumente tiene que ser de manera progresiva, no de golpe.

Bonus último ataque: El jugador solo muere cuando el enemigo está en segunda fase, hacer que también pueda morir cuando el jugador usa su última habilidad.