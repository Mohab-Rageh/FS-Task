import Description from "./section-components/Description";
import Row from "./section-components/Row";

const DrivingSection = () => {
  return (
    <div className=" flex flex-col gap-6">
      <Row>
        <Description label="Driving License" value="Yes" />
        <Description label="Driving License Type" value="C1E" />
        <Description
          label="Driving License Expiry Date"
          value="01 / 04 / 2025"
        />
      </Row>
    </div>
  );
};

export default DrivingSection;
