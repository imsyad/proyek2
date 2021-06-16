import React from 'react';
import './../styles/PageHeaderStyle.css';
import { Box } from 'grommet';


class PageHeader extends React.Component{

    render(){

        return(
            <Box
                background={{color:'whitesmoke'}}
                fill="horizontal"
                height="70px"
            >
                <Box 
                    direction="row"
                    gap="between"
                    height="100%"
                    justify="between"
                    margin={{horizontal:'40px'}}
                >
                    <Box
                        justify="center"
                    >
                        /*LOGO*/
                    </Box>
                    <Box
                        align="center"
                        direction="row"
                        gap="40px"
                    >
                        <Box align="center" width="100px" className="link">
                            <a href="#">Beranda</a>
                        </Box>
                        <Box align="center" width="100px" className="link">
                            <a href="#">Aplikasi</a>
                        </Box>
                        <Box align="center" width="100px" className="link">
                            <a href="#">Tentang Kami</a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default PageHeader;