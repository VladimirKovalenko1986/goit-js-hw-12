import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '36399234-af15385039238a4844768ffbd';

class NewApiSearch {
  constructor() {
    this.searchQuery = '';
    this.queryPage = 1;
    this.perPage = 15;
  }
  async getNews() {
    const response = await axios.get(
      `${ENDPOINT}?key=${API_KEY}&q=${this.searchQuery}&image_type="photo"&orientation="horizontal"&safesearch=true&per_page=${this.perPage}&page=${this.queryPage}`
    );
    this.incrementPage();
    return await response.data;
  }
  resetPage() {
    this.queryPage = 1;
  }
  incrementPage() {
    this.queryPage += 1;
  }
}

export { NewApiSearch };
