// to create log in function 

export default {
    name: "TheLoginComponent",
    props: ['active_user'],


template: `
<!-- creating a log in form once user joins the chats -->
<div class="login">
    <!--create login page-->

    <div v-if="!joined" class="login-container">
    <h2 class="login_title">Log In to start the chatting</h2>

    <!-- username -->
    <div class="loginform">
    <h2 class="username">Username</h2>
   <input type="text" class="user_name" v-model="active_user" placeholder="Enter Username">

    <!-- password -->
    <h2 class="password">Password</h2>
    <input type="password" placeholder="Enter Password" class="password_input">

    <!-- button -->
   <button class="joinbtn" v-on:click="join">Join</button>
    </div>
    </div>
</div>
    <div v-if="joined">
    </div>
   










`,

data () {

return {

   joined: false,
   active_user: '',

}

},

methods: {
    join() {
        this.joined = true;
        console.log(this.active_user);
        this.$emit('joined', this.active_user);

        if (this.active_user == null) {
            this.joined = false;
            alert('Please enter your details');

        }
        else {
            this.joined = true;
            
        }
    
       
    },

}   


}
