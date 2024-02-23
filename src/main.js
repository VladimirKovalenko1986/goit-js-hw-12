import { NewApiSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const newApiSearch = new NewApiSearch();

const refs = {
  formSearch: document.querySelector('.form'),
  listForm: document.querySelector('.list-form'),
  spinner: document.querySelector('.conteiner-loader'),
  btnLoadMore: document.querySelector('.button-loadMore'),
  textLoading: document.querySelector('.text-load'),
};

refs.formSearch.addEventListener('submit', onFormSearch);
refs.btnLoadMore.addEventListener('click', onLoadMoreSearch);

// spinnerHide();

async function onFormSearch(e) {
  e.preventDefault();

  newApiSearch.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
  onShowTextStatusLoading();
  clearNewList();
  newApiSearch.resetPage();

  try {
    const { hits } = await newApiSearch.getNews(newApiSearch.searchQuery);

    if (!hits.length || !newApiSearch.searchQuery) {
      throw new Error('No more data');
    }

    refs.listForm.innerHTML = createMarkup(hits);

    if (newApiSearch.perPage > hits.length) {
      throw new Error('Data end!');
    } else {
      onHideTextStatusLoading();
      onShowLoadMoreBtn();
      gallery.refresh();
    }
  } catch (error) {
    if (error.message === 'Data end!') {
      errorEndApi();
    } else {
      errorSearch();
    }
  } finally {
    clearFormSearch();
  }
}

async function onLoadMoreSearch() {
  onShowTextStatusLoading();
  onHideLoadBtn();

  try {
    const { hits, totalHits } = await newApiSearch.getNews(
      newApiSearch.searchQuery
    );
    const totalPage = Math.ceil(totalHits / hits.length);
    console.log(totalPage);
    if (totalPage === newApiSearch.queryPage) {
      throw new Error('Data end!');
    }

    refs.listForm.insertAdjacentHTML('beforeend', createMarkup(hits));
    windowScroll();
    onHideTextStatusLoading();
    onShowLoadMoreBtn();

    gallery.refresh();
  } catch {
    errorEndApi();
  }
}

function clearFormSearch() {
  refs.formSearch.reset();
}

function clearNewList() {
  refs.listForm.innerHTML = '';
}

// Error status

function errorSearch() {
  iziToast.error({
    position: 'topRight',
    title: 'Error Search',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });

  //   spinnerHide();
  onHideTextStatusLoading();
  onHideLoadBtn();
}

function errorEndApi() {
  iziToast.info({
    position: 'topRight',
    title: 'Error End API Search',
    message: 'We`re sorry, but you`ve reached the end of search results.',
  });
  onHideTextStatusLoading();
  onHideLoadBtn();
}

// Status spinner

// function spinnerHide() {
//   refs.spinner.classList.add('hidden');
// }

// function spinnerShow() {
//   refs.spinner.classList.remove('hidden');
// }

// Status Button load More

function onShowLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}

function onHideLoadBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

// Status text loading

function onShowTextStatusLoading() {
  refs.textLoading.classList.remove('hidden');
}

function onHideTextStatusLoading() {
  refs.textLoading.classList.add('hidden');
}

// Window Scroll

function windowScroll() {
  const cardHeight = document
    .querySelector('.list-item')
    .getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
