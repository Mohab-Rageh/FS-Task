import Description from "./section-components/Description";
import Row from "./section-components/Row";

export const ContactInformation = () => {
  return (
    <div className=" flex flex-col gap-6">
      <Row>
        <Description label="Personal Email" value="John.smith@gmail.com" />
        <Description label="Mobile" value="011223344556" />
      </Row>
    </div>
  );
};
