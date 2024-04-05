import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';

function Transaction() {
    const {transactionHistoryComplete} = useGlobalContext()

    const [...history] = transactionHistoryComplete()

    return (
        <HistoryStyled>
            <h2 style={{textAlign:'center'}}>Transaction History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type,description,date} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: '#375E97'
                        }}>
                            {date}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {description}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default Transaction