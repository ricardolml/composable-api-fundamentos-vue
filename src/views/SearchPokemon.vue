<template>
    <h1>Buscar pokemon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSumit">
        <input type="number" placeholder="Numero pokemon" autofocus v-model="pokemonId" />
    </form>
    <br>
    <span>Presione enter para buscar</span>
</template>

<script>

import { useRouter, ref } from 'vue'

export default {

    setup(){
        const pokemonId = ref(1);

        return {
            pokemonId,
            onSumit : () => {
                console.log('pokemon a buscar', pokemonId.value)
            }
        }

    }
}
</script>

<style>
</style>