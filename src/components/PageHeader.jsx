import React from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { Link } from '@reach/router';


class PageHeader extends React.PureComponent{

    render(){
                
        return(
            
            <Box
                background={{color:'whitesmoke'}}
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
                        <Box align="center" width="120px">
                            <Link to="/">Beranda</Link>{" "}
                        </Box>
                        <Box align="center" width="120px">
                            <Link to="/">Aplikasi</Link>{" "}
                        </Box>
                        <Box align="center" width="120px">
                            <Link to="/">Tentang Kami</Link>{" "}
                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default PageHeader;