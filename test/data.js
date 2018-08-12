export default {
  pages: {
    all: {
      page: {
        title: '$tagTitle',
        pagePath: '$url',
      },
      other: {
        actions: 'somethingGlobal',
      },
    },
    products: {
      page: {
        category: '$thisCategory',
      },
      other: {
        actions: 'somethingSpecific',
      },
    },
    singleProduct: {
      page: {
        productId: '$valProductId',
      },
    },
  },
  components: {
    search: {
      default: {
        trigger: 'submit',
        event: 'search',
        eventValue: '$refInputValue',
      },
    },
    contact: {
      success: {
        trigger: 'success',
        event: 'formSubmit',
        eventValue: '$refInputValue',
      },
      error: {
        trigger: 'error',
        event: 'formError',
        eventValue: '$refInputValue',
      },
    },
  },
};
