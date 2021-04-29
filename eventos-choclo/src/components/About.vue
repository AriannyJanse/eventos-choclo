<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">{{ this.$store.state.title }}</h1>          
        </div>
      </div>
    </div>
    <div class="container">
        <h2 class="subtitle is-size-3">Sobre Nosotros</h2>
        <p class="org-description is-size-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.</p>
        <p class="org-description is-size-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.</p>
    </div>
    <div class="container">
        <h2 class="subtitle is-size-3">Cont&aacute;ctanos</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .org-description {
    margin-top: 40px;
  }
  .subtitle {
    text-align: center;
    margin-top: 50px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    font-size: 30px;
  }
</style>