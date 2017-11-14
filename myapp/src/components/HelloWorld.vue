<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Used for Signing in New Users</h2>
    <form v-on:submit="validateForm" id="form" >
        <div >
          <!-- Required Field-->
            <input v-focus class="txtbox" type ="text"  v-model = "Firstname" placeholder="Enter First Name" >
            <div v-if="attemptSubmit && missingName">This field is required.</div>
        </div>
    <br/>
    <br/>
        <div>
             <!-- Optional Field-->
            <input class="txtbox" type ="text" v-model = "Lastname" placeholder="Enter Last Name">
        </div>
    <br/>
    <br/>
    <div >
           <!-- Email TextBox-->
        <input class="txtbox" type ="text" v-model = "Email" placeholder="Enter Email Addres">
        <div v-if="attemptSubmit && checkEmail">Email Format is wrong</div>
      </div>
    <br/>
    <br/>
       <!-- Options to be selected-->
    <select class="optclass" v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
      </option>
    </select>
    <br/>
    <br/>
  
    <div v-if="selected === 'Uttar Pradesh'">
      <select class="optclass" v-model="city">
          <option v-for="option in optionsA" v-bind:value="optionsA.value" >
            {{ option.text }}
          </option>
      </select>
    </div>
    <div v-if="selected === 'Karnataka'">
      <select v-model="city" class="optclass">
          <option v-for="option in optionsB" v-bind:value="optionsB.value" selected="Mysore">
              {{ option.text }}
          </option>
      </select>
    </div>

    <div v-if="selected === 'Tamilnadu'">
        <select v-model="city" class="optclass">
            <option v-for="option in optionsC" v-bind:value="optionsC.value" selected="Chennai">
              {{ option.text }}
             </option>
         </select>
     </div>
     <br/>
     <br/>
           <!-- submit button-->
      <input class="btnsubmit" type="submit" value="submit" name="">
    </form>

  </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Login Form',
      Firstname: "",
      Lastname: "",
      Email: "",
      selected: 'Uttar Pradesh',
      city: "",
      attemptSubmit:"false",

      options: [
      { text: 'Uttar Pradesh', value: 'Uttar Pradesh' },
      { text: 'Karnataka', value: 'Karnataka' },
      { text: 'Tamilnadu', value: 'Tamilnadu' }
      ],

      optionsA: [
      { text: 'Noida', value: 'Noida' },
      { text: 'Moradabad', value: 'Moradabad' },
      { text: 'Lucknow', value: 'Lucknow' }
      ],

      optionsB: [
      { text: 'Mysore', value: 'Mysore' },
      { text: 'Banglore', value: 'Banglore' },
      { text: 'Manglore', value: 'Manglore' }
      ],

      optionsC: [
      { text: 'Chennai', value: 'Chennai' },
      { text: 'Salem', value: 'Salem' },
      { text: 'Coimbatore', value: 'Coimbatore' }
      ]

    }
  },
  computed:{
    checkEmail: function (){
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.Email);
  },

  missingName: function () { 
    return this.Firstname === ''; }

  },
  directives: {
    focus: {
       inserted: function (el) {
       el.focus()
    }
  }
},
methods:{
  validateForm: function (e) {
  this.attemptSubmit = true;
  if (this.missingName || this.checkEmail) e.preventDefault();
}
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.txtbox {
  width:280px;
  height:40px;

}
.optclass{
   width:280px;
  height:40px;
}
.btnsubmit{
  width:80px;
  height: 30px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
