import React from 'react';
import { Box, DataTable, Heading, Text } from 'grommet';
import Page from '../components/page';

class Result extends React.PureComponent{

    render(){
        return(
            <Page>
                <Box
                    margin={{horizontal:'40px'}}
                >    
                    <Box
                        margin={{bottom:'24px'}}
                    >
                        <Heading>
                            Hasil
                        </Heading>
                        <Text>
                            Berikut adalah hasil analisis kami. Dan hasilnya xx% Anda mengalami penyakit jantung.
                        </Text>
                    </Box>
                    <Box
                        margin={{vertical:'24px'}}
                        fill='horizontal'
                        flex='grow'
                        gap='16px'
                    >
                        <Heading level='2' margin='0'> 
                            Data Input
                        </Heading>
                        <Box
                            // width={{max:'75%'}}
                        >
                            <DataTable 
                                columns={[
                                    {
                                        property:'data',
                                        header:<Text>Nama Data</Text>,
                                        primary:true
                                    },
                                    {
                                        property:'value',
                                        header:<Text>Value</Text>,
                                    }
                                    
                                ]}
                                data={[
                                    {data:'Usia', value:''},
                                    {data:'Anemia', value:''},
                                    {data:'Tekanan Darah', value:''},
                                    {data:'cpk', value:''},
                                    {data:'Diabetes', value:''},
                                    {data:'Ejection Fraction', value:''},
                                    {data:'Platates', value:''},
                                    {data:'Jenis Kelamin', value:''},
                                    {data:'Serum Creatinine', value:''},
                                    {data:'Serum Sodium', value:''},
                                    {data:'Merokok', value:''},
                                    {data:'Waktu', value:''}
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