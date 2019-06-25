import React from 'react';


const CommentItem = (props) => {

    const { comment } = props;

    return (
        <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle" />
            <p>{comment.body}</p>
        </li>
    )
}

export default CommentItem;