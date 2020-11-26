import React from 'react';
import { connect } from 'react-redux';
import Counter from '@/components/counter/Counter';

const B = (props) => {
  const { a, addAsync, add } = props;
  return (
    <div>
      <h1>BBB</h1>
      <Counter
        value={a.count}
        onIncrementAsync={() => {
          addAsync();
        }}
        onIncrement={() => {
          add();
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  a: state.a,
});
const mapDispatchToProps = (dispatch) => ({
  addAsync: () =>
    dispatch({
      type: 'addAsync',
    }),
  add: () =>
    dispatch({
      type: 'add',
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(B);
