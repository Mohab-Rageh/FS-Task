import Description from "./section-components/Description";
import Row from "./section-components/Row";

const EmergencyContact = () => {
  return (
    <div className=" flex flex-col gap-6">
      <Row>
        <Description label="Emergency Contact Person Name" value="John John" />
        <Description label="Emergency Relation" value="Father" />
        <Description label="Emergency Phone" value="011224477885" />
      </Row>
    </div>
  );
};

export default EmergencyContact;
