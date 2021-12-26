<script setup lang="ts">
emits: ['save-data'],
data() {
    return { 
        name: {
            val: '',
            isValid: true,
        },
        price: {
            val: '',
            isValid: true,
        },
        quantity: {
            val: '',
            isValid: true,
        },
        category: {
            val: '',
            isValid: true,
        },
        formIsValid: true,
    }
},
methods: {
    clearValidity(input) {
        value.[input].isValid = true;
    },
    validateForm() {
formIsValid = true;
if (name.value === '') {
    name.isValid = false;
    formIsValid = false;
}
if (price.value || price.value < 0) {
price.isValid = false;
formIsValid = false;
}
if (quantity.value || quantity.value < 0) {
    quantity.isValid = false;
    formIsValid = false;
}
if (category.value === '') {
    category.isValid = false;
    formIsValid = false;
}

    },
    submitForm() {
        validateForm();

        if (!formIsValid) {
            return;
        }
        const formData = {
            name: name.val,
            price: price.val,
            quantity: quantity.val,
            category: category.val
        };
        $emit('save-data', formData)
    }
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-group" :class="{invalid: !name.isValid}" />
    <label for="name">Name</label>
    <input v-model.trim="name.val" type="text" name="name" @blur="clearValidity('name')">
    <p v-if="!name.isValid">
      Name must not be empty.
    </p>
    </div>
    <div class="form-group" :class="{invalid: !price.isValid}" />
    <label for="price">Price</label>
    <input v-model.trim="price.val" type="text" name="price" @blur="clearValidity('price')">
    <p v-if="!price.isValid">
      Price must not be empty.
    </p>
    </div>
    <div class="form-group" :class="{invalid: !quantity.isValid}" />
    <label for="quantity">Quantity</label>
    <input v-model.trim="quantity.val" type="text" name="quantity" @blur="clearValidity('quantity')">
    <p v-if="!quantity.isValid">
      Quantity must not be empty.
    </p>
    </div>
    <div class="form-group" :class="{invalid: !category.isValid}" />
    <label for="category">category</label>
    <input v-model.trim="category.val" type="text" name="category" @blur="clearValidity('category')">
    <p v-if="!category.isValid">
      Category must not be empty.
    </p>
    </div>
    <p v-if="!formIsValid">
      Please fix the above errors and submit again.
    </p>
    <button>Add Item</button>
  </form>
</template>
