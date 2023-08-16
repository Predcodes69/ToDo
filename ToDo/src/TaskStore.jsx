import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
const taskStore = (set) => {
    return (
        {
            tasks: [],
            addTask: (task) => {
                return (
                    set(
                        (state) => {
                            return (
                                {
                                    tasks: [...state.tasks, task]
                                }
                            )
                        }
                    )
                )
            },
            removeCourse: (id) => {
                return (
                    set(
                        state => {
                            return (
                                {
                                    tasks: state.tasks.filter(
                                        task => task.id != id
                                    )
                                }
                            )
                        }
                    )
                )
            },
            updateTask: (id, task) => {
                return (
                    set(
                        state => {
                            return (
                                {
                                    tasks: state.tasks.map(
                                        t => t.id === id ? task : t
                                    )
                                }
                            )
                        }
                    )
                )
            },
            toggleTask: (id) => {
                return (
                    set(
                        state => {
                            return (
                                {
                                    tasks: state.tasks.map(
                                        t => t.id === id ? { ...t, completed: !t.completed } : t
                                    )
                                }
                            )
                        }
                    )
                )
            }
        }
    )
}
const useTaskStore = create(
    devtools(
        persist(
            taskStore,
            {
                name: 'task-storage',
            }
        )
    )
)

export default useTaskStore