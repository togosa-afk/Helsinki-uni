
import { create } from 'zustand'

import anecdoteService from './service/anecdote'

//! store

const useAnecdoteStore = create((set,get) => ({
  anecdotes: [],
  filter: '',
  notification: '',
  actions: {
    addVote: async (id) => {
      const anecdote = get().anecdotes.find(a => a.id ===id )
      const updated = await anecdoteService.update(
        id, {...anecdote,votes: anecdote.votes + 1 }
      ) 
      set (state => ({
        anecdotes: state.anecdotes.map(anecdote => 
          anecdote.id ===id ? updated : anecdote 
        )
      })),
      get().actions.setNotification(`you voted '${anecdote.content}'`, 3)
    },
    addAnecdote: async (content) => {
      const newAnecdote = await anecdoteService.create(content)
      set((state) => ({anecdotes: state.anecdotes.concat(newAnecdote)
      })),
      get().actions.setNotification(`you add '${newAnecdote.content}'`, 3)

    },
    filterAnecdotes: value => set({ filter: value }),
    initialize: async () => {
      const anecdotes = await anecdoteService.getAll()
      set(()=> ({ anecdotes }))
    },
    setNotification: (message, timeInSeconds = 3) => {
      set({ notification: message })

      setTimeout(() => {
        set({ notification: '' })
      }, timeInSeconds * 1000)
    },
    removeAnecdote: async (id) => {
      const anecdote = get().anecdotes.find(a => a.id ===id )

      if (!anecdote || anecdote.votes !== 0) return

      await anecdoteService.remove(anecdote.id)

      set(state => ({
        anecdotes: state.anecdotes.filter(a => a.id !== id)
      }))

      get().actions.setNotification(`you remove '${anecdote.content}'`, 3)

    }
  }
}))

export default useAnecdoteStore

export const useAnecdotes = () => useAnecdoteStore((state) => state.anecdotes)
export const useNotification = () => useAnecdoteStore((state) => state.notification)
export const useFilter = () => useAnecdoteStore((state)=>state.filter)
export const useAnecdoteActions = () => useAnecdoteStore((state) => state.actions)