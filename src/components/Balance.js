import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

export const Balance = function(){
	const {transaction}= useContext(GlobalContext)
	const amount = transaction.map(function(trans){
		return trans.amount;
	})
	const total = amount.reduce(function(acc,item){
		return acc+item;
	},0)

	return(
		<React.Fragment>
			<h4>Your Balance</h4>
			<h1 id='balance'>${total}</h1>
		</React.Fragment>
		)
}