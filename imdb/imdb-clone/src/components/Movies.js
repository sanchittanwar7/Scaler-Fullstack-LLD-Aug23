import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = () => {

  const [moviesData, setMoviesData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [watchlist, setWatchlist] = useState([])

  // BASE URL (name of your func): https://api.themoviedb.org
  // PARAMETER: 1. Path params 2. Query params

  const getTrendingMoviesData = () => {
    axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=5a6e809a6376d537b15a7d290941d94b&page=${pageNumber}`)
    .then(response => {
      setMoviesData(response.data.results)
    })
  }

  useEffect(() => {
    getTrendingMoviesData()
  }, [pageNumber])

  const nextPage = () => {
    setPageNumber(pageNumber+1)
  }
  const previousPage = () => {
    if(pageNumber > 1) {
      setPageNumber(pageNumber-1)

    }
  }

  const addToWatchlist = (movieId) => {
    let updatedWatchList = [...watchlist, movieId]
    setWatchlist(updatedWatchList)
  }

  const removeFromWatchlist = (movieId) => {
    let updatedWatchList = watchlist.filter(watchlistId => {
      return watchlistId !== movieId
    })
    setWatchlist(updatedWatchList)
  }

  const showAddIcon = (movieId) => {
    return <div onClick={() => addToWatchlist(movieId)}>
              +
            </div>
  }

  const showRemoveIcon = (movieId) => {
    return <div onClick={() => removeFromWatchlist(movieId)}>
              X
            </div>
  }

  const isAddedToWatchlist = (movieId) => {
    return watchlist.includes(movieId)
  }

  const getMovieCard = movie => {
    return <div key={movie.id}
              className='w-[160px] h-[30vh] bg-center bg-cover m-4 md:h-[40vh] md:w-[180px] relative rounded-xl hover:scale-110 duration-300 flex items-end'
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
              }}
            >
              <div className='text-2xl p-2 bg-gray-200 rounded-xl absolute top-2 right-2'>
                {
                  isAddedToWatchlist(movie.id) ? showRemoveIcon(movie.id) : showAddIcon(movie.id)
                }
              </div>
              <div className='text-white font-bold text-center w-full bg-gray-900 bg-opacity-60'>
                {movie.original_title}
              </div>

            </div>
  }

  return (
    <div>
      <div className='text-2xl font-bold text-center m-8'>Trending Movies</div>

      <div className='flex flex-wrap'>
      {
        moviesData.map(movie => {
          return getMovieCard(movie)
        })
      }
      </div>
      <Pagination pageNumberProp={pageNumber} onNext={nextPage} onPrevious={previousPage}/>
    </div>
  )
}

export default Movies