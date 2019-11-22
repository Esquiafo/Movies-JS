const fs = require("fs");

let ListMovie= fs.readFileSync("C:/Users/soraw/DigitalHouse/dh-movies/movies.json", 'utf8');
let ListMovieArray =  JSON.parse(ListMovie);

//   function MoviesFullListOverview() {
//             const titleArray = [];
//            for (let i = 0; i < ListMovieArray.total_movies; i++) {  
//               titleArray.push(ListMovieArray.movies[i].overview);
//           } return titleArray 
//      }
//  
//  function MoviesFullListTitle (){
//      const titleArray = [];
//      for (let i = 0; i < ListMovieArray.total_movies; i++) {
//          titleArray.push(ListMovieArray.movies[i].title);
//      }   return titleArray 
//  }
//  function MoviesFullVote(){
//       let voteArray = [];
//       for (let i = 0; i < ListMovieArray.total_movies; i++) {
//           voteArray.push(ListMovieArray.movies[i].vote_average)
//       }  
//           return voteArray
//       
//      }
//      function MoviesFullTitle(){
//          let titleArray = [];
//          for (let i = 0; i < ListMovieArray.total_movies; i++) {
//              titleArray.push(ListMovieArray.movies[i].title);
//          }  
//              return titleArray
//          
//         }
//         
//  
//         function MoviesFullOverview(){
//          let titleArray = [];
//          for (let i = 0; i < ListMovieArray.total_movies; i++) {
//              titleArray.push(ListMovieArray.movies[i].overview);
//          }  
//              return titleArray
//          
//         }
//  
// var reseña = MoviesFullOverview().map(function(x){
//     return x
// })
// var voto = MoviesFullVote().map(function(x){
//     return x
// })
// var titulos = MoviesFullTitle().map(function(x){
//     return x
// })
// 
// var nuevosvotos = voto.filter(e=>e>7)
// var nuevostitulos = titulos.filter(e=>e = nuevosvotos)


let pelisMasVotadas = ListMovieArray.movies.filter((unaMovie) => unaMovie.vote_average >= 7);

let contenidoMasVotadas = 'Más Votadas \n\n';

contenidoMasVotadas += `Total de películas: ${pelisMasVotadas.length} \n\n`;


pelisMasVotadas.forEach(unaPelicula => {
    contenidoMasVotadas += `TITULO: ${unaPelicula.title}\n`;
    contenidoMasVotadas += `RATING: ${unaPelicula.vote_average}\n`;
    contenidoMasVotadas += `RESEÑA: ${unaPelicula.overview}\n\n`;
})

function MoviesFullListOverview() {
    const titleArray = [];
   for (let i = 0; i < pelisMasVotadas.length; i++) {  
    titleArray.push(pelisMasVotadas[i].title);
    titleArray.push(pelisMasVotadas[i].vote_average);
    titleArray.push(pelisMasVotadas[i].overview);
  } return titleArray 
}


   console.log (MoviesFullListOverview())