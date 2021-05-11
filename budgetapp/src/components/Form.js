import React , {useContext} from 'react'
import styled from 'styled-components';
import {GlobalContext} from '../contexts/GlobalContext';
const FormDesign = styled.form`
width:100%;
min-height:100px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
flex-wrap:wrap;

gap:20px;
`
const InputDesign = styled.input`
padding:20px 30px;
background-color:#DCEAF9;
color:black;
flex-wrap:wrap;

border:none;

`

const RowForm = styled.div`
width:100%;
min-height:50px;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
flex-wrap:wrap;
`
const Button  =styled.button`
padding:6px 15px;
background-color:#F95656;
margin:30px 0;
font-size:30px;
color:white;
border:none;
`


const Form = ({onSubmitForm}) => {
const {Income_overall, Income__desc , Income__price} = useContext(GlobalContext);
const [desc, setDesc] = Income__desc;

const [price,setPrice] = Income__price;



console.log(Income__price);
    return (
        <FormDesign onSubmit={onSubmitForm}>
        <RowForm>

<InputDesign type="text" onChange={(e) => setDesc(e.target.value)}  placeholder="Name of Income"></InputDesign>
<InputDesign type="number" onChange={(e) => setPrice(e.target.value)}  placeholder="Income Price"></InputDesign>
</RowForm>

<RowForm>
    <Button>+</Button>
</RowForm>

        </FormDesign>
    )
}

export default Form
