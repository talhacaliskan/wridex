<template>
    <div class="container">
        <br>
        <div class="columns is-multiline ">
            <br>
            <single-note v-for="note in notes" v-bind:key="note.id" :note="note" />
        </div>
    </div>
</template>
<script>
import SingleNote from './SingleNote.vue';

export default {
    name: 'Notes',
    props: {
        notes: {
            type: Array,
            required: true
        }
    },
    components: {
        SingleNote
    }
}
</script>
