<template>
  <div>
    <h1 class="menu__title">Фотосъемка</h1>
    <ul class="menu__list list-reset">
      <router-link to="/reportage"><li class="menu__item">Репортаж</li></router-link>
      <router-link to="/sports-events"><li class="menu__item">Спортивные события</li></router-link>
      <router-link to="/interior-photography"
        ><li class="menu__item">Интерьерная съемка</li></router-link
      >
      <router-link to="/catalog-shooting"
        ><li class="menu__item">Каталожная съемка</li></router-link
      >
      <router-link to="/business-portrait"><li class="menu__item">Деловой портрет</li></router-link>
      <router-link to="/subject-shooting"
        ><li class="menu__item">Предметная съемка</li></router-link
      >
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.menu__title {
  margin: 0;
  margin-bottom: 20px;
  color: #fff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 600;
}
.menu__item {
  padding: 10px 0;
  color: #fff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0px;
  text-transform: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.menu__item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
