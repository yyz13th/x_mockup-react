// import logo from './logo.svg';
// import './App.css';

import AppHeader from "./components/app-header/header.component";
import SearchPanel from "./components/search-panel/search-panel.component";
import PostStatusFilter from "./components/post-status-filter/post-status-fiter.component";
import PostList from "./components/post-list/post-list.component";
import PostAddForm from "./components/post-add-form/post-add.component";


// const Header = () => {
//   return <h2>hello world!</h2>
// }

// const Field = () => {
//   const holder = "Type here";
//   const styledField = {
//     width: "300px",
//   }
//   return <input 
//               type="text" 
//               style={styledField} 
//               placeholder={holder}
//               autoComplete=""
//               className="first"
//               htmlFor="" 
//   />
// }

// const Btn = () => {
//   const text = "Log In";
//   const logged = false;

//   return <button>{logged ? null : text}</button>
// }

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
      
    </div>
  );
}

export default App;
