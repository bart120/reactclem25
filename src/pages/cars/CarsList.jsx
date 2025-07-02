import React, { useEffect } from 'react'
import {Card, CardHeader, CardTitle, CardBody, CardActions, Button} from '/src/core/kendo'
import { getCars } from '../../core/services/carService'

function CarsList() {

  const [cars, setCars] = React.useState([]);

  useEffect(() => {
    getCars().then(response =>{
      setCars(response.data);
      console.log("useEffect", response.data);
    });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Liste des voitures</h1>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>Voiture</CardTitle>
          </CardHeader>
          <CardBody>
            <p>Marque : </p>
            <p>Année :</p>
          </CardBody>
          <CardActions>
            <Button themeColor={'primary'} size="small">Détails</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default CarsList