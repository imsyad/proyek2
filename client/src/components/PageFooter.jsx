import React from 'react';
import { Box, List, Paragraph, Grommet, Image } from 'grommet';
import logo from '../img/proyek_logo.png';

const secondFont = {
    global: {
        font: {
            family: "Consolas",
            size: "25px"
        }      
    }
  };

class PageFooter extends React.Component{

    render(){
    
        return(
    
            <Box
                margin={{top:'64px'}}
                flex="grow"
                background={{color:"#333"}}
                height={{min:"300px"}}
            >
                <Box
                    justify="between"
                    direction="row-responsive"
                    flex="grow"
                    gap="40px"
                    margin={{horizontal:'40px', vertical:'64px'}}
                >
                    <Box
                        height="120px"
                        width="120px"
                    >
                        <Image
                            fit="contain"
                            // alignSelf="start"
                            src={logo}
                        />
                    </Box>
                    <Grommet theme={secondFont}>
                        <Box>
                            <List
                                justify="start"
                                primaryKey="name"
                                paginate="true"
                                data={[
                                    {name:'Beranda'},
                                    {name:'Aplikasi'},
                                    {name:'Tentang Kami'}
                                ]}
                            />
                        </Box>
                    </Grommet>
                    <Box
                        align="start"
                    >
                       <Paragraph
                            margin="0"
                            responsive
                            textAlign="start"
                       >
                            Segala informasi pada aplikasi ini tidak dapat dijadikan sebagai diagnosis/rujukan penyakit. Diperlukan pemeriksaan dokter ahli untuk mendiagnosis penyakit.
                            <Paragraph></Paragraph>                            
                       </Paragraph>
                    </Box>
                </Box>
                <Box
                align="end"
                margin="16px"
                >
                <Grommet theme={secondFont}><Paragraph  margin="none" textAlign="end" color="dark-3">Copyright © 2021</Paragraph></Grommet>
                </Box>
            </Box>
        );
    }
}

export default PageFooter;