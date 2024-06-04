<template>
 <li
  class="flex justify-between rounded-[10px] border overflow-hidden cursor-grab active:cursor-grabbing"
 >
  <button
   @click="$emit('complete')"
   class="shrink-0 w-[30px] font-700 text-[white] bg-[black]"
   type="button"
  >
   {{ complete ? '&#128399;' : '&#10003;' }}
  </button>
  <p
   class="grow flex items-center text-left p-[10px]"
   :class="complete ? 'bg-[gray] text-[white]' : ''"
  >
   {{ mes }}
  </p>
  <button
   @click="$emit('remove')"
   class="shrink-0 w-[30px] font-500 text-[white] bg-[black]"
   :class="complete ? '!text-[red]' : ''"
   type="button"
  >
   &#10006;
  </button>
 </li>
</template>

<script lang="ts" setup>
defineProps<{
 mes: string;
 complete: boolean;
}>();
</script>

<style scoped></style>
