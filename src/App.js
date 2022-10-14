
import './App.css';
import Comment from "./components/comment"


const comment={
  date: new Date(),
  text: "I hope you enjoy learning React",
  author:{
    name: "Hello Kitty",
    avatarUrl:"https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404__340.jpg",
  }
}





function App() {
  return(
    <div className='App'>
    <Comment data={comment}/>
    </div>
  );
}

export default App;
