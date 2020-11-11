const config = {
  noAccessMessage: 'No access. Try again',
  keyLocalStorage: 'user',
  noContent: 'No content',
  baseImgUrl: 'https://image.tmdb.org/t/p/w500',

  cardsOnPage: 20,

  delay: 2000,

  typeVideos: {
    movie: 'movie',
    tvShow: 'tv',
  },

  pages: {
    search: {
      searchResults: 'Search results:',
    },
    myLibrary: {
      myLibraryCaption: 'My library:',
    },
  },

  routes: {
    home: {
      title: 'Home',
      url: '/',
    },
    login: {
      title: 'Login',
      url: '/login',
    },
    logout: {
      title: 'Logout',
    },
    tvShow: {
      title: 'TV Shows',
      detailsUrl: '/tv-shows/:id',
      paginationUrl: '/tv-shows/page/:id',
      paginationPage: '/tv-shows/page',
      url: '/tv-shows',
    },
    myLibrary: {
      title: 'My Library',
      paginationUrl: '/my-library/:typeVideo/page/:id',
      tabs: {
        movies: 'Movies',
        tvShows: 'TV Shows',
      },
      url: '/my-library',
    },
    search: {
      title: 'Search',
      searchUrl: '/search/:query/page/:id',
      tabs: {
        movies: 'Movies',
        tvShows: 'TV Shows',
      },
      url: '/search',
    },
    movie: {
      title: 'Movies',
      detailsUrl: '/movies/:id',
      paginationUrl: '/movies/page/:id',
      paginationPage: '/movies/page',
      url: '/movies',
    },
  },
}

export default config;