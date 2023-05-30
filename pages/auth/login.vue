<script setup lang="ts">
  definePageMeta({
    layout: 'empty',
    middleware: 'redirect-if-authenticated'
  });

  import {signInWithPopup,GoogleAuthProvider } from 'firebase/auth'

  const auth = useFirebaseAuth()
  const loginWithGoogle = () => {

    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
        .then(() => {

          navigateTo('/dashboard')

        })
        .catch((error) => {
          console.log(error)
        })
  }
</script>

<template>
  <div class="background">
    <div class="login-container">
      <q-card class="card-container q-pa-xl q-px-lg">
        <q-card-section class="login-title title-container q-pb-xl">
          <div class="row">
            {{$t('app.title')}}
          </div>

        </q-card-section>

        <div class="subtitle-text-container q-pb-lg">

          <div class="log-in-text">{{$t('login.log_in')}}</div>
          <div class="log-in-subtitle-text">{{$t('app.access_to')}} {{$t('app.title')}}</div>

        </div>

        <div class="login-btn-container">
          <q-btn
              class="login-btn"
              @click="loginWithGoogle"
          >
            <img src="~/assets/images/google_logo.png" class="google-logo">
            &nbsp;&nbsp;&nbsp;
            {{$t('login.log_in_with_google')}}
          </q-btn>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background{
  background: url('~/assets/images/background.jpg') rgb(249, 249, 249);
}

.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .card-container{
    line-height: 2;
  }

  .title-container{
    display: flex;
    justify-content: center;
    padding-top: 0px;
  }

  .login-title{
    font-weight: 400;
    font-size: 22px;
  }

  .sales-logo{
    height: 50px;
    width: 50px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .subtitle-text-container{

    text-align: center;

    .log-in-text{
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
    }

    .log-in-subtitle-text{
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #757575;
    }
  }

  .continue-btn-text{
    color: white;
  }

  .divider-container {
    display: flex;
    align-items: center;

    .left-div,
    .right-div {
      flex: 1;
      height: 1px;
      background-color: #9E9E9E;
    }

    .divider {
      color: #9E9E9E;
      position: relative;
      text-align: center;
      width: 40px;
      height: 32px;
    }

    .divider::before,
    .divider::after {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      background-color: #9E9E9E;
    }

    .divider::before {
      width: 50%;
      height: 1px;
    }

    .divider::after {
      width: 1px;
      height: 50%;
    }
  }

  .login-btn-container{
    display: flex;
    justify-content: center;

    .login-btn{
      width: 100%;
      color:#424242;
      font-weight: 600;
    }
    .google-logo{
      height: 28px;
      width: 28px;
    }
  }
}


</style>