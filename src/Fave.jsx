import { Component } from "react/";

class Fave extends Component {

    state = {
        isFave: false
    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log('Clicked')
        this.setState({
            isFave: true
        })
    }

  render() {
    return (
      <div className={`film-row-fave ${this.state.isFave ? "remove_from_queue" : "" }`} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}

export default Fave;
