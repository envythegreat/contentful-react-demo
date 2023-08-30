export const categoriesMapper = (data) => {
  const arr = data[0]?.attributes?.categoryNodesStorage || [];
  return arr.map((node) => {
    // if (node.children.length === 0) {
    //   delete node.children;
    // }
    node.id = node.nodeId;
    delete node.nodeId;
    return node;
  });
};

export const productMapper = (data) => {
  const arr =  data[0]?.attributes?.abstractProducts || [];
  return arr.map((pr) => {
    pr.prices = pr.prices[0]
    return pr
  });
}

export const paginationExtractor = (data) => {
  const objs = data[0]?.attributes?.pagination || {};
  return {
    totalItems: objs?.numFound,
    currentPage: objs?.currentPage,
    totalPages: objs?.maxPage,
    itemPerPage: objs?.currentItemsPerPage,
    pageConfig: objs.config
  }
}

export const abstractProduct = (data) => {
  
}