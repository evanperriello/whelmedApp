const Store = [
    {
    username: 'Evan',
    userId: 'abc123', 
    lists: [
      {
        ListId: 1,
        title: 'Things to do 1',
        daysStraight: '5',
        numberDone: '75',
        listItems: [{text: 'Pet the cat', id: 1}, {text: 'Hug your wife', id:2}, {text: 'Code the app', id: 3}, {text: 'Make dinner.', id: 4}]
      },
      {
        ListId: 2,
        title: 'Things to do 2',
        daysStraight: '6',
        numberDone: '20',
        listItems: [{text: 'Feed the cat', id: 1}, {text: 'Kiss your wife', id:2}, {text: 'Code the app more', id: 3}, {text: 'Make dinner.', id: 4}]
      }
    ]
  },
  {
    username: 'Evan2',
    userId: '123abc', 
    lists: [
      {
        ListId: 1,
        title: 'Things to do 3',
        daysStraight: '5',
        numberDone: '75',
        listItems: [{text: 'Pet the cat', id: 1}, {text: 'Hug your wife', id:2}, {text: 'Code the app', id: 3}, {text: 'Make dinner.', id: 4}]
      },
      {
        ListId: 2,
        title: 'Things to do 4',
        daysStraight: '6',
        numberDone: '20',
        listItems: [{text: 'Feed the cat', id: 1}, {text: 'Kiss your wife', id:2}, {text: 'Code the app more', id: 3}, {text: 'Make dinner.', id: 4}]
      }
    ]
  }
];

export default Store;