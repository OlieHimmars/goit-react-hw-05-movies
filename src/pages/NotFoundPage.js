import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  margin: auto;
`;

const NotFoundText404 = styled.p`
  padding: 20px;
  font-weight: 500;
  font-size: 120px;
  color: #0703e2cb;
`;

const NotFoundText = styled.p`
  padding: 20px;
  font-weight: 500;
  font-size: 40px;
`;

export default function NotFoundPage() {
  return (
    <NotFoundBox>
      <NotFoundText404>404</NotFoundText404>
      <NotFoundText>Page not found</NotFoundText>
      <NotFoundText>
        Please go back to the <Link to="/">HOME PAGE</Link>
      </NotFoundText>
    </NotFoundBox>
  );
}
