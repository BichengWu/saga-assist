import * as React from "react";
import { connect } from "react-redux";
import { actions } from "../index";
import { RootState } from "test/type";

interface Props {
    state: RootState,
}

class TestBase extends React.PureComponent<Props> {
    componentDidMount() {
        actions.getList();
    }
    render() {
        return (
            <div>
                <button onClick={() => actions.add()}>递增 1</button>
                <button onClick={() => actions.minus()}>递减 1</button>
                <button onClick={() => actions.reset()}>重置</button>
                <div style={{marginTop: 20}}>
                    <pre>{JSON.stringify(this.props.state, null, 4)}</pre>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {state};
};

export const Test = connect(mapStateToProps)(TestBase);
