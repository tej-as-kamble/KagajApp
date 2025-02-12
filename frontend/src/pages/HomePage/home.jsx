import react, { useEffect } from "react"

import { useNavigate } from 'react-router-dom';

import {
    Stack,
    Select,
    Image
} from '@chakra-ui/react'
import './home.css'
import sushant from "../../sushant.jpg"
import akshay from "../../akshay.jpg"

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
                            src={sushant}
                            alt='Sushant'
                            marginLeft="37%"

                        />
                        <div class="container">
                            <div style={{ d: 'flex', textAlign: "center" }}>
                                <b >Tejas Kamble</b>
                                <p class="title" >CEO & Founder</p>
                                <b>tejas2002@gmail.com</b>
                            </div>


                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                                I am Tejas Kamble. Currently pursuing my bachelor's degree in Civil Engineering at IIT
                                Dhanbad. I am well-versed in data structures and algorithms and have a keen interest in competitive
                                programming and also have interest in Web Development. I have an industrial experience as <b> Full Stack Developer. </b>
                                I am looking for <b>full time Oppurtunities. </b>
                                Please have a look at my <b><a href="https://drive.google.com/drive/folders/1tJveFB8Oh66pee_5AK4ytAeauwlRXVz0?usp=drive_link">resume</a></b> and <b> <a href="https://www.linkedin.com/in/tejas-kamble-iitism/">LinkedIn</a></b> profile for better insight.
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
                            src={akshay}
                            alt='Akshay'
                            marginLeft="37%"
                        />
                        <div class="container">
                            <div style={{ d: 'flex', textAlign: "center" }}>
                                <b>Vicky Singh</b>
                                <p class="title" >CEO & Founder</p>
                                <b> vickysingh88050@gmail.com</b>
                            </div>
                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>I am passionate Software Developer having strong interest in competitive programming and developing my knack for Full Stack Development
                                who have done <b>Internship at Innobyte as Full Stack Developer</b>. I have been <b>Specialist Coder</b> at Codeforces and 3 star at Codechef. I am open for any collaborations . I am <b>looking out for Full Time Oppurtunities</b> and also
                                attaching my <b><a href="https://drive.google.com/file/d/1TZawwMqwF0502rj_9dtrmfhBa0hJfR1f/view?usp=drive_link">resume</a></b> for your reference.</p>

                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                {/* <div class="column">
                    <div class="card">
                        <img src="https://bit.ly/dan-abramov" alt="John" width="100%"></img>
                        <div class="container">
                            <b>John Doe</b>
                            <p class="title">Designer</p>
                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <b> Email : john@example.com</b>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div> */}

            </div >
        </div >
    );
};


export default Home;
