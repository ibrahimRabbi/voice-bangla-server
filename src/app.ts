import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import envData from './app/config/config';
import { signupRoute } from './app/modules/signup/signup.route';
import { globalErrorHandle } from './app/middleWare/globalError';
import { signInRoute } from './app/modules/authentication/signin.route';
import { threadRoute } from './app/modules/thread/thread.route';


const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))


//routes
app.use('/api', signupRoute)
app.use('/api/auth', signInRoute)
app.use('/api/thread', threadRoute)


//error
app.use(globalErrorHandle)




async function main() {
    await mongoose.connect(envData.databaseUrl as string);

    app.listen(envData.port, () => {
        console.log(`server is running on ${envData.port}`)
    })

}

main()