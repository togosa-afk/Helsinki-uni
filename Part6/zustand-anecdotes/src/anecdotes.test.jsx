import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act, cleanup, screen , render } from '@testing-library/react'
import AnecdoteList from './components/AnecdoteList'
import anecdoteService from './service/anecdote'
import useAnecdoteStore, { useAnecdotes, useAnecdoteActions } from './store'



vi.mock('./service/anecdote.js',()=>({
    default:{
        getAll: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        remove: vi.fn()
    }
}))

beforeEach(()=>{
    useAnecdoteStore.setState({anecdotes:[],filter:'',notification:''})
    vi.clearAllMocks()
})

afterEach(() => {
    cleanup()
})

describe('useAnecdoteStore',()=>{
    it('initialize loads notes from service', async ()=>{

        const mockAnecdote = [{id:1, content:'Test anecdote', votes:0}]

        anecdoteService.getAll.mockResolvedValue(mockAnecdote)

        const { result } = renderHook(() => useAnecdoteActions())

        await act(async ()=>{
            await result.current.initialize()
        })

        const {result :anecdotesResult } = renderHook(()=> useAnecdotes() )

        expect(anecdotesResult.current).toEqual(mockAnecdote)
    })

    it('renders anecdotes sorted by votes descending', () => {
        const unSortedAnecdotes = [
        { id: '1', content: 'Lowest voted', votes: 1 },
        { id: '2', content: 'Highest voted', votes: 10 },
        { id: '3', content: 'Middle voted', votes: 5 }
        ]

        useAnecdoteStore.setState({ anecdotes: unSortedAnecdotes, filter: '' })

        render(<AnecdoteList />)

        const items = screen.getAllByText(/voted/i)

        expect(items[0].textContent).toContain('Highest voted')
        expect(items[1].textContent).toContain('Middle voted')
        expect(items[2].textContent).toContain('Lowest voted')
    })

    it('test that verifies the correct React component receives a properly filtered list of anecdotes', ()=>{
        const mockAnecdote = [
            { id: '1', content: 'React is good', votes: 0 },
            { id: '2', content: 'Redux is hard', votes: 0 },
        ]

        useAnecdoteStore.setState({ anecdotes: mockAnecdote , filter: 'react' })

        render(<AnecdoteList />)

        const item = screen.getByText(/react/i)

        const item2 = screen.queryByText('Redux is hard')

        expect(item).toBeDefined()
        expect(item2).toBeNull()

    })

    it('test that verifies that voting increases the number of votes for an anecdote', async () => {
        const mockAnecdote = [{ id: '1', content: 'React is good', votes: 0 }]

        useAnecdoteStore.setState({ anecdotes: mockAnecdote, filter: '' })

        anecdoteService.update.mockResolvedValue({ id: '1', content: 'React is good', votes: 1 })

        await useAnecdoteStore.getState().actions.addVote('1')

        const updatedAnecdotes = useAnecdoteStore.getState().anecdotes

        expect(updatedAnecdotes[0].votes).toBe(1)
        expect(anecdoteService.update).toHaveBeenCalledTimes(1)
  })
})
