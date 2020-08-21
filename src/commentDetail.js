import React from "react";

// convert to class-based component
class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src= {this.props.img}/>
        </a>
        <div className="content">
          <a href="/" className="author"></a>
          <div className="metadata">
            <span className="date"></span>
          </div>
          <div className="text"></div>
        </div>
      </div>
    )} ;
};   


export default CommentDetail;
