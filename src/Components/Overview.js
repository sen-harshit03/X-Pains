import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './Context';

const Overview = () => {
    const { income, expense} = useGlobalContext();
    
    return ( 
        <OverviewContainer>
            <div className='top'>
                <OverviewBox>
                    <span>Total Balance</span>
                    <h3>$ {income-expense}</h3>
                </OverviewBox>
            </div>
            <div className='bottom'>
                <OverviewBox>
                    <div className='innerbox'>
                        <span className='innerbox-span'><box-icon name='up-arrow-alt' border='circle' size='lg' color='green' className='innerbox-icon'></box-icon></span>
                        <div className="innerrightbox">
                            <span>Total Income</span>
                            <h3>$ {income}</h3>
                        </div>
                    </div>
                </OverviewBox>

                <OverviewBox>
                    <div className='innerbox'>
                        <span><box-icon name='down-arrow-alt' border='circle' size='lg' color='red'></box-icon></span>
                        <div className="innerrightbox">
                            <span>Total Expediture</span>
                            <h3>$ {expense}</h3>
                        </div>
                    </div>
                </OverviewBox>
                
            </div>

        </OverviewContainer>

    )
}

export default Overview

const OverviewContainer = styled.div`
    color: white;
    background-image: linear-gradient(to right top, #4313c7, #6b1ec9, #882cca, #a03bcc, #b64bcf, #ca4ac1, #d94db3, #e453a6, #e65286, #e0586b, #d46154, #c36a44);
    min-height: 12rem;
    /* width: 100%; */
    width: 700px;
    border-radius: 2rem;
    background-color: transparent;
    

`

const OverviewBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
`

