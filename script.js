const lista = document.querySelector("lista-produtos")

const cafe = [
     
    {
        nome: "Espresso",
        descricao: "Café concentrado y aromático",
        preco: "$3,50",
        img: "assets/caféespresso1.jpg"
    },

    {
        nome:"Cappuccino",
        descricao: "Espresso con leche vaporizada y espuma",
        preco: "$4.50",
        img: "assets/cafécappuccino2.jpg"
    },

    {
        nome: "Café Helado",
        descricao: "Refrescante café frio con hielo",
        preco: "$5.00",
        img: "assets/caféhelado3.jpg"
    }
]

const bolos = [

    {
        nome: "Pastel de Chocolate",
        descricao: "Delicioso pastel de chocolate casero",
        preco: "$4.00",
        img: "assets/resposteriapasteldechocolate1.jpg"
    },

    {
        nome: "Croissant",
        descricao:"Croissant francés recién horneado",
        preco: "$3.00",
        img: "assets/resposteriacroissant2.jpg"
    },

    {
        nome: "Muffin de Arándanos",
        descricao: "Esponjoso muffin con arándanos frescos",
        preco: "$3.50",
        img: "assets/resposteriamuffindearandanos3.jpg"
    }

   
]

const comidas = [

    {
        nome: "Sándwich de Pavo",
        descricao: "Sándwich fresco con pavo y vegetales",
        preco: "$6.50",
        img: "assets/comidassandwich1.jpg"
    },

    {
        nome: "Tortilla de Patatas",
        descricao: "Tortilla con huevo",
        preco: "$4.50",
        img: "assets/comidatortilladepatatas.jpg"
    },

    {
        nome: "Pisto",
        descricao:"verduras frescas picadas",
        preco:"$5.00",
        img: "assets/comidaspisto.jpg"
    }
]

function mostrarProdutos(produtos) {

    lista.innerHTML = ""
    
    produtos.forEach(produtos=> {
        lista.innerHTML += `
        
           <div class="card-popular">

                    <div class="caixa-img-cards"><img class="img-cards" src="${produtos.img}" alt="">
                    </div>
                    <div class="caixa-texto-card">

                        <p class="titulo-card">${produtos.nome}</p>
                        <p class="subtitulo-card">${produtos.descricao}</p>
                        <div class="preco-btn-card">
                            <p class="preco-card">${produtos.preco}</p>
                            <button class="btn-card"> <i class="bi bi-cart2 card-btn"></i> Agregar</button>
                        </div>

                    </div>

                </div>
        `
    })
}

 document.querySelector(".btn-café").addEventListener("click", () => {
    
    mostrarProdutos(cafe)
 })

 document.querySelector(".btn-confeitaria").addEventListener("click", () => {
    
    mostrarProdutos(bolos)
 })

 document.querySelector(".btn-comida").addEventListener("click", () => {
    
    mostrarProdutos(comidas)
 })