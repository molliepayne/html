<template>
  <div id="app">
    
      <a class="navbar-brand" href="#">Foothill Farm Flowers</a>
  <h2>Our micro urban farm located on the foothills in Provo, Utah</h2>
    <div id="nav">
       <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="nav navbar-nav justify-content-center flex-fill">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        
         <li class="dropdown">
          <router-link to="/available">Buy Blooms</router-link>
          
          <ul class="dropdown-menu bg-light" aria-label="submenu">
            <li> <router-link to="/available">Available Flowers</router-link></li>
            <li><router-link to="/csa">Join Our CSA</router-link></li>
            <li> <router-link to="/stand">Roadside Stand</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/garden_journal">Garden Journal</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stand">Roadside Stand</router-link>
        </li>
      </ul>  
    </div>
    <hr>
  </nav>
    </div>
    <router-view/>
    
  </div>
</template>

<style>
#app {
  height: 100%;
    font-family: 'Quicksand', serif;
    font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#app .navbar-brand {
    font-family: 'Amatic SC', cursive;
    font-size: 96px;
    text-shadow: 2px 2px 2px #aaa;
    text-align: center;

    text-indent: 20px;
    color: #000000;

}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#app h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 72px;
    text-align: center;
    padding-bottom: 20px;
    padding-top: 40px;

    text-indent: 20px;
    color: #FFFFFF;
    text-shadow: 4px 4px 4px #000000;


}

#app h2 {
    font-family: 'Sacramento', cursive;
    font-size: 36px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    text-indent: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;

}

#app h3 {
    font-family: 'Quicksand', sans-serif;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 35px;
    text-align: center;
    padding-bottom: 20px;

}

#app p {
    font-family: 'Quicksand', sans-serif;
    padding-right: 20px;
    font-size: 25px;
    text-align: left;
    padding-bottom: 20px;

}

#app footer {
    padding-left: 20px;
    padding-top: 40px;
    font-size: 12px;
}

#app section {
    display: flex;

}

html {
    height: 100%;
    font-family: 'Quicksand', serif;
    font-size: 16px;
}

body {
    text-align: center;
    height: 100%;
}

.navbar-brand {
    font-family: 'Amatic SC', cursive;
    font-size: 96px;
    text-shadow: 2px 2px 2px #aaa;
    text-align: center;

    text-indent: 20px;
    color: #000000;

}



.navbar-nav {
    font-family: 'Quicksand', serif;
    font-weight: bold;
    font-size: 20px;
   
}

.flowerPic {
    width: 320px;
    max-width: 100%;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.instaPic{
max-width: 100%;
position: relative;

}


.instaPic:hover{
opacity: .5;

}
label{
    color:black;
}

.userInput{

    width: 100%;
    font-size: 16px;
    text-align: left;
    height: 100%;
}


.userInputButton:hover {
  background-color: darkgray; /* Green */
  color: white;
}

.userInputButton{
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 15px;
    background-color: white;
}

.userInputButton:active {
  background-color: pink;
 
  transform: translateY(4px);
}


.autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 100%;
    overflow: auto;
    font-size: 16px;
    float: none;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
    color:black;
    font-size: 16px;
  }

  .autocomplete-result:hover {
    background-color: pink;
    color: white;
  }
input{
    width: 100%;
}
.selector {
    font-family: 'Quicksand', sans-serif;
    font-size: 24px;
}

.insta {
    font-family: 'Quicksand', sans-serif;
    
   position: absolute;
   width: 100%;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  font-size: 16px;
}
.dropdown-menu{
position: relative;
top: 55px;
}

.navbar-nav {
    font-family: 'Quicksand', serif;
    font-weight: bold;
    font-size: 20px;
   
}
.navbar{
    padding: 0;
   
}

a:link,
a:visited {

    color: black;


    text-decoration: none;

}

a:hover,
a:active {
    color: lightpink;
}

a {
    text-decoration: none;
    color: pink;
}

nav {
    font-family: monospace;
}

ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
}

li {
    color: #fff;

    display: block;
    float: left;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
}

li a {
    color: #fff;
}

li:hover,
li:focus-within {

    cursor: pointer;
}

li:focus-within a {
    outline: none;
}



ul li:hover>ul,
ul li:focus-within>ul,
ul li ul:hover,
ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
}

ul li ul li {
    clear: both;
    width: 100%;
}

.fade {
    opacity: 1;
    transition: opacity .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out;
}



.box-shadow{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


.insta-hover {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
 
   color: black;
  
}
.instaPic:hover {
    opacity: .5;
    
}

.instaContainer{
position: relative;

}


.instaContainer:hover .insta-hover {
  opacity: 1;
}
.instaContainer:hover .instaPic {
  opacity: .5;
}


.comments-count-container {
  position: relative;
  text-align: center;
  color: black;
   
   font-family: 'Quicksand', sans-serif;
   opacity: 1;
}
.commentsposition {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  
   font-family: 'Quicksand', sans-serif;
    opacity: 1;
}
.likesposition {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  
   font-family: 'Quicksand', sans-serif;
    opacity: 1;
}


h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 72px;
    text-align: center;
    padding-bottom: 20px;
    padding-top: 40px;

    text-indent: 20px;
    color: #FFFFFF;
    text-shadow: 4px 4px 4px #000000;


}

h2 {
    font-family: 'Sacramento', cursive;
    font-size: 36px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    text-indent: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;

}

h3 {
    font-family: 'Quicksand', sans-serif;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 35px;
    text-align: center;
    padding-bottom: 20px;

}

p {
    font-family: 'Quicksand', sans-serif;
    padding-right: 20px;
    font-size: 25px;
    text-align: left;
    padding-bottom: 20px;

}

footer {
    padding-left: 20px;
    padding-top: 40px;
    font-size: 12px;
}

section {
    display: flex;

}

aside {
    padding-left: 20px;
    flex: 2;
}

article {

    flex: 4;
    padding-left: 60px;
    padding-right: 60px;
    vertical-align: middle;
}

.caption {
    font-family: 'Quicksand', sans-serif;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;

    padding-bottom: 10px;
    text-align: center;

}

.wrapper {
    padding: 10px;
    flex: 1 100%;
}

.leftside {
    float: left;
    width: 48%;
    height: 400px;

    margin: 0 auto;
}

.rightside {
    float: right;
    width: 48%;
    height: 400px;
    margin: 0 auto;
}

.insta-header{
    min-height: 80px;
     font-family: 'Quicksand', sans-serif;
   
     position: relative;
   
     
}
.icon {
    width: 60px;
   vertical-align: 50%;
}

/* Sidebar modules for boxing content */

.sidebar-module {
    padding: 1rem;
    /*margin: 0 -1rem 1rem;*/
}

.sidebar-module-inset {
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: .25rem;
}

.sidebar-module-inset p:last-child,
.sidebar-module-inset ul:last-child,
.sidebar-module-inset ol:last-child {
    margin-bottom: 0;
}

.container {
    max-width: 80rem;
}
.container-sm {
    max-width: 40rem;
}
fieldset.group  {
  margin: 0;
  border: 1px solid #eeeeee;
  margin-bottom: 1.25em;
  padding: .125em;
}

fieldset.group legend {
  margin: 0;
  padding: 0;
  font-weight: bold;
  margin-left: 20px;
  font-size: 100%;
  color: black;
  
}


ul.checkbox  {
  margin: 0;
  padding: 0;
  margin-left: 20px;
  list-style: none;
   
}


ul.checkbox li input {
  margin-right: .25em;
}

ul.checkbox label:hover {
   background-color: pink;

}

ul.checkbox li{
      padding: 0;
}


</style>



