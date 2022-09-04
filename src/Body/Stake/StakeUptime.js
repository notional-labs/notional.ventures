import React from "react";
import "./StakeUptime.css";
import StakeUptimeBlock from "./StakeUptimeBlock";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Divisor from "../../media/imgs/Stake/uptime-divisor.png";

const Uptime = (props) => {
    let { height, uptime } = props;
    let idr1 = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
    ];
    let idr2 = [
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
        43, 44, 45, 46, 47, 48, 49,
    ];
    let idr3 = [
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
        68, 69, 70, 71, 72, 73, 74,
    ];
    let idr4 = [
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99,
    ];

    return (
        <div class="uptime">
            <div className="uptime-header">Uptime</div>

            <img src={Divisor} className="divisor" />

            <div className="label">
                <p>Last 100 blocks</p>
            </div>

            <Container className="chart">
                <Row className="row">
                    {idr1.map((id) => (
                        <Col className="col">
                            <StakeUptimeBlock
                                height={height - id}
                                uptime={uptime}
                                className="col"
                            />
                        </Col>
                    ))}
                </Row>
                <Row className="row">
                    {idr2.map((id) => (
                        <Col className="col">
                            <StakeUptimeBlock
                                height={height - id}
                                uptime={uptime}
                                className="col"
                            />
                        </Col>
                    ))}
                </Row>
                <Row className="row">
                    {idr3.map((id) => (
                        <Col className="col">
                            <StakeUptimeBlock
                                height={height - id}
                                uptime={uptime}
                                className="col"
                            />
                        </Col>
                    ))}
                </Row>
                <Row className="row">
                    {idr4.map((id) => (
                        <Col className="col">
                            <StakeUptimeBlock
                                height={height - id}
                                uptime={uptime}
                                className="col"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Uptime;
