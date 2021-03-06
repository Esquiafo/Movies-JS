const http=require("http");
const fs = require("fs");
    
let TextHomeTitle= "​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.";
let ListMovie= fs.readFileSync("C:/Users/soraw/DigitalHouse/dh-movies/movies.json", 'utf8');
let ListMovieArray =  JSON.parse(ListMovie, " ");

var i = 0;
function MoviesFullLista() {
    const titleArray = [];
    for (let i = 0; i < ListMovieArray.total_movies; i++) {
        titleArray.push("\n"+ListMovieArray.movies[i].title);
    }
    return titleArray;
}

function CarteleraFullList(){
    const titleArray = [];
    for (let i = 0; i < ListMovieArray.total_movies; i++) {
        titleArray.push("\n"+TextCarteleraName+ListMovieArray.movies[i].title);
        titleArray.push("\n"+TextCarteleraReseña+ListMovieArray.movies[i].overview+"\n")
    }
    return titleArray;
}




let TextHomeFooter= "​Recordá que podés visitar las secciones: ";
let TextHomeFooterOne= "i. En Cartelera";
let TextHomeFooterTwo= "ii. Más Votadas";
let TextHomeFooterThree= "iii. Sucursales";
let TextHomeFooterFour= "iv. Contacto";
let TextHomeFooterFive= "v. Preguntas Frecuentes";

let TextCarteleraTitle= "En Cartelera: ";
let TextCarteleraName= "i. Título: ";
let TextCarteleraReseña= "ii. Reseña: ​";


 function MoviesFullList() {
     const titleArray = [];
     for (let i = 0; i < ListMovieArray.total_movies; i++) {
        titleArray.push(ListMovieArray.movies[i].title+"\n");
        titleArray.push(ListMovieArray.movies[i].vote_average);
        titleArray.push("\n"+ListMovieArray.movies[i].overview+ "\n"+"\n");
        } return titleArray 
   }
var final = MoviesFullList().filter(e => e >=7)
var cuentafinal = final.length

const suma = final.reduce(function(a, b){return a + b});
const promedio = suma/cuentafinal
const promediado = parseFloat(promedio).toFixed(2)

let rating = parseFloat(promediado)

let TextVoteTitle= "Mas Votadas.";
let TextVoteListTitle= "ii. Título: ";
let TextVoteListRating= "i. Rating​: ";

let pelisMasVotadas = ListMovieArray.movies.filter((unaMovie) => unaMovie.vote_average >= 7);

let contenidoMasVotadas = 'Más Votadas \n\n';

contenidoMasVotadas += `Total de películas: ${pelisMasVotadas.length} \n\n`;


pelisMasVotadas.forEach(unaPelicula => {
    contenidoMasVotadas += `TITULO: ${unaPelicula.title}\n`;
    contenidoMasVotadas += `RATING: ${unaPelicula.vote_average}\n`;
    contenidoMasVotadas += `RESEÑA: ${unaPelicula.overview}\n`;
})

function MoviesFullListOverview() {
    const titleArray = [];
   for (let i = 0; i < pelisMasVotadas.length; i++) {  
    titleArray.push(TextVoteListRating+pelisMasVotadas[i].vote_average+"\n");
    titleArray.push(TextVoteListTitle+pelisMasVotadas[i].title+"\n");
    titleArray.push("iii. Reseña​: " +pelisMasVotadas[i].overview+"\n");
  } return titleArray 
}

let ListTheaters= fs.readFileSync("C:/Users/soraw/DigitalHouse/dh-movies/theaters.json", 'utf8');
let ListTheatersArray =  JSON.parse(ListTheaters, " ");

function TheatersFullList(){
    const titleArray = [];
    for (let i = 0; i < ListTheatersArray.total_theaters; i++) {
        titleArray.push("\n"+TextSurcursalesListName+ListTheatersArray.theaters[i].name);
        titleArray.push("\n"+TextSurcursalesListDir+ListTheatersArray.theaters[i].address);
        titleArray.push("\n"+TextSurcursalesListDesc+ListTheatersArray.theaters[i].description+"\n");
    }
    return titleArray;
}

let TextSurcursalesTitle= "​Nuestras Salas: ";
let TextSurcursalesListName="i. Nombre: ";
let TextSurcursalesListDir="ii. Dirección:​ ";
let TextSurcursalesListDesc= "iii. Descripcion: ";

let TextContactTitle= "​Contáctanos."
let TextContactFill= "​¿Tenés algo para contarnos? Nos encanta escuchar a nuestrosclientes. Si deseas contactarnos podés escribirnos al siguiente email:dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes."

let TextAnswerTitle= "Preguntas Frecuentes";
let ListFaqs= fs.readFileSync("C:/Users/soraw/DigitalHouse/dh-movies/faqs.json", 'utf8');
let ListFaqsArray =  JSON.parse(ListFaqs, " ");

function FaqsFullList(){
    const titleArray = [];
    for (let i = 0; i < ListFaqsArray.total_faqs; i++) {
        titleArray.push("\n"+"Pregunta: "+ListFaqsArray.faqs[i].faq_title);
        titleArray.push("\n"+"Respuesta: "+ListFaqsArray.faqs[i].faq_answer+"\n");
    }
    return titleArray;
}


 http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/plain;charset=UTF-8"});
    if (req.url == "/"){
        res.end (TextHomeTitle + "\n" + 
        "Total de Peliculas: "+ListMovieArray.total_movies + "\n" + 
        MoviesFullLista().sort().join(" ")
         + "\n" +  "\n" +
        TextHomeFooter+ "\n" + 
        TextHomeFooterOne +  "\n" +
        TextHomeFooterTwo+  "\n" +
        TextHomeFooterThree+ "\n" +
        TextHomeFooterFour+ "\n" +
        TextHomeFooterFive+  "\n" );
    }
    if (req.url == "/en-cartelera"){
        res.end(TextCarteleraTitle + 
        ListMovieArray.total_movies + "\n" +
        CarteleraFullList().join(" ")


        )
    }
    if (req.url == "/mas-votadas"){
        res.end(TextVoteTitle+ "\n" + 
        "Total de peliculas: " + cuentafinal +  "\n" +
        "Rating Promedio: " + rating +  "\n" +
        "Listados de Peliculas: " + "\n"+ "\n"+
        MoviesFullListOverview().join(" ")


        
        );
    }
    if (req.url == "/sucursales"){
        res.end(TextSurcursalesTitle+  ListTheatersArray.total_theaters+ "\n"+
        TheatersFullList().join(" ")
        
        );
    }
    if (req.url == "/contacto"){
        res.end(TextContactTitle+ "\n"+
        TextContactFill
        );
    }
    if (req.url == "/preguntas-frecuentes"){
        res.end(TextAnswerTitle+ ListFaqsArray.total_faqs+"\n"+
        FaqsFullList().join(" ")
        );
    }
}).listen(3030, "localhost"); 



