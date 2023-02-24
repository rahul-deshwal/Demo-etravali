import { useState, useEffect, useRef } from 'react';
import Header from './pages/header/index';
import { callMovieList } from './redux/home/actions';
import Modal from './pages/header/modal';

import { connect } from 'react-redux';

function App(props) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [movieData, setMovieData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  let inputRef = useRef();
  
  useEffect(() => {
    // stored api data in redux store - for showing redux functionality
    props.callMovieList();
  }, []);

  useEffect(() => {
    items.length === 0 && setItems(props.movieList);
  }, [props.movieList]);


  const filterHandler = (val) => {
    setFilteredItems(items.filter(el => el.title.toLowerCase().includes(val)));
  }

  const showMovieList = (el, index) => (
      <li key={el.episode_id} onClick={() => {
        if(showModal) return;
        setMovieData(filteredItems[index] || items[index])}
      } 
      >
        <span>EPISODE {el.episode_id}</span>
        <span>{`Episode ${el.episode_id} - ${el.title}`} </span>
        <span>{el.release_date}</span>
      </li> );

  const sortByHandler = (type) => {
    if(filteredItems.length > 0) setFilteredItems([]);
    setSearchVal('');
    let val = [...items].sort((a,b) => {
      if(type === 'episode_id') {
        return a.episode_id - b.episode_id;
      } else {
        return new Date(a.release_date) - new Date(b.release_date);
      }
    });
    setItems(val);
  }

  return (
    <div className="app_wrapper">
      <Header filterHandler={filterHandler} showModal={showModal}  setShowModal={setShowModal} searchVal={searchVal} setSearchVal={setSearchVal}/>
      <Modal showModal={showModal} setShowModal={setShowModal} sortByHandler={sortByHandler}
      ref={inputRef}
      />
      <div className='wrapper'>
        <div className='split left'>
          <ul  className="movie_wrapper">
          {filteredItems.length > 0 ? filteredItems.map((el, index) => showMovieList(el,index))
             : 
            items.length > 0 && items.map((el, index) => showMovieList(el,index))}
          </ul>
        </div>
        <div className='split right'>
          {movieData ? 
            <div>
              <h2>Episode {movieData.episode_id} - {movieData.title}</h2>
              <p>{movieData.opening_crawl}</p>
              <p>Directed by: {movieData.director}</p>
            </div>
            : 
            <div className='no_movie'><p>No movie selected</p></div>
          }
        </div> 
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ movieList: state.home.movieList });

const mapDispatchToProps = (dispatch) => ({ callMovieList: () => dispatch(callMovieList()) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
