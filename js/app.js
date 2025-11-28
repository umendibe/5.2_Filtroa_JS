
const arropa = [
    {
        produktuIzena: "Kamiseta1",
        Prezioa: 15,
        img: "img/kamisetak/kamiseta1.jpeg",
        category: 'kamisetak'
    },
    {
        produktuIzena: "Kamiseta2",
        Prezioa: 15,
        img: "img/kamisetak/kamiseta2",
        category: 'kamisetak'
    },
    {
        produktuIzena: "Kamiseta3",
        Prezioa: 15,
        img: "img/kamisetak/kamiseta3.jpeg",
        category: 'kamisetak'
    },
    {
        produktuIzena: "Praka1",
        Prezioa: 25,
        img: "img/prakak/prakak1.jpeg",
        category: 'prakak'
    },
    {
        produktuIzena: "Praka2",
        Prezioa: 25,
        img: "img/prakak/prakak2.jpeg",
        category: 'prakak'
    },
    {
        produktuIzena: "Praka3",
        Prezioa: 25,
        img: "img/prakak/prakak3.jpeg",
        category: 'prakak'
    },
    {
        produktuIzena: "Sudadera1",
        Prezioa: 50,
        img: "img/sudaderak/sudadera1.jpeg",
        category: 'sudaderak'
    },
    {
        produktuIzena: "Sudadera2",
        Prezioa: 50,
        img: "img/sudaderak/sudadera2.jpeg",
        category: 'sudaderak'
    },
    {
        produktuIzena: "Sudadera3",
        Prezioa: 50,
        img: "img/sudaderak/sudadera3.jpeg",
        category: 'sudaderak'
    },
    {
        produktuIzena: "Zapatilla1",
        Prezioa: 200,
        img: "img/zapatillak/zapatillak1.jpeg",
        category: 'zapatillak'
    },
    {
        produktuIzena: "Zapatilla2",
        Prezioa: 200,
        img: "img/zapatillak/zapatillak2.jpeg",
        category: 'zapatillak'
    },
    {
        produktuIzena: "Zapatilla3",
        Prezioa: 200,
        img: "img/zapatillak/zapatillak3.jpeg",
        category: 'zapatillak'
    }
]

const porduktuakBistaratu = (bistaratzekoProduktuak) => {
    const kontenidoa = document.getElementByIdById("kontenidoa")

    kontenidoa.innerHTML = ""
    bistaratzekoProduktuak.forEach(produktua => {
        const div = document.createElement("div")
        div.classname = 'produktuak'
        div.innerHTML = `
      <img src="${produktua.img}" alt="alt">
      <h3>${produktua.produktuIzena}</h3>
      <p class="Prezioa"> $ ${produktua.Prezioa}</p>
      <button>Karritora gehitu</button>
    `
    kontenidoa.append(div)
    })
}

const filterProducts = (category) => {
    const bistaratzekoProduktuak = arropa.filter(produktua => produktua.category === category) 
    porduktuakBistaratu(bistaratzekoProduktuak) 
}

const prakakBtn = document.getElementsById('prakak');
const kamisetakBtn = document.getElementById('kamisetak');
const sudaderaBtn = document.getElementById('sudaderak');
const zapatillakBtn = document.getElementById('zapatillak');

prakakBtn.addEventListener('click', () => {
    filterProducts('prakak');
});

kamisetakBtn.addEventListener('click', () => {
    filterProducts('kamisetak');
});

sudaderaBtn.addEventListener('click', () => {
    filterProducts('sudaderak');
});

zapatillakBtn.addEventListener('click', () => {
    filterProducts('zapatillak');
});

porduktuakBistaratu(produktuak);