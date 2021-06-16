import React from 'react';
import { Box, List, Paragraph } from 'grommet';

class PageFooter extends React.Component{

    render(){
    
        return(
    
            <Box
                background={{color:"#333"}}
                height="300px"
            >
                <Box
                    justify="between"
                    direction="row"
                    flex="grow"
                    gap="40px"
                    margin={{horizontal:'40px', vertical:'64px'}}
                >
                    <Box>
                        /*LOGO*/
                    </Box>
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
                    <Box
                        align="start"
                    >
                       <Paragraph
                            margin="0"
                            responsive
                            textAlign="start"
                       >
                       Segala informasi pada aplikasi ini tidak dapat dijadikan sebagai diagnosis/rujukan penyakit. Diperlukan pemeriksaan dokter ahli untuk mendiagnosis penyakit.
                       </Paragraph>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default PageFooter;