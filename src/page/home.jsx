import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from 'grommet';
import Page from '../components/page';

class Home extends React.PureComponent{


    render(){
        return(
            <Page>
                <Helmet>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    <title>Beranda</title>
                </Helmet>
                <Box height="500px">
                    Testing Content
                </Box>
            </Page>
        );
    }
}

export default Home;