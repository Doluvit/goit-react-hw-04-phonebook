import styled from "styled-components";


export const ContactsContainer = styled.div`
`

export const ContactsList = styled.ul`
  padding: 0;
  list-style: inside;
 `;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  
  `

export const ContactsText = styled.span`
margin-right: 10px;
font-size: large;
font-weight: 500;
color: var(--textColor);
`

export const ContactsBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: var(--textColor);

  background-color: var(--itemBackgroundColor);
  border-radius: 5px;
  border: 2px solid transparent;
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    color: var(--accentTextColor);
    background-color: var(--mainBackgroundColor);
  }
  `;