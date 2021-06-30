import React from 'react';
import { Box, Image, Grommet} from 'grommet';
import { Link } from '@reach/router';
import logo from '../img/proyek_logo.png';


const secondFont = {
    global: {
        font: {
            family: "Consolas",
            size: "25px"
        }
    }
  };

const linkStyle = {
    fontSize: "18px",
    textDecoration: "none",
    color: "black"
};

class PageHeader extends React.PureComponent{

    render(){
                
        return(
            
            <Box
                background={{color:'white'}}
                height="70px"
            >
                <Box 
                    direction="row"
                    gap="between"
                    height="100%"
                    justify="between"
                    margin={{horizontal:'30px'}}
                >
                    <Box
                        justify="center"
                    >
                        <Image
                            fit="contain"
                            alignSelf="start"
                            src={logo}
                        />
                    </Box>
                    <Grommet theme={secondFont}>
                        <Box
                            align="center"
                            direction="row"
                            gap="40px"
                            margin={{vertical: '22px'}}
                        >
                            <Box align="center" width="140px">
                                <Link to="/" style={linkStyle}>Beranda</Link>{" "}
                            </Box>
                            <Box align="center" width="140px">
                                <Link to="/aplikasi" style={linkStyle}>Aplikasi</Link>{" "}
                            </Box>
                            <Box align="center" width="140px">
                                <Link to="/tentang-kami" style={linkStyle}>Tentang Kami</Link>{" "}
                            </Box>
                        </Box>
                    </Grommet>
                </Box>
            </Box>
        );
    }
}

export default PageHeader;