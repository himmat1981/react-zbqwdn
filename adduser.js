import React, { Component } from 'react';
import { render } from 'react-dom';
import 'tachyons'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import AddUser from './services'

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
     this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
   
  handleChangeBody(event) {
    this.setState({body: event.target.value});
  }
  handleSubmit(event) {
     const {AddUserF} = this.props;
     AddUserF(this.state.title,this.state.body)
  }

  render() {
   
    return (
      <form>
      {this.props.error && <span className='product-list-error'>{this.props.error}</span>}
      {this.props.success && <span className='product-list-error'>{this.props.success}</span>}
        <label>
          Title:
          <input  className="ma1" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
        </label>
         <label>
          Body:
          <input className="ma1" type="text" value={this.state.body} onChange={this.handleChangeBody} />
        </label>
        <div class="cb">
            <input  type="button" value="Submit" onClick={this.handleSubmit}/>
        </div>
      </form>
    );
  }
}


const mapStateToProps = state =>  ({
    error: state.error,
    success: state.success,
})

const mapDispatchToProps = dispatch => ({
  AddUserF: (title,body) => dispatch(AddUser(title,body))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUser );

