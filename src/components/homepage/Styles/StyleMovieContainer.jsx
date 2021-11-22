import styled, { css } from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .movie {
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 260px;
    margin: 1rem;
  }
  .movie-info {
    color: #c5c1c3;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .movie-info h3 {
    margin: 0;
    color: #cac6c7;
  }
  .movie img {
    width: 250px;
  }
`;
