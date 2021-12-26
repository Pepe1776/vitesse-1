<script setup lang="ts">

</script>

<template>
  <div class="table">
    <div class="table-header-group">
      <div v-for="{ id, name, price, quantity, category } in items" :key="id" class="table-row">
        <div class="table-cell">
          {{ name }}
        </div>
        <div class="table-cell">
          {{ price }}
        </div>
        <div class="table-cell">
          {{ quantity }}
        </div>
        <div class="table-cell">
          {{ category }}
        </div>
        <div class="table-cell">
          {{ price * quantity }}
        </div>
      </div>
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
