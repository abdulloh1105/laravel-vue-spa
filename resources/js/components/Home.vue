<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">Home</div>
                        <p>
                            {{ status.title }} said ...
                        </p>
                        <p>
                            A moment ago ...
                        </p>
                    <div class="message-body" v-text="status.body" >
<!--                        I'm an Home component.-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                statuses: []
            }
        },
        created() {
            axios.get('/api/statuses').then(( data ) => {
                this.statuses = data.data
                console.log(data.data)
            })
        }
    }
</script>
