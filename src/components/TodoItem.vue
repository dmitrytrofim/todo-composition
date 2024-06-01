<template>
 <li class="flex justify-between rounded-[10px] border overflow-hidden">
  <button
   class="shrink-0 w-[30px] font-700 text-[white] bg-[black]"
   type="button"
  >
   &#10003;
  </button>
  <p class="grow flex items-center text-left p-[10px]">{{ mes }}</p>
  <button
   class="shrink-0 w-[30px] font-500 text-[white] bg-[black]"
   type="button"
  >
   &#10006;
  </button>
 </li>
</template>

<script lang="ts" setup>
defineProps(['mes']);
</script>

<style scoped></style>
