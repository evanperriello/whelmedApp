const Store = [
  {
    username: 'Evan',
    userId: 'abc123', 
    lists: [
      {
        ListId: 1,
        listItems: ['']
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
        listItems: ['Pet the cat', 'Hug your wife', 'Code the app', 'Make dinner.']
      },
      {
        ListId: 2,
        title: 'Things to do 4',
        daysStraight: '6',
        numberDone: '20',
        listItems: ['Feed the cat', 'Kiss your wife', 'Code the app more', 'Make dinner.']
      }
    ]
  }
];

export default Store;