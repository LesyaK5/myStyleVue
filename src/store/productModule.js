import axios from 'axios';

export const productModule = {
    state: () => ({
        cards: [],
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
    }),
    getters: {
        sortedCards(state) {
            return [...state.cards].sort((card1, card2) => {
                if (state.selectedSort === "price") {
                    return card1[state.selectedSort] - card2[state.selectedSort]
                }
                return card1[state.selectedSort]?.localeCompare(card2[state.selectedSort]) // для сортировки строк
            })
        },
        sortedAndSearchedCards(state, getters) {
            return getters.sortedCards.filter(card => card.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutations: {
        setCards(state, cards) {
            state.cards = cards;
        },
        setLoading(state, bool) {
            state.isCardsLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },

    },
    actions: {
        async fetchProducts({ state, commit }) {
            try {
                commit('setLoading', true);     // вызвали мутацию setLoading
                const allProds = await axios.get('https://fakestoreapi.com/products');
                commit('setTotalPages', Math.ceil(allProds.data.length / state.cardsLimit));
                const end = state.cardsLimit * state.page;
                const start = end - state.cardsLimit;
                commit('setCards', allProds.data.slice(start, end));
            } catch (error) {
                console.log(error);
            } finally {
                commit('setLoading', false);     // вызвали мутацию setLoading
            }
        },
        async loadMoreProducts({ state, commit }) {
            try {
                if (!state.isCardsLoading) {
                    commit('setPage', state.page + 1);
                }
                const allProds = await axios.get('https://fakestoreapi.com/products');
                commit('setTotalPages', Math.ceil(allProds.data.length / state.cardsLimit));
                const end = state.cardsLimit * state.page;
                const start = end - state.cardsLimit;
                if (state.isCardsLoading || state.page === 1) {
                    commit('setCards', []);
                }
                commit('setCards', [...state.cards, ...allProds.data.slice(start, end)]);
            } catch (error) {
                console.log(error);
            }
        },
    },
    namespaced: true
}