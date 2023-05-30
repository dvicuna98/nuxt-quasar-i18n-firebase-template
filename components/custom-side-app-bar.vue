<template>
  <div>
    <q-header
        class="app-bar"
    >
      <q-toolbar>
        <q-toolbar-title class="header">
          {{$t('app.title')}}
        </q-toolbar-title>
        <q-avatar icon="account_circle" @click="this.logOutMenu = !this.logOutMenu">
          <q-menu v-model="logOutMenu">
            <q-list>
              <q-item clickable v-close-popup @click="logOut">
                <q-item-section>{{$t('app.log_out')}}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  selectedPage: {
    type: String,
    default: ''
  },
})

const logOutMenu = ref(false)

const auth = useFirebaseAuth()
const logOut = () => {

  auth.signOut().then(()=>navigateTo('/auth/login'))
}

</script>

<style scoped>

</style>