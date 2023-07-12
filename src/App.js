import {useState,useEffect} from 'react';
import DisplayList from './components/main component/main.component';
import SearchBox from './components/search-box/search-box.component';

const App=()=>{
  const [searchField, setSearchField] = useState('');
  const[news,setNews]=useState([]);
  const[filteredNews,setFilteredNews]=useState([news]);

  useEffect(()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=0e9110d855bd4fd7a75e857313e3ef98")
    .then((Response)=>Response.json())
    .then((data)=>setNews(data.articles));
  },[]);
  
  useEffect(()=>{
    const newFilteredNews=news.filter((article)=>{
      const description = article.description ?? ''; 
      return description.toLocaleLowerCase().includes(searchField);
    })
    setFilteredNews(newFilteredNews);
  },[news,searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return(
    <div className='App'>
    <h1 className='app-title'>News<i>Express</i></h1>
    <SearchBox
        className='news-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search news'
      />
    <DisplayList news={filteredNews}/>
    
    </div>
  )
}


export default App;
