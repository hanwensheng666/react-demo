const Counter = ({ value, onIncrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{' '}
    <button onClick={onIncrement}>Increment</button> <hr />
    <div>Clicked: {value} times</div>
  </div>
);
export default Counter;
