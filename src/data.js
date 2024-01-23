// Mock store to avoid setting up VueX for now.
// I have added the content of public/pages.json file to my browser's local storage via the dev tools under the name pages.
const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey); // -> [{link: {text:string, url: string}, pageTitle: string, content: string, published: boolean}]
let pagesStore = JSON.parse(pagesJson);

// Our data store made available globally via main.js
export default {
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  }
}