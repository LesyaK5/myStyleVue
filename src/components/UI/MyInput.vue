<template>
    <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
export default {
    name: 'my-input',
    props: {     // сюда приходит то, что вводит клиент, что привязано с помощью v-model в компоненте использования
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';

.input {
    width: 100%;
    border: 1px solid $siteColor;
    padding: 12px;
}
</style>