<template>
    <div class="task-container">
        <div class="task-content">
            <div class="task-labels">
                <span class="task-label">{{ task.label }}</span>
                <span @click="deleteTask()">&#10060</span>
            </div>
            <div class="task-description">
                <h3>{{ task.description }}</h3>
            </div>
            <p @click="toggleInput()" class="task-priority">Prioriteit: {{ task.priority }}</p>
            <input v-if="showPriority" type="text" v-model="newPriority" v-on:keydown.enter="changePriority()">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newPriority: "",
            showPriority: false
        }
    },
    props: [
        'task',
    ],

    methods: {
        toggleInput() {
            this.showPriority = !this.showPriority;
        },

        changePriority() {
            this.$emit('changePriority', { id: this.task.id, newPriority: this.newPriority });
            this.newPriority = "";
        },

        deleteTask() {
            console.log("delete");
            this.$emit('deleteTask', this.task.id);
        }
    }
}
</script>

<style scoped>
.task-container {
    width: 30%;
    margin: 2rem .5rem;
    border: 1px solid #0F0F0F;
    border-radius: 10px;
    display: flex;
  }

.task-content {
    width: 100%;
    margin: 2rem;
}

.task-description {
    font-style: italic;
}

.task-labels {
    display: flex;
    justify-content: space-between;
}

.task-label {
    display: block;
    text-align: center;
    padding: .2rem 1rem;
    background-color: #DBF9B8;
    border: 1px solid #FFF;
    border-radius: 10px;
    color: #000;
    font-weight: 600;
    font-size: .8rem;
}

.task-priority {
    font-weight: 600;
    text-decoration: underline;
}
</style>