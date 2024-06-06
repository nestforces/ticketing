import React from 'react'
import axios from 'axios';
import { Box, 
    Button, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Input, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    NumberDecrementStepper, 
    NumberIncrementStepper, 
    NumberInput, 
    useDisclosure,
    NumberInputField, 
    NumberInputStepper, 
    Select} from '@chakra-ui/react';
import * as Yup from "yup";
import { useFormik } from "formik";

const TicketScheme = Yup.object().shape({
    ticket_name: Yup.string().required("Nama tiket wajib diisi dengan maksimal berisi 50 karakter"),
    ticket_category: Yup.string().required("Kategori tiket wajib dipilih"),
    number_of_ticket: Yup.number().integer().required("Jumlah tiket wajib dipilih"),
    ticket_price: Yup.number().integer(),
    ticket_description: Yup.string().required("Deskripsi tiket wajib dipilih"),
    ticket_discount: Yup.number().integer().required("Isikan angka 0 jika tidak ingin memberi diskon"),
    ticket_end_date: Yup.string().required("Tanggal tiket wajib diisi"),
  });

function UpdateTicket({match}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const formTicket = async (
    ticket_name, 
    ticket_category,
    number_of_ticket,
    ticket_price,
    ticket_description,
    ticket_discount,
    ticket_end_date
  ) => {
    try{ await axios.post(`http://localhost:3000/ticket/${match.params.id}`, {
    ticket_name, 
    ticket_category,
    number_of_ticket,
    ticket_price,
    ticket_description,
    ticket_discount,
    ticket_end_date
    });
    alert("Berhasil memperbarui tiket")
    } catch (err){
      console.log(err)
    }
  };
  
  const formik = useFormik({
    initialValues:{
    ticket_name: "", 
    ticket_category: "",
    number_of_ticket: 0,
    ticket_price: 0,
    ticket_description: "",
    ticket_discount: 0,
    ticket_end_date: "",
    },

    validationSchema: TicketScheme,
    onSubmit: (values) => {
      formTicket(
      values.ticket_name, 
      values.ticket_category,
      values.number_of_ticket,
      values.ticket_price,
      values.ticket_description,
      values.ticket_discount,
      values.ticket_end_date
      )
    }
  });

  return (
    <>
        <Button onClick={onOpen}>Edit Ticket</Button>
        <Modal
              isOpen={isOpen}
              onClose={onClose}
            >
             
              <ModalOverlay />
              <form onSubmit={formik.handleSubmit}>
              <ModalContent>
                <ModalHeader>Detail Tiket</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  
                  <FormControl 
                  isInvalid={
                    formik.touched.ticket_name && formik.errors.ticket_name
                  }>
                    <FormLabel>Nama Tiket</FormLabel>
                    <Input name="ticket_name"
                    placeholder='Maksimal 50 karakter'
                    value={formik.values.ticket_name}
                    onChange={formik.handleChange} />
                    {formik.touched.ticket_name && formik.errors.ticket_name && (
                      <FormErrorMessage>
                        {formik.errors.ticket_name}
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl 
                  isInvalid={
                    formik.touched.ticket_category && formik.errors.ticket_category}
                    > 
                        <FormLabel>Kategori Tiket</FormLabel>
                        <Select placeholder='Pilih kategori tiket'
                        name="ticket_category"
                        value={formik.values.ticket_category}
                        onChange={formik.handleChange}>
                          <option value={'Premium'}>Premium</option>
                          <option value={'VVIP'}>VVIP</option>
                          <option value={'Premium'}>VIP</option>
                          <option value={'Regular'}>Regular</option>
                        </Select>
                        {formik.touched.ticket_category && formik.errors.ticket_category && (
                        <FormErrorMessage>
                        {formik.errors.ticket_category}
                        </FormErrorMessage>
                        )}
                      </FormControl>

                  <FormControl mt={4}
                    isInvalid={
                    formik.touched.number_of_ticket && formik.errors.number_of_ticket}>
                    <FormLabel>Jumlah Tiket</FormLabel>
                    <NumberInput 
                    name="number_of_ticket"
                    value={formik.values.number_of_ticket}
                    onChange={formik.handleChange}>
                      <NumberInputField/>
                      <NumberInputStepper>
                        <NumberIncrementStepper/>
                        <NumberDecrementStepper/>
                      </NumberInputStepper>
                    </NumberInput>
                    {formik.touched.number_of_ticket && formik.errors.number_of_ticket && (
                        <FormErrorMessage>
                        {formik.errors.number_of_ticket}
                        </FormErrorMessage>
                        )}
                  </FormControl>

                  <FormControl 
                  isInvalid={
                  formik.touched.ticket_price && formik.errors.ticket_price}
                    >
                  <FormLabel>Harga</FormLabel>
                  <NumberInput name="ticket_price"
                    value={formik.values.ticket_price}
                    onChange={formik.handleChange}>
                      <NumberInputField value={'0'} placeholder='0' disabled='true'/>
                    </NumberInput>
                    {formik.touched.ticket_price && formik.errors.ticket_price && (
                      <FormErrorMessage>
                        {formik.errors.ticket_price}
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl
                  isInvalid={
                  formik.touched.ticket_description && formik.errors.ticket_description}
                  >
                    <FormLabel>Deskripsi Tiket</FormLabel>
                    <Input name="ticket_description"
                    value={formik.values.ticket_description}
                    onChange={formik.handleChange}/>
                    {formik.touched.ticket_description && formik.errors.ticket_description && (
                      <FormErrorMessage>
                        {formik.errors.ticket_description}
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl 
                      isInvalid={
                      formik.touched.ticket_discount && formik.errors.ticket_discount}>
                        <FormLabel>Diskon</FormLabel>
                        <NumberInput name="ticket_discount"
                        value={formik.values.ticket_discount}
                        onChange={formik.handleChange}
                        >
                          <NumberInputField value={'0'} placeholder='0' disabled='true'/>
                        </NumberInput>
                        {formik.touched.ticket_discount && formik.errors.ticket_discount && (
                          <FormErrorMessage>
                            {formik.errors.ticket_discount}
                          </FormErrorMessage>
                        )}                      
                      </FormControl>

                  <FormControl 
                  isInvalid={
                  formik.touched.ticket_end_date && formik.errors.ticket_end_date}>
                    <FormLabel>Tanggal Akhir Penjualan</FormLabel>
                    <Input type='date'
                    name="ticket_end_date"
                    value={formik.values.ticket_end_date}
                    onChange={formik.handleChange}/>
                    {formik.touched.ticket_end_date && formik.errors.ticket_end_date && (
                      <FormErrorMessage>
                        {formik.errors.ticket_end_date}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} type='submit'>
                    Simpan Perubahan
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
              </form>
            </Modal>
            
    </>
  )
}

export default UpdateTicket