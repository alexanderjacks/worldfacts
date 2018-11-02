import React, { Component } from 'react';
import Swal from 'sweetalert2';
import SweetAlert from 'sweetalert2-react';

class Popup extends Component {
  state = true;
  render() {
    return (
      <div className="Popup">
		<button onClick={() => this.setState({ show: true })}>Alert</button>
		<SweetAlert
		show={this.state.show}
		title="Demo"
		text="SweetAlert in React"
		onConfirm={() => this.setState({ show: false })}
		/>
      </div>
    );
  }
}

export default Popup;
