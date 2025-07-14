import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'



function App() {
 const [searchTerm,setSearchTerm] = useState('')
 const[searchHistory,setSearchHistory]=useState([]);

 useEffect(()=>{
  const storedHistory=JSON.parse(localStorage.getItem('searchHistory')) ||[];
  setSearchHistory(storedHistory)
 })

 const updateSearchTerm=(term)=>{
    setSearchTerm(term);

    if(term.trim()===' ')return;

      if (!searchHistory.includes(term)) {
      const updatedHistory = [term, ...searchHistory].slice(0, 10); // limit to 10 items
      setSearchHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }


 }
  return (
    <>
     <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchHistory={searchHistory}/>
    </>
  )
}

export default App
