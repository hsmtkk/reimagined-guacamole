<template>
    <v-app>
        <v-main>
            <v-container>
                <v-text-field v-model="inputText" />
                <p>Status is {{ status }}</p>
                <p v-if="status === 'pending'">Loading...</p>
                <p v-if="status === 'success'">{{ data }}</p>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<script setup lang="ts">
const inputText = ref("")

const { data, status } = useLazyFetch("/api/capitalize", {
    immediate: false,
    query: { text: inputText },
})
</script>