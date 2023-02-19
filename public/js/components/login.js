// to create log in function 

export default {
    name: "TheLoginComponent",
    props: ['active_user'],


template: `
<!-- creating a log in form once user joins the chats -->
    <!--create login page-->
    <div v-if="!joined" class="mainmain">
    <div class="mainlogin">

    <div v-if="!joined" class="login-container">
    <h2 class="login_title">Log In to Chat!</h2>

    <!-- username -->
    <div class="loginform">      
    
    
   <input type="text" class="user_name" v-model="active_user" placeholder="username">

    <!-- password -->    
    <input type="password" placeholder="password" class="password_input">

    <!-- button -->
   <button class="joinbtn" v-on:click="join">login</button>
    </div>
    </div>
    <div v-if="joined">
    </div>
   </div>
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
