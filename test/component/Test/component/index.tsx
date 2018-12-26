import * as React from "react";
import {connect} from "react-redux";
import {} from "../type";
import {actions} from "../index";
import {RootState} from "test/type"

class TextBase extends React.PureComponent<{ num: number }> {
    render() {
        return (
            <div>
                <button onClick={() => actions.add()}>递增 1</button>
                <button onClick={() => actions.minus()}>递减 1</button>
                <button onClick={() => actions.reset()}>重置</button>
                <span style={{marginLeft: 20}}>{this.props.num}</span>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        num: state.TextMain.num
    };
};

export const Text = connect(mapStateToProps)(TextBase);