<script>
    import { onMount } from 'svelte';


    onMount(async () => {
        console.log("About Page Loaded");
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

<section class="about-section">
    <h2 class="section-title">About Me</h2>

    <div class="about-content">
        <div class="about-text">
            <p>Hello! I'm a passionate designer and developer with a love for creating beautiful, functional experiences. My work combines aesthetic appeal with user-friendly interfaces.</p>
            <p>I specialize in bringing creative visions to life through thoughtful design and clean code.</p>
            <p>My journey in design began with a fascination for how visual elements can evoke emotions and tell stories. This led me to explore various mediums and styles, eventually developing my own aesthetic that balances elegance with functionality.</p>
        </div>

        <div class="about-image">
            <img src="/about.jpg" alt="Decorative illustration" />
        </div>
    </div>

    <div class="skills-section">
        <h3>My Approach</h3>
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-icon">🌸</div>
            <h4>Thoughtful Design</h4>
            <p>Creating with intention and purpose</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">🌸</div>
            <h4>Elegant Code</h4>
            <p>Building with clean, efficient solutions</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">🌸</div>
            <h4>Natural Flow</h4>
            <p>Crafting intuitive user experiences</p>
          </div>
        </div>
      </div>

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

    /* CONTENT */
    .about-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0;
        background-color: rgba(255, 249, 249, 0.7);
        position: relative;
    }
  
    .about-content {
        display: flex;
        gap: 60px;
        align-items: center;
        max-width: 900px;
        margin: 30px;
    }
    
    .about-text {
        flex: 1;
        font-size: 1.1rem;
        line-height: 1.8;
    }
    
    .about-image {
        flex: 1;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(93, 73, 84, 0.1);
    }
    
    .about-image img {
        width: 100%;
        display: block;
        border: 8px solid white;
    }
    
    .skills-section {
        margin-top: 80px;
        width: 100%;
        max-width: 900px;
    }
    
    .skills-section h3 {
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: 40px;
        font-weight: 400;
        color: var(--link-hover-color);
    }
    
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    
    .skill-item {
        background-color: white;
        padding: 30px;
        border-radius: 4px;
        text-align: center;
        box-shadow: 0 3px 15px rgba(93, 73, 84, 0.05);
        transition: transform 0.3s ease;
    }
    
    .skill-item:hover {
        transform: translateY(-5px);
    }
    
    .skill-icon {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 20px;
    }
    
    .skill-item h4 {
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 500;
        color: var(--link-hover-color);
    }
    
    .skill-item p {
        font-size: 0.95rem;
        color: var(--link-hover-color);
        opacity: 0.8;
    }
    
    @media (max-width: 768px) {
        .about-content {
        flex-direction: column;
        gap: 40px;
        text-align: center;
        }
        
        .skills-grid {
        grid-template-columns: 1fr;
        }
    }
</style>