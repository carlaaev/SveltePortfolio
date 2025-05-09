<script>
    const currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="footer-content">
        <p class="footer-quote">Create with the heart; build with the mind.</p>

        <!-- For decorative purposes only at the moment. -->
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

            <div class="social-link">
                <img src="icons/facebook.png" alt="Facebook" width="24" height="24">
            </div>

            <p class="copyright">&copy; {currentYear} My Svelte App. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    footer {
        color: var(--ink-black);
        text-align: center;
        padding: 60px 0;
        position: relative;
        overflow: hidden;
        bottom: 0;
        width: 100%;
    }

    .footer-quote {
        font-style: italic;
        font-size: 1.2rem;
        max-width: 700px;
        margin: 0 auto 40px;
        color: var(--deep-plum);
        opacity: 0.9;
        padding: 0 20px;
        position: relative;
    }

    .footer-quote:before,
    .footer-quote:after {
        content: "";
        font-size: 3rem;
        position: absolute;
        color: var(--cherry-blossom);
        opacity: 0.3;
    }

    .footer-quote:before {
        top: -20px;
        left: 0;
    }

    .footer-quote:after {
        content: "";
        bottom: -40px;
        right: 0;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 30px;
    }

    .social-link {
        color: var(--deep-plum);
        transition: all 0.3s ease;
    }

    .social-link:hover {
        color: var(--cherry-blossom);
        transform: translateY(-3px);
    }

    .social-link img {
        gap: 15px;
    }

    .copyright {
        font-size: 0.9rem;
        color: var(--deep-plum);
        opacity: 0.7;
    }

    /* Mobile: Reduce padding for a more compact look */
    @media (max-width: 768px) {
        footer {
            padding: 0.75rem;
            position: relative;
            font-size: 0.9rem;
        }
    }
</style>