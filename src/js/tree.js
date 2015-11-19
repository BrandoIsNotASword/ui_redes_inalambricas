import Baobab from 'baobab';

export default new Baobab({
  text: 'React is up and running!',
  doge: {
    bark: 'Wow!'
  }
}, {
  shiftReferences: true,
  autoCommit: true
});
