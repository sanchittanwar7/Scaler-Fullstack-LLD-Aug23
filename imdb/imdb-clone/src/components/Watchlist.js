import React, { useEffect, useState } from 'react'

const Watchlist = () => {
  let movies = [
    {
      adult: false,
      backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
      id: 619930,
      title: "Narvik",
      original_language: "no",
      original_title: "Kampen om Narvik",
      overview:
        "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
      poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
      media_type: "movie",
      genre_ids: [10752, 18, 36, 28],
      popularity: 321.063,
      release_date: "2022-12-25",
      video: true,
      vote_average: 7.406,
      vote_count: 53,
    },
    {
      adult: false,
      backdrop_path: "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
      id: 804095,
      title: "The Fabelmans",
      original_language: "en",
      original_title: "The Fabelmans",
      overview:
        "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      poster_path: "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
      media_type: "movie",
      genre_ids: [18],
      popularity: 163.3,
      release_date: "2022-11-11",
      video: false,
      vote_average: 8.02,
      vote_count: 561,
    },
    {
      adult: false,
      backdrop_path: "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
      id: 1035806,
      title: "Detective Knight: Independence",
      original_language: "en",
      original_title: "Detective Knight: Independence",
      overview:
        "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
      poster_path: "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
      media_type: "movie",
      genre_ids: [28, 53, 80],
      popularity: 119.407,
      release_date: "2023-01-20",
      video: false,
      vote_average: 6.6,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
      id: 555604,
      title: "Guillermo del Toro's Pinocchio",
      original_language: "en",
      original_title: "Guillermo del Toro's Pinocchio",
      overview:
        "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
      poster_path: "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
      media_type: "movie",
      genre_ids: [16, 14, 18],
      popularity: 754.642,
      release_date: "2022-11-18",
      video: false,
      vote_average: 8.354,
      vote_count: 1694,
    },
  ];
  const [favourites, setFavourites] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    let watchlistFromLocalStorage = JSON.parse(localStorage.getItem('imdb') || '[]')
    setFavourites(watchlistFromLocalStorage)
  }, [])

  useEffect(() => {
    let listOfListOfGenreIdsOfFavMovies = favourites.map(movie => movie.genre_ids)
    console.log(listOfListOfGenreIdsOfFavMovies)
    let listOfGenresFromAllMovies = listOfListOfGenreIdsOfFavMovies.reduce((acc, t) => {
      let genreName = t.map(genreId => genreIDs[genreId])
      acc = [...acc, ...genreName]
      return acc
    }, [])
    console.log(listOfGenresFromAllMovies)
    let listOfUniqueGenre = new Set(listOfGenresFromAllMovies)
    console.log(listOfUniqueGenre)
    setGenre(listOfUniqueGenre)
  }, [favourites])

  let genreIDs = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const getWatchListRow = (movie) => {
    return <tr>
            <td className='flex items-center px-6 py-4 font-normal text-gray-900 space-x-2'>
              <img 
                src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
                className="h-[6rem]  w-[10rem] object-fit"
                alt='movie poster'
              />
              <div className="font-medium text-gray-700  text-sm">{movie.original_title}</div>
            </td>
            <td className=" pl-6 py-4">
              {movie.vote_average}
            </td>
            <td className=" pl-6 py-4">
              {movie.popularity}
            </td>
            <td className=" pl-6 py-4">
              {movie.genre_ids.map(id => `${genreIDs[id]} `)}
            </td>
            <td className='py-4'>
              Action
            </td>
          </tr>
  }
  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
      <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
        <thead className='bg-gray-50 p-4'>
          <th className='px-6 py-4 font-medium text-gray-900'>
            Name
          </th>
          <th>
            Ratings
          </th>
          <th>
            Popularity
          </th>
          <th>
            Genre
          </th>
        </thead>
        <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
          {
            favourites.map(movie => {
              return getWatchListRow(movie)
            })
          }          
        </tbody>
      </table>
    </div>
  )
}

export default Watchlist