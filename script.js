const banner = document.querySelector(".pelicula-principal");
banner.style.background = "linear-gradient(to right, rgba(0, 0, 0, 3), rgba(0, 0, 0, 0)), url('https://images4.alphacoders.com/115/1156779.jpg')";
banner.style.backgroundSize = "cover"; 

const descripción = document.querySelector("#description");
descripción.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const recomendados = [
    { nombre: "Samurai Jack", link: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b068ef66-0199-4c01-aeae-9ac4c91a952e/dflmpdo-bf0df1dd-b29f-4cb9-a215-6b4e60af640a.png/v1/fill/w_900,h_1273,q_80,strp/samurai_jack_and_aku_by_timacs_dflmpdo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3MyIsInBhdGgiOiJcL2ZcL2IwNjhlZjY2LTAxOTktNGMwMS1hZWFlLTlhYzRjOTFhOTUyZVwvZGZsbXBkby1iZjBkZjFkZC1iMjlmLTRjYjktYTIxNS02YjRlNjBhZjY0MGEucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ymwtbvaUZiwGpBkizDUNc0F_067zk9204FDgQqbObm8" },
    { nombre: "Trollhunters", link: "https://i.ebayimg.com/images/g/W4MAAOSwuKVjB3Gi/s-l1200.jpg" },
    { nombre: "Todo en todas partes al mismo tiempo", link: "https://pics.filmaffinity.com/Todo_a_la_vez_en_todas_partes-800492802-large.jpg" },
    { nombre: "Steven Universe", link: "https://m.media-amazon.com/images/I/51mwYbcyUBL._AC_UF1000,1000_QL80_.jpg" },
    { nombre: "Odisea en el espacio", link: "https://cinematecadebogota.gov.co/sites/default/files/styles/318_x_460/public/afiches/so_poster.jpg?itok=UvtpJ5oa" },
    { nombre: "Kingsman: el origen", link: "https://pics.filmaffinity.com/The_King_s_Man_La_primera_misiaon-469978778-large.jpg" },
    { nombre: "Nimona", link: "https://m.media-amazon.com/images/M/MV5BYWQ2YzJhOGItNTMyOC00YzFmLWExZjEtOGFmMDVkMDdmOGFiXkEyXkFqcGdeQXVyMTUxNTU1NzEz._V1_.jpg" }
  ];

const estrellas = [
  "baseline_star_white_48dp.png",
  "baseline_star_white_48dp.png",
  "baseline_star_white_48dp.png",
  "baseline_star_white_48dp.png",
  "baseline_star_outline_white_48dp.png",
]

const safe = document.createElement("img");
safe.src = "baseline_bookmark_border_white_48dp.png";

function crearPeliculas () {
  const recomended = document.querySelector("#Recomended");
  
  recomendados.forEach((recomendado) => {

    const edad = document.createElement("div");
    edad.id = "edad";
    const age = document.createElement("p");
    age.innerHTML = "+16"
  
    const safe = document.createElement("img");
    safe.src = "baseline_bookmark_border_white_48dp.png";

    const reproducir = document.createElement("div");
    reproducir.id = "reproducir";

    const reproducirPlay = document.createElement("p");
    reproducirPlay.innerHTML = "Play";

    const play = document.createElement("img");
    play.src = "baseline_play_arrow_white_48dp.png";

    const nuevoDiv = document.createElement("div");
    nuevoDiv.id = "nuevoDiv";

    const mask = document.createElement ("div");
    mask.id = "mask";

    const baseLine = document.createElement("div");
    baseLine.id = "baseLine";

    const ratings = document.createElement("div");
    ratings.id = "ratings";

    const imagenPelicula = document.createElement("img");
    imagenPelicula.id = "imagenPelicula";

    imagenPelicula.src = recomendado.link;

    edad.appendChild(age);
    mask.appendChild(edad);

    nuevoDiv.appendChild(imagenPelicula);
    reproducir.appendChild(reproducirPlay);
    reproducir.appendChild(play);
    mask.appendChild(reproducir);
    nuevoDiv.appendChild(mask);
    nuevoDiv.appendChild(baseLine);
    
    const rankings = document.createElement("p");
    rankings.innerHTML =  "Ratings:";
    baseLine.appendChild(rankings);
    
    estrellas.forEach((estrellaSrc) => {
      const estrella = document.createElement("img");
      estrella.src = estrellaSrc;
      baseLine.appendChild(estrella);
    });
    ratings.appendChild(safe);
    baseLine.appendChild(ratings);
    recomended.appendChild(nuevoDiv);
  })
}

crearPeliculas();



const trending = [
  { nombre: "Mujer Maravilla", link: "https://www.themoviedb.org/t/p/original/zx5DUiZksdhRnyUxS2Hkq9NCleh.jpg" },
  { nombre: "Batman: El caballero de la noche", link: "https://www.themoviedb.org/t/p/original/hZUSv4mCne1DP05ihoVDoh8Dg0W.jpg" },
  { nombre: "La Liga de la Justicia", link: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/10/poster-liga-justicia-dolby.jpg?tf=3840x" },
  { nombre: "Escuadrón Suicida", link: "https://www.ecartelera.com/carteles/12600/12608/003_m.jpg" },
  { nombre: "Gato con Botas 2", link: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fbfb8695-15aa-40dd-b96e-5ce4a0c84eef/dfmtur5-936fc4e0-4fcf-4821-b664-bff2debf32c1.png/v1/fill/w_1280,h_1707,q_80,strp/el_gato_con_botas_2_poster_oficial__version_mejor__by_danic574_dfmtur5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcL2ZiZmI4Njk1LTE1YWEtNDBkZC1iOTZlLTVjZTRhMGM4NGVlZlwvZGZtdHVyNS05MzZmYzRlMC00ZmNmLTQ4MjEtYjY2NC1iZmYyZGViZjMyYzEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pqGqEbG1KBlsKqxpEtOnAwqAmZgHwvjNQl3MSnQe4uQ" },
  { nombre: "Free Guy", link: "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" },
  { nombre: "Calabozos y dragones", link: "https://www.egames.news/__export/1670257593370/sites/debate/img/2022/12/05/fjocja-vuaeb0pq_1.jpg_459955865.jpg" }
];

function crearTendencias () {
const Trending = document.querySelector("#Trending");

trending.forEach((trending) => {
  const nuevoDiv = document.createElement("div");
  const imagenPelicula = document.createElement("img");

  imagenPelicula.src = trending.link;

  nuevoDiv.appendChild(imagenPelicula);
  Trending.appendChild(nuevoDiv);
})
}

crearTendencias();




