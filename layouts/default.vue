<template xmlns="http://www.w3.org/1999/html">

    <q-layout view="hHh lpR lff" container style="height: 100vh" >

      <CustomSideAppBar
          :selectedPage="pageName"
      />

      <q-page-container>
        <q-page>

          <div class="page-title" v-if="title">
            {{title}}
          </div>

          <slot/>

        </q-page>
      </q-page-container>

    </q-layout>

</template>

<script setup lang="ts">
  const pageName = ''
  const title = ''
</script>

<style scoped>
.page-title{
  padding: 32px 32px 16px 32px;
  font-weight: 600;
  font-size: 22px;
}
</style>