<template>
  <div class="wrapper">
    <Header/>
    <Navigation/>
    <main class="main">
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

html,
body {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}

:focus,
:active,
:hover {
  outline: none;
}

a,
a:visited,
a:focus,
a:active,
a:hover {
  outline: none;
  text-decoration: none;
  color: #1a1c5b;
}


input,
button,
textarea {
  font-family: inherit;
}

button {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  font-size: 14px;
}

ol,
ul,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

.wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e500;
  color: #11142D;
  overflow: hidden;

  .main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer {
  }
}
</style>
<script>
import Footer from "~/components/Footer/Footer";

export default {
  components: {Footer}
}
</script>