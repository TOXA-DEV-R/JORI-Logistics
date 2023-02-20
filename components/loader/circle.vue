<template>
  <teleport to="body">
    <transition
      enter-active-class="transition-opacity"
      leave-active-class="transition-opacity"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0">
      <div
        v-if="!loader.active"
        class="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[#ffffff] bg-opacity-95 z-[9999]">
        <icons-circle class="animate-spin" />
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { useState } from "#imports";

const loader = useState<{ active: boolean }>("loader-state");
</script>
