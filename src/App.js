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
        {label: 'Going to learn React', important: true, id: 1},
        {label: 'Please anyone halp...', important: false, id: 2},
        {label: 'Im tired....', important: false, id: 3},
      ]
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
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
        id: this.maxId++
      }

      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        };
      })
    }

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data}
        onDelete={this.deleteItem}/>
        <PostAddForm 
        onAdd={this.addItem}/>
      </AppBlock>
    );
  }
  
}

// export default App;
