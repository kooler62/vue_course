<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" to="/">Home</router-link>-->
<!--          </li>-->
<!--          или байдим через :to -->
<!--          <li class="nav-item active">-->
<!--            <router-link class="nav-link" :to="'/pizzas'">Pizzas</router-link>-->
<!--          </li>-->


          <!--    active-class="active" какой клас добавлять активной ссылке, tag показывает каким тегом обернуть ссылку      -->
          <router-link tag="li" class="nav-item" exact :to="'/'">
            <a class="nav-link" active-class="active">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" exact to="/pizzas">
            <a class="nav-link" active-class="active">Pizzas</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>
