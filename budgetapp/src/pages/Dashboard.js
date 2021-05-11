import React, { useContext, useState } from 'react'
import {GlobalContext} from '../contexts/GlobalContext';
import  styled from 'styled-components';
import Form from '../components/Form';
import Income from '../components/Income';

const StyledDashboard = styled.div`
background-color:#222831;
display:flex;
align-items:center;
color:white;
width:100%;
justify-content:center;
min-height:100vh;
flex-direction:column;
`

const Dashboard = () => {
    const {Income__overall , Income__desc , total, Income__price} = useContext(GlobalContext);
    const [incomes,setIncomes] = Income__overall;
    const [desc] = Income__desc;
    const [price] = Income__price;
    const {TotalIncomePrice} = total;
    return (
        <StyledDashboard>
        <h1>A Expense Tracker App</h1>
        <Form onSubmitForm={ (e) => {
            e.preventDefault();
            if(desc=='' && price=='' || desc=='' || price=='') {
                alert('Write anything');
            }

            else {
                setIncomes([...incomes, {description:desc, price:price}])
            }
        }}></Form>
        
        <h1>{incomes==''?'' : 'Transaction History'}</h1>
 {incomes.map(income => (
     
                <Income description={income.description} price={`+ ${income.price}$`}></Income>
            ))} 
            <h1>{incomes==""?'':`Total Incomes : ${TotalIncomePrice} $`}</h1>
        </StyledDashboard>
    )
}

export default Dashboard
