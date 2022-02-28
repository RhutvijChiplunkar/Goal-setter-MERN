const express=require('express');
const router=express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal}=require('../controllers/goalController')
const {protect}=require('../middleware/authMiddleware')

/*routes for /api/goals
router.get('/',getGoals)
router.post('/',setGoal)*/

/* Instead of above 2*/
router.route('/').get(protect,getGoals).post(protect,setGoal)

/*router.put('/:id',updateGoal);
router.delete('/:id',deleteGoal)*/

/* Instead of above 2*/
router.route('/:id').delete(protect,deleteGoal).put(protect,updateGoal)

module.exports=router