<script>
    import { onMount } from 'svelte';

    onMount(async () => {
        console.log("Portfolio Page Loaded");
    });
    const portfolioItems = [
    {
      title: "Project 1",
      description: "This website currently serves as a placeholder for my future or in progress work and will continue to be updated.",
      image: "/placeholder.jpg",
      link: "#"  // Placeholder to be replaced with actual link.
    },
    {
      title: "Project 2",
      description: "This website currently serves as a placeholder for my future or in progress work and will continue to be updated.",
      image: "/placeholder.jpg",
      link: "#"  // Placeholder to be replaced with actual link.
    },
    {
      title: "Project 3",
      description: "This website currently serves as a placeholder for my future or in progress work and will continue to be updated.",
      image: "/placeholder.jpg",
      link: "#" // Placeholder to be replaced with actual link.
    }
  ];
</script>

<div class="page-border"></div>
<div class="page-bg"></div>
<div class="flowers"></div>

<section id="portfolio" class="portfolio-section">
  <h2 class="section-title">Featured Works</h2>
  
  <div class="portfolio-grid">
    {#each portfolioItems as item}
      <div class="portfolio-item">
        <div class="portfolio-image" style="background-image: url('{item.image}');">
        <!-- Image will be shown as background of each item -->
        </div>
        <div class="portfolio-content">
          <h3 class="portfolio-title">{item.title}</h3>
          <p class="portfolio-description">{item.description}</p>
          <a href={item.link} class="portfolio-link">
            View Project
            <!-- svg arrow -->
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="#ffb7c5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Floating Flowers -->
<div class="floating-flowers">
    <div class="flower flower-1"></div>
    <div class="flower flower-2"></div>
    <div class="flower flower-3"></div>
    <div class="flower flower-4"></div>
    <div class="flower flower-5"></div>
</div>

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

    .portfolio-section {
        padding: 80px 0;
        position: relative;
        overflow: hidden;
    }

    .flowers {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 20%;
        height: 30%;
        background-image: url("background-items/flowers.png");
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
        background-image: url("/individual-flower.png");
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


    /* CONTENT */
    .section-title {
        font-size: 2.5rem;
        margin-bottom: 50px;
        font-weight: 300;
        font-family: 'Noto Serif JP', serif;
        position: relative;
        text-align: center;
    }
    
    .section-title:after {
        content: "";
        position: absolute;
        width: 60px;
        height: 2px;
        background-color: var(--primary-color, #ffb7c5);
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 40px;
        margin-top: 60px;
    }
    
    .portfolio-item {
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;
        background-color: white;
    }
    
    .portfolio-item:hover {
        transform: translateY(-5px);
    }
    
    .portfolio-image {
        height: 250px;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #f0f0f0;
    }
    
    .portfolio-content {
        padding: 25px;
    }
    
    .portfolio-title {
        font-size: 1.3rem;
        margin-bottom: 10px;
        font-weight: 500;
        color: var(--link-hover-color, #5d4954);
    }
    
    .portfolio-description {
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--link-hover-color, #5d4954);
        opacity: 0.8;
        margin-bottom: 20px;
    }
    
    .portfolio-link {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: var(--primary-color, #ffb7c5);
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }
    
    .portfolio-link:hover {
        opacity: 0.8;
    }
    
    .portfolio-link svg {
        margin-left: 5px;
        transition: transform 0.3s ease;
    }
    
    .portfolio-link:hover svg {
        transform: translateX(3px);
    }
    
    @media (max-width: 768px) {
        .portfolio-grid {
        grid-template-columns: 1fr;
        }
        
        .section-title {
        font-size: 2rem;
        }
    }
</style>