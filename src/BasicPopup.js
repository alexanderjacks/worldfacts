import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import { Button } from 'mdbreact';


class BasicPopup extends Component {
  
  constructor(props) {
  	super(props)
  	this.state = {
  		show:false
  	}
  }

  render() {
    return (
      <div className="BasicPopup">
		<Button color={this.props.btnColor} onClick={() => this.setState({ show: true })}>{this.props.btnText}</Button>
		<SweetAlert
			show={this.state.show}
			title={this.props.title}
			html={this.props.text}
      imageUrl={this.props.imageUrl}
      confirmButtonText={this.props.confirmButtonText}
			confirmButtonColor="#a6c"
			onConfirm={() => this.setState({ show: false })}
		/>
      </div>
    );
  }
}

export default BasicPopup;
