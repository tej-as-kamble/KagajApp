import react, { useEffect } from "react"
import { Image } from '@chakra-ui/react'
import './home.css'
import tejas from "../../tejas.jpg"
import vicky from "../../vicky.jpg"

const Home = () => {
    return (
        <div class="home">
            <div class="about-section">
                <h1 style={{
                    textAlign: "center",
                    fontSize: "50px",
                    fontFamily: "Work sans"
                }}>About Innovation</h1>
                <p>
                    Our project mainly works on resolving issues
                    in rural areas, where the people don't have access to documents required for their help.
                    We aim to provide them with the documents on their requests by the head of the village without
                    having to perform time consuming moments. We are a team of developers who are trying to scale up our product to use worldwide over the country.
                </p>
            </div>

            <h2 style={{
                textAlign: "center",
                fontSize: "50px",
                fontFamily: "Work sans"
            }}><b>Our Team</b></h2>

            <div class="row" style={{ display: "flex" }}>
                <div class="column">
                    <div class="card" >
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={tejas}
                            alt='Tejas'
                            marginLeft="37%"

                        />
                        <div class="container">
                            <div style={{ d: 'flex', textAlign: "center" }}>
                                <b >Tejas Kamble</b>
                                <p class="title" >Developer</p>
                                <b>tejaskk.iit@gmail.com</b>
                            </div>
                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                                I am passionate Software Developer with strong interest in Full Stack Web Development, DevOps and Competitive Programming. I have been <b>Specialist Coder</b> at Codeforces, 1700+ rated on Leetcode and 3 star at Codechef with overall 1000+ problem solved. I am open for any collaborations . I am <b>looking out for Full Time Oppurtunities</b> and also attaching my <b><a href="https://drive.google.com/drive/folders/1_3RmSg4AOz61_jGYBVlnw6LsJHWbgQMS?usp=sharing" target="_blank" style={{ textDecoration: "underline", color: "blue" }}>resume</a></b> for your reference.
                            </p>

                            <p padding><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card" >
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={vicky}
                            alt='Vicky'
                            marginLeft="37%"
                        />
                        <div class="container">
                            <div style={{ d: 'flex', textAlign: "center" }}>
                                <b>Vicky Singh</b>
                                <p class="title" >Developer</p>
                                <b> vickysingh88050@gmail.com</b>
                            </div>
                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                                I am passionate Software Developer having strong interest in competitive programming and developing my knack for Full Stack Development. I have been <b>Specialist Coder</b> at Codeforces, 1750+ rated on Leetcode and 3 star at Codechef with overall 800+ problem solved. I am open for any collaborations . I am <b>looking out for Full Time Oppurtunities</b> and also attaching my <b><a href="https://drive.google.com/file/d/1TZawwMqwF0502rj_9drmfhBa0hJfR1f/view?usp=drive_link" target="_blank" style={{ textDecoration: "underline", color: "blue" }}>resume</a></b> for your reference.
                            </p>

                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};


export default Home;
