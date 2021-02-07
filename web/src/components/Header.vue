<template>
  <header class="header">
    <div class="header-content">
      <search-input />
      <div class="menu-right">
        <upload-button />
        <login-button />
      </div>
    </div>
  </header>
</template>

<script>
import LoginButton from './LoginButton.vue';
import SearchInput from './SearchInput.vue';
import UploadButton from './UploadButton.vue';

export default {
  name: 'Header',
  components: {
    SearchInput,
    UploadButton,
    LoginButton,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid rgba(34, 90, 89, 0.2);
  z-index: 1000;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1028px;
}

.menu-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
