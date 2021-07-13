import React from "react";
import { navigate } from "@reach/router";
import { Box, Button, FileInput } from "grommet";
import SubmitButton from "../components/SubmitButton";

class FileInputForm extends React.Component {
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
    this.handleFileUploadChange = this.handleFileUploadChange.bind(this);
  }

  handleFileUploadChange(event) {
    const target = event.target;
    const name = "data";
    var value = {};
    var a = this;
    var reader = new FileReader();
    reader.readAsText(target.files[0], "UTF-8");
    reader.onload = function (evt) {
      value = JSON.parse(evt.target.result);
      a.setState({
        [name]: value
      });
    };
    reader.onerror = function (evt) {
      console.log("error reading file");
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    navigate("/hasil", {
      state: { data: this.state.data }
    });
  }

  render() {
    return (
      <Box fill="vertical" gap="40px">
        <Box alignSelf="center" direction="row-responsive" gap="24px">
          <Button
            size="medium"
            label="Gunakan Formulir"
            secondary
            onClick={() => this.props.changeForm(false)}
          />
          <Button
            size="medium"
            label="Kembali"
            plain
            onClick={() => this.props.showForm(false)}
          />
        </Box>

        <FileInput
          name="file"
          multiple={false}
          onChange={this.handleFileUploadChange}
        />

        <Box alignSelf="center" width="320px">
          <SubmitButton label="Submit" onClick={this.handleSubmit} />
        </Box>
      </Box>
    );
  }
}

export default FileInputForm;
