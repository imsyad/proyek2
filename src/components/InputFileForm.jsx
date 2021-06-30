import React from 'react';
import { Box, Button, FileInput } from 'grommet';

class FileInputForm extends React.Component{

    render(){
        return(
            <Box
                fill='vertical'
                gap='40px'    
            >
                
                <Box
                    alignSelf='center'
                    direction='row-responsive'
                    gap='24px'
                >
                    <Button
                        size='medium'
                        label='Gunakan Formulir'
                        secondary
                        onClick={()=>this.props.changeForm(false)}
                    />
                    <Button
                        size='medium'
                        label='Kembali'
                        plain
                        onClick={()=>this.props.showForm(false)}
                    />
                </Box>

                <FileInput
                    name="file"
                    multiple={false}
                    onChange={event => {
                    const fileList = event.target.files;
                    for (let i = 0; i < fileList.length; i += 1) {
                        const file = fileList[i];
                    }
                    }}
                />
            </Box>
            
        );
    }
}

export default FileInputForm