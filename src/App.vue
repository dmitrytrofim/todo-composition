<template>
 <TheWrapper>
  <TheHeader />
  <VContainer>
   <div class="pt-[10px] mb-[20px]">
    <input
     class="border w-full text-[20px] rounded-[10px] p-[10px]"
     type="text"
     placeholder="Сегодня я хочу..."
    />
   </div>
   <h2 class="text-[24px] text-center mb-[10px]">Список задач...</h2>
   <TodoList />
  </VContainer>
 </TheWrapper>
</template>

<script lang="ts" setup>
import VContainer from '@components/commons/VContainer.vue';
import TheHeader from '@components/TheHeader.vue';
import TheWrapper from '@components/commons/TheWrapper.vue';
import TodoList from '@components/TodoList.vue';
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
