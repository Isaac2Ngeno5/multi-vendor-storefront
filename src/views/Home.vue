<template>
  <div class="home">
    <h1 class="text-center mb-4">{{ title }}</h1>
    <p class="lead text-center mb-4">Welcome to our multi-vendor storefront featuring products from Amazon, eBay, and Walmart.</p>
    
    <div class="row justify-content-center mb-4">
      <div class="col-md-6">
        <div class="input-group">
          <input 
            type="text" 
            class="form-control" 
            v-model="searchQuery" 
            placeholder="Search for products..."
            @keyup.enter="performSearch"
          >
          <button class="btn btn-primary" type="button" @click="performSearch">Search</button>
        </div>
      </div>
    </div>

    <div v-if="searchPerformed">
      <h2 class="mb-3">Search Results</h2>
      <div v-if="searchResults.length" class="row">
        <div v-for="result in searchResults" :key="result.id" class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ result.name }}</h5>
              <p class="card-text">{{ result.price }}</p>
              <p class="card-text"><small class="text-muted">From {{ result.vendor }}</small></p>
              <button class="btn btn-primary" @click="addToCart(result)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="text-center">No results found for "{{ searchQuery }}"</p>
    </div>

    <Cart class="mt-5" />
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '../stores/cart'
import Cart from '../components/Cart.vue'

export default {
  name: 'Home',
  components: {
    Cart
  },
  data() {
    return {
      title: 'Multi-Vendor Storefront',
      searchQuery: '',
      searchResults: [],
      searchPerformed: false
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart']),
    performSearch() {
      // Simulating an API call with dummy data
      const dummyResults = [
        { id: 1, name: "Smartphone", price: 599.99, vendor: "Amazon" },
        { id: 2, name: "Laptop", price: 999.99, vendor: "eBay" },
        { id: 3, name: "Headphones", price: 149.99, vendor: "Walmart" },
        { id: 4, name: "Smartwatch", price: 299.99, vendor: "Amazon" },
        { id: 5, name: "Tablet", price: 399.99, vendor: "eBay" },
        { id: 6, name: "Bluetooth Speaker", price: 79.99, vendor: "Walmart" }
      ];

      // Filter results based on search query
      this.searchResults = dummyResults.filter(item => 
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      this.searchPerformed = true;
    }
  }
}
</script>