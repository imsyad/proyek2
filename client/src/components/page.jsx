import React from 'react';
import { Box } from 'grommet';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

class Page extends React.PureComponent{

    render(){

        return(
            <Box
                margin="0"
                >
                <PageHeader/>        
                {this.props.children}
                <PageFooter/>
            </Box>
        );
    }
}

export default Page;