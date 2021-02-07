<template>
  <form class="search-input">
    <input placeholder="Search accounts" />
    <div>
      <svg
        class="delete-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Close Circle</title>
        <!-- eslint-disable max-len -->
        <path
          d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z"
        />
      </svg>
    </div>
    <span class="split"></span>
    <button class="search-button" type="submit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Search</title>
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style scoped>
.search-input {
  background-color: rgba(22, 24, 35, 0.06);
  border-radius: 92px;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search-input input {
  background: transparent;
  outline: none;
  padding: 0;
  width: 292px;
  caret-color: #fe2c55;
  appearance: textfield;
  font-size: 16px;
  line-height: 22px;
  border: none;
}

.delete-icon {
  height: 18px;
  width: 18px;
  fill: rgba(22, 24, 35, 0.34);
  margin: 0px 12px;
}

.split {
  width: 1px;
  height: 28px;
  margin: -3px 0;
  background: rgba(22, 24, 35, 0.12);
}

.search-button {
  background: transparent;
  border: none;
  outline: none;
  margin: -12px -16px;
  margin-left: 0;
  padding: 11px 16px 11px 12px;
}

.search-button svg {
  stroke: rgba(22, 24, 35, 0.34);
  stroke: rgba(22, 24, 35, 0.75);
  width: 24px;
  height: 24px;
}
</style>
