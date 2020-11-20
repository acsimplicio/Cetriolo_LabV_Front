<template>
    <div class="input-container">
        <span>{{ fieldName }}</span>
        <input class="input-textbox" 
            :type="type"
            :placeholder="placeholder"
            :value="value" 
            @input="updateValue($event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props: ['fieldName', 'type', 'placeholder'],
    data () {
        return {
            value: ''
        }
    },
    methods: {
        updateValue (value) {
            this.$emit('input', value)
        }
    }
}
</script>

<style>
.input-container {
    display: flex;
    flex-direction: column;
}

.input-textbox {
    border: transparent;
    border-bottom: 2px solid #3A663E;
    height: 20px;
    padding: 5px;
    margin-bottom: 20px;
}
</style>