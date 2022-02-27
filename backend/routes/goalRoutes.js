const express=require('express');
const router=express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal}=require('../controllers/goalControllers')

//routes for /api/goals
router.get('/',getGoals)
router.post('/',setGoal)
/* Instead of above 2
router.route('/').get(getGoals).post(setGoal)*/

router.put('/:id',updateGoal);
router.delete('/:id',deleteGoal)
/* Instead of above 2
router.route('/:id').delete(deleteGoal).put(updateGoal)*/

module.exports=router