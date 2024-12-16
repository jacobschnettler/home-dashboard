import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Card, PorchCam } from '../components'

import API from '../api'

export const HomePage = () => {
    const [Services, setServices] = useState([])

    const [LoadedServices, setLoadedServices] = useState(false)

    useEffect(function () {
        function fetchServices() {
            setLoadedServices(false)

            API.get('/services/get').then(function ({ data }) {
                if (data.services) setServices(data.services)

                setLoadedServices(true)
            })
        }

        fetchServices()

        setInterval(fetchServices, 30000);
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <PorchCam scale={0.25} />

            <div style={{ width: "650px", paddingLeft: '25px' }}>
                <Card
                    title={LoadedServices && 'Services'}
                >
                    {LoadedServices ? (
                        Services.map(service => (
                            <div key={service.id} style={{ display: 'flex', paddingBottom: '10px' }}>
                                <p style={{ fontSize: '25px', margin: '0', padding: '0' }}>{service.label}</p>

                                <p
                                    style={{
                                        margin: '0',
                                        padding: '0',
                                        marginLeft: 'auto',
                                        fontSize: '22px',
                                        color: service.status == 1 ? 'rgb(0, 255, 0)' : 'rgb(255, 0, 0)'
                                    }}
                                >
                                    {service.status == 1 ? 'Online' : 'Offline'}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div style={{ width: '100%', textAlign: 'center', padding: '45px' }}>
                            <Spinner animation="border" role="status" style={{ padding: '45px', fontSize: "25px" }}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}