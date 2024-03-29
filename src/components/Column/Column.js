import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import './Column.scss'
import Card from 'components/Card/Card'
import { mapOrder } from 'ultilities/sort'

function Column(props) {
  const { column } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  const onCardDrop = (dropResult) => {
    console.log(dropResult)
  }

  return (
    <div className="column">
      <header className='column-drag-handle'> {column.title} </header>
      <div className="card-list">
        <Container groupName='columns' onDrop={onCardDrop} orientation='vertical'
          getChildPayload={index => {return cards[index]}}
          dragClass="card-ghost" dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
        >
          {cards.map((card) => {
            return (
              <Draggable key={card.id}>
                <Card card={card}/>
              </Draggable>
            )
          })}
        </Container>
      </div>

      <footer>Add another card</footer>
    </div>
  )
}

export default Column