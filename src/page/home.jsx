import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Heading, Image, Paragraph } from 'grommet';
import Page from '../components/page';
import logo from '../img/APRIL_PC 2880x1800.jpg';

console.log(logo);

class Home extends React.PureComponent{


    render(){
        return(
            <Page>
                <Helmet>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    <title>Beranda</title>
                </Helmet>
                <Box
                    height={{max:"400px"}}
                    margin={{bottom:"40px"}}
                >
                    <Image
                        fit="cover"
                        src={logo}
                    />
                </Box>
                <Box 
                    direction="column"
                    fill="horizontal"
                    gap="40px"
                    pad={{bottom:"64px", horizontal:"40px"}}
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
                           <Heading margin="none" level="2">Gambaran Umum Gagal Jantung</Heading>
                        </Box>
                        <Box>
                            <Paragraph
                                margin="0"
                                responsive
                                textAlign="start"
                            >
                                Gagal Jantung adalah kondisi kronis yang memengaruhi aksi pemompaan otot jantung di mana jantung tidak memompa darah sebagaimana mestinya. Gagal jantung dapat terjadi jika jantung tidak dapat memompa (sistolik) atau mengisi (diastolik) secara memadai.
                            </Paragraph>
                        </Box>
                    </Box>
                    <Box
                        justify="center"
                        gap="24px"
                        direction="row-responsive"
                        flex="grow"
                    >
                        <Box
                            width="30%"
                        >
                            <Heading margin="none" level="2">Gejala Gagal Jantung</Heading>
                        </Box>
                        <Box>
                            <Paragraph
                                margin="0"
                                responsive
                                textAlign="start"
                            >
                                Gagal jantung mungkin tanpa gejala atau berkisar dari ringan hingga parah, sehingga memerlukan diagnosis medis. Gejala mungkin konstan atau jarang adalah paru-paru tersumbat (paru-paru berisi cairan yang mengakibatkan sesak napas, batuk kering, atau mengi), retensi cairan dan air (hasil dari berkurangnya suplai darah ke ginjal, yang pada gilirannya menyebabkan pembengkakan pada pergelangan kaki, tungkai, dan perut (pembengkakan tubuh secara umum), penambahan berat badan, peningkatan frekuensi buang air kecil di malam hari, kehilangan nafsu makan, atau mual), pasokan darah berkurang ke organ vital (engakibatkan pusing, kelelahan, kelemahan, dan kebingungan), dan detak jantung cepat atau tidak teratur, nyeri dada, atau pingsan dalam kasus yang parah. Gejala gagal jantung pada anak-anak mungkin termasuk makan yang buruk, berkeringat berlebihan, dan sulit bernafas.
                            </Paragraph>
                       </Box>
                    </Box>
                    <Box
                        gap="24px"
                        justify="center"
                        direction="row-responsive"
                        flex="grow"
                    >
                        <Box
                            width="30%"
                        >
                           <Heading margin="none" level="2">Perawatan</Heading>
                        </Box>
                        <Box>
                            <Paragraph
                                margin="0"
                                responsive
                                textAlign="start"
                            >
                                Perawatan tergantung pada tingkat keparahan. Penanganan dapat berupa makan lebih sedikit garam, membatasi asupan cairan, dan minum obat resep. Dalam beberapa kasus defibrilator atau alat pacu jantung dapat dipasang. Obat gaya hidup, pengobatan, prosedur medis, terapi perangkat, dan operasi juga dapat membantu.
                            </Paragraph>
                        </Box>
                    </Box>
                    <Box
                        gap="24px"
                        justify="center"
                        direction="row-responsive"
                        flex="grow"
                    >
                        <Box
                            width="30%"
                        >
                           <Heading margin="none" level="2">2A - Kelompok 4</Heading>
                        </Box>
                        <Box>
                            <Paragraph
                                margin="0"
                                responsive
                                textAlign="start"
                            >
                                Kelompok 4 2A adalah kelompok mata kuliah Proyek 2 JTK Polban tahun 2021 dan kelompok ini terdiri dari enam orang anggota. Kelompok 4 2A berfokus pada pembuatan aplikasi saintifik: prediksi gagal jantung yang membawa kematian.
                            </Paragraph>
                        </Box>
                    </Box>
                    <Box
                        gap="24px"
                        justify="center"
                        direction="row-responsive"
                        flex="grow"
                    >
                        <Box
                            width="30%"
                        >
                           <Heading margin="none" level="2">Model Dengan Akurasi Lebih Dari 80%</Heading>
                        </Box>
                        <Box>
                            <Paragraph
                                margin="0"
                                responsive
                                textAlign="start"
                            >
                                Aplikasi ini menggunakan 12 fitur yang dapat digunakan untuk memprediksi gagal jantung yang membawa kematian, dan model prediksi mempunyai akurasi hingga lebih dari 80%.
                            </Paragraph>
                        </Box>
                    </Box>
                </Box>
            </Page>
        );
    }
}

export default Home;