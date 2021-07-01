import React from 'react';
import { Box, Heading, TextInput, Text, ThemeContext } from 'grommet';
import { navigate } from '@reach/router';
import AnalyzeButton from './AnalyzeButton';

class Form extends React.PureComponent{

    render(){
        return(
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
                        margin={{bottom:'50px'}}
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

                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Jenis Kelamin (Pria/Wanita)</Text>
                        <TextInput
                
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Merokok (Iya/Tidak)</Text>
                        <TextInput
                
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                    </Box>

                    <Box
                        alignSelf='center'
                        pad='20px'
                        gap='20px'
                        margin={{bottom:'50px'}}
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
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Penderita Hipertensi (Iya/Tidak)</Text>
                        <TextInput
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Penderita Diabetes (Iya/Tidak)</Text>
                        <TextInput
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                    </Box>

                    <Box
                        alignSelf='center'
                        pad='20px'
                        gap='20px'
                        margin={{bottom:'50px'}}
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
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Fraksi Ejeksi (Persentase)</Text>
                        <TextInput
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Trombosit dalam darah (kiloplatelet/mL)</Text>
                        <TextInput
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Tingkat kreatinin serum dalam darah (mg/dL)</Text>
                        <TextInput
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Kadar natrium serim dalam darah (mEq/L)</Text>
                        <TextInput
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                        <Text>Periode tidak lanjut (hari)</Text>
                        <TextInput
                        // value={value}
                        // onChange={event => setValue(event.target.value)}
                        />
                    </Box>

                    <AnalyzeButton onClick={()=>{navigate('/aplikasi')}} justify="center" fill="horizontal" label="Mulai Analisis!"/>

                </Box>
            </ThemeContext.Extend>
        );
    }
}

export default Form;