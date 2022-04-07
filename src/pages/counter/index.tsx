//文件位置：src/pages/counter/index.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  incrementAsync,
  counterSelector,
} from '../../store/reducers/counter';
import './index.scss';

const CounterPage = () => {
  const count = useSelector(counterSelector); // 读取 count 值
  const dispatch = useDispatch(); // 获得 dispatch，结合 action 就可更新 state
  return (
    <div className='counter-page'>
      <div className='counter'>
        {/* 同步 - */}
        <button className='btn' onClick={() => dispatch(decrement())}>
          -
        </button>
        <div className='val'>{`${count}`}</div>
        {/* 异步 + */}
        <button className='btn' onClick={() => dispatch(incrementAsync(5))}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
