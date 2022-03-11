
import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodo = () => {

    const store = useStore();

    const currentTab = ref('all');

    
    return {
        currentTab,

        all: computed(() => store.getters["allTodos"]),
        completed: computed(() => store.getters["completedTodos"]),
        pending: computed(() => store.getters["pendingTodos"]),

        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

        //methods
        toggleTodo: (id) => store.commit('toggleTodo', id),
        createTodo: (todo) => store.commit('createTodo', todo)
    };

}

export default useTodo;