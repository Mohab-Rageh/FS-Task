import Description from "./section-components/Description";
import Row from "./section-components/Row";

const BankSection = () => {
  return (
    <div className=" flex flex-col gap-6">
      <Row>
        <Description label="Bank Name" value="CIB" />
        <Description label="IBAN" value="12346546413216446" />
      </Row>
    </div>
  );
};

export default BankSection;
