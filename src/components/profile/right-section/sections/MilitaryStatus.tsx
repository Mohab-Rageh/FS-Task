import FileImage from "../../../../assets/File.svg";
import Description from "./section-components/Description";
import Row from "./section-components/Row";

const MilitaryStatus = () => {
  return (
    <div className=" flex flex-col gap-6">
      <Row>
        <Description label="Require Travel Permit" value="Yes" />
        <Description label="Military Status" value="Exempted" />
        <Description
          label="Document"
          value={
            <img
              className="cursor-pointer"
              src={FileImage}
              alt="file"
              width={136}
              height={30}
            />
          }
        />
      </Row>
    </div>
  );
};

export default MilitaryStatus;
