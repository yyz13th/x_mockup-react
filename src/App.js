// import logo from './logo.svg';
import './App.css';

import AppHeader from "./components/app-header/header.component";
import SearchPanel from "./components/search-panel/search-panel.component";
import PostStatusFilter from "./components/post-status-filter/post-status-fiter.component";
import PostList from "./components/post-list/post-list.component";
import PostAddForm from "./components/post-add-form/post-add.component";

function App() {
  //create posts list
  const data = [
    {label: 'Going to learn React', important: true, id: 'qqq'},
    {label: 'Please anyone halp...', important: false, id: 'www'},
    {label: 'Im tired....', important: false, id: 'eee'},
  ]

  return (
    <div className="App">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
      
    </div>
  );
}

export default App;
