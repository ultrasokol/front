<template>
  <div>
    <h1 class="videoMenu__title">Видеосъемка</h1>
    <ul class="videoMenu__list list-reset">
      <router-link to="/video-interview"><li class="videoMenu__item">Интервью</li></router-link>
      <router-link to="/video-interview"
        ><li class="videoMenu__item">Презентационные ролики</li></router-link
      >
      <router-link to="/video-interview"
        ><li class="videoMenu__item">Фильм о компании</li></router-link
      >
      <router-link to="/video-interview"><li class="videoMenu__item">Мероприятии</li></router-link>
      <router-link to="/video-interview"
        ><li class="videoMenu__item">Актерскре портфолио (визитка)</li></router-link
      >
      <router-link to="/video-interview"
        ><li class="videoMenu__item">Интерьерный ролик</li></router-link
      >
      <router-link to="/video-interview"><li class="videoMenu__item">Съемка Reels</li></router-link>
      <router-link to="/video-interview"><li class="videoMenu__item">Аэросъемка</li></router-link>
      <router-link to="/video-interview"
        ><li class="videoMenu__item">Видеосъемка конференций</li></router-link
      >
      <router-link to="/video-interview"
        ><li class="videoMenu__item">День Рождения компании</li></router-link
      >
      <router-link to="/video-interview"
        ><li class="videoMenu__item">Концерты и постановки</li></router-link
      >
      <router-link to="/video-interview"
        ><li class="videoMenu__item">Видеосъемка тимбилдинга</li></router-link
      >
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.videoMenu__title {
  margin: 0;
  margin-bottom: 20px;
  color: #fff;
  font-family: 'Roboto';
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 600;
}
.videoMenu__item {
  padding: 10px 0;
  color: #fff;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0px;
  text-transform: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
.videoMenu__item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
