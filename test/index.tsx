import * as React from 'react'
import * as ReactDOM from 'react-dom'
import "./normalize.css";

import {add} from "@src";

ReactDOM.render(
	<div style={{ padding: 20 }}>
		welcome to Web! {add()}
	</div>,
	document.getElementById('root')
)