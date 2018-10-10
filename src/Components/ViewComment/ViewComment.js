import React from 'react'
import style from './style.scss'
import Item from './../Album/Item'
import ItemComment from './ItemComment/ItemComment'
import PropTypes from 'prop-types'
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
      onSearch: PropTypes.func,
      onSearchAlbumData: PropTypes.func,
      onPost: PropTypes.func,
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
    if(email, inputText, this.props.match.params.id) {
      const albumId = this.props.match.params.id;
      this.props.onPost({email, inputText, albumId})
    }
  }
  
  searchComment() {
    if(this.props.match.params.id) {
      this.props.onSearch(this.props.match.params.id)
    }
  }
  
  searchAlbumData() {
    if(this.props.match.params.id) {
      this.props.onSearchAlbumData(this.props.match.params.id)
    }
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
              <div id={style.iconAdd}><i onClick={this.isclicked} className={"material-icons"}>clear</i></div>
            </div>
          ) : (
            <div className={style.containerLeft}> 
              <div className={style.textAdd}>Add comment</div>
              <div id={style.iconAdd}><i onClick={this.isclicked} className={"material-icons"}>add</i></div>
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
