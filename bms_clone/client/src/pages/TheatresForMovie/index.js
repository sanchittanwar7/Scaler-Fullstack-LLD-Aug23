import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { GetMovieById } from "../../apicalls/movies";
import { GetTheatresByMovie } from "../../apicalls/theatres";
import { message } from "antd";
import moment from "moment";

const TheatresForMovie = () => {
  const [movie, setMovie] = useState();
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    const movieId = params.movieId;
    try {
      dispatch(ShowLoading());
      const response = await GetMovieById(movieId);
      if (response.success) {
        setMovie(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const getTheatres = async () => {
    const movieId = params.movieId;
    try {
      dispatch(ShowLoading());
      const response = await GetTheatresByMovie(movieId);
      if (response.success) {
        console.log(response);
        // setMovie(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getTheatres();
  }, []);

  useEffect(() => {
    getTheatres();
  }, [date]);
  return (
    <div>
      {movie && (
        <div>
          {/* movie information */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl uppercase">
                {movie.title} ({movie.language})
              </h1>
              <h1 className="text-md">Duration : {movie.duration} mins</h1>
              <h1 className="text-md">
                Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
              </h1>
              <h1 className="text-md">Genre : {movie.genre}</h1>
            </div>
            <div>
              <h1 className="text-md">Select Date</h1>
              <input
                type="date"
                min={moment().format("YYYY-MM-DD")}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  navigate(`/movie/${params.movieId}?date=${e.target.value}`);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheatresForMovie;
