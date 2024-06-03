<template>
 <button
  class="text-[20px] text-[white] bg-[black] p-[5px_10px] rounded-[5px]"
  type="button"
 >
  {{ text }}
 </button>
</template>

<script lang="ts" setup>
defineProps(['text']);
</script>

<style scoped></style>
