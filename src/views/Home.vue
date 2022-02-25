<template>
    <div class="home">
        <h1>Reactive ref</h1>
        <h3>{{ iroman }}</h3>
        <h3>{{ hulk }}</h3>

        <button @click="changeIronman">Ironmas Change</button>
        <button @click="changeHulk">Hulk Change</button>

        <h3>Ironman : {{ ironmanIsAlive }} </h3>
        <h3>Hulk : {{ hulkIsAlive }} </h3>


        <button @click="changeStatus">Change</button>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "Home",

    setup() {
        const iroman = ref({ name: "Tony", age: 50 });
        const hulk = reactive({ name: "Bruce", age: 50 });

        const ironmanIsAlive = reactive(false);
        const hulkIsAlive = ref(true);

        const changeStatus = () => {
            hulkIsAlive.value = !hulkIsAlive.value;
            ironmanIsAlive = reactive(!ironmanIsAlive);

        };

        return {
            iroman,
            hulk,

            changeIronman: () => {
                iroman.value.name = "Tony Start";
                iroman.value.age = 55;
            },
            changeHulk: () => {
                hulk.name = "Bruce Banner";
                hulk.age = 53;
            },
            changeStatus,
            ironmanIsAlive,
            hulkIsAlive,
        };
    },
};
</script>
