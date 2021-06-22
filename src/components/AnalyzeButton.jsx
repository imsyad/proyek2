import React from 'react';
import { Box, Button, ThemeContext } from 'grommet';
// import { FormSearch } from 'grommet-icons';

class AnalyzeButton extends React.Component{

    render(){
    
        return(
            <ThemeContext.Extend
                value={{ 
                    global: { colors: { button_color: '#29B6F6' } } }}
            >
                <Box
                    height="100px"
                    width="450px"
                    align="center"
                >
                    {/* <FormSearch size="large"/> */}
                    <Button
                        color="button_color"
                        primary
                        size="xlarge"
                        label="ANALISIS SEKARANG"
                    />
                </Box>
            </ThemeContext.Extend>
        );
    }
}

export default AnalyzeButton;