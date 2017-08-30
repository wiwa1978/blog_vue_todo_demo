// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  template: `
    <div id="app">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Todo App</a>
            </div>
            <ul class="nav navbar-nav">
                <li><router-link to="/">About</router-link></li>
                <li><router-link to="/add">Add</router-link></li>
            </ul>
        </div>
    </nav><router-view></router-view>
    </div>
  `,

}).$mount('#app')

