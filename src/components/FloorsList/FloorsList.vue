<template>
  <ul class="building">
    <li class="building__floor" v-for="index in floorsCount" :key="index"></li>
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  props: {
    floorsCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getCurrentFloor', 'getIsMoving']),
  },
  methods: {
    ...mapActions(['addFloorToCallQueue']),
  },
};
</script>


<style>
  .building {
  position: relative;
  display: grid;
  grid-template-rows: repeat(floorsCount, 1fr);
  grid-auto-flow: row dance;
  min-height: 100%;
  margin: 0;
  padding: 0;

  list-style: none;
}

.building__floor {
  border-top: 1px solid gray;
}

.building__floor:first-child {
  border: none;
}
</style>