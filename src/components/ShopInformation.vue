<template>
  <div>
    <div class="panel_base">
      <div class="panel_content_base panel_content-around">
        <div class="media_base">
          <div class="wide_block">
            <ul class="tag_list">
              <li><span class="tag_base">無料店舗会員</span></li>
              <li><span class="tag_base">公開中</span></li>
              <li><span class="tag_base tag-attention">子</span></li>
            </ul>
            <p>東京都 日野市 豊田駅</p>
            <h1 class="heading-lv01 mt20">
              <a href="http://125.0.127.246/shop_2932640/" target="_blank">PVからだサロン</a>
            </h1>
            <p class="text-muted">ピーブイカラダサロン</p>
            <p>リラク・ボディケア</p>
            <p>マッサージ / 整体 / エステ</p>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    shop() {
      return this.$store.state.shop;
    },
  },
  created() {
    const shopId = this.$route.query.shopId;
    this.$store.dispatch('fetchShop', shopId);
    this.$store.dispatch('fetchCategories', shopId);
    this.$store.dispatch('fetchMenus', shopId);
  },
};
</script>
