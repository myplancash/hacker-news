import React, { useEffect, useState } from 'react';
import Toggle from '../components/Toggle/Toggle'
import Dropdown from '../components/Dropdown/Dropdown'
import PostCard from '../components/PostCard/PostCard'
import Pagination from '../components/Pagination/Pagination'
import { v4 as uuidv4 } from 'uuid';


import './Home.css';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0)
  const options = ['react', 'angular', 'vue'];
  const postsPerPage = 6;

  useEffect(() => {
    // Retrieve the selected query from localStorage
    const storedQuery = localStorage.getItem('selectedQuery');
    if (storedQuery) {
      setSelectedQuery(storedQuery);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=${selectedQuery}&page=${currentPage}`
      );
      const jsonData = await response.json();

      const updatedPosts = jsonData.hits.filter(
        ({ author, story_title, story_url, created_at }) =>
          author !== null &&
          story_title !== null &&
          story_url !== null &&
          created_at !== null
      );

      const indexOfLastPost = (currentPage + 1) * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = updatedPosts.slice(indexOfFirstPost, indexOfLastPost);

      setPosts(currentPosts);
      setTotalPages(Math.ceil(updatedPosts.length / postsPerPage));
    };

    fetchData();
  }, [currentPage, selectedQuery]);

  const handleQueryChange = (option, event) => {
    const selectedValue = option;
    setSelectedQuery(selectedValue);
    setCurrentPage(0); // Reset the current page when the query changes

    // Store the selected query in localStorage
    localStorage.setItem('selectedQuery', selectedValue);
  };

  return (
    <div className="app">
      <header>
        <h1 className="app__title">HACKER NEWS</h1>
      </header>

      <main>
        <Toggle />
    
        <Dropdown 
          options={options} 
          onChange={handleQueryChange} 
          selectedQuery={selectedQuery}
        />

        <section className="app__posts">
          {posts.map((post) => (
            <PostCard  key={uuidv4()} post={post} />
          ))}
        </section>

        <footer>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </footer>
      </main>
    </div>
  );
};

export default Home;
