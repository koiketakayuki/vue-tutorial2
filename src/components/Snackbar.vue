<template>
  <div class="snackbar" :class="{ open: open }">
    {{ message }}
    <div class="button-container">
      <button class="button button--action" v-if="onAction" @click="onAction">完了</button>
      <button class="button button--cancel" v-if="onCancel" @click="onCancel">キャンセル</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "",
    },
    onAction: {
      type: Function,
    },
    onCancel: {
      type: Function,
    },
  }
};

</script>

<style lang="scss">
.snackbar {
  transition-property: opacity, bottom, left, right, width, margin, border-radius;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  font-family: RobotoDraft;
  font-size: 14px;
  min-height: 14px;
  background-color: #323232;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  line-height: 22px;
  padding: 18px 24px;
  top: 0;
  right: 10%;
  left: 10%;
  z-index: 10;
  opacity: 0;

  .button {
    background: inherit;
    display: inline-block;
    border: none;
    font-size: inherit;
    margin: 0px 0px 0px 24px;
    min-width: min-content;
    position: relative;
    padding: 4px 0;
    margin: 1em;
    overflow: hidden;
    user-select: none;
    text-transform: uppercase;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }
  }

  .button--cancel {
    color: #ffffff;
  }

  .button--action {
    font-size: 16px;
    font-weight: bold;
    color: #ffeb3b;
  }
}

.open {
  opacity: 1 !important;
}
</style>