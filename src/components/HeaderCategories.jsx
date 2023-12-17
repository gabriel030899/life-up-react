import '../HeaderCategories.css';

const HeaderCategories = () => {
  const categories = [
    {
      id: 1,
      category: "Inglês"
    },
    {
      id: 2,
      category: "Espanhol"
    },
  ]
  
  return (
    <div className="categoriesList">
      <ul>
      {
        categories.map((categories)=>(
          <li key={categories.id}><a href="#">{categories.category}</a></li>
        ))
      }
      </ul>
    </div>
  )
}

export default HeaderCategories