import styled from 'styled-components'

export const Container = styled.div `
  display: flex ;
  flex-direction: column ;

  align-items: center ;
  min-height: 80vh ;
  width: 100vw ;
  margin: 0 auto;

  .title {
    display: flex ;
    align-items: center;
    gap: 1rem;
    justify-content: center;
  }

  .c-user {
    display: flex;
    width: 100% ;
    padding: 1rem 0;

      input {
        width: 100% ;
        font-size: 1rem;
        border: 0;
        border-radius: 0;
        background: transparent;
        padding: 1rem 0 1rem .5rem  ;
        border-bottom: 1px solid black;
        font-weight: bold ;

        &:focus {
          outline: 0 ;
          border-bottom: 1px solid #808000
        }
      }
    .user-btn {
      display: flex;
      align-items: flex-end;


      button {
        font-size: 1rem;
        margin-left: 1rem;
        padding: 1rem 1rem ;
        border: 0;
        border-radius: .25rem;
        transition: linear .2s ;
        text-transform: uppercase ;
        font-weight: bold ;
        color: #000;


        &:hover {
          box-shadow: 0px 1px 2px 2px #808000 ;
        }
      }
    }
  }

  .c-filters {
    min-width: 50%;
    margin: 1rem 0 ;
    padding: 0 1rem ;
    background-color: #fafafa ;
    border-radius: 1rem;

    @media(max-width: 800px) {
      width: 80% ;
    }
  }

  .c-search {

    display: flex;
    flex-direction: row ;
    align-items: center;
    justify-content: space-between;
    
    .search-bar {
      width: 100% ;
      padding: 1rem 0;

      input {
        width: 100% ;
        font-size: 1rem;
        border: 0;
        border-radius: 0;
        background: transparent;
        padding: 1rem 0 1rem .5rem  ;
        border-bottom: 1px solid black;
        font-weight: bold ;

        &:focus {
          outline: 0 ;
          border-bottom: 1px solid #808000
        }
      }
    }
  
    .search-btn {
      display: flex;
      align-items: flex-end;


      button {
        font-size: 1rem;
        margin-left: 1rem;
        padding: 1rem 1rem ;
        border: 0;
        border-radius: .25rem;
        transition: linear .2s ;
        text-transform: uppercase ;
        font-weight: bold ;
        color: #000;


        &:hover {
          box-shadow: 0px 1px 2px 2px #808000 ;
        }
      }
    }

  }
  .c-radio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;

    .radios{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      label {
        margin-left: .5rem
      }
    }

    .radio-button {
      display: flex;
      align-items: flex-end;

      button {
        font-size: 1rem;
        color: #000;
        padding: 1rem 1rem ;
        border: 0;
        border-radius: .25rem;
        transition: linear .2s ;
        text-transform: uppercase ;
        font-weight: bold ;
        

        &:hover {
          box-shadow: 0px 1px 2px 2px #808000 ;
        }
      }
    }
  }

  .container-repo {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    

    @media(max-width: 800px) {
      width: 80% ;
    }

    .repo {
      width: 100%;
      margin: 0 0 1rem 0;
      padding: 1rem 1rem ;
      background-color: #fafafa ;
      border-radius: 1rem;
      transition: linear .2s ;


      &:hover {
        border: 1px solid #808000
      }

      a {
        color: #000;
        text-decoration: none;

        h2 {
          text-align: center;
        }

        p {
          line-height: 1.5rem;

        }
      }  
    }
  }
`