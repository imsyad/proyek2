import React from 'react';
import { Button, Grommet } from 'grommet';
import { Test } from 'grommet-icons';

const kindButtonTheme = {
    global: { 
        colors: { 
            button_color: '#0475f7' } 
    },
    button: {
        size:{
            large:{
                pad:{
                    vertical:"32px",
                    horizontal:"56px"
                },
                border:{
                    radius:"0px"
                }
            }
        },
      default: {
        border: undefined,
      },
      primary: {
        background: { color: 'button_color' },
        border: undefined,
      },
    },
  };

class AnalyzeButton extends React.Component{

    render(){
    
        return(
            // <ThemeContext.Extend
            //     value={
            //         { 
            //             global: { 
            //                 colors: { 
            //                     button_color: '#0475f7' } 
            //             },
            //             button:{
            //                 size:{
            //                     large:{
            //                         pad:{
            //                             vertical:"32px",
            //                             horizontal:"56px"
            //                         },
            //                         border:{
            //                             radius:"5px"
            //                         }
            //                     }
            //                 }
            //             } 
            //         }
            //     }
            // >
            <Grommet theme={kindButtonTheme}>
                <Button
                    hoverIndicator={{color:"#0458B8"}}
                    icon={<Test size="medium"/>}
                    color="#0475f7"
                    primary
                    size="large"
                    {...this.props}
                />
            </Grommet>
            // </ThemeContext.Extend>
        );
    }
}

export default AnalyzeButton;