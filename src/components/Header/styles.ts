import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray-dark);
  
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-Content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    img{
      transform: skewX(-5deg)
    }
    span{
      font-size: 1.5rem;
      color: #fff;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95)
    }
  }
`