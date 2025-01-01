import Description from "./section-components/Description";
import Row from "./section-components/Row";

const AddressSection = () => {
  return (
    <div className=" flex flex-col gap-6">
      <Row>
        <Description label="Country" value="Egypt" />
        <Description label="City" value="Cairo" />
        <Description label="Postal Code" value="11728" />
      </Row>

      <Row>
        <Description label="Building" value="7" />
        <Description label="Street" value="Street 127" />
        <Description label="Floor No." value="7" />
        <Description label="Apartment" value="72" />
      </Row>
    </div>
  );
};

export default AddressSection;
