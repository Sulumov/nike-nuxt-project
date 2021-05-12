<template>
  <div class="footer">
    <div class="container">
      <nav class="footer__menu-columns">
        <ul class="footer__menu-column">
          <div class="footer__title">Информация</div>
          <ul class="footer__menu-list">
            <li>
              <nuxt-link to="/">Доставка</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Оплата</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Возврат</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">О нас</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Контакты</nuxt-link>
            </li>
          </ul>
        </ul>
        <ul class="footer__menu-column">
          <div class="footer__title">О Nike</div>
          <ul class="footer__menu-list">
            <li>
              <nuxt-link to="/">Новости</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Карьера</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Инвесторам</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Забота об окружающей среде</nuxt-link>
            </li>
          </ul>
        </ul>
        <div class="social">
          <a href="#" class="social__button social__button--instagram"></a>
          <a href="#" class="social__button social__button--vk"></a>
          <a href="#" class="social__button social__button--facebook"></a>
        </div>
      </nav>
      <section class="footer__bottom-section">
        <div class="footer__copyright">
          © Nike, Inc.,2020 Все права защищены.
        </div>
        <nav class="footer__other-links">
          <ul>
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">Условия использования</a>
            </li>
            <li>
              <a href="#">Условия продажи</a>
            </li>
            <li>
              <a href="#">Конфиденциальность и файлы cookie</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
@import 'Footer.scss';
</style>
