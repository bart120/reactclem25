import React, { useEffect } from 'react'
import { getBrands } from '../../core/services/brandService';
import { postCar } from '../../core/services/carService';
import {Button, Input, DatePicker, DropDownList} from '/src/core/kendo'


function CarsAdd() {
  const [brands, setBrands] = React.useState([]);
  const [car, setCar] = React.useState({
    model: '',
    brandID: null,
    dateOfCirculation: null,
    price: 0
  });

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getBrands();
      setBrands(data);
    }

    fetchBrands();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedCar = {...car, price: parseFloat(car.price)};
    console.log(formattedCar);
    const newCar = await postCar(formattedCar);
    alert(`Voiture ajoutée avec succès avec l'id ${newCar.id} !`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    /*let newCar = {...car, [name]: value};
    setCar(newCar);*/
    setCar((prevCar) => ({...prevCar, [name]: value }));
  }

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h1>Créer une voiture</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input label="Modèle" name="model" value={car.model} onChange={handleChange} />
        <Input label="Prix" name="price" type="number" value={car.price} onChange={handleChange} />
        <DatePicker label="Date de mise en circulation" name="dateOfCirculation" value={car.dateOfCirculation}
          onChange={handleChange} />

        <DropDownList label="Marque" name="brandID" data={brands}
          dataItemKey="id" textField="name" 
          onChange={(e)=>setCar({...car, brandID: e.value.id})}/>
        <Button themeColor="primary" type="submit">Ajouter</Button>
      </form>

    </div>
  )
}

export default CarsAdd