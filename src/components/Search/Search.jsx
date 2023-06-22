import React from 'react'

// filter functionality to display a filtered list based on the search query entered by the user.

//The following are the steps to create a Search filter using React JS:

//Declare React states for search input values.
//Create HTML input text for entering search term and update state in onChange function.
//Add Array.filter() on list of items with search term value.


const Search = () => {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
  
  const [filteredItems, setFilteredItems] = React.useState([])

  const handleInputChange = (e) => {
    let currentValue = e.target.value
  
    if(currentValue === '') {
      setFilteredItems(list)
      return 
    }
    const filtered = list.filter(item => item.toLowerCase().includes(currentValue.toLowerCase()))
    setFilteredItems(filtered)
  }

  return (
    <div>  
      <input 
        type="text"
        onChange={handleInputChange}
        placeholder='search...'
      />
      <ul>
        {filteredItems && filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  </div>
  )
}

export default Search