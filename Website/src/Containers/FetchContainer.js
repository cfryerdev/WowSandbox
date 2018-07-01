import React from 'react';

export default class FetchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      error: null
    }
  }
  
  componentDidMount() {
    if (this.props.url) {
      fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
          this.setState({ data: data, isLoading: false });
        })
        .catch(error => {
          console.error(error);
          this.setState({ error: error, isLoading: false });
        });
    }
  }

  render() {
    const { render } = this.props;
		return render({...this.state, ...this.props});
	}
  
};