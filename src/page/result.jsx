import React from "react";
import { navigate } from "@reach/router";
import { Box, DataTable, Heading, Text } from "grommet";
import Page from "../components/page";
import Axios from "axios";
class Result extends React.PureComponent {
  constructor(props) {
    if (props.location.state === null) {
      navigate("/");
    }
    super(props);

    this.state = {
      hasil: "Memuat... Silahkan tunggu",
      data: props.location.state.data
    };
  }

  componentDidMount() {
    Axios.post(`http://localhost:3000`, JSON.stringify(this.state.data)).then(
      (res) => {
        this.setState({
          hasil:
            "Berikut adalah hasil analisis kami. Dan hasilnya " +
            (res.data.death_prob[0][0] * 100).toFixed(2) +
            "% Anda mengalami penyakit jantung."
        });
      }
    );
  }

  render() {
    return (
      <Page>
        <Box margin={{ horizontal: "40px" }}>
          <Box margin={{ bottom: "24px" }}>
            <Heading>Hasil</Heading>
            <Text>{this.state.hasil}</Text>
          </Box>
          <Box
            margin={{ vertical: "24px" }}
            fill="horizontal"
            flex="grow"
            gap="16px"
          >
            <Heading level="2" margin="0">
              Data Input
            </Heading>
            <Box
            // width={{max:'75%'}}
            >
              <DataTable
                columns={[
                  {
                    property: "data",
                    header: <Text>Nama Data</Text>,
                    primary: true
                  },
                  {
                    property: "value",
                    header: <Text>Value</Text>
                  }
                ]}
                data={[
                  { data: "Usia", value: this.state.data.age },
                  { data: "Anemia", value: this.state.anaemia },
                  {
                    data: "Tekanan Darah",
                    value: this.state.high_blood_pressure
                  },
                  { data: "cpk", value: this.state.creatinine_phosphokinase },
                  { data: "Diabetes", value: this.state.diabetes },
                  {
                    data: "Ejection Fraction",
                    value: this.state.ejection_fraction
                  },
                  { data: "Platates", value: this.state.platelets },
                  { data: "Jenis Kelamin", value: this.state.sex },
                  {
                    data: "Serum Creatinine",
                    value: this.state.serum_creatinine
                  },
                  { data: "Serum Sodium", value: this.state.serum_sodium },
                  { data: "Merokok", value: this.state.smoking },
                  { data: "Waktu", value: this.state.time }
                ]}
                resizeable={false}
              />
            </Box>
          </Box>
        </Box>
      </Page>
    );
  }
}

export default Result;
