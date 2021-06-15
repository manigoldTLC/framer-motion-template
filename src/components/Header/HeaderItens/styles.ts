import styled from 'styled-components';

export const LeftItens = styled.div`
    display: flex;
    padding: 0 1rem;
    gap: 0.5rem;
    align-items: center;
    
    .logo-container {
        width: 50px;

        img {
            width: 100%;
        }
    }

`;

export const RightItens = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem;

    ul {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }
`;

export const Span = styled.span`
    color: #f5f5f7;
    font-size: 15px;
    font-weight: 400;
    padding: 0px 10px;
    line-height: 44px;

    padding: 8px 15px;
    border-radius: 50px;

    :hover {
        background-color: #2E4461;
        cursor: pointer;
    }
`;