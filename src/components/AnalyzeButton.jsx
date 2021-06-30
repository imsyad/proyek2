import React from 'react';
import { Button, ThemeContext } from 'grommet';
import { Test } from 'grommet-icons';

class AnalyzeButton extends React.Component{

    render(){
    
        return(
            <ThemeContext.Extend
                value={
                    { 
                        global: { 
                            colors: { 
                                button_color: '#0475f7' } 
                        },
                        button:{
                            size:{
                                large:{
                                    pad:{
                                        vertical:"32px",
                                        horizontal:"56px"
                                    },
                                    border:{
                                        radius:"5px"
                                    }
                                }
                            }
                        } 
                    }
                }
            >
                <Button
                    hoverIndicator={{color:"#0458B8"}}
                    icon={<Test size="medium"/>}
                    color="#0475f7"
                    primary
                    size="large"
                    {...this.props}
                />
            </ThemeContext.Extend>
        );
    }
}

export default AnalyzeButton;