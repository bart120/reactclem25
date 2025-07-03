import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCarById } from '../../core/services/carService';
import { formatDate } from '../../core/utils';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, CardHeader, CardTitle } from '/src/core/kendo';

function CarsDetail() {
    const {t} = useTranslation();
    const { id } = useParams();
    const [car, setCar] = React.useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            const response = await getCarById(id);
            setCar(response);
        }
        fetchCar();
    }, [id]);

    if (!car) return <p>{t('loading')}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
        <CardHeader>
          <CardTitle>{car.model}</CardTitle>
        </CardHeader>
        <CardBody>
          <p><strong>{t('car.price')} :</strong> {car.price} €</p>
          <p><strong>{t('car.dateOfCirculation')} :</strong> {formatDate(car.dateOfCirculation)}</p>
        </CardBody>
      </Card>
    </div>
  )
}

export default CarsDetail