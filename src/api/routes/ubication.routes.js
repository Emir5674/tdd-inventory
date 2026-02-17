const express = require('express');
const router = express.Router();
const UbicationAPI = require('../ubication.api');

const ubicationAPI = new UbicationAPI();

/**
 * POST /api/ubications
 * Create a new ubication
 */
router.post('/', (req, res) => {
    const { code, name } = req.body;
    const response = ubicationAPI.createUbication(code, name);
    
    res.status(response.status).json(response.data || { error: response.error });
});

/**
 * GET /api/ubications
 * Get all ubications
 */
router.get('/', (req, res) => {
    const response = ubicationAPI.getAllUbications();
    res.status(response.status).json(response.data);
});

/**
 * GET /api/ubications/:code
 * Get ubication by code
 */
router.get('/:code', (req, res) => {
    const { code } = req.params;
    const response = ubicationAPI.getUbicationByCode(code);
    
    res.status(response.status).json(response.data || { error: response.error });
});

module.exports = router;
