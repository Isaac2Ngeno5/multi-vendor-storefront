<template>
  <div class="checkout">
    <h2 class="mb-4">Checkout</h2>
    <div v-if="items.length === 0" class="text-center">
      <p>Your cart is empty. Please add items before checking out.</p>
      <router-link to="/" class="btn btn-primary">Continue Shopping</router-link>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-8">
          <h3>Order Summary</h3>
          <div v-for="item in items" :key="item.id" class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">
                Price: ${{ item.price.toFixed(2) }} x {{ item.quantity }}
                <br>
                Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Total</h3>
              <p class="card-text">
                Items: {{ totalItems }}<br>
                Total Price: ${{ totalPrice.toFixed(2) }}
              </p>
              <button class="btn btn-primary btn-lg w-100" @click="processCheckout">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCartStore } from '../stores/cart'

export default {
  name: 'Checkout',
  computed: {
    ...mapState(useCartStore, ['items', 'totalItems', 'totalPrice'])
  },
  methods: {
    ...mapActions(useCartStore, ['clearCart']),
    processCheckout() {
      // Here you would typically integrate with a payment gateway
      // For this example, we'll just show an alert and clear the cart
      alert('Thank you for your order! Total: $' + this.totalPrice.toFixed(2))
      this.clearCart()
      this.$router.push('/')
    }
  }
}
</script>