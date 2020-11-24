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


function CreateForm() {
  const [productParams, setProductParams] = useState({
    id: '',
    productName: '',
    description: '',
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

    setProductParams({ [name]: value });  //Сохраняем в state введенное в input значение
    console.log(name, ':', value)
  }

  const handleSubmit = event => {

  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input type="text" name="id" placeholder="ID" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" name="productName" placeholder="Название" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Textarea name="description" placeholder="Описание" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" className="param" name="paramOneName" placeholder="Параметр" onChange={handleChange} />
        <Input type="text" className="value" name="paramOneValue" placeholder="Значение" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" className="param" name="paramTwoName" placeholder="Параметр" onChange={handleChange} />
        <Input type="text" className="value" name="paramTwoValue" placeholder="Значение" onChange={handleChange} />
      </InputWrapper>
      <InputWrapper>
        <Input type="text" className="param" name="paramThreeName" placeholder="Параметр" onChange={handleChange} />
        <Input type="text" className="value" name="paramThreeValue" placeholder="Значение" onChange={handleChange} />
      </InputWrapper>
      <ButtonWrapper>
        <Button type="submit">Создать</Button>
      </ButtonWrapper>

    </Form>
  );
}

export default CreateForm;
