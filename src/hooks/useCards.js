import { ref, onMounted } from "vue";
import axios from "axios";

export function useCards(cardsLimit) {
    const cards = ref([])
    const totalPages = ref(0)
    const isCardsLoading = ref(true)
    const fetching = async () => {
        try {
            const allProds = await axios.get('https://fakestoreapi.com/products');
            totalPages.value = Math.ceil(allProds.data.length / cardsLimit);
            const end = cardsLimit;
            const start = end - cardsLimit;
            cards.value = allProds.data.slice(start, end);
        } catch (error) {
            alert('ошибка: ', error.message)
        } finally {
            isCardsLoading.value = false;
        }
    }

    onMounted(fetching)
    return {
        cards,
        totalPages,
        isCardsLoading
    }
}