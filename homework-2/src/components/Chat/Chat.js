import React from 'react';
import Message from '../Message/Message';
import './Chat.css';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], messageInput: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    // console.log(event.target);
    this.changeInputMessage(event.target.value);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') this.sendMessageOnEnter();
  }

  changeInputMessage(text) {
    this.setState({ messageInput: text });
  }

  sendMessageOnEnter() {
    this.setState(state => ({
      messages: [...state.messages, { text: state.messageInput }],
      messageInput: ''
    }));
  }

  render() {
    return (
      <div className="chat">
        <input
          value={this.state.messageInput}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className="input-message"
        />
        {this.state.messages.map((message, index) => (
          <Message key={index} text={message.text} />
        ))}
      </div>
    );
  }
}
