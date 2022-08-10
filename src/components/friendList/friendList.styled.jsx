import styled from '@emotion/styled'

export const Friends = styled.ul`
  width: 300px;
  /* margin: 0 auto; */
  align-items: center;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%);
   :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

