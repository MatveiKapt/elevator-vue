<template>
  <ul class="buttons-list">
    <li class="buttons__item" v-for="index of floorsCount" :key="index">
      <button
        class="buttons__button"
        type="button"
        @click="callElevator(index)"
      >
        {{ index }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    floorsCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getCurrentFloor']),
    isCurrentFloor: {
      get() {
        return this.getCurrentFloor === this.floor;
      },
      set(value) {
  if (value) {
    this.addFloorToCallQueue(this.floor);
    this.$nextTick(() => {
      const stageHeight = 100;
      const elevator = document.querySelector('.elevator');
      elevator.style.bottom = `${stageHeight * this.floor}px`;
    });
  }
},

    },
  },
  methods: {
    ...mapActions(['addFloorToCallQueue', 'callElevator']),
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