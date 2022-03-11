<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Pendientes: {{ pending.length }}</h4>

    <hr />

    <button 
        :class=" { 'active' : currentTab === 'all'  } "
        @click=" currentTab = 'all' "
    >
        Todos
    </button>
    <button 
        :class=" { 'active' : currentTab === 'pending'  } "
        @click=" currentTab = 'pending' "
    >
        Pendientes
    </button>
    <button 
        :class=" { 'active' : currentTab === 'completed'  } "
        @click=" currentTab = 'completed' "
    >
        Completado
    </button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id" :class="{ 'completed' : todo.completed }" @dblclick="toggleTodo( todo.id )">{{ todo.text }}</li>
        </ul>
    </div>

    <button @click="openModal" >Crear Modal</button>

    <Modal v-if="isOpen" @on:close='closeModal'>
        <template v-slot:header>
            <h2>Agregar tarea</h2>
        </template>
        <template v-slot:body>
            <form @submit.prevent="guardar">
                <input type="text" v-model="todo" placeholder="Nueva tarea">
            </form>
        </template>
    </Modal>
</template>

<script>

import {ref , defineAsyncComponent} from 'vue'
import useTodos from '@/composables/useTodos'

export default {

    components: {
        Modal: defineAsyncComponent( () => import('@/components/Modal.vue') )
    },
    setup() {
        
        const { currentTab, all, completed, pending, getTodosByTab, toggleTodo, createTodo } = useTodos();
        const isOpen = ref(false);
        const todo = ref('');

        const guardar = () => {

            if( todo.value.length === 0 ) return

            createTodo( todo );
            isOpen.value = false;
        }

        
        return {
            all,
            completed,
            currentTab,
            getTodosByTab,
            pending,
            toggleTodo,
            guardar,
            isOpen,
            todo,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    },
};
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}
li {
    cursor: pointer;
}

.active {
    background-color: #2c3e50;
    color: white;
}
.completed{
    text-decoration: line-through;
}
</style>