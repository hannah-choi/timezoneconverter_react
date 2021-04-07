import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    color: ${({ theme }) => theme.text};
    display: flex;
    height: 100vh;
    transition: background-color .3s;
    position:relative;
    justify-content:center;
  }

  .secondary{
    color: ${({ theme }) => theme.secondary};
  }

  div.timezoneList,
  div.hoursList{
     background: ${({ theme }) => theme.secondary};
      margin: 5px 0;
  }

  div.wrapper {
    background: ${({ theme }) => theme.primary};
    border-radius: 20px;
    }

  .toggleDiv{
    /*position:absolute;
    right:0;*/
    margin-top: 10px;
    display:flex;
    align-items:center;
    margin-bottom:50px;
}  

.icon{
    fill: ${({ theme }) => theme.text};
}

  .switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  
  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: point1er;
    width: 45px;
    height: 25px;
    background: ${({ theme }) => theme.point1};
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
    margin-right:8px;
  }

  .switch-label .switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 35px;
    transition: 0.2s;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  
  .switch-checkbox:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  
  .switch-label:active .switch-button {
    width: 60px;
  }

  .searchIcon{
    position:absolute;
    top:20px;
    left:15px;
    fill:${({ theme }) => theme.point3};
  }

  p.sub{
    color: ${({ theme }) => theme.point1};
  }

  div.timezone div.timezone2 {
    color: ${({ theme }) => theme.point1};
  }

  div.day span {
      background-color: ${({ theme }) => theme.primary};
      border-right:1px solid ${({ theme }) => theme.secondary};
      border-radius: 2px;
   /* border-top: 1px solid ${({ theme }) => theme.point3};
    border-bottom: 1px solid ${({ theme }) => theme.point3};*/
  }


  span.focus {
    background-color: ${({ theme }) => theme.point2};
  }

  ul.suggestionList {
      padding-left:10px;
      width:390px;
  }

  ul.suggestionList li {
    background-color:${({ theme }) => theme.primary};
}

ul.suggestionList li:hover {
    background-color: ${({ theme }) => theme.point1};
}

span.highlight {
    background-color: ${({ theme }) => theme.point3};
}

.ds-selected {
    background-color: ${({ theme }) => theme.point2} !important;
}

.today {
    background-color: ${({ theme }) => theme.point1} !important;
    color:${({ theme }) => theme.primary} !important;
}

div.day .date {
    background-color: ${({ theme }) => theme.point3} !important;
  }


div.hoursList,
div.timezoneList {
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
}

div.search input[type="text"] {
    border:1px solid ${({ theme }) => theme.point3};
    border-radius: 15px;
    background-color:transparent;
}

input[type="submit"] {
    z-index:5;
    margin-left: -25px;
    border-radius: 16px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.point3};
}

a.git_link {
    color:${({ theme }) => theme.primary};
}

a.git_link:hover {
    color:${({ theme }) => theme.point1};
}

.github{
    fill: ${({ theme }) => theme.point1};
}



.remove:hover,
.makeHome:hover{
    transform: scale(1.2);
    fill: ${({ theme }) => theme.point1};
}


  `;
