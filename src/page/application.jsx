import React from 'react';
import Page from '../components/page';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';
import {Upload} from 'grommet-icons';
import { Box, Button, Heading, Text, ThemeContext } from 'grommet';

const Loading = () => <div>loading...</div>
const FormPage = Loadable({
    loader:() => import('../components/InputForm'),
    loading:() => Loading
});

const FileInputPage = Loadable({
    loader:() => import('../components/InputFileForm'),
    loading:() => Loading
  });


class application extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            isFormShown: false,
            isInputFileForm: true,
        }
    };

    updateInputTypeState = (theState) =>{
        this.setState({isInputFileForm:theState})
    }

    updateShowState = (theState) => {
        this.setState({isFormShown:theState})
    }
  

    render(){
        
        return(
            <ThemeContext.Extend 
            value={
                {button:{
                    size:{
                        large:{
                            pad:{
                                vertical:"32px",
                                horizontal:"0px"
                            },
                            border:{
                                radius:"5px"
                            }
                        }
                    }
                }}
            }>
                <Page>
                    <Helmet>
                        <meta name="viewport" content="width=device-width, user-scalable=no" />
                        <title>Aplikasi | 4PHF</title>
                    </Helmet>
                    <Box
                        margin={{horizontal:"40px"}}
                        flex="grow"
                        direction="column"
                        gap="64px"
                    >
                        <Box
                            fill='vertical'
                        >
                            <Heading
                                level="2"
                            >
                                Aplikasi
                            </Heading>
                            <Text>
                                Aplikasi ini menggunakan 12 fitur yang dapat digunakan untuk memprediksi gagal jantung yang membawa kematian, dan model prediksi mempunyai akurasi hingga lebih dari 80%.
                            </Text>
                        </Box>
                        <Box
                            align='center'
                        >
                        {this.state.isFormShown? 
                            this.state.isInputFileForm?
                                <FileInputPage changeForm={this.updateInputTypeState} showForm={this.updateShowState}/>
                                :
                                <FormPage changeForm={this.updateInputTypeState} showForm={this.updateShowState}/>
                            :
                            <Box
                                margin={{horizontal:"420px"}}
                                width={{min:'240px', max:'400px'}}
                                gap='64px'
                            >
                                <Button 
                                    icon={<Upload/>}
                                    hoverIndicator={{color:"#0458B8"}}
                                    color="#0475f7"
                                    primary
                                    size="large"
                                    label="Upload File"
                                    onClick={()=>this.setState({isFormShown:true, isInputFileForm:true})}
                                />
                                <Text alignSelf='center'>atau</Text>
                                <Button 
                                    label="Isi Form" 
                                    size="large"
                                    onClick={()=>this.setState({isFormShown:true, isInputFileForm:false})}
                                />
                            </Box>
                        }    
                        </Box>
                    </Box>
                </Page>
            </ThemeContext.Extend>
        );
    }
    
}



export default application;