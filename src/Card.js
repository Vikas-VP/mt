import React from 'react';
import styled from 'styled-components'

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
height:100px;
`;

export const Card = (data) => {

    return (
        <StyledWrapper >
            <FlexColumn>
                <FlexBox style={{ justifyContent: 'space-between' }}>
                    <h4 style={{ color: 'black' }}>{data.id}</h4>
                    <h3>{data.fname}{data.lname}</h3>
                </FlexBox>
                <FlexBox>
                    <button>{'Add Address'}</button>
                    {/* {data?.addresses.map((adrs) => {
                        return (
                            <>
                                <h5>`${adrs.street} ${adrs.country} ${adrs.zip}`</h5>
                                <button >{'Delete Address'}</button>
                            </>
                        )
                    })} */}
                </FlexBox>
            </FlexColumn>
        </StyledWrapper>
    )
}