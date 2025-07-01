import { Grid, Button } from '/src/core/kendo'
import React, { useEffect, useState } from 'react'

function BrandsList() {
  const [brands, setBrands] = useState([]);


  const loadData = () =>{
    const data = [
      { id: 1, name: 'Audi', image: 'audi.jpg' },
      { id: 2, name: 'Renault', image: 'renault.jpg' },
      { id: 3, name: 'BMW', image: 'bmw.jpg' },
    ];
    setBrands(data);
    console.log('Données chargées', brands);
  }

  useEffect(() => {
    console.log('UseEffect', brands);
  }, [brands]);

  return (
    <>
      <h2>Les marques</h2>

      <Grid data={brands}>
        <Grid.Column field="id" title="ID" />
        <Grid.Column field="name" title="Nom" />
        <Grid.Column field="image" title="Image" />
      </Grid>
      <Button onClick={loadData}>Charger les données</Button>
    </>
  )
}

export default BrandsList