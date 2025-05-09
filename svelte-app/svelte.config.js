import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: '/SveltePortfolio',
        }
    }  
};

export default config;
