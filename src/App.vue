<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <Employeetable />
  <EmployeeForm />
  <NameForm />
</div> 
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };
import Employeetable from './components/EmployeeTable.vue'
import EmployeeForm from './components/Employeeform.vue'
import NameForm from './components/NameForm.vue'
export default {
components:{
  Employeetable,
   EmployeeForm,
   NameForm

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
