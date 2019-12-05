<template>
  <div class="home">
     <div class="parallax">
<h1>Welcome to Our Farm</h1>

</div>

<section>
  <aside>
    <img class="box-shadow" src="../assets/images/snap in garden.jpg" width='400px'>
  </aside>
  <article>
     <p>Have you ever experienced the joy of a truly fresh bouquet of flowers? Flowers that were cut just hours (or minutes) before they landed on your table? 
     We have here at our "urban farm" (really, it's just our backyard) and we want to share all the  with you! We have big plans to grow 
     buckets and buckets of <a href='/pages/available.html'>blooms</a>. Please follow us to find out when and where you can get your hands on some! We know you will love them
     as much as we do.</p>
  </article>
</section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
   
  }
}
</script>
<style scoped>
#home aside {
    padding-left: 20px;
    flex: 2;
}

#home article {

    flex: 4;
    padding-left: 60px;
    padding-right: 60px;
    vertical-align: middle;
}

</style>