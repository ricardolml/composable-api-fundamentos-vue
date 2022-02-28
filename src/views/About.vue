<template>
    <div class="about">
        <h1>This is an about page</h1>
        <hr>
        <h3>{{title}}</h3>
        <button @click="onChanageTitle" >cambiar titulo</button>
    </div>
</template>

<script>
import {
    onUpdated,
    onUnmounted,
    onBeforeMount,
    onBeforeUpdate,
    onBeforeUnmount,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
    onActivated,
    onDeactivated,
    onServerPrefetch,
    onMounted,

    ref
} from "vue";
export default {
    setup() {

        const title = ref('About');

        onActivated(() => {
            console.log("onActivated");
        })
        onBeforeMount(() => {
            console.log("onBeforeMount");
        })
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount");
        })
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        })
        onDeactivated(() => {
            console.log("onDeactivated");
        })
        onErrorCaptured(() => {
            console.log("onErrorCaptured");
        })
        onMounted(() => {
            console.log("onMounted");
        })
        onRenderTracked(() => {
            console.log("onRenderTracked");
        })
        onRenderTriggered(() => {
            console.log("onRenderTriggered");
        })
        onServerPrefetch(() => {
            console.log("onServerPrefetch");
        })
        onUnmounted(() => {
            console.log("onUnmounted");
        })
        onUpdated(() => {
            console.log("onUpdated");
        })

        return{
            title,
            onChanageTitle: () => title.value = "New About"
        }
    },
};
</script>
