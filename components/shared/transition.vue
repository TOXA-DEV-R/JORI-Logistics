<template>
  <transition
    enter-active-class="transition"
    leave-active-class="transition"
    enter-from-class="transform translate-y-full md:transform-none opacity-0"
    enter-to-class="transform translate-y-0 md:transform-none opacity-1"
    leave-from-class="transform translate-y-0 md:transform-none opacity-1"
    leave-to-class="transform translate-y-full md:transform-none opacity-0">
    <slot />
  </transition>
</template>
