export class Snack {
  constructor(name, price, quantity) {
    this.name = name,
      this.price = price,
      this.quantity = quantity
  }
  get snackTemplate() {
    return `<div class="col-3">
  <h1>${this.name}</h1>
  <button class="btn-primary"onclick="app.snackController.buySnack('${this.name}')">Buy 1
  </button> <a>cost:$${this.price}</a>
  <p id="${this.name}">${this.quantity}</p>
</div>`
  }
}