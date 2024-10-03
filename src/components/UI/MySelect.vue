<template>
    <select :value="modelValue" @change="changeOption" class="select">
        <option disabled value="">Выберите из списка</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.select {
    padding: 12px;
    background-color: white;
    border: 1px solid $siteColor;
    color: $siteColor;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: $siteColor;
        border: 1px solid white;
        color: white;
    }
}
</style>