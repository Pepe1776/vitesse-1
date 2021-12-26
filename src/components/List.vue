<script setup lang="ts">
import items from '../modules/firebase'

</script>

<template>
  <div
    v-for="item in items"
    :id="item.id"
    :key="item.id"
    class="table"
    :name="item.name"
    :price="item.price"
    :quantity="item.quantity"
    :category="item.category"
  >
    <div class="table-header-group">
      <div />
    </div>
    <div class="table-row-group">
      <div class="table-row" />
      <div class="table cell" />
      <div class="table cell" />
      <div class="table cell" />
      <div class="table cell" />
    </div>
  </div>
</template>
