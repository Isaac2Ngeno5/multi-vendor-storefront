<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div v-if="items.length === 0" class="text-center">
      Your cart is empty.
    </div>
    <div v-else>
      <div v-for="item in items" :key="item.id" class="cart-item mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5>{{ item.name }}</h5>
            <p class="mb-0">{{ item.price }} x {{ item.quantity }}</p>
          </div>
          <div>
            <button class="btn btn-sm btn-outline-primary me-2" @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
            <span>{{ item.quantity }}</span>
            <button class="btn btn-sm btn-outline-primary ms-2" @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            <button class="btn btn-sm btn-danger ms-3" @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
      </div>
      <div class="text-end mt-3">
        <h4>Total: ${{ totalPrice.toFixed(2) }}</h4>
        <router-link to="/checkout" class="btn btn-success mt-2">Proceed to Checkout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCartStore } from '../stores/cart'

export default {
  name: 'Cart',
  computed: {
    ...mapState(useCartStore, ['items', 'totalPrice'])
  },
  methods: {
    ...mapActions(useCartStore, ['removeFromCart', 'updateQuantity'])
  }
}
</script>