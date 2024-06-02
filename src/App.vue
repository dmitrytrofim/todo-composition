<template>
 <TheWrapper>
  <TheHeader />
  <VContainer>
   <TodoPanel />
   <TodoList />
  </VContainer>
 </TheWrapper>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
import TodoList from '@/components/TodoList.vue';
import TodoPanel from '@/components/TodoPanel.vue';
import TheWrapper from '@/components/commons/TheWrapper.vue';
import VContainer from '@/components/commons/VContainer.vue';
</script>

<style></style>
