import * as React from "react";
import {connect} from "react-redux";
import {State} from "../type";
import {actions} from "../index";
// import {runSaga} from "@src";

class TextBase extends React.PureComponent<{ num: number }> {
    render() {
        return (
            <div>
                <button onClick={() => actions.add(this.props.num)}>递增 1</button>
                <button onClick={() => actions.minus(this.props.num)}>递减 1</button>
                <span style={{marginLeft: 20}}>{this.props.num}</span>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        num: state.Text.num
    };
};

export const Text = connect(mapStateToProps)(TextBase);