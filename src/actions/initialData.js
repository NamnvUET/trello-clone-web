export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'Todo column',
          cardOrder: ['card-5', 'card-2', 'card-3', 'card-4', 'card-1', 'card-6'],
          cards: [
            { id: 'card-1', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 1', cover: null },
            { id: 'card-2', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 2', cover: 'img/img_demo.jpg' },
            { id: 'card-3', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 3', cover: null },
            { id: 'card-4', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 4', cover: null },
            { id: 'card-5', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 5', cover: null },
            { id: 'card-6', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 6', cover: null }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Inprogress column',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            { id: 'card-8', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 8', cover: null },
            { id: 'card-9', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 9', cover: null },
            { id: 'card-10', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 10', cover: null }
          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Done Column',
          cardOrder: ['card-11', 'card-12', 'card-13'],
          cards: [
            { id: 'card-11', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 11', cover: null },
            { id: 'card-12', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 12', cover: null },
            { id: 'card-13', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 13', cover: null }
          ]
        },
        {
          id: 'column-4',
          boardId: 'board-1',
          title: 'Done Column',
          cardOrder: ['card-15', 'card-16', 'card-17'],
          cards: [
            { id: 'card-15', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 15', cover: null },
            { id: 'card-16', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 16', cover: null },
            { id: 'card-17', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 17', cover: null }
          ]
        },
        {
          id: 'column-5',
          boardId: 'board-1',
          title: 'Done Column',
          cardOrder: ['card-18', 'card-19', 'card-20'],
          cards: [
            { id: 'card-18', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 18', cover: null },
            { id: 'card-19', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 19', cover: null },
            { id: 'card-20', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 20', cover: null }
          ]
        },
        {
          id: 'column-6',
          boardId: 'board-1',
          title: 'Done Column',
          cardOrder: ['card-21', 'card-22', 'card-23'],
          cards: [
            { id: 'card-21', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 18', cover: null },
            { id: 'card-22', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 19', cover: null },
            { id: 'card-23', boardId: 'board-1', columnId: 'card-1', title: 'title of carrd 20', cover: null }
          ]
        }

      ]
    }]
}