import React, { useState, useEffect } from "react";
import { MDBRow as Row, MDBCol as Col } from "mdbreact";
import Calendar from "./Calendar";
import Today from "./Today";
import api from "../../utils/Endpoints";

export default function LoggedInHomeView() {
  let [calendar, setCalendar] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.data
      .calendar()
      .then(res => setCalendar(res.data))
      .catch(err => console.error(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Row>
      <Col md={8}>
        <Today />
      </Col>
      <Col md={4}>
        <Calendar calendar={calendar} loading={loading} />
      </Col>
    </Row>
  );
}
