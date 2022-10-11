import React from 'react';
const expenseDate = new Date(2022,10,10);
const expenseName = "Car Insurance";
const expenseAmount = $297.47;

function ExpenseItem() {
	return (
		<div className="expense-item">
			<div>{expenseDate}</div>
			<div className="expense-item__description">
				<h2>${expenseName}</h2>
				<div className="expense-item__price">{expenseAmount}</div>
			</div>
		</div>
	);
}
export default ExpenseItem;
