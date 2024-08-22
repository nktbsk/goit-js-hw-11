import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

form.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.error({ title: 'Error', message: 'Search query cannot be empty' });
    return;
  }

  try {
    loader.classList.remove('hidden');
    gallery.innerHTML = '';
    const { hits } = await fetchImages(query);

    if (hits.length === 0) {
      iziToast.warning({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    gallery.innerHTML = renderGallery(hits);
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, please try again later',
    });
  } finally {
    loader.classList.add('hidden');
  }
}
