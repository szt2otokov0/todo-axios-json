<script setup>
    import { ref } from 'vue'
    import Axios from 'axios'

    let formIsFilled = ref(false);
    const submitAction = () => {
        const name = document.querySelector("input[type=text]").value
        const date = document.querySelector("input[type=date]").value
        
        let id = 0;

        Axios.get("http://localhost:3000/todos").then(r => {
            let ids = r.data.map(t => t.id);
            id = ids.length.toString()
        })
            .then(console.log(id))
            .then(() => Axios.post("http://localhost:3000/todos",{id:id,task:name,deadline:date})
            .then(r => console.log(r.status)))
        
    }

    const checkFilling = () => {
        const name = document.querySelector("input[type=text]").value
        const date = document.querySelector("input[type=date]").value
        formIsFilled.value = (name && date.length == 10)
        console.log(formIsFilled.value)
    }
</script>

<template>
    <h1>New Task</h1>
    <form @change="checkFilling">
        <label for="taskname">Task:</label>
        <input type="text" name="taskname">
        <label for="duedate"></label>
        <input type="date" name="duedate" id="">
        <button class="btn btn-primary" @click="submitAction" type="button" v-if="formIsFilled">Save</button>
        <div class="text-danger" v-else="formIsFiled">Dont forget to fill all fields!</div>
    </form>
</template>