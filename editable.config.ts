export default {
  collections: {
    products: {
      name: {
        singular: 'Product',
        plural: 'Products'
      },
      icon: 'i-heroicons-shopping-bag',
      schema: {
        title: {
          type: 'text',
          help: 'A title for the product',
          required: true
        },
        description: {
          type: 'text',
          help: 'A description of the product'
        },
        discountPercentage: {
          type: 'text',
          help: 'The discount percentage of the product'
        },
        price: {
          type: 'text',
          help: 'The price of the product',
          required: true
        },
        stock: {
          type: 'text',
          help: 'The stock of the product',
          required: true
        },
        rating: {
          type: 'text',
          help: 'The rating of the product',
          min: 1,
          max: 5
        },
        brand: {
          type: 'text',
          help: 'The brand of the product'
        }
      }
    }
  },

  log: true
};