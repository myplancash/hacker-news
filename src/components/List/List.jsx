/* React code to print each item from the list on the page using Array.map() function to display each item on the page.


Declare list of items as JS Array.
Access each item using Array.map()
Return JSX code in callback function for every item.
*/
import React, {Fragment} from 'react';


const List = () => {
  const JSArray = [
    {id: 1, name: 'sergio', age: 30, married: 'false'},
    {id: 2, name: 'jairo', age: 23, married: 'true'},
    {id: 3, name: 'juan', age: 12, married: 'false'},
  ]

  const [users, setUsers] = React.useState(JSArray)

  return (
    <div>
      <ul>
        {users.map(({id, name, age, married}) => (
          <Fragment key={id}>
            <h1>{name} is {age} years old</h1>
            <li key={id}>is married: {married}</li>
          </Fragment>
          ))}
      </ul>
    </div>
  )
}

export default List