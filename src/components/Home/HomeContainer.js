import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.title,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);
