<template>
    <div>
        <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateProduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="product.detail">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditProduct",
    data() {
        return {
            product: {}
        }
    },
    created() {
        axios.get(`/api/products/${this.$route.params.id}`)
            .then((res) => {
                this.product = res.data;
            });
    },
    methods: {
        updateProduct() {
            axios.patch(`/api/products/${this.$route.params.id}`, this.product)
                .then((res) => {
                    this.$router.push({ name: 'home' });
                });
        }
    }
}
</script>

<style scoped>

</style>
