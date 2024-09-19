import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const { images, isLoading } =useFetchGifs( category );

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )  //and logico para mensaje de carga
          //si el loading esta en true, se muestra el mensaje de carga
        }

        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GifItem 
                  key={ image.id }
                  { ...image } //esparcir propiedades
              />
            ))
          }
          
        </div>

    </>
  )
}


