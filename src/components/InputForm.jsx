import React from 'react';
import { Box, Button } from 'grommet';

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
            </Box>
        );
    }
}

export default InputForm;