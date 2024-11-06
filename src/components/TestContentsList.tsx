import React from 'react';
import { TestsListData } from '../gamesComponents/gamesData/TestsList';
import { TestListLi } from './CommonStyles';

type Props = {
  id: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const TestContentsList = ({ onClick }: Props) => {
  return (
    <>
      <h2>Арт-тесты</h2>
      <ul>
        {TestsListData.map((data) => {
          return (
            <TestListLi id={String(data.id)} key={data.id} onClick={onClick}>
              {data.name}
            </TestListLi>
          );
        })}
      </ul>
    </>
  );
};

export default TestContentsList;
