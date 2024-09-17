<template>
  <section class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__link">
          <a href="#"><img src="/img/vk.svg" alt="logo" /></a>
          <a href="#"><img src="/img/telegram.svg" alt="logo2" /></a>
          <a href="#"><img src="/img/whatsapp.svg.svg" alt="logo3" /></a>
        </div>
        <a href="mailto:ultrasokol@yandex.ru" class="footer__mail">ultrasokol@yandex.ru</a>
        <div class="footer__logo">
          <img class="footer__img" src="/img/logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  padding: 30px;
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
  }
  &__mail {
    color: #000;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 31px; /* 155% */
    letter-spacing: 1px;
    text-transform: lowercase;
    text-align: center;
  }
  &__logo {
    display: flex;
    justify-content: center;
  }
}
</style>
