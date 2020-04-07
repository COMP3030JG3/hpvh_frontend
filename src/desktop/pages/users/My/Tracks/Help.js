import React from "react";
export default (props) => {
    return (
        <QuestionForm />
    );
};
class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var list = document.getElementById('l');
    var listItem = document.createElement('li');
    var listText = document.createElement('span');
    var listBtn = document.createElement('button');
    listItem.appendChild(listText);
    listText.textContent = this.state.value;
    list.appendChild(listItem);
    alert('Question ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Qusetion?
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
                <input type="submit" value="submit" />
        </form>
        <h1 onClick={this.handleSubmit}>{this.state.value}</h1>
        <ol id='l'></ol>
      </div>
    );
  }
}