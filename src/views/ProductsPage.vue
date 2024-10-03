<template>
    <div>
        <h1 class="titleH1">Каталог товаров</h1>
        <my-input v-focus v-model="searchQuery" placeholder="Поиск..." class="search" />
        <div class="app__buttons button_margin">
            <my-button @click="showDialog">Добавить товар</my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <CardFormComponent @create="createCard"></CardFormComponent>
        </my-dialog>
        <card-list :cards="sortedAndSearchedCards" @remove="removeCard" v-if="!isCardsLoading" />
        <div v-else>Идет загрузка...</div>

        <div>
            <div class="page__wrapper">
                <div v-for="pageNumber in totalPages" :key="pageNumber" class="page"
                    :class="{ 'current-page': page === pageNumber }" @click="changePage(pageNumber)"> {{
                        pageNumber }}
                </div>
            </div>
            <div class="page__wrapper" v-if="this.page < this.totalPages">
                <my-button @click="loadMoreProducts">Показать ещё</my-button>
            </div>
        </div>
    </div>
</template>

<script>
import CardFormComponent from '@/components/CardFormComponent';
import CardList from '@/components/CardList';
import axios from 'axios';

export default {
    components: {
        CardFormComponent, CardList
    },
    data() {
        return {
            cards: [],
            dialogVisible: false,
            isCardsLoading: false,
            page: 1,
            cardsLimit: 3,
            totalPages: 0,
            searchQuery: '',
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'price', name: 'По цене' },
            ]
        }
    },
    methods: {
        createCard(card) {
            this.cards.push(card);
            this.dialogVisible = false;
        },
        removeCard(card) {
            this.cards = this.cards.filter(item => item.id !== card.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchProducts() {
            try {
                this.isCardsLoading = true;
                const allProds = await axios.get('https://fakestoreapi.com/products');
                this.totalPages = Math.ceil(allProds.data.length / this.cardsLimit);
                const end = this.cardsLimit * this.page;
                const start = end - this.cardsLimit;
                this.cards = allProds.data.slice(start, end);
            } catch (error) {
                alert('ошибка: ', error.message)
            } finally {
                this.isCardsLoading = false;
            }
        },
        changePage(pageNumber) {
            this.page = pageNumber;
            this.fetchProducts();
        },
        async loadMoreProducts() {
            try {
                console.log(this.isCardsLoading);
                if (!this.isCardsLoading) {
                    this.page += 1;
                }
                const allProds = await axios.get('https://fakestoreapi.com/products');
                this.totalPages = Math.ceil(allProds.data.length / this.cardsLimit);
                const end = this.cardsLimit * this.page;
                const start = end - this.cardsLimit;
                if (this.isCardsLoading || this.page === 1) {
                    this.cards = []
                }
                this.cards = [...this.cards, ...allProds.data.slice(start, end)];
            } catch (error) {
                alert('ошибка: ', error.message)
            }
        },
    },
    mounted() {
        this.fetchProducts();
    },
    computed: {
        sortedCards() {
            return [...this.cards].sort((card1, card2) => {
                if (this.selectedSort === "price") {
                    return card1[this.selectedSort] - card2[this.selectedSort]
                }
                return card1[this.selectedSort]?.localeCompare(card2[this.selectedSort])
            })
        },
        sortedAndSearchedCards() {
            return this.sortedCards.filter(card => card.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;

    &__buttons {
        display: flex;
        justify-content: space-between;
    }
}

.titleH1,
.search {
    color: $siteColor;
    margin-bottom: 12px;
}

.button_margin {
    margin-bottom: 24px;
}

.page__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    width: 100%;
    margin-bottom: 24px;
}

.page {
    border: 1px solid $siteColor;
    color: $siteColor;
    padding: 10px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: rgba(0, 128, 128, .5)
    }
}

.current-page {
    background-color: $siteColor;
    color: white;

    &:hover {
        background-color: $siteColor;
        cursor: auto;
    }
}
</style>