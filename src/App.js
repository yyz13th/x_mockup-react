// import logo from './logo.svg';
import './App.css';
import { Component } from "react";

import AppHeader from "./components/app-header/header.component";
import SearchPanel from "./components/search-panel/search-panel.component";
import PostStatusFilter from "./components/post-status-filter/post-status-fiter.component";
import PostList from "./components/post-list/post-list.component";
import PostAddForm from "./components/post-add-form/post-add.component";

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      data: [
        {label: 'Going to learn React', important: true, like:false, id: 1},
        {label: 'Please anyone halp...', important: false, like:false, id: 2},
        {label: 'Im tired....', important: false, like:false, id: 3},
      ],
      term: '',
      filter: 'all'
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
    this.onToogleImportant = this.onToogleImportant.bind(this);
    this.onToogleLike = this.onToogleLike.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

    deleteItem(id) {
      this.setState(({data}) => {
        const index = data.findIndex(el => el.id === id);
        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
        return {
          data: newArr
        };
      });
    }

    addItem(descr){
      const newItem = {
        label: descr,
        important: false,
        id: this.maxId++,
        like: false
      }

      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        };
      })
    }

    onToogleImportant(id){
      this.setState(({data}) => {
        const index = data.findIndex(el => el.id === id);
        const old = data[index];
        const newItem = {...old, important: !old.important};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        return {
          data: newArr
        };
      })
    }

    onToogleLike(id){
      this.setState(({data}) => {
        const index = data.findIndex(el => el.id === id);
        const old = data[index];
        const newItem = {...old, like: !old.like};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        return {
          data: newArr
        };
      })
    }

    searchPost(items, term){
      if(term.length === 0){
        return items;
      }
      return items.filter(item => {
        return item.label.indexOf(term) > -1;
      })
    }

    filterPosts(items, filter){
      if(filter === 'like'){
        return items.filter(item => item.like);
      } else {
        return items;
      }
    }

    onUpdateSearch(term){
      this.setState({term})
    }

    onFilterSelect(filter){
      this.setState({filter})
    }

  render() {

    const liked = this.state.data.filter(item => item.like).length;
    const allPosts = this.state.data.length;

    const visiblePosts = this.filterPosts(this.searchPost(this.state.data, this.state.term), this.state.filter);


    return (
      <AppBlock>
        <AppHeader 
          liked={liked} 
          allPosts={allPosts}/>
        <div className="search-panel d-flex">
          <SearchPanel 
            onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter 
            filter={this.state.filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList 
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToogleImportant={this.onToogleImportant}
          onToogleLike={this.onToogleLike}/>
        <PostAddForm 
          onAdd={this.addItem}/>
      </AppBlock>
    );
  }
  
}

// export default App;
