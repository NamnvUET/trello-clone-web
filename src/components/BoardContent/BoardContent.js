import React, { useState, useEffect} from "react";
import Column from "components/Column/Column";
import './BoardContent.scss';
import { initialData } from "actions/initialData";
import { isEmpty } from "lodash";
import { mapOrder } from "ultilities/sort";

function BoardContent() {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState({});

    useEffect(() => {
        const boardFromDB = initialData.boards.find(_board => _board.id === 'board-1');
        if(boardFromDB){
            setBoard(boardFromDB)
            mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id');
            setColumns(boardFromDB.columns)  
        }
    }, [])
    
    if(isEmpty(board))
    {
        return <div className="not-found" style={{"padding": '10px', 'color': 'white'}}>Board Not Found</div>
    }

    return (
        <div className='board-content'>
            {columns.map((column, index) => {
                return (
                    <Column key = {column.id} column={column}></Column>
                )
            })}
        </div>
    )
}

export default BoardContent