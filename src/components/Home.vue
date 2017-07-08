<template>
    <div class="container">
        <notes :notes="notes"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Notes from './Notes.vue';
export default {
    name: 'Home',
    computed: {
        ...mapGetters([
            'notes'
        ])
    },
    components:{
        Notes
    },
    created() {
        this.$store.dispatch('getNotes');
    }
}
</script>
