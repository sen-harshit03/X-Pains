import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from './Context';

const Records = () => {
    const { records } = useGlobalContext();

    return (
        <RecordWrapper>
        <h2>Transaction records</h2>
        <article className="btn-class">
            {/* <button onClick={filterIncome}>INCOME</button>
            <button onClick={filterExpense}>EXPENSE</button> */}
        </article>
            {records.map((record) => {
                const { amount, description, type, id} = record;
                return(
               <div className="item" key={id}>
                   <h3 className='item-name'>{description}</h3>
                   {type === "EXPENSE" && 
                    <h4 className='red'>- ${amount}</h4>
                   }

                   {type === "INCOME" && 
                    <h4 className='green'>+ ${amount}</h4>
                   }
                   
               </div>
                )
            })}
        </RecordWrapper>
    )




}

export default Records

const RecordWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: auto;
    >input{
        width: 400px;
        height: 1.5rem;
        border-radius: 0.8rem;
    }
    >div{
        background-color: white;
        margin-top: 1rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-radius: 2rem;
    }

    >div h3{
        margin-left: 1rem ;
    }

    >div h4{
        margin-right: 1rem;
    }
    
`
