const btn = document.querySelector("#btn");
const nav = document.querySelector(".sidebar-perfil");

btn.onclick = function () {
  nav.classList.toggle("fechada");
};

const livros = document.querySelector(".livros");

function addLivro(titulo, autor, ano, paginas, isbn, pasta) {
  const livro = document.createElement("div");
  livro.className = "livro";

  const capa = new Image();
  capa.src = pasta + "/Capa.jpg";

  const link = document.createElement("a");
  link.href = "Paginas/" + titulo + ".html";
  const tituloL = document.createElement("h3");
  tituloL.textContent = titulo;
  tituloL.className = "titulo";
  link.appendChild(tituloL);
    
  livro.appendChild(capa);
  livro.appendChild(link);

  livros.appendChild(livro);
}

addLivro(
  "Harry Potter e a Pedra Filosofal",
  "J.K. Rowling",
  1999,
  224,
  9788532511010,
  "Livros/01 - Harry Potter"
);
addLivro(
  "Garota Exemplar",
  "JKR",
  1999,
  230,
  3924981,
  "Livros/02 - Garota Exemplar"
);
addLivro(
  "Capitães da Areia",
  "Jorge Amado",
  1937,
  256,
  9788580572902,
  "Livros/03 - Capitães da Areia"
);
addLivro(
  "Clube do Livro dos Homens",
  "Lyssa Kay Adams",
  2019,
  320,
  9786555650907,
  "Livros/04 - Clube do Livro dos Homens"
);
addLivro(
  "O Conto da Aia",
  "Margaret Atwood",
  1985,
  368,
  9788532520661,
  "Livros/05 - O Conto da Aia"
);
addLivro(
  "A Culpa é das Estrelas",
  "John Green",
  2013,
  288,
  9788580573800,
  "Livros/06 - A Culpa é das Estrelas"
);
addLivro("1984", "George Orwell", 1949, 335, 9786555522785, "Livros/07 - 1984");
addLivro(
  "O Pequeno Príncipe",
  "Antoine de Saint-Exupéry",
  1943,
  96,
  9788522030828,
  "Livros/08 - O Pequeno Príncipe"
);
addLivro(
  "Divina Comédia",
  "Dante Alighieri",
  1320,
  560,
  9786555800333,
  "Livros/09 - Divina Comédia"
);
addLivro(
  "A Metamorfose",
  "Franz Kafka",
  1915,
  112,
  9786587435725,
  "Livros/10 - A Metamorfose"
);
