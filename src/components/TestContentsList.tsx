import React from 'react';
import { TestsListData } from '../gamesComponents/gamesData/TestsList';

type Props = {
  id: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const TestContentsList = ({ onClick }: Props) => {
  return (
    <>
      <ul>
        {TestsListData.map((data) => {
          return (
            <li
              /*id={data.id}*/
              key={data.id}
              onClick={onClick}
            >
              {data.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TestContentsList;
