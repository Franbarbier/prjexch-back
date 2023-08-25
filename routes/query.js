import express from 'express'

import { getQuery } from '../controllers/query.js'


const router = express.Router()

router.get('/', getQuery)


export default router