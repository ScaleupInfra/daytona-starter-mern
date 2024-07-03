const express = require('express');
const router = express.Router();
const CustomerService = require('../service/customerService');
const customerService = new CustomerService();

router.get('/get-all', async (req, res) => {
    try {
        const allCustomers = await customerService.getAllCustomers();
        if(!allCustomers || allCustomers.length === 0){
            return res.status(404).json({ message: "Customers not found!" });
        }
        res.status(200).json({ customers: allCustomers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal servser error!" });
    }
});

router.get('/get-one/:id', async (req, res) => {
    try {
        const customer = await customerService.getAllCustomer(req.params.id);
        if(!customer){
            return res.status(404).json({ message: "Customer not found!" });
        }
        res.status(200).json({ customer: customer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error!" });
    }
});

router.post('/add-one', async (req, res) => {
    try {
        const result = await customerService.addCustomer(req.body);
        if(result){
            return res.status(200).json({ message: "Customer added successfully!" });
        }
        res.status(400).json({ message: "Customer already exists!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error!" });
    }
});

router.patch('/update-one/:id', async (req, res) => {
    try {
        const existingCustomer = await customerService.updateCustomer(req.params.id, req.body);
        if(!existingCustomer){
            return res.status(404).json({ message: "Customer not found!" });
        }
        res.status(200).json({ message: "Customer updated successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error!" });
    }
});

router.delete('/delete-one/:id', async(req, res) => {
    try {
        const existingCustomer = await customerService.deleteCustomer(req.params.id);
        if(!existingCustomer){
            return res.status(404).json({ message: "Customer not found!" });
        }
        res.status(200).json({ message: "Customer deleted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error!" });
    }
});

module.exports = router;