<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const todos = ref(null)

onMounted(() => {
  axios.get("http://localhost:3000/todos")
    .then(resp => todos.value = resp.data.map(t => {
      return {
        id:t.id,
        task: t.task,
        deadline: new Date(Date.parse(t.deadline)).toLocaleDateString()
      }
    }
    )
    )
})

const deleteTask = (id) => {
  axios.delete("http://localhost:3000/todos/" + id).then(() => {
    id = id.toString()
    todos.value = todos.value.filter(t => t.id != t.id)
  })
}


</script>

<template>
  <div class="container">
    <div class="row">
      <div class="card col-lg-3 col-md-6 col-12" v-for="todo in todos">
        <div class="card-body">
          <h3 class="card-text">{{ todo.task }}</h3>
          <h5 class="card-text">Due by: {{ todo.deadline }}</h5>
        </div>
        <div class="card-footer">
          <button class="btn btn-danger" @click="deleteTask(todo.id)">Törlés</button>
          <button class="btn btn-success mx-1">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>
