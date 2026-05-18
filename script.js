let currentTab = 'veiculos'
let cart = []

const container = document.getElementById('products-container')

function renderProducts(tab) {
  container.innerHTML = ''

  products[tab].forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">
          <h3>${product.name}</h3>
          <p>R$ ${product.price}</p>

          <button onclick='addToCart(${JSON.stringify(product)})'>
            Comprar
          </button>
        </div>
      </div>
    `
  })
}

renderProducts(currentTab)

const buttons = document.querySelectorAll('.tab-btn')

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')

    currentTab = btn.dataset.tab

    renderProducts(currentTab)
  })
})

function addToCart(product) {
  cart.push(product)
  updateCart()
}

function updateCart() {
  document.getElementById('cart-count').innerText = cart.length

  const cartItems = document.getElementById('cart-items')
  cartItems.innerHTML = ''

  let total = 0

  cart.forEach(item => {
    total += item.price

    cartItems.innerHTML += `
      <div class="cart-item">
        <h4>${item.name}</h4>
        <p>R$ ${item.price}</p>
      </div>
    `
  })

  document.getElementById('cart-total').innerText = total
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden')
}

}