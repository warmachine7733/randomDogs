import React, { Component } from "react";
import Calendar from "react-calendar";
import Text from "../UI/Text";

class DatePicker extends Component {
  state = {
    date: "",
    toggle: false
  };
  dateFormatter = date => {
    let formattedDate = `${date.getDate()}-${date.getMonth() +
      1}-${date.getFullYear()}`;
    this.setState({
      date: formattedDate
    });
    this.props.action({ value: formattedDate, id: this.props.id });
  };

  onChange = date => {
    this.dateFormatter(date);
    this.toggleCalendar();
  };
  toggleCalendar = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <>
        <Text text={this.props.label} />
        <input
          type="text"
          value={this.state.date}
          onClick={this.toggleCalendar}
          readOnly
        />
        {this.state.toggle ? <Calendar onChange={this.onChange} /> : ""}
      </>
    );
  }
  componentDidMount() {
    this.dateFormatter(new Date());
  }
}
export default DatePicker;
