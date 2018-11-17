<template lang="pug">
    main
        header( v-if="loading")
            h1.logo HistSantos
            div( class="z-index two-col-menu").two-col-menu
                span( @click="openMenu ? openMenu = false : openMenu = true" ) Menu
                div.menu-mobile( id="menu" @click="openMenu ? openMenu = false : openMenu = true" )
                    div( :class="openMenu ? 'setaCima' : ''")
                    div( :class="openMenu ? 'sumirBarraMeio' : ''")
                    div( :class="openMenu ? 'setaBaixo' : ''")
            transition( v-if="openMenu" name="menu")
                section.menu-zone
                    article
                        figure.logo-menu
                            img( src='../assets/img/logo.png' alt="logo")
                            figcaption Igreja de São Franciso - Cubatão
                    article
                        nav.menu
                            ul
                                li( class="animated fadeInLeft" :class="!openMenu ? 'animationOut' : ''") Historia
                                li( class="animated fadeInLeft" :class="!openMenu ? 'animationOut' : ''") Arquitetura
                                li( class="animated fadeInLeft" :class="!openMenu ? 'animationOut' : ''") Timeline
                                li( class="animated fadeInLeft" :class="!openMenu ? 'animationOut' : ''") Eventos
                                li( class="animated fadeInLeft" :class="!openMenu ? 'animationOut' : ''") Contato

        transition( v-else name="load")
            loading-initial( @close="loading = true")
</template>
<script>
export default {
    data(){
        return{
            loading:false,
            openMenu:true,
        }        
    },
    methods:{
        clearLoad(){
            this.loading = true;
        }
    },
    created(){
        
    }
}
</script>
<style lang="scss" scoped> 
@import "../assets/css/animate.css";
@import "../assets/scss/import";

.z-index{
    position: relative;
    z-index: 15;
}
header{
    padding: 15px 30px;
    @extend %box-sizing;
    box-shadow: 0 2px 5px rgba( $background, 0.2);
    @include grid-create( $col: 50% 50%);

}

.sumirBarraMeio{
    width:0;
    opacity: 0;
    
}
.two-col-menu{
    width: 100px;
    @include grid-create( $col: auto 20px);
    align-items: center;
    justify-self:end;
    span{
        font-size: .9em;
        color:$background;
        @extend %cursor-pointer;
    }
}
.logo-menu{
    @extend %clear-margin;
    @extend %margin-auto;
    width: 250px;
    figcaption{
        font-size:1em;
        font-weight: bold;

        padding-top: 10px;
        border-top:2px solid $primary;
    }
}
.menu-mobile{
    @extend %cursor-pointer;
    
    div{
        width: 30px;
        height: 4px;
        margin-bottom: 3px;
        background-color: $primary;
        border-radius: 30px;
        transition: 0.4s all;
        &:not(.setaCima, .setaBaixo ):hover{
            transform: translateX(4px);    
        }
       &:last-of-type{
           margin-bottom: 0;
       }
    }
    
}

.setaCima{
    transform: rotateZ(45deg) translateY(10px);
    transition: 0.4s all;
}
.setaBaixo{
    transform: rotateZ(-45deg) translateY(-10px);
    transition: 0.4s all;
}

.menu{
    width:100%;
    background-color: $background;
    padding: 10px;
    min-height: 100vh;
    @extend %grid;
    align-content: center;
    box-shadow: 0 1px 3px rgba( $background, 0.2);
    @extend %box-sizing;
    padding-left: 30px;
    ul{
        @extend %list-style;
        li{
            font-size: 1.6em;
            color:$white;
            @extend %cursor-pointer;
            transition: 0.4s all;
            margin: 10px 0;
            &:nth-of-type(1){
                animation-delay: 0.4s;
            }
            &:nth-of-type(2){
                animation-delay: 0.6s;
            }
            &:nth-of-type(3){
                animation-delay: .8s;
            }
            &:nth-of-type(4){
                animation-delay: 1s;
            }
            
            &:nth-of-type(5){
                animation-delay: 1.2s;
            }
            &:hover{
                color:$primary;
            }
        }
    }
}
.animationOut{
        animation:.2s fadeOutLeft;
            &:nth-of-type(1){
                animation-delay: 0.1s;
            }
            &:nth-of-type(2){
                animation-delay: 0.2s;
            }
            &:nth-of-type(3){
                animation-delay: .3s;
            }
            &:nth-of-type(4){
                animation-delay: .4s;
            }
            
            &:nth-of-type(5){
                animation-delay: .5s;
            }
            &:hover{
                color:$primary;
            }
}
.menu-zone{
    animation: 0.8s fadeInDown;
    @include grid-create($col: 50% 50%);
    background-color: $white;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    min-height: 100vh;
    align-items: center;
}
.logo{
    font-size: 1.8em;
    color:$primary;
    @extend %clear-margin;
    font-weight: normal;
}
.load-enter-active, .load-leave-active {
  animation: 1s fadeOut;
}

.menu-enter-active, .menu-leave-active {
  animation: 0.6s fadeOutUp;
}
</style>
