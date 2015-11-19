import tree from '../tree';
const cursor = tree.select('doge');

export default {
  printText() {
    return cursor.get('bark');
  }
};
