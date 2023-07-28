import axios from 'axios'

const key = '38484967-516eb13a6795e4122e05347b7';

axios.defaults.baseURL = 'https://pixabay.com/api/'

async function fetchImages (q, page, per_page) {
    const searchParams = {
        params: {
          q,
          page,
          per_page,
          orientation: 'horizontal',
          safesearch: 'true',
          image_type: 'photo'
        },
      };
    const response = await axios.get(
        `?key=${key}&q=${q}`, searchParams
    )
    return response;
    
}

export {fetchImages};