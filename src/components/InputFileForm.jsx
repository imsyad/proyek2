import React from 'react';
import { Box, Button, FileInput } from 'grommet';
import SubmitButton from '../components/SubmitButton';
import { isNull } from 'lodash';

class FileInputForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isFileExist:false,
        }
    };

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
                    if (fileList.length > 0){
                        this.setState({isFileExist:true})
                    }
                    for (let i = 0; i < fileList.length; i += 1) {
                        const file = fileList[i];
                    }
                    }}
                />

                <Box
                    alignSelf='center'
                    width="320px"
                >
                    <SubmitButton label='Submit' disabled={this.state.isFileExist? false : true}/>
                </Box>
            </Box>
            
        );
    }
}

export default FileInputForm