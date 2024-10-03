<template>
    <form class="form" @submit.prevent>
        <h3 class="form__title">Добавить карточку товара</h3>
        <input v-focus type="text" 
            class="form__input" 
            v-bind:value="card.title" 
            @input="inputTitle"
            placeholder="title">
        <input type="text" 
            class="form__input" 
            :value="card.desc" 
            @input="card.desc = $event.target.value"
            placeholder="description">
        <input type="text" 
            class="form__input" 
            v-model.number="card.price" 
            placeholder="price">
        <input type="text" 
            class="form__input" 
            v-bind:value="card.img" 
            @input="card.img = $event.target.value"
            placeholder="image's path" />
        <my-input type="text" 
            class="form__input" 
            v-model="card.category" 
            v-model:myvalue="card.category"
            placeholder="category" />
        <my-button 
            class="form__button" 
            @click="createCard">
            Добавить
        </my-button>

    </form>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
    components: {
        MyButton,
    },
    data() {
        return {
            card: {
                title: '',
                category: '',
                desc: '',
                price: '',
                img: ''
            }
        }
    },
    methods: {
        inputTitle(event) {
            this.card.title = event.target.value;
        },
        createCard() {
            this.card.id = Date.now();
            this.$emit('create', this.card);
            this.card = {
                title: '',
                category: '',
                desc: '',
                price: '',
                img: ''
            }
        }
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/css/style.scss';

.form {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    gap: 8px;

    &__title {
        color: $siteColor;
        margin-bottom: 20px;
    }

    &__input {
        width: 100%;
        border: 1px solid $siteColor;
        padding: 12px;
        margin-bottom: 8px;
    }

    &__button {
        align-self: flex-end;
    }
}
</style>