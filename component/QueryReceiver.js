import "./QueryReceiver.css";
import QueryForm from "./QueryForm";

const QueryReceiver = (rec) => {
  const getDataEventahandler = (props) => {
    const formdata = {
      ...props,
    };
    rec.getReceiverData(formdata);
  };
  return (
    <div>
      <QueryForm getFormData={getDataEventahandler} />
    </div>
  );
};

export default QueryReceiver;
