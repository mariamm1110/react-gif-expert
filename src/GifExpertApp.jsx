import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Vampire diaries' ]);

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;
        
        //categories.push(newCategory);
        setCategories([newCategory,...categories ]);
        //llamarlo cuando quiero cambiar el arreglo de categories
    }

    console.log(categories);

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ (event) => onAddCategory(event) }
            currentCategories={ categories }
        />

        {/* listado de gif */}

        { 
            categories.map( (category) => (
                <GifGrid
                    key={ category } 
                    category={ category }/>
            ))
        }
            {/* <li>ABC</li> */}
        
            {/* gif item */}
    </>
  )
}
