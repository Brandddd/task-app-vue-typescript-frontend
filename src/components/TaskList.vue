<template>
  <ul>
    <li v-for="task in tasks" :key="task._id">
      {{ task.title }}
    </li>
  </ul>
</template>
<script lang="ts">
import { getTask } from "@/api/taskApi";
import { ITask } from "@/interfaces/Task";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [] as ITask[],
    };
  },
  methods: {
    async loadTaks() {
      const response = await getTask();
      this.tasks = response?.data;
    },
  },
  mounted() {
    this.loadTaks();
  },
});
</script>
