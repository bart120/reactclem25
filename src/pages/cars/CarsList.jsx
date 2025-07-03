import React, { useEffect } from 'react'
import {Card, CardHeader, CardTitle, CardBody, CardActions, Button, Loader, Dialog, DialogActionsBar} from '/src/core/kendo'
import { getCars, deleteCar } from '../../core/services/carService'
import { getBrandById } from '../../core/services/brandService'
import { formatDate } from '../../core/utils'
import { Link } from 'react-router-dom'

function CarsList() {

  const [cars, setCars] = React.useState([]);
  const [deletedCar, setDeletedCar] = React.useState(null);

  //avec then
  /*useEffect(() => {
    getCars().then(data =>{
      setCars(data);
      //console.log("useEffect", data);
    });
  }, []);*/

  const handleDelete = async () => {
    const test = await deleteCar(deletedCar.id);
    if(test){
      setCars((prevCars) => prevCars.filter((car) => car.id !== deletedCar.id));
      setDeletedCar(null);
    }

  }

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
              <Link to={`/cars/detail/${car.id}`}>
                <Button themeColor={'secondary'} size="small">Détails</Button>
              </Link>
              <Button themeColor={'primary'} size="small"
                onClick={() => setDeletedCar(car)}>Supprimer</Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {deletedCar &&(
        <Dialog title="Confirmation de suppression" onClose={() => setDeletedCar(null)}>
          <p>Êtes-vous sûr de vouloir supprimer la voiture {deletedCar.model} ?</p>
          <DialogActionsBar>
            <Button themeColor={'secondary'} onClick={() => setDeletedCar(null)}>Annuler</Button>
            <Button themeColor={'primary'} onClick={handleDelete}>Confirmer</Button>
          </DialogActionsBar>
        </Dialog>
      )}
    </div>
  )
}

export default CarsList