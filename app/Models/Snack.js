export class Snack {
  constructor(name, price, quantity) {
    this.name = name,
      this.price = price,
      this.quantity = quantity
  }
  get snackTemplate() {
    return `<div class="col-2">
  <h1>${this.name}</h1>
  <button onclick="app.snackController.buySnack('${this.name}')">${this.price}
  </button>
  <p id="${this.name}">${this.quantity}</p>
</div>`
  }
}