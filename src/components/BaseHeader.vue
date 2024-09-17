<template>
  <section class="header">
    <div class="header__wrap">
      <video width="100%" height="100%" class="header__video" autoplay loop muted>
        <source src="/video/video.mp4" type="video/mp4" />
        Видео не поддерживается браузером
      </video>
    </div>
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav">
          <ul class="header__list list-reset">
            <li class="header__item">
              <div class="header__link">
                Видеосъемка
                <ul class="header__submenu list-reset submenu-1">
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Интервью</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Презентационные ролики</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Фильм о компании</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Мероприятии</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Актерскре портфолио (визитка)</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Интерьерный ролик</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Съемка Reels</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Аэросъемка</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Видеосъемка конференций</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">День Рождения компании</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Концерты и постановки</li></router-link
                  >
                  <router-link to="/video-interview"
                    ><li class="header__subitem">Видеосъемка тимбилдинга</li></router-link
                  >
                </ul>
              </div>
            </li>
            <li class="header__item">
              <div class="header__link">
                Фотосъемка
                <ul class="header__submenu list-reset submenu-2">
                  <router-link to="/reportage"
                    ><li class="header__subitem">Репортаж</li></router-link
                  >
                  <router-link to="/sports-events"
                    ><li class="header__subitem">Спортивные события</li></router-link
                  >
                  <router-link to="/interior-photography"
                    ><li class="header__subitem">Интерьерная съемка</li></router-link
                  >
                  <router-link to="/catalog-shooting"
                    ><li class="header__subitem">Каталожная съемка</li></router-link
                  >
                  <router-link to="/business-portrait"
                    ><li class="header__subitem">Деловой портрет</li></router-link
                  >
                  <router-link to="/subject-shooting"
                    ><li class="header__subitem">Предметная съемка</li></router-link
                  >
                </ul>
              </div>
            </li>
            <li class="header__item">Видеотрансляции</li>
          </ul>
        </nav>

        <div class="header__description">
          <h2 class="header__subtitle">Видеосъемка || фотосъемка</h2>
          <h1 class="header__title">UltraSokol</h1>
          <p class="header__tagline">Профессиональные решения для вашего бизнеса</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  position: relative;
  &__video {
    object-fit: cover;
  }
  &__wrap {
    width: 100%;
    max-height: 100%;
    font-size: 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      z-index: 2;
    }
  }
  &__list {
    display: flex;
    padding: 0 30px 30px 30px;
    gap: 90px;
    justify-content: center;
  }
  &__item {
    color: #fff;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover .submenu-1 {
      opacity: 1;
      visibility: visible;
    }
    &:hover .submenu-2 {
      opacity: 1;
      visibility: visible;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 70vw;
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    padding: 2vw;
    z-index: 5;
  }

  &__submenu {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    top: 100px;
    left: 0;
    width: 100%;
    padding: 30px 10px;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
  }

  &__subitem {
    padding: 10px 0;
    color: #fff;
    font-family: 'Roboto';
    font-size: 16px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0px;
    text-transform: none;
    cursor: pointer;
  }

  &__subitem:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &__subtitle {
    margin: 0;
    margin-bottom: 30px;
    color: #fff;
    text-align: center;
    font-family: 'Roboto';
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 38.75px; /* 155% */
  }
  &__title {
    margin: 0;
    margin-bottom: 30px;
    color: #fff;
    text-align: center;
    font-family: 'Roboto';
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: 38.75px; /* 155% */
    text-transform: uppercase;
  }
  &__tagline {
    margin: 0;
    color: #fff;
    text-align: center;
    font-family: 'Roboto';
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 38.75px; /* 155% */
  }
  &__nav {
    margin-bottom: 250px;
  }
}
</style>
