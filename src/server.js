const express = require('express');
const ubicationRoutes = require('./api/routes/ubication.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ubications', ubicationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'TDD Inventory API',
        version: '1.0.0',
        endpoints: {
            health: 'GET /health',
            ubications: {
                create: 'POST /api/ubications',
                getAll: 'GET /api/ubications',
                getByCode: 'GET /api/ubications/:code'
            }
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server only if not in test environment
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
        console.log(`📋 API Documentation: http://localhost:${PORT}`);
    });
}

module.exports = app;
