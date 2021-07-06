import React from 'react';
import { Box, Heading, TextInput, Text, ThemeContext } from 'grommet';
import { navigate } from '@reach/router';
import AnalyzeButton from './AnalyzeButton';
import Axios from 'axios';


class Form extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                age: '',
                anaemia: '',
                creatinine_phosphokinase: '',
                diabetes: '',
                ejection_fraction: '',
                high_blood_pressure: '',
                platelets: '',
                serum_creatinine: '',
                serum_sodium: '',
                sex: '',
                smoking: '',
                time: '',
                DEATH_EVENT: ''
            }
        }
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, [nam]: val } }));
    }

    onSubmit = (event, {navigate}) => {
        event.preventDefault();

        const data = {
            age: this.state.data.age,
            anaemia: this.state.data.anaemia,
            creatinine_phosphokinase: this.state.data.creatinine_phosphokinase,
            diabetes: this.state.data.diabetes,
            ejection_fraction: this.state.data.ejection_fraction,
            high_blood_pressure: this.state.data.high_blood_pressure,
            platelets: this.state.data.platelets,
            serum_creatinine: this.state.data.serum_creatinine,
            serum_sodium: this.state.data.serum_sodium,
            sex: this.state.data.sex,
            smoking: this.state.data.smoking,
            time: this.state.data.time,
            DEATH_EVENT: ''
        }

        // ========================================= //
        // ERROR BAGIAN INI                          //
        // KURANG TAU CARA SEND KE EXPRESS NYA       //
        // TERUS KALAU GET DEATH_EVENT NYA NTAR GIMANA?//
        // HASIL INPUT DISINI HARUS DI PASSING KE /hasil //

        Axios.post("https://localhost:9000/", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // ======================================== //
    }


    render() {

        return (
            <ThemeContext.Extend
                value={{
                    global: {
                        colors: {
                            border: {
                                light: 'transparent',
                                dark: '#fff'
                            }
                        },
                        control: {
                            border: {
                                radius: '0px',
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
                        `,
                    }
                }}
            >
                <Box
                    fill='vertical'

                >
                    <Box
                        alignSelf='center'
                        pad='20px'
                        gap='20px'
                        margin={{ bottom: '50px' }}
                        width='600px'
                        round='xsmall'
                        border={{
                            color: 'black',
                            size: 'xsmall',
                            side: 'all',
                            radius: '4px'
                        }}
                    >
                        <Heading margin='0'>Umum</Heading>
                        <Text>Umur (Tahun)</Text>
                        <TextInput
                            name='age'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Jenis Kelamin (Pria/Wanita)</Text>
                        <TextInput
                            name='sex'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Merokok (Iya/Tidak)</Text>
                        <TextInput
                            name='smoking'
                            onChange={this.myChangeHandler}
                        />
                    </Box>

                    <Box
                        alignSelf='center'
                        pad='20px'
                        gap='20px'
                        margin={{ bottom: '50px' }}
                        width='600px'
                        round='xsmall'
                        border={{
                            color: 'black',
                            size: 'xsmall',
                            side: 'all'
                        }}
                    >
                        <Heading margin='0'>Penyakit</Heading>
                        <Text>Penderita Anemia (Iya/Tidak)</Text>
                        <TextInput
                            name='anaemia'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Penderita Hipertensi (Iya/Tidak)</Text>
                        <TextInput
                            name='high_blood_pressure'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Penderita Diabetes (Iya/Tidak)</Text>
                        <TextInput
                            name='diabetes'
                            onChange={this.myChangeHandler}
                        />
                    </Box>

                    <Box
                        alignSelf='center'
                        pad='20px'
                        gap='20px'
                        margin={{ bottom: '50px' }}
                        width='600px'
                        round='xsmall'
                        border={{
                            color: 'black',
                            size: 'xsmall',
                            side: 'all'
                        }}
                    >
                        <Heading margin='0'>Data Lainnya</Heading>
                        <Text>Tingkat enzim CPK dalam darah (mcg/L)</Text>
                        <TextInput
                            name='creatinine_phosphokinase'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Fraksi Ejeksi (Persentase)</Text>
                        <TextInput
                            name='ejection_fraction'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Trombosit dalam darah (kiloplatelet/mL)</Text>
                        <TextInput
                            name='platelets'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Tingkat kreatinin serum dalam darah (mg/dL)</Text>
                        <TextInput
                            name='serum_creatinine'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Kadar natrium serum dalam darah (mEq/L)</Text>
                        <TextInput
                            name='serum_sodium'
                            onChange={this.myChangeHandler}
                        />
                        <Text>Periode tidak lanjut (hari)</Text>
                        <TextInput
                            name='time'
                            onChange={this.myChangeHandler}
                        />
                    </Box>

                    <AnalyzeButton type='submit' onClick={() => {this.onSubmit.bind(navigate('/hasil'))}} justify="center" fill="horizontal" label="Mulai Analisis!" />

                </Box>
            </ThemeContext.Extend>
        );
    }
}

export default Form;