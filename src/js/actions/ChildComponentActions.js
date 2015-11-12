import tree from '../tree';
const cursor = tree.select('doge');

export default {
  printText() {
    console.log(cursor.get('bark'));
  }
};
