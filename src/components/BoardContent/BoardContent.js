import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import Column from 'components/Column/Column'
import './BoardContent.scss'
import { initialData } from 'actions/initialData'
import { isEmpty } from 'lodash'
import { mapOrder } from 'ultilities/sort'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState({})

  useEffect(() => {
    const boardFromDB = initialData.boards.find(_board => _board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)
      mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id')
      setColumns(boardFromDB.columns)
    }
  }, [])

  const onColumnDrop = (dropResult) => {
    console.log(dropResult)
  }

  if (isEmpty(board))
  {
    return <div className="not-found" style={{ 'padding': '10px', 'color': 'white' }}>Board Not Found</div>
  }

  return (
    <div className='board-content'>
      <Container onDrop={onColumnDrop} orientation='horizontal' dragHandleSelector='.column-drag-handle'
        getChildPayload={index => {return columns[index]}}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {columns.map((column) => {
          return (
            <Draggable key={column.id}>
              <Column column={column}></Column>
            </Draggable>
          )
        })}
      </Container>
    </div>
  )
}

export default BoardContent