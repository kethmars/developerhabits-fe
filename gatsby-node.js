exports.createPages = ({ actions: { createPage } }) => {
    const products = require('./data/products.json');

    products.forEach(product => {
        createPage({
            path: `/product/${product.slug}/`,
            component: require.resolve('./src/components/articleCard.js'),
            context: {
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price,
            },
        });
    });
};