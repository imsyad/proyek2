import React from 'react';
import { Box, Button } from 'grommet';
import Form from './Form';

class InputForm extends React.PureComponent{

    render(){
        return(
            <Box
                fill='vertical'

            >
                <Box
                    alignSelf='center'
                    direction='row-responsive'
                    gap='24px'
                >
                    <Button
                        size='medium'
                        label='Gunakan Unggah File'
                        secondary
                        onClick={()=>this.props.changeForm(true)}
                    />
                    <Button
                        size='medium'
                        label='Kembali'
                        plain
                        onClick={()=>this.props.showForm(false)}
                    />
                </Box>

                <Box 
                    alignSelf="center"
                    justify="center"
                    width='600px'
                    height="1px"
                    background="black"
                    align="center"
                    margin={{top:'40px'}}
                />

                <Box 
                    alignSelf='center'
                    justify="center"
                    width="850px"
                    align="center"
                    margin={{bottom:'40px', top:'40px'}}
                >

                <Form/>
                </Box>
            </Box>
        );
    }
}

export default InputForm;