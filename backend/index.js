const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv');
var cors = require('cors');
const authRoutes = require('./routes/auth')
const issueRoutes = require('./routes/issue')


env.config();
app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }))
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex:true
    }
).then(() => {
    console.log(`Database Connected`);
});

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/issue', issueRoutes);

const PORT = process.env.PORT_NUMBER || 5000;

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
})


