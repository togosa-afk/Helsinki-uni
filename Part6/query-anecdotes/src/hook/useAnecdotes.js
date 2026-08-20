import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getALL, create, update } from '../service/Anecdote'
import { useNotify } from '../NotificationContext'

export const useAnecdotes = () => {
    const queryClient = useQueryClient()
    const { notify } = useNotify()

    const result = useQuery({
        queryKey:['anecdotes'],
        queryFn: getALL,
        refetchOnWindowFocus: false,
        retry: false
    })

    const newAnecdotesMutation = useMutation({
        mutationFn: create,
        onSuccess: (newAnecdotes) => {
            const anecdotes = queryClient.getQueryData(['anecdotes']) || []
            queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdotes))
            notify(`you created '${newAnecdotes.content}'`)
        },
        onError: () => {
            notify('too short anecdote, must have length 5 or more')
        }
    })

    const updateAnecdotesMutation = useMutation({
        mutationFn: update,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
        }
    })

    return {
        anecdotes: result.data,
        isPending: result.isPending,
        isError: result.isError,
        addAnecdotes: (content) => newAnecdotesMutation.mutate({ content, votes: 0 }),
        updateAnecdotes: (anecdote) => updateAnecdotesMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 })
    }
}

