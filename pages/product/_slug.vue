<template>
  <div class="product">
    <div class="product__back" @click="$router.back()" />
    <div class="container">
      <div class="product__details">
        <product-slider :images="product.images" :discount="product.discount" />
        <div class="product-info">
          <client-only>
            <breadcrumbs />
          </client-only>
          <div class="product-info__title">{{ product.name }}</div>
          <div class="product-info__prices">
            <div v-if="product.old_price" class="product-info__old-price">
              {{ product.old_price }}
            </div>
            <div class="product-info__current-price">
              {{ product.current_price }}
            </div>
          </div>
          <div class="product-info__options">
            <div v-if="!product.available" class="product-info__empty">
              Товар закончился
            </div>
            <template v-else>
              <property-selector
                title="Размер"
                :properties="product.properties.size"
                @select="selectHandler($event, 'selectedSize')"
              />
              <property-selector
                :big="true"
                title="Цвета"
                :properties="product.properties.colors"
                @select="selectHandler($event, 'selectedColor')"
              />
              <add-to-cart
                :id="product.id"
                :name="product.name"
                :price="product.current_price"
                :size="selectedSize"
                :color="selectedColor"
                :discount="product.discount"
                :old-price="product.old_price"
                :image="product.images[0]"
                :slug="product.slug"
              />
            </template>
          </div>
          <div class="product-info__details">
            <div class="product-info__info-block">
              <strong>{{ product.description }}</strong>
            </div>
            <div v-if="parseCompoundToString" class="product-info__info-block">
              <strong>Состав: </strong> {{ parseCompoundToString }}.
            </div>
            <div class="product-info__info-block">
              <strong class="product-info__strong-block">
                Рекомендация по уходу:
              </strong>
              {{ product.recommendations }}
            </div>
          </div>
        </div>
      </div>
      <relevant-items-block />
      <history-block />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Slug',
  scrollToTop: true,
  fetch() {
    this.product = this.getProductBySlug(this.$route.params.slug)
    this.setCurrentProductId(this.product.id)
  },
  data: () => ({
    product: {},
    available: true,
    selectedSize: {},
    selectedColor: {},
  }),
  mounted() {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem('history'))
    if (historyFromLocalStorage && Array.isArray(historyFromLocalStorage)) {
      this.setHistoryPreset(historyFromLocalStorage)
    }
    this.addToHistory({
      id: this.product.id,
      name: this.product.name,
      price: this.product.current_price,
      discount: this.product.discount,
      oldPrice: this.product.old_price,
      image: this.product.images[0],
      slug: this.product.slug,
    })
  },
  computed: {
    ...mapGetters({
      getProductBySlug: 'products/getProductBySlug',
    }),
    parseCompoundToString() {
      return Object.keys(this.product).length !== 0
        ? this.product.compound.join(', ')
        : null
    },
  },
  methods: {
    selectHandler(data, prop) {
      this.$data[prop] = data
    },
    ...mapActions({
      addToHistory: 'products/addToHistory',
    }),
    ...mapMutations({
      setCurrentProductId: 'products/SET_CURRENT_PRODUCT',
      addToHistory: 'products/ADD_TO_ITEM_HISTORY',
      setHistoryPreset: 'products/SET_HISTORY_PRESET',
    }),
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description || '',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
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
    cursor: pointer;
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
      margin-left: 3px;
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
