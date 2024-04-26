<template>
  <main>
    <div v-for="item in demos" :key="item.id">
      <el-card style="max-width: 480px; cursor: pointer" @click="() => $router.push(item.path)">
        <template #header>
          <div class="card-header">
            <span>{{ item.name }}</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
      </el-card>
    </div>
  </main>
</template>

<script setup lang="ts">
import { demoLists } from './const'
const demos = reactive([...demoLists])
</script>
