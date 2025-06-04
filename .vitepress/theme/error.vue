<script setup>
import DefaultTheme from 'vitepress/theme'
import 'math';

const { Layout } = DefaultTheme;

const getRandomNum = Math.floor(Math.random() * (10))

</script>

<template>
    <center>
        <p v-if="getRandomNum >= 2"><img src="/src/poop_original_statistic.png" style="padding: 20px;"></p>
        <p v-if="getRandomNum <= 1"><img src="/src/poop_original.gif" style="padding: 20px;"></p>
        <div><font size=20; style='border: 20px;'>404</font></div>
        <p>你要找的页面不存在。:(</p>
    </center>  
</template>

