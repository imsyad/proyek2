import React from "react";
import { Box, Heading, TextInput, Text, ThemeContext } from "grommet";
import { navigate } from "@reach/router";
import AnalyzeButton from "./AnalyzeButton";
import Axios from "axios";

class Form extends React.PureComponent {
  constructor(probs) {
    super(probs);
    this.state = {
      data: {
        age: 0,
        anaemia: 0,
        creatinine_phosphokinase: 0,
        diabetes: 0,
        ejection_fraction: 0,
        high_blood_pressure: 0,
        platelets: 0,
        serum_creatinine: 0,
        serum_sodium: 0,
        sex: 0,
        smoking: 0,
        time: 0
      },
      status: false,
      hasil: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    var temp = parseFloat(target.value);
    var isValueInteger = Number.isInteger(temp);
    var value = 0;
    if (isValueInteger) {
      value = parseInt(target.value);
    } else {
      value = temp;
    }
    const name = target.name;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    navigate("/hasil", {
      state: { data: this.state.data }
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <ThemeContext.Extend
        value={{
          global: {
            colors: {
              border: {
                light: "transparent",
                dark: "#fff"
              }
            },
            control: {
              border: {
                radius: "0px"
              }
            }
          },
          textInput: {
            extend: () => `
                          background: #FFF;
                          margin: 0 auto;
                    
                          &:focus {
                            box-shadow: none;
                            border-color: initial;
                          }
                        `
          }
        }}
      >
        <Box fill="vertical" onChange={this.handleInputChange}>
          <Box
            alignSelf="center"
            pad="20px"
            gap="20px"
            margin={{ bottom: "50px" }}
            width="600px"
            round="xsmall"
            border={{
              color: "black",
              size: "xsmall",
              side: "all",
              radius: "4px"
            }}
          >
            <Heading margin="0">Umum</Heading>
            <Text>Umur (Tahun)</Text>
            <TextInput name="age" type="number" />
            <Text>Jenis Kelamin (Pria/Wanita)</Text>
            <TextInput name="sex" type="number" />
            <Text>Merokok (Iya/Tidak)</Text>
            <TextInput name="smoking" type="number" />
          </Box>

          <Box
            alignSelf="center"
            pad="20px"
            gap="20px"
            margin={{ bottom: "50px" }}
            width="600px"
            round="xsmall"
            border={{
              color: "black",
              size: "xsmall",
              side: "all"
            }}
          >
            <Heading margin="0">Penyakit</Heading>
            <Text>Penderita Anemia (Iya/Tidak)</Text>
            <TextInput name="anaemia" type="number" />
            <Text>Penderita Hipertensi (Iya/Tidak)</Text>
            <TextInput name="high_blood_pressure" type="number" />
            <Text>Penderita Diabetes (Iya/Tidak)</Text>
            <TextInput name="diabetes" type="number" />
          </Box>

          <Box
            alignSelf="center"
            pad="20px"
            gap="20px"
            margin={{ bottom: "50px" }}
            width="600px"
            round="xsmall"
            border={{
              color: "black",
              size: "xsmall",
              side: "all"
            }}
          >
            <Heading margin="0">Data Lainnya</Heading>
            <Text>Tingkat enzim CPK dalam darah (mcg/L)</Text>
            <TextInput name="creatinine_phosphokinase" type="number" />
            <Text>Fraksi Ejeksi (Persentase)</Text>
            <TextInput name="ejection_fraction" type="number" />
            <Text>Trombosit dalam darah (kiloplatelet/mL)</Text>
            <TextInput name="platelets" type="number" />
            <Text>Tingkat kreatinin serum dalam darah (mg/dL)</Text>
            <TextInput name="serum_creatinine" type="number" />
            <Text>Kadar natrium serum dalam darah (mEq/L)</Text>
            <TextInput name="serum_sodium" type="number" />
            <Text>Periode tidak lanjut (hari)</Text>
            <TextInput name="time" type="number" />
          </Box>

          <AnalyzeButton
            type="submit"
            onClick={this.handleSubmit}
            justify="center"
            fill="horizontal"
            label="Mulai Analisis!"
          />
        </Box>
      </ThemeContext.Extend>
    );
  }
}

export default Form;
