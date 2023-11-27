// Context.js
import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react'

const defaultValue: ContextProps = {
  showForm: false,
  setShowForm: () => {}, // Provide an initial function
  // Add default values for other properties
}

const Context = createContext(defaultValue)

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [showForm, setShowForm] = useState(false)
  const [currCard, setCurrCard] = useState(0)
  const [action, setAction] = useState<ActionType>('create')

  const handleUpdateCard = (id: number, actionProp: ActionType) => {
    setCurrCard(id)
    setAction(actionProp)
  }
  const value: ContextProps = {
    showForm,
    setShowForm,

    // Add more values or functions as needed
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useMyContext = (): ContextProps => {
  return useContext(Context)
}
type ActionType = 'create' | 'update'

type ContextProviderProps = {
  children: ReactNode
}

type ContextProps = {
  showForm: boolean
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
  // Add more values or functions as needed
}
