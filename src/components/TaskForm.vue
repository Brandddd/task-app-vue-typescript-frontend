<script lang="ts">
import { defineComponent } from "vue";
import { ITask } from "@/interfaces/Task";

export default defineComponent({
  data() {
    return {
      task: {} as ITask,
    };
  },
  methods: {
    saveTask() {
      console.log(this.task);
    },
  },
});
</script>

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
