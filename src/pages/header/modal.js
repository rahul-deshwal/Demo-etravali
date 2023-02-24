import React, { useEffect } from 'react';

const modal = React.forwardRef((props, ref) => {
  function itemClicked(e){
    e.preventDefault();
    props.setShowModal(false);
    props.sortByHandler(e.target.getAttribute('name'));
  }

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if(ref.current && e.target.getAttribute('class') !== 'sort_by' && !ref.current?.contains?.(e.target)){
       props.setShowModal(false);
     }
    });
  }, []);

  return (
    props.showModal && <div className="modal">
      <div className="modal_content" ref={ref}>
        <div className="modal_heading">
          <h2>Sort by</h2>
          <span className="close" onClick={() => props.setShowModal(false)}>&times;</span>
        </div>
        <ul onClick={itemClicked}>
          <li name='episode_id'>Episode</li>
          <li name='release_date'>Year</li>
        </ul>
      </div>
    </div>
  );
});

export default modal;