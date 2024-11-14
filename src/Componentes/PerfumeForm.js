import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { savePerfumes, getPerfumes } from "../localStorage";
import PerfumeList from "./PerfumeList";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    &:focus {
      outline: none;
      border-color: #8a2be2;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #8a2be2;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #5d3c8e;
  }
`;

const PerfumeForm = ({ onSubmitSuccess, editingPerfume, setEditingPerfume }) => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    const storedPerfumes = getPerfumes();
    setPerfumes(storedPerfumes);
  }, []);

  const validationSchema = Yup.object({
    nome: Yup.string().required("Nome é obrigatório"),
    marca: Yup.string().required("Marca é obrigatória"),
    preco: Yup.number().required("Preço é obrigatório"),
    quantidade: Yup.number().required("Quantidade é obrigatória"),
    dataFabricacao: Yup.date().required("Data de Fabricação é obrigatória"),
    dataValidade: Yup.date().required("Data de Validade é obrigatória"),
    imagem: Yup.string()
      .url("URL da imagem inválida")
      .required("URL da imagem é obrigatória"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (editingPerfume) {
      const updatedPerfumes = perfumes.map((perfume) =>
        perfume.id === editingPerfume.id
          ? { ...values, id: editingPerfume.id }
          : perfume
      );
      setPerfumes(updatedPerfumes);
      savePerfumes(updatedPerfumes);
      setEditingPerfume(null);
    } else {
      const newPerfume = { ...values, id: Date.now() };
      const updatedPerfumes = [...perfumes, newPerfume];
      setPerfumes(updatedPerfumes);
      savePerfumes(updatedPerfumes);
    }
    resetForm();
    onSubmitSuccess();
  };


  const handleDelete = (id) => {
    const updatedPerfumes = perfumes.filter((perfume) => perfume.id !== id);
    setPerfumes(updatedPerfumes);
    savePerfumes(updatedPerfumes);
    onSubmitSuccess();
  };

  return (
    <>
      <TitleContainer>
        <h1>Cadastro de Perfumes</h1>
      </TitleContainer>
      <Container>
        <Formik
          initialValues={
            editingPerfume || {
              nome: "",
              marca: "",
              preco: "",
              quantidade: "",
              dataFabricacao: "",
              dataValidade: "",
              imagem: "",
            }
          }
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <StyledForm>
              <FieldContainer>
                <label>Nome</label>
                <Field name="nome" type="text" />
                <ErrorMessage name="nome" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <label>Marca</label>
                <Field name="marca" type="text" />
                <ErrorMessage name="marca" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <label>Preço</label>
                <Field name="preco" type="text" />
                <ErrorMessage name="preco" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <label>Quantidade</label>
                <Field name="quantidade" type="number" />
                <ErrorMessage name="quantidade" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <label>Data de Fabricação</label>
                <Field name="dataFabricacao">
                  {({ field }) => (
                    <InputMask mask="99/99/9999" {...field}>
                      {(inputProps) => <input {...inputProps} type="text" />}
                    </InputMask>
                  )}
                </Field>
                <ErrorMessage name="dataFabricacao" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <label>Data de Validade</label>
                <Field name="dataValidade">
                  {({ field }) => (
                    <InputMask mask="99/99/9999" {...field}>
                      {(inputProps) => <input {...inputProps} type="text" />}
                    </InputMask>
                  )}
                </Field>
                <ErrorMessage name="dataValidade" component={Error} />
              </FieldContainer>
              <FieldContainer>
                <label>URL da Imagem</label>
                <Field name="imagem" type="text" />
                <ErrorMessage name="imagem" component={Error} />
              </FieldContainer>
              <Button type="submit">Salvar</Button>
            </StyledForm>
          )}
        </Formik>
        <PerfumeList
          perfumes={perfumes}
           onEdit={setEditingPerfume}
          onDelete={handleDelete}
        />
      </Container>
    </>
  );
};
export default PerfumeForm;
