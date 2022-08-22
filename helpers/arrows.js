import styled from 'styled-components';

const ContainerLeft = styled.div`
  position: absolute;
  text-align: center;
  padding: 0.75rem 0;
  cursor: pointer;
  background-color: #feacba;
  border-radius: 50%;
  left: 0;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #fff;
  }
`;

const ContainerRight = styled.div`
  position: absolute;
  text-align: center;
  padding: 0.75rem 0;
  cursor: pointer;
  background-color: #feacba;
  border-radius: 50%;
  right: 0;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #fff;
  }
`;

export const customLeftArrow = (
  <ContainerLeft className="arrow-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  </ContainerLeft>
);

export const customRightArrow = (
  <ContainerRight className="arrow-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </ContainerRight>
);
