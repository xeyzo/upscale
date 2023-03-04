import express from 'express';
import {createTask, deleteTask, updateTask, findTask, getAllTask} from '../controllers/task.controller.js'
import { checkInput } from '../middlewares/check-input.js';

const router = express.Router();

router.post('/',checkInput ,createTask);
router.get('/', getAllTask);
router.get('/:id', findTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export { router as taskRouter };