import React, { useReducer, useState } from 'react';

type State = {
  savings: number;
  histories: { operation: string; amount: number }[];
};

type Action =
  | { type: 'DEPOSIT'; payload: number }
  | { type: 'WITHDRAW'; payload: number };

const initialState = {
  savings: 10000,
  histories: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        savings: state.savings + action.payload,
        histories: [
          ...state.histories,
          { operation: '預入', amount: action.payload },
        ],
      };
    case 'WITHDRAW':
      return {
        ...state,
        savings: state.savings - action.payload,
        histories: [
          ...state.histories,
          { operation: '引き出し', amount: action.payload },
        ],
      };
    default:
      return state;
  }
};

export const Bank = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState(0);

  const onDeposit = (amount: number) => {
    dispatch({ type: 'DEPOSIT', payload: amount });
    setAmount(0);
  };
  const onWithdraw = (amount: number) => {
    dispatch({ type: 'WITHDRAW', payload: amount });
    setAmount(0);
  };

  return (
    <div>
      <h4>残高：{state.savings.toLocaleString()}円</h4>
      <div>
        <div>
          <input
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            type="number"
          />
          <span>円</span>
        </div>
        <div>
          <button onClick={() => onDeposit(amount)}>預け入れ</button>
          <button onClick={() => onWithdraw(amount)}>引き出し</button>
        </div>
      </div>
      <div>
        <h4>履歴</h4>
        {state.histories.map((history) => {
          return (
            <p>
              {history.operation}:{history.amount.toLocaleString()}円
            </p>
          );
        })}
      </div>
    </div>
  );
};
