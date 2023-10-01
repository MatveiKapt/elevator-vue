<template>
  <ul class="buttons-list">
      <li class="buttons__item" v-for="index of floorsCount" :key="index">
        <button class="buttons__button" type="button">
          {{ index }}
        </button>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    floorsCount: {
      type: Number,
      required: true,
    },
    floor: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style>
.buttons-list {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  list-style: none;
}

.buttons__button {
  width: 30px;
  height: 30px;

  font-weight: 600;

  background-color: transparent;
  border-color: aqua;
  
  cursor: pointer;
  transition: background-color 0.3s;
}

.buttons__button:hover {
  background-color: aqua;
}
</style>