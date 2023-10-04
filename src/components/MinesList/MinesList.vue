<template>
  <ul class="mines">
    <li class="mines__mine" v-for="index in elevatorsCount" :key="index">
      <div class="elevator" :style="`--stage-height: calc(100vh / ${floorsCount})`"></div>
    </li>
  </ul>
</template>




<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    elevatorsCount: {
      type: Number,
      required: true,
    },
    floorsCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getCurrentFloor', 'getIsMoving']),
    }
}
</script>

<style>
.mines {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  min-height: 100%;

  list-style: none;
}

.mines__mine {
  position: relative;
  width: 120px;
  min-height: 100%;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}

.elevator {
  position: absolute;
  bottom: 0;
  height: var(--stage-height);
  width: 100%;

  background-color: blue;
  transition-property: bottom;
  transition-timing-function: linear;
}

</style>