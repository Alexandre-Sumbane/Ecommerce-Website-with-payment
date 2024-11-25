import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Stripe from 'stripe';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Home Route
app.get('/', (req, res) => {
    res.render('index');
});


//Stripe
//let stripeGateway = Stripe(process.env.stripe_api_key)



export default app;


