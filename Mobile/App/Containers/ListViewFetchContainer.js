import React from 'react';
import { ListView } from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ListViewFetchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
      dataSource: null
    }
  }
  
  componentDidMount() {
    if (this.props.url) {
      fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
          this.setState({ isLoading: false, dataSource: ds.cloneWithRows(responseJson) });
        })
        .catch(error => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { render } = this.props;
		return render({...this.state, ...this.props});
	}
  
}