import tree from '../tree';

export default {
  toggleButton(buttonName) {
    const actualValue = tree.get(buttonName);

    tree.set(buttonName, !actualValue);
  },

  saveTweet(tweet) {
    tree.set('twitterText', `#${tweet}`);
  }
};
