import styled from "styled-components";

export const Wrapper = styled.div `
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 100px;
   background-color: var(--darkGrey); 
`;

export const Content = styled.div `
   display: flex;
   align-items: center;
   justify-content: center;
   max-width: var(--maxWidth);
   width: 100%;
   padding: 0 20px;
   margin: 0 auto;

   .column {
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: var(--medGrey);
      border-radius: 20px;
      margin: 0 20px;
      flex: 1;

      /* :first-child {
         margin-left: 0;
      }
      :last-child {
         margin-right: 0;
      } */
   }

   @media (max-width: 768px) {
     display: block;
     
     .column {
        margin: 20px 0;
     }
   }
`;