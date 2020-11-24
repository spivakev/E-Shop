import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
margin: 0 auto;
  width: 800px;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  & input {
    margin-right: 20px;
  }

  & input:last-child {
    margin-right: 0px;
  }
`

const Input = styled.input`
  box-sizing: border-box;

  padding: 10px 15px;
  width: 100%;
  min-height: 40px;

  &:focus {
    outline: none;
  }

  &.param {
    flex: 0 1 40%;
  }

  &.value {
    flex-grow: 1 1 auto;
  }
`

const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: 10px 15px;
  width: 100%;
  min-height: 80px;

  &:focus {
    outline: none;
  }
`

const ButtonWrapper = styled.div`

`

const Button = styled.button`
  box-sizing: border-box;
  padding: 10px 15px;
  width: 100%;

  &:focus {
    outline: none;
  }
`


function SearchForm() {
  const [searchParams, setSearchParams] = useState({
    productName: '',
    paramOneName: '',
    paramOneValue: '',
    paramTwoName: '',
    paramTwoValue: '',
    paramThreeName: '',
    paramThreeValue: '',
  });

  const handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    setSearchParams({ [name]: value }); //Сохраняем в state введенное в input значение
    console.log(name, ':', value)
  }

  const handleSubmit = event => {

  }

  const [] = useState()
  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input type="text" name="productName" placeholder="Название" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" className="param" name="paramOneName" onChange={handleChange} placeholder="Параметр" />
        <Input type="text" className="value" name="paramOneValue" onChange={handleChange} placeholder="Значение" />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" className="param" name="paramTwoName" onChange={handleChange} placeholder="Параметр" />
        <Input type="text" className="value" name="paramTwoValue" onChange={handleChange} placeholder="Значение" />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" className="param" name="paramThreeName" onChange={handleChange} placeholder="Параметр" />
        <Input type="text" className="value" name="paramThreeValue" onChange={handleChange} placeholder="Значение" />
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit">Найти</Button>
      </ButtonWrapper>

    </Form>
  );
}

export default SearchForm;
