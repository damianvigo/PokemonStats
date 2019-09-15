var imagenes = [];
imagenes ["Squirtle"] = "squirtle.jpg";
imagenes ["Charmander"] = "charmander.gif";
imagenes ["Bulbasaur"] = "bulbasaur.png";

class Pokemones
{
  constructor(n, v, a,)        
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong> <br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
    document.write("</p>");
  }
}

var squirtle = new Pokemones("Squirtle", 100, 30, "agua");
var charmander = new Pokemones("Charmander", 80, 50);
var bulbasaur = new Pokemones("Bulbasaur", 120, 40);

squirtle.mostrar();
charmander.mostrar();
bulbasaur.mostrar();
