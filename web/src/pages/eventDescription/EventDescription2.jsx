import { Text, Box, HStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import TopBox from '../../components/EventDescriptionComponents/TopBox/TopBox'
import BottomBox from '../../components/EventDescriptionComponents/BottomBox/BottomBox'
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar'
import NavbarBottom from '../../components/Navbar Bottom/NavbarBottom'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'


const EventDescription = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/event/detail-event/${id}`
            );
            setData(response?.data?.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <>
      <Navbar />
        <HStack paddingTop='3%' paddingLeft='5%'>
        <Text color='blue'>Home  ● Detail Event ● {data?.name}</Text>
        {/* {data?.category?.length > 0 && data?.category.map((item) => (
                        <Text>{item.name}</Text>
                    ))}   */}
                     
        </HStack>
        <TopBox data={data} />
        <BottomBox data={data}/>
        <NavbarBottom />
      <Footer />
        </>
    )
}

export default EventDescription