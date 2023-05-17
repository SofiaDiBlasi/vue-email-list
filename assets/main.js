const { createApp } = Vue

createApp({
    data() {
        return {
            indirizzi: [],
            url: "https://flynn.boolean.careers/exercises/api/random/mail"
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get(this.url).then((response) => {
                this.indirizzi.push(response.data.response);
            });
        }
    }
}).mount('#app')