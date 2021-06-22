import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Heading, Image, Paragraph, Grommet, Text } from 'grommet';
import Page from '../components/page';
import header_img from '../img/header_beranda.jpg';
import ali_img from '../img/ali.jpg';
import gemintang_img from '../img/gemintang.jpg';
import irsyad_img from '../img/irsyad.jpg';
import nauval_img from '../img/nauval.jpg';
import hasbi_img from '../img/hasbi.jpg';
import rafi_img from '../img/rafi.jpg';
import '../assets/fonts/fonts.css';

console.log(header_img);

const secondFont = {
    global: {
        font: {
            family: "Consolas",
            size: "25px",
        }      
    }
};

const nameFont = {
    global: {
        font: {
            family: "Roboto",
            size: "18px"
        },
    }
};

class About extends React.PureComponent{


    render(){
        return(
            <Page>
                <Helmet>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    <title>About Us</title>
                </Helmet>
                <Box
                    height={{max:"400px"}}
                    margin={{bottom:"100px"}}
                >
                    <Box
                        gap="24px"
                        justify="center"
                        direction="row-responsive"
                        flex="grow"
                        margin={{top:"40px"}}
                    >
                        <Box
                            width="30%"
                        >
                            <Grommet theme={secondFont}>
                                <Heading margin="none" level="2">Tentang Kami</Heading>
                            </Grommet>
                        </Box>
                        <Box>
                            <Paragraph
                                margin="none"
                                responsive
                                textAlign="start"
                            >
                                Kelompok 4 2A adalah kelompok mata kuliah Proyek 2 JTK Polban tahun 2021 dan kelompok ini terdiri dari enam orang anggota. Kelompok 4 2A berfokus pada pembuatan aplikasi saintifik: prediksi gagal jantung yang membawa kematian
                            </Paragraph>
                            <Paragraph></Paragraph>
                            <Paragraph
                                margin="none"
                                responsive
                                textAlign="start"
                            >
                                Penyakit kardiovaskular (CVD) adalah penyebab kematian nomor 1 di dunia sehingga diperlukan deteksi dini. Gagal jantung adalah kejadian umum yang disebabkan oleh CVD. Aplikasi ini menggunakan 12 fitur yang dapat digunakan untuk memprediksi gagal jantung yang membawa kematian.
                            </Paragraph>
                            <Paragraph></Paragraph>
                            <Paragraph
                                margin="none"
                                responsive
                                textAlign="start"
                            >
                                Aplikasi ini diharapkan dapat memberikan peluang yang lebih baik untuk mencegah ancaman gagal jantung yang akan terjadi
                            </Paragraph>
                        </Box>
                    </Box>
                </Box>
                <Box justify="center" direction="row-responsive">
                    <Box 
                        justify="center"
                        width="950px"
                        height="3px"
                        background="black"
                        align="center"
                        margin={{bottom:'20px'}}
                    />
                    {/* <AnalyzeButton justify="center"/> */}
                </Box>
                <Box 
                    direction="column"
                    fill="horizontal"
                    gap="40px"
                    pad={{bottom:"0px", horizontal:"40px"}}
                >
                    <Box
                        gap="24px"
                        justify="center"
                        direction="row-responsive"
                        flex="grow"
                    >
                        <Box
                            width="30%"
                        >
                           <Grommet theme={secondFont}><Heading margin="none" level="2">Tim</Heading></Grommet>
                        </Box>
                        <Box>
                            <Paragraph
                                margin="0"
                                responsive
                                textAlign="start"
                                color="white"
                            >
                                Gagal Jantung adalah kondisi kronis yang memengaruhi aksi pemompaan otot jantung di mana jantung tidak memompa darah sebagaimana mestinya. Gagal jantung dapat terjadi jika jantung tidak dapat memompa (sistolik) atau mengisi (diastolik) secara memadai.
                            </Paragraph>
                        </Box>
                    </Box>
                </Box>
                <Box 
                    direction="column"
                    fill="horizontal"
                    gap="40px"
                    pad={{bottom:"64px", horizontal:"40px"}}
                >
                    <Box
                        gap="30px"
                        justify="center"
                        direction="row-responsive"
                        flex="grow"
                    >
                        <Box
                            width="200px"
                            height="290px"
                            align="center"
                        >
                            <Box
                                width="150px"
                                height="150px"
                                margin={{bottom:'10px'}}
                            >
                                <Image
                                    fill
                                    src={ali_img}
                                />
                            </Box>
                            <Grommet theme={nameFont}>Ali Nurdin</Grommet>
                            <Text color="grey" size="14px">Analis, Programmer</Text>
                        </Box>
                        <Box
                            width="200px"
                            height="290px"
                            align="center"
                        >
                            <Box
                                width="150px"
                                height="150px"
                                margin={{bottom:'10px'}}
                            >
                                <Image
                                    fill
                                    src={gemintang_img}
                                />
                            </Box>
                            <Grommet theme={nameFont}>Gemintang S.F.</Grommet>
                            <Text color="grey" size="14px">Analis, Programmer</Text>
                        </Box>
                        <Box
                            width="200px"
                            height="290px"
                            align="center"
                        >
                            <Box
                                width="150px"
                                height="150px"
                                margin={{bottom:'10px'}}
                            >
                                <Image
                                    fill
                                    src={irsyad_img}
                                />
                            </Box>
                            <Grommet theme={nameFont}>Irsyad Muhammad</Grommet>
                            <Text color="grey" size="14px">Designer, Programmer</Text>
                        </Box>
                        <Box
                            width="200px"
                            height="290px"
                            align="center"
                        >
                            <Box
                                width="150px"
                                height="150px"
                                margin={{bottom:'10px'}}
                            >
                                <Image
                                    fill
                                    src={nauval_img}
                                />
                            </Box>
                            <Grommet theme={nameFont}>M. Nauval Dwisatya</Grommet>
                            <Text color="grey" size="14px">Designer, Programmer</Text>
                        </Box>
                    </Box>
                </Box>
                <Box 
                    direction="column"
                    fill="horizontal"
                    gap="40px"
                    pad={{bottom:"64px", horizontal:"40px"}}
                >
                    <Box
                        gap="30px"
                        justify="center"
                        direction="row-responsive"
                        flex="grow"
                    >
                        <Box
                            width="200px"
                            height="290px"
                            align="center"
                        >
                            <Box
                                width="150px"
                                height="150px"
                                margin={{bottom:'10px'}}
                            >
                                <Image
                                    fill
                                    src={hasbi_img}
                                />
                            </Box>
                            <Grommet theme={nameFont}>M. Hasbi Islahi A.</Grommet>
                            <Text color="grey" size="14px">Tester, Evaluator</Text>
                        </Box>
                        <Box
                            width="200px"
                            height="290px"
                            align="center"
                        >
                            <Box
                                width="150px"
                                height="150px"
                                margin={{bottom:'10px'}}
                            >
                                <Image
                                    fill
                                    src={rafi_img}
                                />
                            </Box>
                            <Grommet theme={nameFont}>M. Rafi Kamil</Grommet>
                            <Text color="grey" size="14px">Tester, Evaluator</Text>
                        </Box>
                    </Box>
                </Box>
            </Page>
        );
    }
}

export default About;