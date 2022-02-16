import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from './Context';

const AddTransaction = () => {
  const {  closeModal, userInput, handleInput, handleSubmit  } = useGlobalContext();

  const { amount, description, type } = userInput;

  
  

  return (
    <AddWrapper>
      <form onSubmit={handleSubmit}>
        <div className='cross-modal'>
          <span className='cross-btn'><box-icon name='window-close' size='md' onClick={closeModal} ></box-icon></span>
        </div>
        <div className="add-div">
          <div className="inputs-field">
            <input type="number" name="amount" id="amnt" placeholder='Transaction Amount' value={amount} onChange={handleInput} />
            <input type="text" name="description" placeholder='Transaction Details' value={description} onChange={handleInput} />
          </div>

        </div>
        <div className="option">
          <div className="inner-option">
            <input type="radio" name="type" id="income" value="INCOME" checked={type === "INCOME"} onChange={handleInput}/>
            <label htmlFor="income">Income</label>
          </div>
          <div className="inner-option">
            <input type="radio" name="type" id="expenditure" value= "EXPENSE" checked={type === "EXPENSE"} onChange={handleInput} />
            <label htmlFor="expenditure">Expenditure</label>
          </div>
        </div>
        <button className='add-btn' onClick={handleSubmit}>ADD</button>
      </form>
    </AddWrapper>
  )
}

export default AddTransaction

const AddWrapper = styled.div`
    background-color: #F2F3F4;
    width: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    margin-top: 0.8rem;
    border-radius: 1rem;

    >form{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`