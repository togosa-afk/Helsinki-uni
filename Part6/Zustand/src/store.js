import { create } from "zustand"

const useCounterStore = create(set => ({
  bad: 0,
  good: 0,
  natural: 0,
  actions:{
    goodAction: () => set( state => ({ good: state.good + 1 })),
    badAction: () => set( state => ({ bad: state.bad + 1 })),
    naturalAction: () => set( state => ({ natural: state.natural +1 })),
  }
}))

export const useBad = () => useCounterStore(state => state.bad)
export const useGood = () => useCounterStore(state => state.good)
export const useNatural = () => useCounterStore(state => state.natural)
export const useCounterControls = () => useCounterStore(state => state.actions)

export default useCounterStore