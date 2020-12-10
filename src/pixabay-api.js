import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const galleryApi = {
  API_KEY: '18570848-b4ac6f1815e8e933245c4f233',

  async fetchGallery(query = '', pageNumber = 1, quantity = 4) {
    return await axios
      .get(
        `/?q=${query}&page=${pageNumber}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=${quantity}`,
      )
      .then(({ data }) => data.hits)
      .then(result =>
        result.map(({ id, largeImageURL, webformatURL }) => ({
          id,
          largeImageURL,
          webformatURL,
        })),
      );
  },
};

export default galleryApi;
