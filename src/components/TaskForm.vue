<template>
  <form @submit.prevent="saveTask()">
    <input type="text" placeholder="Write a title" v-model="task.title" />
    <textarea
      rows="3"
      placeholder="Write a description"
      v-model="task.description"
    ></textarea>
    <button>Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ITask } from "@/interfaces/Task";
import { createTask } from "@/api/taskApi";

export default defineComponent({
  data() {
    return {
      task: {} as ITask,
    };
  },
  methods: {
    async saveTask() {
      await createTask(this.task);
    },
  },
});
</script>
