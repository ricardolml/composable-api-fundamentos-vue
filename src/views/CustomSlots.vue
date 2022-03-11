<template>
    <h1>Aprendiendo slots</h1>
    <button @click="openModal">Abrir modal</button>
    <Modal v-if="isOpen" @on:close='closeModal' title="Hola mundo" >
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste consectetur eaque, tempore veniam dolore.</p>
        <button>Cerrar</button>
        <h2>Titulo del modal</h2> -->

        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste consectetur eaque, tempore veniam dolore.</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Cerrar</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>

        <template v-slot:exposed='{ newTitle }' >
            <h2>{{ newTitle }}</h2>
        </template>
    </Modal>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { ref } from 'vue'
export default {

    components: {
        Modal: defineAsyncComponent( () => import('@/components/Modal.vue') )
    },

    setup() {

        const isOpen = ref(false);

        return{
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }

}
</script>

<style>
</style>