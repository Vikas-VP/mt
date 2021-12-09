import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Card } from './Card'
import React, { useState, useEffect } from 'react';

const initialData = [
  {
    id: 2,
    fname: "john",
    lname: "doe",
    addresses: [
      {
        id: 1,
        street: 'abc',
        country: 'india',
        zip: '123'
      },

      {
        id: 2,
        street: 'xyz',
        country: 'US',
        zip: '10001'
      }
    ]
  },
]
const FlexBox = styled.div`
display:flex`;

const FlexColumn = styled(FlexBox)`
flex-direction:column`;

const StyledWrapper = styled.div`
border:1px solid black;
border-radius:10px;
padding:10px;
margin:10px
width:150px;

`;

function App() {

  const ad = initialData.map(item => item.addresses)


  const [address, setAddress] = useState([{ ...initialData }])
  const [addAdress, setAddAddress] = useState(false);
  const [value, setValue] = useState('');
  const [zip, setzip] = useState('');
  console.log('add', ad)

  // useEffect(() => setAddress(initialData.map(item => item.addresses)), [])

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleZip = (e) => {
    setzip(e.target.value)
  }
  const handleDelete = (id) => {
    const elementIndex = address.filter(ele => ele.id !== id)
    setAddress(elementIndex);
  }
  const handleAdd = () => {
    setAddress([...address, { country: value, zip: zip }])
  }

  return (
    <>{initialData.map(item => {
      return (<StyledWrapper >
        <FlexColumn>
          <FlexBox style={{ justifyContent: 'space-between' }}>
            <h4 style={{ color: 'black' }}>{item.id}</h4>
            <h3>{item.fname}{item.lname}</h3>
          </FlexBox>
          <FlexBox>
            <div>
              <button onClick={handleAdd}>{'Add Address'}</button>
              {addAdress && <><input value={vaue} onChange={handleChange} />
                <input value={zip} onChange={handleZip} /></>}
            </div>

            {address.map((adrs) => {
              return (
                <FlexColumn>
                  <h2>{"Address" + `${adrs.id}`}</h2>
                  <h5>Street-{adrs.street}  Country-{adrs.country} Zip-{adrs.zip}</h5>
                  <div> <button onClick={handleDelete(adrs.id)} >{'Delete Address'}</button></div>
                </FlexColumn>

              )
            })}

          </FlexBox>
        </FlexColumn>
      </StyledWrapper>)
    })}</>






  );
}

export default App;
