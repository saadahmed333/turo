import React from "react";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "../components/date.css"
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

dayjs.extend(customParseFormat);
const Time = (time, timeString) => {
  console.log(time, timeString);
};

function SearchdateWise() {
  return (
    <div className="mainDiv">
        <div className="searchDiv">
      <div className="firstDiv">
        <span>Where</span>
        <input type="text" placeholder="City, airport, address or hotel" />
      </div>
      <div className="secondDiv-date">
        <span>From</span>
        <div>
        <Space direction="vertical">
          <DatePicker onChange={onChange} className="date"/>
        </Space>
        <TimePicker
          onChange={Time}
          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
          className="date"
        />
        </div>
      </div>
      <div className="thirdDiv-date">
        <span>Until</span>
     <div>
     <Space direction="vertical">
        <DatePicker onChange={onChange} className="date"/>
      </Space>
      <TimePicker
        onChange={Time}
        className="date"
        defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
      />
     </div>
      </div>
      <div className="searchIcons">
      <span><FontAwesomeIcon icon={faSearch} /></span>
      </div>
    </div>
    </div>
  );
}
export { SearchdateWise };
