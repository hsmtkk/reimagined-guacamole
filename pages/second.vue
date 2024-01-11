<template>
    <input type="text" v-model="inputText" v-bind:disabled="pending" />
    <input type="submit" />
    <p>{{ response }}</p>
</template>
  
<script setup lang="ts">
const inputText = ref("")

const { data: response, execute, pending } = useLazyFetch("/api/capitalize", {
    immediate: false,
    query: { text: inputText },
})

</script>