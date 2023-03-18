import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainWrapper = styled.div`
  padding: 0 100px;
  border-bottom: 2px solid;
`;

export const Section = styled.section`
  margin-top: 10px;
  display: flex;
`;

export const Image = styled.img`
  width: 400px;
`;
export const InfoThumb = styled.div`
  padding: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: grey;
  margin-bottom: 20px;
`;
export const SubTitle = styled.h3`
  font-size: 18px;
  color: grey;
  margin-bottom: 10px;
`;
export const InfoText = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const GoBackBtn = styled.button`
  width: 80px;
  height: 30px;
  font-size: 12px;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 100px;
`;

export const ExtraInfo = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  margin-bottom: 15px;
`;

export const AdditionalText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const ExtraPagesList = styled.ul`
padding: 0 100px`;

export const Item = styled.li`
  display: block;
  margin-bottom: 8px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: grey;
  display: block;
  margin-bottom: 8px;
`;
