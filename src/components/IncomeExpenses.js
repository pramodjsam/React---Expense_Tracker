import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = function(){
	const {transaction} = useContext(GlobalContext)
	const amount= transaction.map(function(item){
		return item.amount;
	})
	const income= amount.filter(function(item){
		return item>0
	}).reduce(function(acc,item){
		return acc+item
	},0).toFixed(2)

	const expense = amount.filter(function(item){
		return item<0;
	}).reduce(function(acc,item){
		return acc+item;
	},0).toFixed(2)

	return(
		<div className='inc-exp-container'>
			<div>
				<h4>Income</h4>
				<p id='money-plus' className='money plus'>{income}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p id='money-minus' className='money minus'>{Math.abs(expense)}</p>
			</div>
		</div>
	)
}