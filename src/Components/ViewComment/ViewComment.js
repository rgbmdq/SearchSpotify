import React from 'react'
import style from './style.scss'
import Item from './../Album/Item'
import ItemComment from './ItemComment/ItemComment'
import PropTypes from 'prop-types'
import { GetCommentData, PostCommentData } from '../../API/Comment'
import { GetSpecificAlbum} from '../../API/Album'
import CommentForm from './CommentForm/CommentForm';


const toComponent = (comments) =>{
  if(!comments || comments.length === 0){
    return null
  }
    return(
      comments.map( (comment) => (<ItemComment key={comment.id} comment={comment} />))
    )
}

export default class ViewComment extends React.Component {

  static get propTypes() {
    return {
      comments: PropTypes.array,
      album: PropTypes.object,
      match: PropTypes.object,
      onSearchCommentSuccess: PropTypes.func,   
      onSearchCommentFailure: PropTypes.func,
      onSearchAlbumDataSuccess: PropTypes.func,
      onSearchAlbumDataFailure: PropTypes.func,
      onPostCommentSuccess: PropTypes.func,
      onPostCommentFailure: PropTypes.func,
    }
  }
  
  constructor() {
    super()
    this.searchComment = this.searchComment.bind(this)
    this.searchAlbumData = this.searchAlbumData.bind(this)   
    this.newComment = this.newComment.bind(this)
    this.isclicked = this.isclicked.bind(this)
    this.state ={
      formClicked : true
    }
  }

  isclicked(){
    if(this.state.formClicked){
      return  this.setState({formClicked: false})
    }
    else{
      return  this.setState({formClicked: true})
    }
  }

  newComment(email, inputText) {
    PostCommentData(email, inputText, this.props.match.params.id)
    .then(response => {
      response.json().then(response => this.props.onPostCommentSuccess(response))
      })  
    .catch(error => this.props.onPostCommentFailure(error))
  }
  searchComment() {
    GetCommentData(this.props.match.params.id)
    .then(response => {
      response.json().then(response => this.props.onSearchCommentSuccess(response))
      })  
    .catch(error => this.props.onSearchCommentFailure(error))
  }

  searchAlbumData() {
    GetSpecificAlbum(this.props.match.params.id)
    .then(response => {
      response.json().then(response => this.props.onSearchAlbumDataSuccess(response))
      })  
    .catch(error => this.props.onSearchAlbumDataFailure(error))
  }
  componentWillMount() {
    this.searchAlbumData()
    this.searchComment()
  }

  render() {
    return (
      <div className={style.container} >
        <Item redirect={false} album={this.props.album} />
        <div className={style.newCommentContainer}>
          <p>COMMENTS</p>
          { this.state.formClicked ? (
            <div className={style.containerLeft}> 
              <div className={style.textAdd} />
              <div className={style.iconAdd}><i onClick={this.isclicked} className={"material-icons"}>clear</i></div>
            </div>
          ) : (
            <div className={style.containerLeft}> 
              <div className={style.textAdd}>Add comment</div>
              <div className={style.iconAdd}><i onClick={this.isclicked} className={"material-icons"}>add</i></div>
            </div>
          ) }
        </div>
        {
          this.state.formClicked ? (<CommentForm onSubmit={this.newComment} />) 
          : null
        }
        {toComponent(this.props.comments)}
      </div>
    )
  }
}
