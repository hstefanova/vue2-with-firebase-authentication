<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"/><br>
        <input type="password" v-model="password" placeholder="Password"/><br>
        <button @click="login" class="btn">Connection</button>
        <p>or Sign In with Google</p>

        <button @click="socialLogin" class="btn-social">
            <img src="../assets/google-btn.png" alt="">
        </button>

        <p>You don't have an account? You can <router-link to="/sign-up">create one!</router-link> </p>
    </div>
</template>

<script>
    import firebase from 'firebase';
    
    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert("Oops!" + err.message)
                    }
                );
            },
            socialLogin: function() {
                const provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    this.$router.replace('home')
                }).catch((err) => {
                    alert('Oops.' + err.message)
                });
            }
        }
    }
</script>

<style scoped>
    .login { margin-top: 40px;}
    input { margin: 10px 0; width: 20%; padding: 15px; }
    .btn { display: inline-block; padding: 15px; margin-top: 20px; min-width: 100px;  cursor: pointer; border: none; background: green; color: #fff; text-transform: uppercase; }
    .btn a { text-decoration: none;color: inherit}
    .btn-social { display: inline-block; width: 80px; height: 80px; border: none; background: transparent; box-shadow: 0 2px 2px 2px #eee; transition: box-shadow .2s; border-radius: 50%; padding: 15px; }
    .btn-social:hover { box-shadow: 0 0 2px 2px #eee; }
    .btn-social img { width: 100%; height: auto; display: block; }
    p { margin-top: 40px; font-size: 13px; }
    p a { cursor: pointer; }
</style>


