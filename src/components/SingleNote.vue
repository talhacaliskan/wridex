<template>
    <div class="column is-12 is-one-third-tablet is-one-quarter-desktop">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{note.title.substr(0,20)}}
                </p>
            </header>
            <div class="card-content">
                <p class="title">
                   {{note.body.substr(0,100)}}...
                </p>
                <hr>
                <p class="subtitle">
                    Jeff Atwood
                </p>
            </div>
            <footer class="card-footer">
                <button class="card-footer-item button is-medium is-danger is-fullwidth	"> Edit</button>
                <button class="card-footer-item button is-medium is-info is-fullwidth	"> Share Facebook</button>
    
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SingleNote',
    props: {
        note: {
            type: Object,
            required: true
        }
    }
}
</script>
