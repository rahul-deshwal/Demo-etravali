
const Header = ({ filterHandler, setShowModal, searchVal, setSearchVal }) => {

  const changehandler = (e) => {
    let val = e.target.value.trim();
    setSearchVal(val);
    filterHandler(val.toLowerCase());
  }

  return (
    <header className="custom_container">
      <div className='flex_headrow'>
          <button className='sort_by' onClick={() => setShowModal(true) }
          >Sort by...</button>
          <input className='search_input' type='text' value={searchVal} 
            placeholder='Type to search...'
            onChange={changehandler}/>
      </div>
    </header>
  );
}

export default Header;