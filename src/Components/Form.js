import React from 'react';
import styled from 'styled-components';

const AddMember = styled.div`
    background: white;
    position: absolute;
`

export default function Form(props) {
   const {state, handlers} = props;
  return (
    <div>
        <AddMember>
            <button onClick={() => handlers.setModalOpen(false)}>X</button>
            <form>
                <label>
                    Name:
                    <input 
                    type='text'
                    name='name'
                    />
                </label>
                <label>
                    age:
                    <input 
                    type='number'
                    name='age'

                    />
                </label>
                <label>
                    Occupation:
                    <input 
                    type='text'
                    name='occupation'
                    />
                </label>
            </form>
        </AddMember>
    </div>
  )
}
