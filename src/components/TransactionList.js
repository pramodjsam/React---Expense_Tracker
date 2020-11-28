import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction'
 
export const TransactionList = function(){
	const {transaction} = useContext(GlobalContext);


	return(
		<React.Fragment>
			<h3>History</h3>
			<ul id='list' className='list'>
				{transaction.map(function(trans){
					return (
						<Transaction key={trans.id} transaction={trans}/>
					);
				})}
			</ul>
		</React.Fragment>
	)
}