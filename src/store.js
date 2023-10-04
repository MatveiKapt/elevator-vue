import {createStore} from 'vuex';


export const store = new createStore({
  state: {
    currentFloor: 1,
    isMoving: false,
    queue: [],
  },
  mutations: {
    setCurrentFloor(state, floor) {
      state.currentFloor = floor;
    },
    setIsMoving(state, isMoving) {
      state.isMoving = isMoving;
    },
    addToQueue(state, floor) {
      state.queue.push(floor);
    },
    removeFromQueue(state, floor) {
      const index = state.queue.indexOf(floor);
      if (index > -1) {
        state.queue.splice(index, 1);
      }
    },
  },
  actions: {
    callElevator({ state, commit }, floor) {
      if (floor === state.currentFloor && !state.isMoving) {
        return;
      }

      if (state.isMoving) {
        commit('addToQueue', floor);
        return;
      }

      commit('setIsMoving', true);
      commit('addToQueue', floor);

      const speed = 1;
      const delay = 3000; 

      const interval = setInterval(() => {
        // Достигли выбранного этажа
        if (state.currentFloor === state.queue[0]) {
          setTimeout(() => {
            commit('removeFromQueue', state.queue[0]);
          }, delay);
          clearInterval(interval);
          commit('setIsMoving', false);
          return;
        }

        const direction = state.queue[0] > state.currentFloor ? 1 : -1;
        const nextFloor = state.currentFloor + direction;
        commit('setCurrentFloor', nextFloor);
      }, 1000 / speed);
    },
  },
});

export default store;