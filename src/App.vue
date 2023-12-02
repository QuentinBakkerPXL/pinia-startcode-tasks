<script>
  import TaskComponent from '@/components/TaskComponent.vue'
  import TaskFormComponent from '@/components/TaskFormComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent.vue'

  export default {
    data() {
      return {
        tasks: [],
      }
    },

    components: {
      TaskComponent,
      TaskFormComponent,
      HeaderComponent
    },

    methods: {
      addTaskToList(newTask) {
        newTask.id = this.tasks.length + 1,
        this.tasks.push(newTask);
      },

      changeTaskPriority(object) {
        let task = this.tasks.find(task => task.id == object.id);
        if (task) {
          task.priority = object.newPriority
        }
      },

      deleteTaskFromList(taskId) {
        let taskIndex = this.tasks.findIndex(task => task.id == taskId);
        if (taskIndex >= 0) {
          this.tasks.splice(taskIndex, 1);
        }
      }
    }
  }
</script>

<template>
  <HeaderComponent/>

  <TaskFormComponent v-on:addTask="addTaskToList"/>

  <div v-if="tasks.length" class="tasks-container">
      <TaskComponent v-for="task in tasks" :key="task.id"
        v-bind:task="task"
        v-on:changePriority="changeTaskPriority"
        v-on:deleteTask="deleteTaskFromList"
      />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.container {
  width: 75%;
  margin: 3rem auto;
  padding-bottom: 5rem;
}

.tasks-container {
  width: 75%;
  margin: 3rem auto;
  padding-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
}

.result {
  width: 50%;
  border: 1px solid #0F0F0F;
  border-radius: 5px;
  margin: 2rem auto;
  padding: 1rem;
}

.button {
  position: relative;
  display: inline-block;
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;

  padding: .3rem .6rem;

  background-color: transparent;
  border-radius: 5px;
  border: 0;
  color: white;
  text-align: center;
  text-decoration: none;
  text-shadow: none;

  transition: background-color 0.1s, border-color 0.1s, color 0.1s, box-shadow 0.1s, outline 0.1s;
}

.button-primary {
  background-color: #87A878;
  color: #EBEBEB;
}

.button-primary:hover {
  background-color: #DBF9B8;
  color: #0F0F0F;
}
</style>