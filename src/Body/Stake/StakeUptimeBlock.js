import { Image } from "antd";
import miss from "../../media/stake/miss.png";
import nomiss from "../../media/stake/no-miss.png";

const UptimeBlock = (props) => {
  let { height, uptime } = props;
  if (uptime.length === 0) {
    return (
      <Image
        style = {{ width: "4rem", height: "4rem" }}
        preview = {false}
        src = {nomiss}
      />
    );
  } else {
    for (let index = 0; index < uptime.length; index++) {
      const element = uptime[index];
      if (height === element.height) {
        return (
          <Image
            style = {{ width: "4rem", height: "4rem" }}
            preview = {false}
            src = {miss}
          />
        );
      }
    }
    return (
      <Image
        style = {{ width: "4rem", height: "4rem" }}
        src = {nomiss}
        preview = {false}
      />
    );
  }
};

export default UptimeBlock;
