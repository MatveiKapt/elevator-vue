<template>
  <div class="app-wrapper">
    <floors-list :floorsCount="floorsCount"></floors-list>
  </div>

  <div class="elevator-wrapper">
    <mines-list :elevatorsCount="elevatorsCount" :floorsCount="floorsCount"></mines-list>
    <buttons-list :floorsCount="floorsCount"></buttons-list>
  </div>
</template>

<script>
import FloorsList from '@/components/FloorsList/FloorsList';
import MinesList from '@/components/MinesList/MinesList';
import ButtonsList from '@/components/ButtonsList/ButtonsList';

export default {
  components: {
    'floors-list': FloorsList,
    'mines-list': MinesList,
    'buttons-list': ButtonsList,
  },
  data() {
    return {
      floorsCount: 5,
      elevatorsCount: 1,
    }
  },
};
</script>


<style>
body {
  margin: 0;
  overflow: hidden;
}

.app-wrapper {
  height: 100vh;
  padding: 0 10px;
}

.elevator-wrapper {
  position: absolute;
  top: 0;
  left: 10px;

  display: flex;
  gap: 15px;
  width: max-content;
  min-height: 100vh;
}
</style>