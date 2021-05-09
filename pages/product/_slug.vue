<template>
  <div class="product">
    <div class="product__back" @click="$router.back()" />
    <div class="container">
      <div class="product__details">
        <product-slider :images="images" />
        <div class="product-info">
          <client-only>
            <breadcrumbs />
          </client-only>
          <div class="product-info__title">Свитшот Nike</div>
          <div class="product-info__prices">
            <div class="product-info__old-price">3500</div>
            <div class="product-info__current-price">2900</div>
          </div>
          <div class="product-info__options">
            <div v-if="!available" class="product-info__empty">
              Товар закончился
            </div>
            <template v-else>
              <property-selector
                title="Размер"
                :properties="[
                  { name: 'xs', value: 'xs' },
                  { name: 's', value: 's' },
                  { name: 'm', value: 'm' },
                  { name: 'l', value: 'l' },
                  { name: 'xl', value: 'xl' },
                  { name: 'xxl', value: 'xxl' },
                ]"
                @select="selectHandler($event, 'selectedSize')"
              />
              <property-selector
                :big="true"
                title="Цвета"
                :properties="[
                  {
                    name: 'Синий',
                    value: 'blue',
                  },
                  {
                    name: 'Черный',
                    value: 'black',
                  },
                  {
                    name: 'Красный',
                    value: 'red',
                  },
                  {
                    name: 'Желтый',
                    value: 'yellow',
                  },
                ]"
                @select="selectHandler($event, 'selectedColor')"
              />
              <add-to-cart />
            </template>
          </div>
          <div class="product-info__details">
            <div class="product-info__info-block">
              <strong>Свитшот оверсайз со спущенной линией плеча.</strong>
            </div>
            <div class="product-info__info-block">
              <!--TODO render item property list to string-->
              <strong>Состав:</strong> 80% хлопок, 20% полиэстер.
            </div>
            <div class="product-info__info-block">
              <strong class="product-info__strong-block">
                Рекомендация по уходу:
              </strong>
              Только ручная стирка при температуре не выше 30 градусов,
              нейтральными моющими средствами; не тереть; не отжимать;
              отбеливание запрещено; не стирать моющими средствами содержащие
              отбеливатель; химчистка запрещена; гладить при низкой температуре
              до 100 градусов; сушить в тени на горизонтальной поверхности.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  data: () => ({
    available: true,
    selectedSize: {},
    selectedColor: {},
    name: 'Свитшот Nike',
    // TODO remove this property and fetch image array inside the slider from store
    images: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/62508edf-5476-447f-a65c-65c6b8871cb0/nikelab-fleece-rundhalsshirt-9czD4J.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/88da3b11-cf49-4486-b9ae-e801418d3f16/nikelab-fleece-rundhalsshirt-9czD4J.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3a5e4047-788b-47cf-9c5e-fed82be72eb1/nikelab-fleece-rundhalsshirt-9czD4J.png',
    ],
  }),
  methods: {
    selectHandler(data, prop) {
      this.$data[prop] = data
    },
  },
  head() {
    return {
      title: 'Свитшот Nike',
      meta: [
        {
          hid: 'description',
          name: 'description',
          // TODO product description
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.product {
  padding-top: 48px;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 43px;
  }
  @media (max-width: 680px) {
    padding-top: 0;
  }
  &__back {
    left: 40px;
    width: 28px;
    height: 18px;
    background-image: url('~assets/icons/back.svg');
    background-repeat: no-repeat;
    background-size: 28px;
    position: absolute;
    @media (max-width: 1024px) {
      left: 20px;
    }
    @media (max-width: 680px) {
      display: none;
    }
  }
  &__details {
    display: flex;
    @media (max-width: 1280px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

.product-info {
  padding-left: 40px;
  width: 100%;

  @media (max-width: 1280px) {
    padding-left: 0;
  }

  &__title {
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    margin: 22px 0;
  }

  &__prices {
    display: flex;
    font-weight: bold;
    font-size: 24px;
    line-height: 130%;

    *:after {
      content: '₽';
      margin-left: 6px;
    }
  }

  &__old-price {
    color: #999999;
    text-decoration-line: line-through;
    margin-right: 16px;
  }

  &__options {
    margin-top: 48px;
    padding-top: 48px;

    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 53px;
    margin-bottom: 43px;
  }

  &__strong-block {
    display: block;
    margin-bottom: 20px;
  }

  &__info-block {
    margin-bottom: 20px;
    font-size: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__empty {
    font-size: 20px;
    line-height: 130%;
    color: #777;
  }
}
</style>
