import { moviesData } from '../data/movieslist';
import MovieCard from './MovieCard';
import { CiSearch } from 'react-icons/ci';
import './movielist.css';

const MovieList = () => {
    return (
        <div className='dashboard-container'>
            <div className='search-container'>
                <CiSearch className='search-icon' />
                <input className='search-input' placeholder='Search...' />
            </div>

            <div className='parent-container'>
                <div className='left-container'>
                    <p>Genres</p>
                </div>

                <div className='right-container'>
                    <div className='sort-container'>
                        <p>24 Movies</p>
                        <div>Sort By:</div>
                    </div>

                    <div className='movie-container'>
                        {moviesData.map((movie, index) => (
                            <MovieCard movie={movie} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieList;
