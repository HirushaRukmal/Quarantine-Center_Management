const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const employeeRoutes = require('./routes/Employee'); //--Added by Isuru Pathum Herath--
const employeeSalaryRoute = require('./routes/Employee-Salary'); //--Added by Isuru Pathum Herath--
import financePayerRoutes from './routes/financePayer.js'; //--Added by Janith Gamage--
import financePaymentRoutes from './routes/financePayment.js'; //--Added by Janith gamage--

// App
const app = express();

// Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Route Middleware
app.use('/employee', employeeRoutes); //--Added by Isuru Pathum Herath--
app.use('/salary', employeeSalaryRoute); //--Added by Isuru Pathum Herath--
app.use('/payer', financePayerRoutes); //--Added by Janith Gamage--
app.use('/payment', financePaymentRoutes); //--Added by Janith Gamage--

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

//Isuru Pathum Herath
//test change
