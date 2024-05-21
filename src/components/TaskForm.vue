<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      task:
    }
  },
})
</script>

<template>
  <form @submit="">
    <input type="text" placeholder="Write a title" />
    <textarea rows="3" placeholder="Write a description"></textarea>
    <button>Save</button>
  </form>
</template>
