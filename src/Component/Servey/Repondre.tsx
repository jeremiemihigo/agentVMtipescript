import { Save } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Paper,
  TextField,
} from "@mui/material";
import { message } from "antd";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IQuestion, IServey } from "../../Interface/IServey";
import Logo from "../../Static/Logo";
import { config, lien_terrain } from "../../Static/static";
import Header from "../Header";

interface IValeur {
  idQuestion: string;
  reponse: string;
}
interface ISelect {
  idQuestion: string;
  reponse: string[];
}

function Repondre() {
  const params = useParams();
  const { id } = params;
  const servey = useSelector((state: any) => state.servey.servey);
  const [serv_select, setServeSelect] = React.useState<IServey>();

  React.useEffect(() => {
    if (id && servey) {
      const one = servey.filter((x: IServey) => x._id === id);
      setServeSelect(one[0]);
    }
  }, [id, servey]);
  const [values, setValue] = React.useState<IValeur[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue((prev) => {
      const existingIndex = prev.findIndex((item) => item.idQuestion === name);
      if (existingIndex !== -1) {
        // Si l'entrée existe, on met à jour sa valeur
        const updatedValues = [...prev];
        updatedValues[existingIndex].reponse = value;
        return updatedValues;
      } else {
        // Sinon, on ajoute une nouvelle entrée
        return [...prev, { idQuestion: name, reponse: value }];
      }
    });
  };

  const [state, setState] = React.useState<ISelect[]>([]);
  const handleChangeBoxMany = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prev) => {
      const existingIndex = prev.findIndex((item) => item.idQuestion === name);
      if (existingIndex !== -1) {
        const updatedValues = [...prev];
        if (updatedValues[existingIndex].reponse.includes(value)) {
          updatedValues[existingIndex].reponse = updatedValues[
            existingIndex
          ].reponse.filter((x) => x !== value);
        } else {
          updatedValues[existingIndex].reponse.push(value);
        }
        // Si l'entrée existe, on met à jour sa valeur
        return updatedValues;
      } else {
        return [...prev, { idQuestion: name, reponse: [value] }];
      }
    });
    // Sinon, on ajoute une nouvelle entrée
  };

  const valueSelect = (question: string, value: string) => {
    let q = values.filter((x) => x.idQuestion === question);
    if (q.length > 0) {
      if (q[0].reponse === value) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte: string, type: any) => {
    messageApi.open({
      type,
      content: "" + texte,
      duration: 5,
    });
  };
  const SendData = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    function returnReponse(question: IQuestion) {
      let search = ["text", "date", "select_one"].includes(
        question.type_reponse
      )
        ? values
        : state;
      if (
        search.filter((x) => x.idQuestion === question.idQuestion).length > 0
      ) {
        return search.filter((x) => x.idQuestion === question.idQuestion)[0]
          ?.reponse;
      }
    }
    let lesquestion = serv_select?.question;
    let reponses = lesquestion?.map((question) => {
      return {
        idQuestion: question.idQuestion,
        reponse: returnReponse(question),
      };
    });
    const result = await axios.post(
      lien_terrain + "/reponse",
      {
        idServey: serv_select?.idServey,
        reponse: reponses,
      },
      config
    );
    if (result.status === 200) {
      window.location.replace("/operation");
    } else {
      successAlert(JSON.stringify(result.data), "warning");
    }

    try {
    } catch (error: any) {
      successAlert(JSON.stringify(error?.message), "warning");
    }
  };

  return (
    <>
      {contextHolder}
      <Header />
      {serv_select && (
        <div style={{ padding: "10px" }}>
          <Logo text={serv_select?.title} />
          <div>
            {serv_select.question?.map((question) => {
              return (
                <Paper
                  elevation={2}
                  sx={{ marginTop: "10px", padding: "10px" }}
                  key={question._id}
                >
                  <p>{question.question}</p>
                  {["date", "text"].includes(question.type_reponse) && (
                    <div>
                      <TextField
                        fullWidth
                        type={question.type_reponse}
                        placeholder={question.question}
                        name={question.idQuestion}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleChange(e)
                        }
                      />
                    </div>
                  )}
                  {question.type_reponse === "select_many" &&
                    question?.item?.map((item, cle) => {
                      return (
                        <div key={cle}>
                          <FormControl component="fieldset" variant="standard">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChangeBoxMany}
                                  value={item}
                                />
                              }
                              label={item}
                              name={question.idQuestion}
                            />
                          </FormControl>
                        </div>
                      );
                    })}
                  {question.type_reponse === "select_one" &&
                    question?.item?.map((item, cle) => {
                      return (
                        <div key={cle}>
                          <FormControl component="fieldset" variant="standard">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={valueSelect(
                                    question.idQuestion,
                                    item
                                  )}
                                  onChange={handleChange}
                                />
                              }
                              label={item}
                              name={question.idQuestion}
                              value={item}
                            />
                          </FormControl>
                        </div>
                      );
                    })}
                </Paper>
              );
            })}
            <div style={{ marginTop: "10px" }}>
              <Button
                onClick={(e) => SendData(e)}
                variant="contained"
                color="primary"
                fullWidth
              >
                <Save fontSize="small" />{" "}
                <span style={{ marginLeft: "10px" }}>Submit</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Repondre;
