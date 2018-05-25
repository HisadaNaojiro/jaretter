import {connect} from 'react-redux'
import { getPosts } from '../redux/actions/tweet'
import Home from './Home';


const mapStateToProps = (contents) => {    
  const length = contents.length;
  const currentState = contents[length - 1];  // 一番新しいstateを取り出す
  return { contents: currentState};  // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
}

const mapDispatchToProps = dispatch => {
  return {contents: dispatch(getPosts())};
}


const GetTweets = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default GetTweets;
