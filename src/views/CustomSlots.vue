<template>
    <h1>Aprendiendo slots</h1>
    <button>Abrir modal</button>
    <Modal></Modal>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {

    components: {
        Modal: defineAsyncComponent( () => import('@/components/Modal.vue') )
    },

    setup() {

    }

}
</script>

<style>
</style>