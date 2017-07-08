import axios from 'axios';
export default {
    getNotes(notes) {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            notes.commit('setNotes', response.data);
        });
    }
}