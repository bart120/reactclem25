import React, { useEffect } from 'react'
import {Card, CardHeader, CardTitle, CardBody, CardActions, Button, Loader} from '/src/core/kendo'
import { getCars } from '../../core/services/carService'
import { getBrandById } from '../../core/services/brandService'
import { formatDate } from '../../core/utils'

function CarsList() {

  const [cars, setCars] = React.useState([]);

  //avec then
  /*useEffect(() => {
    getCars().then(data =>{
      setCars(data);
      //console.log("useEffect", data);
    });
  }, []);*/

  //avec async/await
  useEffect(() => {
    const fetchData = async () =>{
      const data = await getCars();
      setCars(data);
      for(const car of data) {
        const brand = await getBrandById(car.brandID);
        setCars((prevCars) => 
          prevCars.map((c) =>
            c.id === car.id ? { ...c, brand: brand.name } : c
          )
        );
      }
    }

    fetchData();
  },[]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Liste des voitures</h1>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
        {cars.map((car) =>(
          <Card key={car.id}>
            <CardHeader>
              <CardTitle>{car.model}</CardTitle>
            </CardHeader>
            <CardBody>
              <div>Marque : {car.brand ?? (
                <Loader type="pulsing"  themeColor="primary" style={{ display:'inline-block' }} />
              )
                }</div>
              <p>Année : {formatDate(car.dateOfCirculation)}</p>
              <p>Prix : {car.price} €</p>
            </CardBody>
            <CardActions>
              <Button themeColor={'primary'} size="small">Détails</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CarsList