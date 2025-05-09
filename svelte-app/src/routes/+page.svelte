<script>
    import { onMount } from 'svelte';


    onMount(async () => {
        console.log("Home Page Loaded");
    })
</script>

<div class="page-border"></div>
<div class="page-bg"></div>
    
<!-- Floating Flowers -->
<div class="floating-flowers">
    <div class="flower flower-1"></div>
    <div class="flower flower-2"></div>
    <div class="flower flower-3"></div>
    <div class="flower flower-4"></div>
    <div class="flower flower-5"></div>
</div>

<section class="intro">
    <h1 class="title">Crafting Digital Beauty</h1>
    <p class="subtitle">I design with passion and create with purpose, bringing dreams to life through elegant design and thoughtful development.</p>
    <a href="/portfolio" class="cta-button">View My Work</a>
</section>

<style>
    /* BACKGROUND */
    .page-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        opacity: 40%;
        background-image: url("background-items/background.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    .page-border {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        background-image: url("background-items/border.PNG");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    /* FLOATING FLOWERS ANIMATION */
    .floating-flowers {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .flower {
        position: absolute;
        width: 30px;
        height: 30px;
        background-image: url("background-items/individual-flower.png");
        background-size: contain;
        animation: float 20s linear infinite;
        opacity: 0.6;
    }

    .flower-1 {
        top: 10%;
        left: 5%;
        animation-delay: 0s;
    }

    .flower-2 {
        top:70%;
        left: 80%;
        animation-delay: -4s;
    }

    .flower-3 {
        top: 40%;
        left: 90%;
        animation-delay: -8s;
    }

    .flower-4 {
        top: 80%;
        left: 20%;
        animation-delay: -12s;
    }

    .flower-5 {
        top: 20%;
        left: 60%;
        animation-delay: -16s;
    }

    @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(20px, 15px) rotate(5deg); }
        50% { transform: translate(0, 30px) rotate(0deg); }
        75% { transform: translate(-20px, 15px) rotate(-5deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
    }

    /* BUTTONS */
    .cta-button {
    display: inline-block;
    margin-top: 40px;
    padding: 12px 30px;
    background-color: transparent;
    border: 1px solid var(--cherry-blossom);
    color: var(--deep-plum);
    text-decoration: none;
    border-radius: 2px;
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    }

    .cta-button:hover {
    background-color: var(--cherry-blossom);
    color: white;
    }

    /* TEXT */

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 120px 0 60px;
        position: relative;
        overflow: hidden;
    }

    .intro h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    font-weight: 300;
    color: var(--deep-plum);
    position: relative;
    }
  
    .intro h1:after {
        content: "";
        position: absolute;
        width: 100px;
        height: 2px;
        background-color: var(--cherry-blossom);
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .intro p {
        font-size: 1.2rem;
        margin-top: 30px;
        max-width: 600px;
        line-height: 1.6;
        color: var(--deep-plum);
        opacity: 0.9;
    }

    @media (max-width: 768px) {
    .intro h1 {
      font-size: 2.5rem;
    }
  }
</style>
