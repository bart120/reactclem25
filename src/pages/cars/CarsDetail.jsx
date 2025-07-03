import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCarById } from '../../core/services/carService';
import { formatDate } from '../../core/utils';

function CarsDetail() {

    const { id } = useParams();
    const [car, setCar] = React.useState(null);


    useEffect(() => {
        const fetchCar = async () => {
            const response = await getCarById(id);
            setCar(response);
        }
        fetchCar();
    }, [id]);

    if (!car) return <p>Chargement...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
        <CardHeader>
          <CardTitle>{car.model}</CardTitle>
        </CardHeader>
        <CardBody>
          <p><strong>Prix :</strong> {car.price} €</p>
          <p><strong>Mise en circulation :</strong> {formatDate(car.dateOfCirculation)}</p>
        </CardBody>
      </Card>
    </div>
  )
}

export default CarsDetail