import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import styled from 'styled-components';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then(result => setComments(result));
  }, [slug, setComments]);

  return (
    <div>
      {comments.length > 0 && (
        <Container>
          <h3>
            {comments.length} {comments.length <= 1 ? 'Comment' : 'Comments'}
          </h3>
          {comments.map(comment => (
            <CommentWrapper key={comment.createdAt}>
              <h4>
                <span>{comment.name}</span> on{' '}
                {moment(comment.created).format('MMM DD, YYYY')}
              </h4>
              <p>{parse(comment.comment)}</p>
            </CommentWrapper>
          ))}
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  margin-bottom: 3rem;
  color: #000;

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    border-bottom: 1px solid gray;
  }
`;

const CommentWrapper = styled.div`
border-bottom: 1px solid gray;
margin-bottom: 1rem;
padding-bottom: 1rem;

h4 {
  font-weight: light;
  color: #999898
}

span {
  color: #000;
}

p {
  white-space: pre-line;
  width: 100%;
  color: gray;
}
}
`;
export default Comments;
