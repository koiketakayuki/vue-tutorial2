const shop = {
  name: 'エキテン整骨院'
};

export default {
  getShop(shopId) {
    return new Promise((success, failure) => {
      success(shop);
    });
  }
}