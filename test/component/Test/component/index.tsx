import * as React from "react";
import { connect } from "react-redux";
import { actions } from "../index";
import { RootState } from "test/type";

interface Props {
    num: number,
    TestMain: {num: number},
}

class TestBase extends React.PureComponent<Props> {
    componentDidUpdate(prevProps: Props){
        console.log("this.props--> ", this.props);
        console.log("prev.props--> ", prevProps);
        console.log("比较 TestMain-> ", this.props.TestMain === prevProps.TestMain);
    }
    render() {
        return (
            <div>
                <button onClick={() => actions.add()}>递增 1</button>
                <button onClick={() => actions.minus()}>递减 1</button>
                <button onClick={() => actions.reset()}>重置</button>
                <span style={{ marginLeft: 20 }}>{this.props.num}</span>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        num: state.TestMain.num,
        TestMain: state.TestMain,
    }
};

export const Test = connect(mapStateToProps)(TestBase);
