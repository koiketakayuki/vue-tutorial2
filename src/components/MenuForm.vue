<template>
  <div class="panel_base menu-form" style="border: none;">
    <div class="panel_head_base" style="border: none;">
      <p>メニュー登録</p>
    </div>
    <div class="panel_content_base panel_content-around">
      <form>
        <h2 class="heading-lv02">基本情報</h2>
        <div class="panel_base">
          <div class="column_base">
            <div class="col col-half">
              <table class="list_table_base">
                <tbody>
                  <tr>
                    <th>公開ステータス</th>
                    <td>
                      <ul class="input_list">
                        <li>
                          <label class="radio_base">
                            <input type="radio" name="isPublished" value="true">
                            <i class="input_icon"></i>
                            <span class="text">公開</span>
                          </label>
                        </li>
                        <li>
                          <label class="radio_base">
                            <input type="radio" name="isPublished" value="false">
                            <i class="input_icon"></i>
                            <span class="text">非公開</span>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>メニュー種別</th>
                    <td>
                      <label class="select_base">
                        <select>
                          <option v-for="c in categories">{{ c.name }}</option>
                        </select>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>タイトル</th>
                    <td>
                      <input type="text" placeholder="タイトル" class="input_base input-inline">
                    </td>
                  </tr>
                  <tr>
                    <th>写真</th>
                    <td>
                      <img src="http://dummyimage.com/150x150/a8a8a8/fff">
                    </td>
                  </tr>
                  <tr>
                    <th>写真タイトル</th>
                    <td>
                      <input type="text" placeholder="写真" class="input_base input-inline">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col col-half">
              <table class="list_table_base">
                <tbody>
                  <tr>
                    <th>ピックアップ</th>
                    <td>
                      <ul class="input_list">
                        <li>
                          <label class="radio_base">
                            <input type="radio" name="isRecommened" value="true">
                            <i class="input_icon"></i>
                            <span class="text">ピックアップメニュー</span>
                          </label>
                        </li>
                        <li>
                          <label class="radio_base">
                            <input type="radio" name="isRecommened" value="false">
                            <i class="input_icon"></i>
                            <span class="text">通常メニュー</span>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>価格</th>
                    <td>
                      <input type="text" placeholder="価格" class="input_base input-inline mr05">円
                    </td>
                  </tr>
                  <tr>
                    <th>消費税</th>
                    <td>
                      <ul class="input_list">
                        <li>
                          <label class="radio_base">
                            <input type="radio" name="isTaxIncluded" value="1">
                            <i class="input_icon"></i>
                            <span class="text">税込み</span>
                          </label>
                        </li>
                        <li>
                          <label class="radio_base">
                            <input type="radio" name="isTaxIncluded" value="2">
                            <i class="input_icon"></i>
                            <span class="text">税抜き</span>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>商品ステータス</th>
                    <td>
                      <label class="select_base">
                        <select>
                          <option v-for="menuStatus in menuStatuses">{{ menuStatus.name }}</option>
                        </select>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>タグ</th>
                    <td>
                      <ul class="input_list">
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="0">
                            <i class="input_icon"></i>
                            <span class="text">肩こり</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="1">
                            <i class="input_icon"></i>
                            <span class="text">腰痛</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="2">
                            <i class="input_icon"></i>
                            <span class="text">ぎっくり腰</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="3">
                            <i class="input_icon"></i>
                            <span class="text">むち打ち</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="4">
                            <i class="input_icon"></i>
                            <span class="text">交通事故対応</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="5">
                            <i class="input_icon"></i>
                            <span class="text">ダイエット</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="6">
                            <i class="input_icon"></i>
                            <span class="text">冷え性・代謝</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="7">
                            <i class="input_icon"></i>
                            <span class="text">癒し</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="8">
                            <i class="input_icon"></i>
                            <span class="text">眼精疲労</span>
                          </label>
                        </li>
                        <li>
                          <label class="checkbox_base">
                            <input type="checkbox" name="c_suit_dow[]" value="9">
                            <i class="input_icon"></i>
                            <span class="text">デトックス</span>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h2 class="heading-lv02">概要</h2>
          <div class="col col-single">
            <textarea class="input_base"></textarea>
          </div>
        </div>
        <div class="submit_utility">
          <ul class="button_list">
            <li>
              <button type="submit" class="button_base button-primary js_refine_search_submit js_click_loader">
                <i class="icon_base fa fa-plus"></i>登録</button>
            </li>
            <li>
              <a href="#" class="js_toggle_close" style="display: inline;" @click.prevent="onCancel">
                <i class="icon_base fa fa-close"></i>キャンセル</a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { sortBy } from 'lodash';

export default {
  data() {
    return {
      menuStatuses: [
        {
          name: '販売中'
        },
        {
          name: '品薄'
        },
        {
          name: '売り切れ'
        },
        {
          name: '取り扱い終了'
        },
        {
          name: '不使用'
        },
      ],
    };
  },
  computed: {
    categories() {
      return sortBy(this.$store.state.categories, c => c.index);
    },
  },
  methods: {
    onCancel() {
      this.$store.commit('goToListMode');
    },
  }
}
</script>

<style lang="scss">
.menu-form {
  background: #f9f9f9;
  margin: 20px auto;
  width: 80%;
  z-index: 5;
  overflow: scroll;
}
</style>