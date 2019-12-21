const withCSS = require('@zeit/next-css');
const portfolioData = require("./jsons/portfolio.json");
const blogs = require("./jsons/blogs.json");
/* Without CSS Modules, with PostCSS */
module.exports = withCSS({
    async exportPathMap(){

        let old = await portfolioData;
        const oldData = old.reduce(
            (pages, pa) =>
                Object.assign({}, pages, {
                    [`/portfolio-detail/${pa.slug}`]: {
                        page: '/portfolio-detail',
                        query: { id: pa.slug }
                    }
                }),
            {}
        );

        let blog = await blogs;
        const blogData = blog.reduce(
            (pages, pa) =>
                Object.assign({}, pages, {
                    [`/blog-detail/${pa.slug}`]: {
                        page: '/blog-detail',
                        query: { id: pa.slug }
                    }
                }),
            {}
        );

        return Object.assign(oldData, blogData, {
            "/": { page: "/"},
            "/technology-modernisation": { page: "/technology-modernisation" },
            "/staff-augmentation": { page: "/staff-augmentation" },
            "/web-app-development": { page: "/web-app-development" },
            "/mobile-app-development": { page: "/mobile-app-development" },
            "/contact-us": { page: "/contact-us" },
            "/blogs": { page: "/blogs" },
            "/case-studies": { page: "/case-studies" },
            "/aboutv1": { page: "/aboutv1" },
            "/about-us": { page: "/about-us" },
            "/blog-detail": { page: "/blog-detail" },
            "/privacy-policy": { page: "/privacy-policy" },
            "/terms-of-use": { page: "/terms-of-use" },
            "/what-we-do": { page: "/what-we-do" },
            "/treatment-center-dashboards": { page: "/treatment-center-dashboards" }
        });
    }
});

