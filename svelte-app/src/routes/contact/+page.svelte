<script>
    import { onMount } from 'svelte';

    onMount(async () => {
        console.log("Contact Page Loaded");
    })

    // Form handling logic
    let name = '';
    let email = '';
    let message = '';
    let formSubmitted = false;
    let formError = false;

    function handleSubmit() {
        // Simple successful submission checking; does not actually perform further actions nor record the messages sent.
        if (name && email && message) {
        formSubmitted = true;
        formError = false;
        
        // Reset form fields after submission
        setTimeout(() => {
            name = '';
            email = '';
            message = '';
            formSubmitted = false;
        }, 3000);
        } else {
        formError = true;
        }
    }
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

<section id="contact" class="contact-section">
    <h2 class="section-title">Contact Me</h2>
    
    <div class="contact-container">
        <div class="contact-info">
        <div class="quote-container">
            <p class="contact-quote">"Don't wait for someone to bring you flowers. Plant your own garden and decorate your own soul."</p>
            <p class="quote-attribution">— Jorge Luis Borges</p>
        </div>
        
        <div class="contact-details">
            <div class="contact-item">
                <img src="icons/call.png" alt="Telephone Number" width="24" height="24">
            <span>+353 (085) 189 8820</span>
            </div>
            
            <div class="contact-item">
                <img src="icons/mail.png" alt="Contact Email" width="25" height="18">
            <span>carlaepifaniovivero@gmail.com</span>
            </div>
            
            <div class="contact-item">
                <img src="icons/location.png" alt="Location" width="18" height="24">
            <span>Carlow, Ireland</span>
            </div>
        </div>
        
        <div class="social-links">
            <div class="social-link">
                <img src="icons/linkedin.png" alt="LinkedIn" width="24" height="24">
            </div>
            <div class="social-link">
                <img src="icons/X.png" alt="X/Twitter" width="24" height="24">
            </div>
            <div class="social-link">
                <img src="icons/instagram.png" alt="Instagram" width="24" height="24">
            </div>
        </div>
        </div>
        
        <div class="contact-form">
        <form on:submit|preventDefault={handleSubmit}>
            {#if formSubmitted}
            <div class="form-success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="#48bb78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Thank you! Your message has been sent.</p>
            </div>
            {:else}
            <div class="form-group">
                <label for="name">Name</label>
                <input 
                type="text" 
                id="name" 
                bind:value={name} 
                placeholder="Your name"
                class:error={formError && !name}
                />
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                type="email" 
                id="email" 
                bind:value={email} 
                placeholder="Your email address"
                class:error={formError && !email}
                />
            </div>
            
            <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                id="message" 
                bind:value={message} 
                placeholder="Your message"
                rows="5"
                class:error={formError && !message}
                ></textarea>
            </div>
            
            {#if formError}
                <div class="form-error">
                <p>Please fill out all fields.</p>
                </div>
            {/if}
            
            <button type="submit" class="submit-button">Send Message</button>
            {/if}
        </form>
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

    .contact-section {
        padding: 80px 0;
        position: relative;
        background-color: rgba(255, 249, 249, 0.7);
        overflow: hidden;
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


    /*  CONTENT */
    .section-title {
        font-size: 2.5rem;
        margin-bottom: 50px;
        font-weight: 300;
        font-family: 'Noto Serif JP', serif;
        position: relative;
        text-align: center;
        z-index: 1;
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
    
    .contact-container {
        display: flex;
        gap: 60px;
        max-width: 1100px;
        margin: 0 auto;
        z-index: 1;
        position: relative;
        padding: 30px;
    }
    
    .contact-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
    }
    
    .quote-container {
        margin-bottom: 40px;
    }
    
    .contact-quote {
        font-style: italic;
        font-size: 1.2rem;
        color: var(--link-hover-color, #5d4954);
        opacity: 0.9;
        position: relative;
        line-height: 1.6;
    }
    
    .quote-attribution {
        font-size: 0.9rem;
        text-align: right;
        margin-top: 10px;
        color: var(--link-hover-color, #5d4954);
        opacity: 0.7;
    }
    
    .contact-details {
        margin-bottom: 40px;
    }
    
    .contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .contact-item img {
        margin-right: 15px;
    }
    
    .contact-item span {
        color: var(--link-hover-color, #5d4954);
        font-size: 1rem;
    }
    
    .social-links {
        display: flex;
        gap: 20px;
    }
    
    .social-link {
        color: var(--link-hover-color, #5d4954);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        padding: 25px;
        border-radius: 50%;
        border: 1px solid rgba(93, 73, 84, 0.2);
    }
    
    .social-link:hover {
        color: var(--primary-color, #ffb7c5);
        transform: translateY(-3px);
        border-color: var(--primary-color, #ffb7c5);
    }
    
    .contact-form {
        flex: 1;
        background-color: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }
    
    .form-group {
        margin-bottom: 25px;
    }
    
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.95rem;
        color: var(--link-hover-color, #5d4954);
    }
    
    input, textarea {
        width: 100%;
        padding: 12px 15px;
        border: 1px solid rgba(93, 73, 84, 0.2);
        border-radius: 4px;
        font-size: 1rem;
        color: var(--link-hover-color, #5d4954);
        font-family: inherit;
        transition: all 0.3s ease;
    }


    .submit-button {
        background-color: #f8e1e4; 
        color: #5a5a5a; 
        border: 1px solid #e6c0c5; 
        border-radius: 30px; 
        padding: 12px 28px; /* Vertical and horizontal padding */
        font-family: 'Georgia', serif;
        font-size: 16px; 
        letter-spacing: 0.5px; /* Slight letter spacing for elegance */
        transition: all 0.3s ease; /* Smooth transition for hover effect */
        cursor: pointer;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05); /* Subtle shadow */
        outline: none;
    }

    .submit-button:hover {
        background-color: #e6c0c5; /* Slightly darker pink on hover */
        transform: translateY(-2px); /* Slight lift effect */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Enhanced shadow on hover */
    }

    .submit-button:active {
        transform: translateY(1px); /* Press down effect */
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); /* Reduced shadow when pressed */
    }

    @media (max-width: 768px) {
    .contact-container {
        flex-direction: column;
        align-items: center;
    }

    .contact-info, .contact-form {
        width: 100%;
    }
    }
</style>