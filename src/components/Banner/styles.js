import styled from "styled-components";

export const Container = styled.div`
padding: 200px 150px;
position: relative;
background-size: cover;
background-position: center;
background-image: url('https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

`

export const Text = styled.div`
width: 55%;
position: relative;
z-index: 1;
h2{
    color: #fff;
    font-size: 52px;
    font-weight: 700;
    margin-bottom: 15px;
}
p{
    color: var(--white);
    margin-bottom: 25px;
}
span{
    background-color: var(--blue);
    border:  2px solid var(--blue);
    border-radius: 10px;
    color: var(--white);
    font-size: 14px;
    font-weight: 700;
    padding: 12px 12px;
    line-height: 24px;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: none;
        color: var(--blue);
    }
}
`