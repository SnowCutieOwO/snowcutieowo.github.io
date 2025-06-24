<!-- .vitepress/theme/progress_bar.vue -->

<!-- 

Special thanks to Discord@brc_dd

He's really a helpful contributor..!

-->

<script setup lang="ts">
import { BProgress } from '@bprogress/core'
import { useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import '@bprogress/core/css'

const router = useRouter()

BProgress.configure({
  showSpinner: false
})

router.onBeforeRouteChange = () => {
  BProgress.start()
}

router.onAfterRouteChange = () => {
  BProgress.done()
}
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
:root {
  --bprogress-color: var(--vp-c-brand);
}
</style>