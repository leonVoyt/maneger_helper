'use client'
import React, { useLayoutEffect, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CardList, { CardItem } from '~/components/CardList'
import FormForCard from '~/components/FormForCard'
import { DndProvider } from 'react-dnd'

const Positions = () => {
  const [cardlist, setCardlist] = useState<CardItem[]>([])
  const [showForm, setShowForm] = useState(false)
  const [currCard, setCurrCard] = useState<CardItem | null>(null)
  const [action, setAction] = useState<ActionType>('create')
  const [loading, setLoading] = useState(true)
  // Function to handle card updates
  const handleUpdateCard = (
    cardItem: CardItem | null,
    actionProp: ActionType
  ) => {
    setCurrCard(cardItem)
    setAction(actionProp)
    setShowForm(true)
  }

  // Effect to load card list from local storage on component mount
  useLayoutEffect(() => {
    // Retrieve card list from local storage
    let cardlistFromStore: string | null =
      localStorage.getItem('categoriesOrder')

    if (cardlistFromStore) {
      // Parse and format card list from local storage
      let cardlistFromStoreFormatted: CardItem[] = JSON.parse(cardlistFromStore)
      // Set the card list state, sorted by order
      setCardlist(cardlistFromStoreFormatted.sort((a, b) => a.order - b.order))
    }
    setLoading(false)
  }, [])

  // Function to move a card item within the list
  const moveItem = (fromIndex: number, toIndex: number) => {
    setCardlist((prevCategoriesList: CardItem[]) => {
      // Create a copy of the previous card list
      const updatedItems = [...prevCategoriesList]
      // Remove the item from its original position
      const [movedItem] = updatedItems.splice(fromIndex, 1)
      // Insert the item at its new position
      updatedItems.splice(toIndex, 0, movedItem)
      // Update the order property based on the new positions
      const updatedOrder = updatedItems.map((el, index) => {
        return { ...el, order: index }
      })
      // Store the updated order in local storage
      localStorage.setItem('categoriesOrder', JSON.stringify(updatedOrder))
      // Return the updated order as the new state
      return updatedOrder
    })
  }
  return !loading ? (
    <div className="p-10 flex gap-4 h-full ">
      <DndProvider backend={HTML5Backend}>
        <CardList
          cardlist={cardlist}
          handleUpdateCard={handleUpdateCard}
          moveItem={moveItem}
          currCard={currCard}
        />
      </DndProvider>
      {showForm && (
        <FormForCard
          setCardlist={setCardlist}
          action={action}
          currCard={currCard}
          setShowForm={setShowForm}
        />
      )}
    </div>
  ) : (
    <div className="w-40 h-40 ml-auto mr-auto mt-20 rounded-full border-4 border-accent border-dashed animate-spin "></div>
  )
}
export default Positions
export type ActionType = 'create' | 'update'
