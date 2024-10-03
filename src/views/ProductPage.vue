<template>
    <div class="product">
        <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide class="product__slide" v-for="i in 3">
                <img class="product__img" :src="prod.image" alt="picture">
            </swiper-slide>
        </swiper>
        <div class="product__text">
            <p>арт. {{ $route.params.id }}</p>
            <h2 class="product__title">{{ prod.title }}</h2>
            <p class="product__desc">{{ prod.description }}</p>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import axios from 'axios';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
    data() {
        return {
            prod: {},
        }
    },
    methods: {
        async getProduct() {
            try {
                const fetchData = await axios.get(`https://fakestoreapi.com/products/` + this.$route.params.id);
                this.prod = fetchData.data;
                console.log(this.prod);
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getProduct()
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.product {
    &__slide {
        display: flex;
        justify-content: center
    }

    &__img {
        max-width: 100%;
    }

    &__text {
        text-align: center;
    }

    &__title {
        color: $siteColor;
    }

    &__desc {
        text-align: justify;
        padding: 0 10%;
    }
}

.dots {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 12px;
}

.dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid $siteColor;
}

.dot_active {
    background-color: $siteColor;
}
</style>