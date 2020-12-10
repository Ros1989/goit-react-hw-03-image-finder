import { Component } from 'react';
import propTypes from 'prop-types';
import QuantityPerPage from '../QuantityPerPage';
import s from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = e => this.setState({ query: e.currentTarget.value });

  handleSubmitForm = e => {
    e.preventDefault();
    const { query } = this.state;
    if (!query) return;
    this.props.onSubmitForm(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={e => this.handleSubmitForm(e)}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            placeholder="Search images and photos"
            onChange={e => this.handleChangeQuery(e)}
          />
        </form>
        <QuantityPerPage onChange={this.props.onChangeQuantity} />
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmitForm: propTypes.func.isRequired,
  onChangeQuantity: propTypes.func.isRequired,
};
