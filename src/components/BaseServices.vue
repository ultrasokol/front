<template>
  <section class="services">
    <div class="container">
      <h2 class="services__title">Услуги</h2>
      <div class="services__content">
        <div class="services__wrapper1">
          <Transition name="arrow2">
            <div v-if="showArrow2" class="services__arrow2">
              <img class="services__img" src="/img/arrow.svg" alt="arrow" />
            </div>
          </Transition>
          <ul class="services__list list-reset">
            <router-link to="/" class="services__item"
              ><li class="services__item services__black no-wrap">Интервью</li></router-link
            >
            <router-link to="/" class="services__link"
              ><li class="services__item">
                <span class="services__line">Фотосессии</span>
              </li></router-link
            >
            <router-link to="/" class="services__link"
              ><li class="services__item">
                <span class="services__line">Монтаж видео</span>
              </li></router-link
            >
            <router-link to="/" class="services__link"
              ><li class="services__item services__white">Съемка клипов</li></router-link
            >
            <router-link to="/" class="services__link"
              ><li class="services__item">
                <span class="services__line" style="white-space: nowrap">Репортажная съемка</span>
              </li></router-link
            >
            <router-link to="/" class="services__link"
              ><li class="services__item">
                <span class="services__line">Анимация</span>
              </li></router-link
            >
            <router-link to="/" class="services__link"
              ><li class="services__item">
                <span class="services__line">Съемка интерьеров</span>
              </li></router-link
            >
          </ul>
          <Transition name="arrow">
            <div v-if="showArrow" class="services__arrow">
              <img class="services__img" src="/img/arrow.svg" alt="arrow" />
            </div>
          </Transition>
        </div>
        <div class="services__wrapper">
          <div class="services__contact">
            <div class="services__contactContent">
              <span class="services__contactText">не нашли, что искали</span>
              <div class="services__contactLine">
                <span class="services__contactLink">Напишите мне</span>
                <img
                  class="services__contactImg"
                  width="76"
                  height="76"
                  src="/img/photo.jpg"
                  alt="phone"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="services__wrapper2">
          <span class="services__text">Нас выбирают</span>
          <div class="services__scroll" ref="scrollContainer">
            <ul class="services__scrollImg list-reset" ref="scrollList">
              <li class="services__image" v-for="(image, index) in images" :key="index">
                <img class="services__img1" :src="image.src" :alt="image.alt" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

const scrollContainer = ref<HTMLDivElement | null>(null)
const scrollList = ref<HTMLUListElement | null>(null)

const images = ref([
  {
    src: '/img/lenta1.png',
    alt: 'image'
  },
  {
    src: '/img/lenta2.png',
    alt: 'image'
  },
  {
    src: '/img/lenta3.png',
    alt: 'image'
  },
  {
    src: '/img/lenta4.png',
    alt: 'image'
  },
  {
    src: '/img/lenta5.png',
    alt: 'image'
  },
  {
    src: '/img/lenta6.png',
    alt: 'image'
  },
  {
    src: '/img/lenta7.png',
    alt: 'image'
  },
  {
    src: '/img/lenta8.png',
    alt: 'image'
  },
  {
    src: '/img/lenta9.png',
    alt: 'image'
  },
  {
    src: '/img/lenta10.png',
    alt: 'image'
  },
  {
    src: '/img/lenta11.png',
    alt: 'image'
  },
  {
    src: '/img/lenta12.png',
    alt: 'image'
  },
  {
    src: '/img/lenta13.png',
    alt: 'image'
  },
  {
    src: '/img/lenta14.png',
    alt: 'image'
  },
  {
    src: '/img/lenta15.png',
    alt: 'image'
  },
  {
    src: '/img/lenta16.png',
    alt: 'image'
  },
  {
    src: '/img/lenta17.png',
    alt: 'image'
  },
  {
    src: '/img/lenta18.svg',
    alt: 'image'
  },
  {
    src: '/img/lenta19.png',
    alt: 'image'
  },
  {
    src: '/img/lenta20.png',
    alt: 'image'
  },
  {
    src: '/img/lenta21.png',
    alt: 'image'
  },
  {
    src: '/img/lenta22.png',
    alt: 'image'
  },
  {
    src: '/img/lenta23.png',
    alt: 'image'
  },
  {
    src: '/img/lenta24.png',
    alt: 'image'
  },
  {
    src: '/img/lenta25.png',
    alt: 'image'
  },
  {
    src: '/img/lenta26.png',
    alt: 'image'
  },
  {
    src: '/img/lenta27.png',
    alt: 'image'
  },
  {
    src: '/img/lenta28.png',
    alt: 'image'
  }
])

let animationFrameId: number | undefined

const startScrolling = () => {
  const list = scrollList.value
  if (!list) return

  const listWidth = list.scrollWidth
  let scrollPosition = 0

  const scrollStep = () => {
    scrollPosition += 1
    if (scrollPosition >= listWidth / 2) {
      scrollPosition = 0
    }
    list.style.transform = `translateX(-${scrollPosition}px)`
    animationFrameId = requestAnimationFrame(scrollStep)
  }

  scrollStep()
}

const showArrow = ref(false)
const showArrow2 = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startScrolling()
})

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

function handleScroll() {
  if (window.scrollY > 700) {
    showArrow.value = true
    showArrow2.value = true
  } else {
    showArrow.value = false
    showArrow2.value = false
  }
}
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.services {
  padding: 50px 0;
  &__wrapper2 {
    display: flex;
    width: 100%;
    gap: 50px;
  }
  &__text {
    display: flex;
    align-items: center;
    color: #000;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  &__scroll {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }

  &__scrollImg {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    width: max-content;
    transition: transform 0s linear;
  }

  &__img1 {
    display: block;
    height: auto;
    width: 200px;
  }
  &__title {
    margin: 0;
    color: #000;
    font-family: 'Roboto';
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: 124px; /* 155% */
    text-transform: uppercase;
  }

  &__list {
    display: grid;
    grid-template-columns: minmax(150px, 1fr) minmax(150px, 1fr) minmax(200px, 1fr) minmax(
        150px,
        1fr
      );
    row-gap: 30px;
    column-gap: 10px;
    align-items: center;
  }
  &__item {
    width: 100%;
    color: #000000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 28.75px; /* 155% */
    text-transform: uppercase;
  }

  &__black {
    padding: 15px 25px;
    border-radius: 40px;
    background: #000;
    color: #fff;
    transition:
      background 0.3s ease-in-out,
      color 0.3s ease-in-out;
    &:hover {
      background: #ffffff;
      color: #000;
    }
  }
  &__white {
    padding: 15px 25px;
    border-radius: 40px;
    border: 2px solid #000;
    transition:
      background 0.3s ease-in-out,
      color 0.3s ease-in-out;
    &:hover {
      background: #000;
      color: #fff;
    }
  }
  &__contactContent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
  }
  &__contactText {
    display: block;
    color: #000;
    font-family: 'Roboto';
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 39px; /* 156% */
    text-transform: uppercase;
  }
  &__contactLine {
    position: relative;
  }
  &__contactLink {
    padding: 25px 109px 25px 45px;
    display: block;
    color: #000;
    font-family: 'Roboto';
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 39px; /* 156% */
    text-transform: uppercase;
    border-radius: 100px;
    background: #fff;
  }
  &__contactImg {
    position: absolute;
    top: 50%;
    right: 7px;
    transform: translateY(-50%);
    border-radius: 100px;
  }
  &__wrapper1 {
    position: relative;
    margin-bottom: 50px;
  }
  &__wrapper {
    margin-bottom: 110px;
  }
  &__arrow {
    position: absolute;
    top: 80%;
    left: -190px;
    transform: translateX(0%);
    transform: rotate(20deg);
    transition: transform 0.5s ease;
  }
  &__arrow2 {
    position: absolute;
    top: 20%;
    right: -290px;
    transform: translateX(0%);
    transform: rotate(-90deg);
    transition: transform 0.5s ease;
  }
  &__img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
  &__link {
    cursor: pointer;
  }
  &__line {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 29px;
      left: 0;
      width: 100%;
      height: 3px;
      background-position: center center;
      background: #000000;
      transform: scaleX(0);
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    &:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
}
.no-wrap {
  white-space: nowrap;
}
.arrow-enter-active,
.arrow-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.arrow-enter-from,
.arrow-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
.arrow2-enter-active,
.arrow2-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.arrow2-enter-from,
.arrow2-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
</style>
