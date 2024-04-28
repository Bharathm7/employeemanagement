const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const UserModel = require('./models/user');

const app = express();
const PORT = 3002;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for development (consider restricting origins in production)
app.use(cors());

// Replace with your actual MongoDB connection URI
const mongoURI = "mongodb+srv://bharathm2020a:LqlwwFHS2YRPWjKL@cluster0.aobcnze.mongodb.net/trial?retryWrites=true&w=majority";

// Connect to MongoDB with error handling
let client;
const connectDB = async () => {
    try {
        client = await MongoClient.connect(mongoURI, { useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process on failure
    }
};

// Ensure connection before starting the server
connectDB().then(() => {
    // Define API endpoints after successful MongoDB connection

    // POST /api/employees: Add a new employee
    app.post('/api/employees', async (req, res) => {
        const { name, email, department, role } = req.body;

        try {
            const db = client.db('trial'); // Replace 'trial' with your database name
            const collection = db.collection('employees');
            const result = await collection.insertOne({ name, email, department, role });

            res.status(201).json({ message: 'Employee added successfully', id: result.insertedId });
        } catch (error) {
            console.error('Error adding employee:', error);
            res.status(500).json({ message: 'Error adding employee' });
        }
    });

    // GET /getusers: Fetch all users
    app.get('/getusers', async (req, res) => {
        try {
            const users = await UserModel.find(); // Assuming UserModel is a Mongoose model
            res.json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Error fetching users' });
        }
    });

    // DELETE /api/employees/:id: Delete an employee by ID
    app.delete('/api/employees/:id', async (req, res) => {
        const employeeId = req.params.id;

        try {
            const db = client.db('trial'); // Replace 'trial' with your database name
            const collection = db.collection('employees');
            const result = await collection.deleteOne({ _id: new ObjectId(employeeId) }); // Ensure valid ObjectID

            if (result.deletedCount === 1) {
                res.status(200).json({ message: 'Employee deleted successfully' });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
            res.status(500).json({ message: 'Error deleting employee' });
        }
    });

    // ... Add other API endpoints (e.g., for updating employees if applicable)

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});

// Handle unexpected termination (e.g., Ctrl+C) to close MongoDB connection
process.on('SIGINT', async () => {
    console.log('Closing MongoDB connection');
    await client.close();
    process.exit(0);
});
