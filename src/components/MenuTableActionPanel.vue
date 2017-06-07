<template>
  <div class="panel_base js_list_utility">
    <div class="panel_content_base panel_content-around">
      <div class="media_base">
        <div class="fixed_block">
          選択中のカテゴリ：
          <span>
            <label class="select_base">
              <select name="cat">
                <option value="">▼ 小ジャンル</option>
                <option value="0203">エステ</option>
              </select>
            </label>
          </span>
        </div>
        <div class="fixed_block">
          全<span class="menu_count">{{ menuCount }}</span><span class="sub_text">件</span>
        </div>
        <div class="fixed_block">
          <ul class="button_list">
            <li>
              <a href="#" class="button_base">
                <i class="icon_base fa fa-refresh"></i>一括更新
              </a>
            </li>
            <li>
              <a href="#" class="button_base">
                <i class="icon_base fa fa-sort"></i>並べ替え
              </a>
            </li>
            <li>
              <a href="#" class="button_base">
                <i class="icon_base fa fa-plus"></i>メニュー作成
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedCategoryName() {
      return "test";
    },
    menuCount() {
      return this.$store.state.menus.length;
    },
  },
}
</script>

<style>
.menu_count {
  font-size: 26px;
  font-weight: bold;
  margin-right: 3px;
  margin-left: 3px;
}
</style>