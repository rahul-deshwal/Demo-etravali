import { connect } from 'react-redux';
import loader from '../assets/images/loader.gif';

const Loader = (props) => {
  return (
    <div className={`loader ${props.isLoading ? 'active' : ''}`}>
      <figure>
        <img src={loader} alt="loader" />
      </figure>
    </div>
  )
}

const mapStateToProps = (state) => ({ isLoading: state.common.isLoading });

export default connect(mapStateToProps)(Loader);
