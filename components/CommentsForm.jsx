import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(null);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const commentSubmitHandler = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj).then(res => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <Container>
      <h3>Leave a Reply</h3>
      <CommentWrapper>
        <textarea name="comment" placeholder="Comment" ref={commentEl} />
      </CommentWrapper>
      <InputWrapper>
        <input type="text" placeholder="Name" ref={nameEl} name="name" />
        <input type="email" placeholder="Email" ref={emailEl} name="email" />
      </InputWrapper>
      <CheckBox>
        <input
          ref={storeDataEl}
          type="checkbox"
          id="storeData"
          name="storeData"
          value="true"
        />
        <label htmlFor="storeData">
          Save my Name and Email for the next time.
        </label>
      </CheckBox>
      {error && <p>All Fields are Required</p>}
      <Actions>
        <button onClick={commentSubmitHandler} type="button">
          Post Comment
        </button>
        {showSuccessMessage && <h5>Comment Submitted for Review</h5>}
      </Actions>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 2rem 2rem 3rem 2rem;
  margin-bottom: 2rem;

  p {
    color: red;
  }
`;

const CommentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  textarea {
    padding: 1rem 0.5rem;
    outline: none;
    width: 100%;
    border-radius: 0.5rem;
    background: #fff;
  }

  textarea:focus {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
    outline: red;
  }
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    padding: 1rem 0.5rem;
    outline: none;
    width: 100%;
    border-radius: 0.5rem;
    background: #fff;
  }
  input:focus {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
    outline: red;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const CheckBox = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: #000;

  label {
    cursor: pointer;
    margin-left: 0.5rem;
  }

  input {
    background: #fff;
  }
`;

const Actions = styled.div`
  margin-top: 2rem;

  button {
    padding: 0.8rem 1.125rem;
    background: #7564f8;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    transition: all 300ms;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);

    &:hover {
      background: #5637f4;
    }
  }

  h5 {
    margin-top: 1.3rem;
    text-align: left;
    color: green;
  }
`;

export default CommentsForm;
